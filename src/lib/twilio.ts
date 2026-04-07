/**
 * Twilio SMS service for ReviewPing
 *
 * To wire up:
 * 1. Create a Twilio account at https://www.twilio.com
 * 2. Get a phone number (free trial includes one)
 * 3. Set these env vars in .env.local:
 *    - TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 *    - TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 *    - TWILIO_PHONE_NUMBER=+1xxxxxxxxxx
 *
 * NOTE: In Twilio trial mode, you can only send to verified numbers.
 *       Upgrade to a paid account for production use.
 */

import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID || "ACtest";
const authToken = process.env.TWILIO_AUTH_TOKEN || "test";
const fromPhone = process.env.TWILIO_PHONE_NUMBER || "+10000000000";

const client = twilio(accountSid, authToken);

/**
 * Send initial review request SMS
 */
export async function sendReviewRequest(
  customerName: string,
  customerPhone: string,
  businessName: string,
  googleReviewLink: string
): Promise<string | null> {
  const body = `Hi ${customerName}! Thanks for choosing ${businessName}. We'd love a quick Google review if you're happy — takes 30 seconds: ${googleReviewLink}\n\nReply STOP to opt out.`;

  try {
    const message = await client.messages.create({
      body,
      from: fromPhone,
      to: customerPhone,
    });
    return message.sid;
  } catch (error) {
    console.error("Failed to send review request SMS:", error);
    return null;
  }
}

/**
 * Send follow-up SMS (called ~2 hours after initial send)
 */
export async function sendFollowUp(
  customerName: string,
  customerPhone: string,
  businessName: string,
  googleReviewLink: string
): Promise<string | null> {
  const body = `Hi ${customerName}! Just following up — your review means the world to us at ${businessName}. ${googleReviewLink}\n\nReply STOP to opt out.`;

  try {
    const message = await client.messages.create({
      body,
      from: fromPhone,
      to: customerPhone,
    });
    return message.sid;
  } catch (error) {
    console.error("Failed to send follow-up SMS:", error);
    return null;
  }
}

/**
 * Negative sentiment keywords
 */
const NEGATIVE_KEYWORDS = ["bad", "unhappy", "disappointed", "problem", "issue", "terrible", "awful", "worst", "horrible", "angry"];

/**
 * Check if a customer response indicates negative sentiment
 */
export function isNegativeSentiment(messageBody: string): boolean {
  const lower = messageBody.toLowerCase();
  return NEGATIVE_KEYWORDS.some((word) => lower.includes(word));
}

/**
 * Check if customer wants to opt out
 */
export function isOptOut(messageBody: string): boolean {
  const lower = messageBody.trim().toLowerCase();
  return ["stop", "unsubscribe", "cancel", "quit", "end"].includes(lower);
}
