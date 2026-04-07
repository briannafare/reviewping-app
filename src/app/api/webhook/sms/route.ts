/**
 * API Route: POST /api/webhook/sms
 *
 * Twilio webhook for incoming SMS responses.
 * Set this URL as your Twilio webhook in the phone number settings.
 *
 * Handles:
 * - STOP / opt-out requests
 * - Negative sentiment → redirect to private feedback
 * - Positive / neutral → log response
 */

import { NextResponse } from "next/server";
import { isNegativeSentiment, isOptOut } from "@/lib/twilio";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const body = formData.get("Body")?.toString() || "";
    const from = formData.get("From")?.toString() || "";

    console.log(`Incoming SMS from ${from}: ${body}`);

    if (isOptOut(body)) {
      // Mark as opted out in database
      await supabase.from("sms_responses").insert({
        from_phone: from,
        body,
        sentiment: "stop",
      });
      // Return TwiML to confirm opt-out
      return new Response(
        `<?xml version="1.0" encoding="UTF-8"?><Response><Message>You've been unsubscribed. You won't receive any more messages from us.</Message></Response>`,
        { headers: { "Content-Type": "text/xml" } }
      );
    }

    if (isNegativeSentiment(body)) {
      await supabase.from("sms_responses").insert({
        from_phone: from,
        body,
        sentiment: "negative",
      });
      // Redirect to private feedback form
      return new Response(
        `<?xml version="1.0" encoding="UTF-8"?><Response><Message>We're sorry to hear that. We'd love to make it right. Please share your feedback here: https://reviewping.app/feedback — we read every message.</Message></Response>`,
        { headers: { "Content-Type": "text/xml" } }
      );
    }

    // Log positive/neutral response
    await supabase.from("sms_responses").insert({
      from_phone: from,
      body,
      sentiment: "positive",
    });

    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?><Response></Response>`,
      { headers: { "Content-Type": "text/xml" } }
    );
  } catch {
    return NextResponse.json({ error: "Webhook error" }, { status: 500 });
  }
}
