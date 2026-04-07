/**
 * Supabase client for ReviewPing
 *
 * To wire up:
 * 1. Create a Supabase project at https://supabase.com
 * 2. Run the SQL migration below in the Supabase SQL editor
 * 3. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local
 *
 * SQL Migration:
 * ```sql
 * CREATE TABLE businesses (
 *   id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
 *   name TEXT NOT NULL,
 *   google_review_link TEXT NOT NULL,
 *   phone TEXT,
 *   email TEXT,
 *   created_at TIMESTAMPTZ DEFAULT NOW()
 * );
 *
 * CREATE TABLE review_requests (
 *   id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
 *   business_id UUID REFERENCES businesses(id),
 *   customer_name TEXT NOT NULL,
 *   customer_phone TEXT NOT NULL,
 *   google_review_link TEXT NOT NULL,
 *   status TEXT DEFAULT 'pending', -- pending, sent, follow_up_sent, review_received, negative_flagged
 *   twilio_sid TEXT,
 *   sent_at TIMESTAMPTZ,
 *   follow_up_sent_at TIMESTAMPTZ,
 *   created_at TIMESTAMPTZ DEFAULT NOW()
 * );
 *
 * CREATE TABLE sms_responses (
 *   id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
 *   review_request_id UUID REFERENCES review_requests(id),
 *   from_phone TEXT NOT NULL,
 *   body TEXT NOT NULL,
 *   sentiment TEXT, -- positive, negative, neutral, stop
 *   received_at TIMESTAMPTZ DEFAULT NOW()
 * );
 *
 * -- Index for follow-up scheduling
 * CREATE INDEX idx_review_requests_status ON review_requests(status, sent_at);
 * ```
 */

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-project.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "your-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
