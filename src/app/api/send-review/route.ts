/**
 * API Route: POST /api/send-review
 *
 * Sends a review request SMS to a customer.
 * In production, this stores the request in Supabase and sends via Twilio.
 *
 * Body: { customerName, customerPhone, businessName, googleReviewLink }
 */

import { NextResponse } from "next/server";
import { sendReviewRequest, sendFollowUp } from "@/lib/twilio";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customerName, customerPhone, businessName: _businessName, googleReviewLink } = body;
    const businessName = _businessName || "Our Business";

    // Validate required fields
    if (!customerName || !customerPhone || !googleReviewLink) {
      return NextResponse.json(
        { error: "Missing required fields: customerName, customerPhone, googleReviewLink" },
        { status: 400 }
      );
    }

    // Send SMS via Twilio
    const twilioSid = await sendReviewRequest(
      customerName,
      customerPhone,
      businessName,
      googleReviewLink
    );

    if (!twilioSid) {
      return NextResponse.json({ error: "Failed to send SMS" }, { status: 500 });
    }

    // Store in Supabase
    const { error } = await supabase.from("review_requests").insert({
      customer_name: customerName,
      customer_phone: customerPhone,
      google_review_link: googleReviewLink,
      status: "sent",
      twilio_sid: twilioSid,
      sent_at: new Date().toISOString(),
    });

    if (error) {
      console.error("Supabase insert error:", error);
    }

    // Schedule follow-up (in production, use a cron job or Vercel Cron)
    // For MVP: use setTimeout (works for demo, not production-grade)
    setTimeout(async () => {
      await sendFollowUp(customerName, customerPhone, businessName, googleReviewLink);
      await supabase.from("review_requests")
        .update({ status: "follow_up_sent", follow_up_sent_at: new Date().toISOString() })
        .eq("twilio_sid", twilioSid);
    }, 2 * 60 * 60 * 1000); // 2 hours

    return NextResponse.json({
      success: true,
      message: `Review request sent to ${customerName} at ${customerPhone}`,
      twilioSid,
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
