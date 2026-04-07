import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-04-10" });
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature")!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed" || event.type === "customer.subscription.created") {
    const session = event.data.object as any;
    const customerEmail = session.customer_email || session.customer_details?.email;
    const customerName = session.customer_details?.name || "New User";

    if (customerEmail) {
      // Create business record in Supabase
      const { error } = await supabase.from("businesses").insert({
        name: customerName,
        google_review_link: "", // User fills this in dashboard
        email: customerEmail,
      });

      if (error) {
        console.error("Failed to create business record:", error);
      } else {
        console.log(`Provisioned account for ${customerEmail}`);
      }
    }
  }

  return NextResponse.json({ received: true });
}
