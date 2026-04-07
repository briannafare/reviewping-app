"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";

const MOCK_SENDS = [
  { id: 1, name: "Sarah Johnson", phone: "***-***-4521", sent: "2 hours ago", status: "Delivered" },
  { id: 2, name: "Mike Thompson", phone: "***-***-8834", sent: "5 hours ago", status: "Review received ⭐" },
  { id: 3, name: "Lisa Park", phone: "***-***-2190", sent: "1 day ago", status: "Follow-up sent" },
  { id: 4, name: "James Wilson", phone: "***-***-7756", sent: "1 day ago", status: "Review received ⭐" },
  { id: 5, name: "Amy Chen", phone: "***-***-3342", sent: "2 days ago", status: "Delivered" },
];

export default function Dashboard() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [reviewLink, setReviewLink] = useState("https://g.page/r/your-business/review");
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      <Header />

      <main className="pt-24 pb-16 min-h-screen bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Coming soon banner */}
          {showBanner && (
            <div className="mb-6 bg-brand-green/10 border border-brand-green/20 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-brand-green text-lg">🚀</span>
                <p className="text-sm text-navy-900">
                  <span className="font-semibold">Dashboard Preview</span> — Sign up to unlock full functionality. This is a preview with mock data.
                </p>
              </div>
              <button
                onClick={() => setShowBanner(false)}
                className="text-gray-400 hover:text-gray-600 p-1"
                aria-label="Dismiss"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4l8 8M12 4l-8 8" />
                </svg>
              </button>
            </div>
          )}

          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { label: "Requests this month", value: "24", sub: "+8 from last month" },
              { label: "Estimated reviews", value: "7", sub: "~30% conversion rate" },
              { label: "Avg. star rating", value: "4.8", sub: "Based on 7 reviews" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl border border-gray-200 p-6">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">{stat.label}</p>
                <p className="text-3xl font-extrabold text-navy-900 mt-1">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Send form */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-8">
            <h2 className="text-lg font-bold text-navy-900 mb-1">Send a review request</h2>
            <p className="text-sm text-gray-400 mb-6">Enter the customer details and hit send.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="custName" className="block text-sm font-medium text-navy-900 mb-1.5">
                  Customer name
                </label>
                <input
                  id="custName"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Sarah Johnson"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="custPhone" className="block text-sm font-medium text-navy-900 mb-1.5">
                  Phone number
                </label>
                <input
                  id="custPhone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-shadow"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="reviewUrl" className="block text-sm font-medium text-navy-900 mb-1.5">
                  Your Google Review link
                </label>
                <input
                  id="reviewUrl"
                  type="url"
                  value={reviewLink}
                  onChange={(e) => setReviewLink(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-shadow"
                />
              </div>
            </div>

            <button
              onClick={() => {
                alert("🚀 In production, this sends an SMS via Twilio. Wire up your keys in .env to go live!");
                setName("");
                setPhone("");
              }}
              disabled={!name || !phone}
              className="mt-6 w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-brand-green hover:bg-brand-green-hover disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors"
            >
              Send Review Request
            </button>
          </div>

          {/* Recent sends table */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-bold text-navy-900">Recent sends</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-6 py-3 font-medium text-gray-400 text-xs uppercase tracking-wide">Customer</th>
                    <th className="px-6 py-3 font-medium text-gray-400 text-xs uppercase tracking-wide">Phone</th>
                    <th className="px-6 py-3 font-medium text-gray-400 text-xs uppercase tracking-wide">Sent</th>
                    <th className="px-6 py-3 font-medium text-gray-400 text-xs uppercase tracking-wide">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_SENDS.map((send) => (
                    <tr key={send.id} className="border-t border-gray-50">
                      <td className="px-6 py-4 font-medium text-navy-900">{send.name}</td>
                      <td className="px-6 py-4 text-gray-400">{send.phone}</td>
                      <td className="px-6 py-4 text-gray-400">{send.sent}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            send.status.includes("⭐")
                              ? "bg-green-50 text-green-700"
                              : send.status === "Follow-up sent"
                              ? "bg-yellow-50 text-yellow-700"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {send.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
