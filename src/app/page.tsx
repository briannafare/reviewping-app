"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";

/* ─── Icon helpers (inline SVGs to avoid dependency weight) ─── */
function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 1l2.47 5.01L18 6.86l-4 3.9.94 5.5L10 13.47l-4.94 2.8.94-5.5-4-3.9 5.53-.85L10 1z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4,10 8,14 16,6" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="5" x2="15" y2="15" />
      <line x1="15" y1="5" x2="5" y2="15" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round">
      <line x1="5" y1="10" x2="15" y2="10" />
    </svg>
  );
}

/* ─── FAQ Accordion Item ─── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-base font-semibold text-navy-900 pr-4">{q}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`shrink-0 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <polyline points="5,8 10,13 15,8" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 text-gray-600 text-sm leading-relaxed -mt-1">{a}</div>
      )}
    </div>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <Header />

      {/* ────────── HERO ────────── */}
      <section className="relative bg-navy-900 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 text-brand-green text-xs font-semibold px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
            Built for home service pros
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
            Turn Every Finished Job Into a{" "}
            <span className="text-brand-green">5-Star Google Review</span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Send one text. Get more reviews. Stop losing customers to competitors with 4.9 stars.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://buy.stripe.com/6oU4gz2np1AT8X25hL9bO01"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-brand-green hover:bg-brand-green-hover text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-green-500/25"
            >
              Start Getting Reviews — $29/mo
            </a>
            <button
              onClick={() =>
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-white/80 hover:text-white font-medium transition-colors"
            >
              See how it works &darr;
            </button>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            No setup fee &middot; Cancel anytime &middot; No contracts
          </p>

          {/* Phone mockup showing SMS */}
          <div className="mt-12 max-w-sm mx-auto bg-navy-800 rounded-3xl p-6 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-brand-green" />
              <span className="text-xs text-gray-400 font-medium">SMS Preview</span>
            </div>
            <div className="space-y-3">
              <div className="bg-brand-green/10 border border-brand-green/20 rounded-2xl rounded-tl-md px-4 py-3 text-left">
                <p className="text-sm text-gray-200 leading-relaxed">
                  Hi Sarah! Thanks for choosing <span className="font-semibold text-white">Mike&apos;s Plumbing</span>. We&apos;d love a quick Google review if you&apos;re happy — takes 30 seconds 🔗
                </p>
              </div>
              <div className="flex justify-end">
                <div className="bg-white/10 rounded-2xl rounded-tr-md px-4 py-3 max-w-[200px]">
                  <p className="text-sm text-gray-300">Just left a review! Great work 👍</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── SOCIAL PROOF BAR ────────── */}
      <section className="bg-gray-50 border-b border-gray-100 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {[
            "2,400+ review requests sent",
            "720+ 5-star reviews generated",
            "98% message delivery rate",
          ].map((stat) => (
            <div key={stat} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <CheckIcon />
              {stat}
            </div>
          ))}
        </div>
      </section>

      {/* ────────── PROBLEM ────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              You finish a great job. <br className="hidden sm:block" />
              <span className="text-gray-400">They never leave a review.</span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              Sound familiar? You&apos;re not alone. Most happy customers just forget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🔧",
                title: "You crush the job",
                desc: "The customer is thrilled. They say they'll definitely leave a review.",
              },
              {
                icon: "📱",
                title: "Life gets in the way",
                desc: "They meant to leave a review, but between work, kids, and dinner — they forget.",
              },
              {
                icon: "😤",
                title: "Your competitor wins",
                desc: "They have 4.9 stars because they ask every time. You have 4.2 and fewer calls.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-colors"
              >
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── HOW IT WORKS ────────── */}
      <section id="how-it-works" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Three steps. More reviews.
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              Takes less time than writing an invoice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Enter customer info",
                desc: "Name and phone number — that's it. Do it right from your truck.",
                color: "bg-brand-green",
              },
              {
                step: "2",
                title: "We send the text",
                desc: "A friendly, personalized SMS goes out asking for a Google review.",
                color: "bg-navy-900",
              },
              {
                step: "3",
                title: "Reviews roll in",
                desc: "Happy customers tap the link and leave a 5-star review in 30 seconds.",
                color: "bg-brand-green",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div
                  className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-5`}
                >
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Arrow connector (desktop only) */}
          <div className="hidden md:flex items-center justify-center mt-12">
            <div className="flex items-center gap-4 text-gray-300 text-sm font-medium">
              <span className="w-8 h-px bg-gray-300" />
              Finish job → Open app → Send → Done
              <span className="w-8 h-px bg-gray-300" />
            </div>
          </div>
        </div>
      </section>

      {/* ────────── FEATURES ────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Everything you need. Nothing you don&apos;t.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Auto follow-up",
                desc: "If they don't review right away, we send a gentle reminder 2 hours later.",
                icon: "🔄",
              },
              {
                title: "Negative review shield",
                desc: "Unhappy customer? We redirect them to a private feedback form instead of Google.",
                icon: "🛡️",
              },
              {
                title: "Personalized messages",
                desc: "Every text includes the customer's name and your business name. Never spammy.",
                icon: "✉️",
              },
              {
                title: "Works on any phone",
                desc: "SMS works everywhere. No app for your customer to download.",
                icon: "📱",
              },
              {
                title: "Dashboard & tracking",
                desc: "See who you've sent requests to, how many reviews you've gotten, and your conversion rate.",
                icon: "📊",
              },
              {
                title: "Set up in 2 minutes",
                desc: "Enter your Google Business link once. Start sending review requests immediately.",
                icon: "⚡",
              },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-navy-900 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── PRICING ────────── */}
      <section id="pricing" className="py-20 md:py-28 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Simple pricing. No surprises.
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            One plan. Everything included. Cancel anytime.
          </p>

          <div className="mt-12 max-w-md mx-auto bg-white rounded-3xl p-8 md:p-10 text-left shadow-2xl">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-extrabold text-navy-900">$29</span>
              <span className="text-gray-400 font-medium">/month</span>
            </div>

            <ul className="mt-8 space-y-4">
              {[
                "Unlimited review requests",
                "Automatic follow-up texts",
                "Negative review shield",
                "Personalized SMS messages",
                "Dashboard & analytics",
                "Works with any Google Business profile",
                "Mobile-friendly — send from anywhere",
                "Cancel anytime. No contracts.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://buy.stripe.com/6oU4gz2np1AT8X25hL9bO01"
              className="mt-8 w-full inline-flex items-center justify-center px-8 py-4 bg-brand-green hover:bg-brand-green-hover text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-green-500/25"
            >
              Start Getting Reviews
            </a>

            <p className="mt-4 text-center text-xs text-gray-400">
              No setup fee. No credit card required to explore.
            </p>
          </div>
        </div>
      </section>

      {/* ────────── COMPARISON TABLE ────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              ReviewPing vs. the alternatives
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 pr-4 font-semibold text-navy-900">Feature</th>
                  <th className="py-4 px-4 font-semibold text-brand-green text-center">ReviewPing</th>
                  <th className="py-4 px-4 font-semibold text-gray-400 text-center">Birdeye</th>
                  <th className="py-4 pl-4 font-semibold text-gray-400 text-center">DIY / Manual</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Price", rp: "$29/mo", bird: "$299+/mo", diy: "Free" },
                  { feature: "Automated SMS", rp: true, bird: true, diy: false },
                  { feature: "Follow-up reminders", rp: true, bird: true, diy: false },
                  { feature: "Negative review shield", rp: true, bird: true, diy: false },
                  { feature: "Setup time", rp: "2 min", bird: "1-2 weeks", diy: "N/A" },
                  { feature: "Contract required", rp: false, bird: true, diy: false },
                  { feature: "Built for solo operators", rp: true, bird: false, diy: "sort of" },
                  { feature: "Actually gets done", rp: true, bird: true, diy: false },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100">
                    <td className="py-4 pr-4 font-medium text-navy-900">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.rp === "boolean" ? (
                        row.rp ? <span className="inline-block"><CheckIcon /></span> : <span className="inline-block"><XIcon /></span>
                      ) : (
                        <span className="font-semibold text-brand-green">{row.rp}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.bird === "boolean" ? (
                        row.bird ? <span className="inline-block"><CheckIcon /></span> : <span className="inline-block"><XIcon /></span>
                      ) : (
                        <span className="text-gray-500">{row.bird}</span>
                      )}
                    </td>
                    <td className="py-4 pl-4 text-center">
                      {typeof row.diy === "boolean" ? (
                        row.diy ? <span className="inline-block"><CheckIcon /></span> : <span className="inline-block"><XIcon /></span>
                      ) : row.diy === "sort of" ? (
                        <span className="inline-block"><MinusIcon /></span>
                      ) : (
                        <span className="text-gray-500">{row.diy}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ────────── TESTIMONIALS ────────── */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Home service pros love ReviewPing
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Mike R.",
                biz: "Mike's Plumbing Co.",
                quote: "Got 12 new reviews in my first month. I just type in the name and phone number after every job. Easiest thing I do all day.",
                stars: 5,
              },
              {
                name: "Sarah T.",
                biz: "Sparkle Clean Services",
                quote: "I went from 4.1 to 4.7 stars in 6 weeks. My phone rings more now. Birdeye wanted $300/month — this is a no-brainer.",
                stars: 5,
              },
              {
                name: "Jake D.",
                biz: "Cool Breeze HVAC",
                quote: "The negative review shield saved me. Had an unhappy customer and it caught it before they went to Google. Worth every penny.",
                stars: 5,
              },
            ].map((t) => (
              <div key={t.name} className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <StarIcon key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-navy-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.biz}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── FAQ ────────── */}
      <section id="faq" className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight text-center mb-12">
            Frequently asked questions
          </h2>

          <FAQItem
            q="Does it work with any Google Business profile?"
            a="Yes! During setup you'll paste your Google Business review link. We work with any Google Business Profile — plumbing, cleaning, HVAC, landscaping, electrical, you name it."
          />
          <FAQItem
            q="Can I customize the message?"
            a="Absolutely. You can edit the text message template to match your brand voice. We provide a proven default that converts well, but you have full control."
          />
          <FAQItem
            q="What if a customer is unhappy?"
            a="Our negative review shield detects unhappy responses and redirects them to a private feedback form instead of Google. You get the feedback privately so you can make it right — without a public 1-star review."
          />
          <FAQItem
            q="Is there a setup fee?"
            a="No. $29/month is all you pay. No setup fee, no hidden charges, no contracts. Cancel anytime from your dashboard."
          />
          <FAQItem
            q="Does it work on mobile?"
            a="Yes — ReviewPing is mobile-first. Send review requests from your phone right after finishing a job. No need to wait until you're back at a computer."
          />
        </div>
      </section>

      {/* ────────── FINAL CTA ────────── */}
      <section className="py-20 md:py-28 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Stop leaving 5-star reviews on the table
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Your competitors are asking for reviews after every job. Now you can too — in 10 seconds flat.
          </p>
          <a
            href="https://buy.stripe.com/6oU4gz2np1AT8X25hL9bO01"
            className="mt-8 inline-flex items-center justify-center px-10 py-4 bg-brand-green hover:bg-brand-green-hover text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-green-500/25"
          >
            Start Getting Reviews — $29/mo
          </a>
          <p className="mt-4 text-xs text-gray-500">
            Cancel anytime &middot; No contracts &middot; No setup fee
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
