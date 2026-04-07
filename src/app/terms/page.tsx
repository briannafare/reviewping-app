import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 min-h-screen">
        <article className="max-w-2xl mx-auto px-4 sm:px-6 prose prose-gray prose-sm">
          <h1 className="text-3xl font-extrabold text-navy-900 mb-2">Terms of Service</h1>
          <p className="text-gray-400 text-sm mb-8">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

          <h2 className="text-lg font-bold text-navy-900 mt-8 mb-3">1. Service Description</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            ReviewPing is a review request automation tool for home service businesses. We send SMS messages on your behalf
            to your customers requesting Google reviews. You are responsible for ensuring you have permission to contact
            each customer.
          </p>

          <h2 className="text-lg font-bold text-navy-900 mt-8 mb-3">2. Acceptable Use</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            You agree to: (a) only send review requests to customers who have done business with you;
            (b) comply with all applicable laws regarding SMS communication, including TCPA;
            (c) not use the service for spam or unsolicited messages;
            (d) honor all opt-out (STOP) requests immediately.
          </p>

          <h2 className="text-lg font-bold text-navy-900 mt-8 mb-3">3. Billing & Cancellation</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            ReviewPing costs $29/month, billed monthly. You can cancel at any time from your dashboard or by emailing
            support@reviewping.app. No refunds for partial months. No contracts or cancellation fees.
          </p>

          <h2 className="text-lg font-bold text-navy-900 mt-8 mb-3">4. Limitation of Liability</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            ReviewPing is provided &ldquo;as is.&rdquo; We are not responsible for the content of reviews left by your customers,
            SMS delivery failures due to carrier issues, or any business decisions made based on review data.
            Our total liability is limited to the amount you paid in the last 3 months.
          </p>

          <h2 className="text-lg font-bold text-navy-900 mt-8 mb-3">5. Intellectual Property</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            You retain ownership of your business data. We retain ownership of the ReviewPing platform, code, and brand.
          </p>

          <h2 className="text-lg font-bold text-navy-900 mt-8 mb-3">6. Termination</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            We may suspend or terminate your account if you violate these terms, particularly regarding acceptable use
            of SMS messaging. You may terminate your account at any time.
          </p>

          <h2 className="text-lg font-bold text-navy-900 mt-8 mb-3">7. Changes to Terms</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            We may update these terms from time to time. We&apos;ll notify you via email of significant changes.
            Continued use after changes constitutes acceptance.
          </p>

          <h2 className="text-lg font-bold text-navy-900 mt-8 mb-3">8. Contact</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Questions? Email support@reviewping.app.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
