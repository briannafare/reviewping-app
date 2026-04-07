# ReviewPing

**Turn every finished job into a 5-star Google review — automatically.**

ReviewPing is a $29/month micro-SaaS for solo home service businesses (plumbers, cleaners, HVAC, landscapers, electricians). Send one text after every job → get more Google reviews → stop losing customers to competitors with 4.9 stars.

## How It Works

1. **Finish a job** → Open ReviewPing on your phone
2. **Enter customer name + phone** → Hit send
3. **We send a personalized SMS** asking for a Google review
4. **2 hours later**, we send a gentle follow-up reminder
5. **If the customer replies negatively**, we redirect to a private feedback form (not Google)

## Tech Stack

- **Frontend:** Next.js 14 (App Router) + Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **SMS:** Twilio
- **Payments:** Stripe
- **Hosting:** Vercel

---

## Wiring Guide

### 1. Supabase (Database)

1. Create a free project at [supabase.com](https://supabase.com)
2. Go to SQL Editor and run the migration in `src/lib/supabase.ts` (it's in the file comments)
3. Go to Settings → API → copy the project URL and anon key
4. Set in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 2. Twilio (SMS)

1. Create a free account at [twilio.com](https://www.twilio.com)
2. Get your Account SID, Auth Token, and a phone number
3. Set in `.env.local`:

```env
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_PHONE_NUMBER=+1xxxxxxxxxx
```

4. Set the Twilio incoming webhook URL to: `https://your-domain.vercel.app/api/webhook/sms`

**Note:** Twilio trial accounts can only send to verified numbers. Upgrade for production.

### 3. Stripe (Payments)

1. Create a Stripe Payment Link at [dashboard.stripe.com/payment-links](https://dashboard.stripe.com/payment-links)
2. Set it to $29/month recurring
3. Find every `href="#payment"` in the codebase and replace with your Stripe payment link URL

**For Bri:** Replace `#payment` with the real Stripe payment link once you create it in the Stripe dashboard. Search for `#payment` across all files — there are ~5 instances (hero CTA, pricing CTA, nav, final CTA).

### 4. Vercel (Deployment)

The app is deployed on Vercel. To redeploy:

```bash
vercel --prod
```

Or push to the `main` branch — Vercel auto-deploys.

---

## Running Locally

```bash
cp .env.example .env.local
# Fill in your keys
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page (conversion-optimized)
│   ├── layout.tsx            # Root layout with metadata
│   ├── globals.css           # Tailwind + Inter font
│   ├── dashboard/page.tsx    # Dashboard (mock data, scaffold)
│   ├── privacy/page.tsx      # Privacy policy
│   ├── terms/page.tsx        # Terms of service
│   └── api/
│       ├── send-review/      # POST /api/send-review
│       └── webhook/sms/      # POST /api/webhook/sms (Twilio)
├── components/
│   ├── Header.tsx            # Sticky nav
│   ├── Footer.tsx            # Footer
│   └── Logo.tsx              # SVG logo
└── lib/
    ├── supabase.ts           # Supabase client + DB schema
    └── twilio.ts             # Twilio SMS functions
```

---

## Acquisition Note

> **This tool is built for acquisition.** Clean repo. Deployed. Revenue-ready. One payment link swap and Twilio key drop away from generating revenue. Proven SaaS model at $29/mo price point targeting a massive, underserved market (6M+ home service businesses in the US). Zero customer acquisition cost if distributed through home service forums, Facebook groups, and Google Ads.
