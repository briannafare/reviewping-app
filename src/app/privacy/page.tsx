import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 min-h-screen">
        <article className="max-w-2xl mx-auto px-4 sm:px-6 prose prose-gray prose-sm">
          <h1 className="text-3xl font-extrabold text-navy-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-400 text-sm mb-8">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

          <h2 className="text-lg font-bold text-navy-900 mt-8 mb-3">1. Information We Collect</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            We collect information you provide directly: your name, email, business name, and payment information.
            We also collect customer contact information (name and phone number) that you enter for review requests.
          </p>

          <h2 className="text-lg font-bold text-navy-900 mt-8 mb-3">2. How We Use Your Information</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            We use your information to: (a) provide the ReviewPing service, including sending SMS review requests on your behalf;
            (b) process payments; (c) communicate with you about your account; (d) improve our service.
          </p>

          <h2 className="text-lg font-bold text-navy-900 mt-8 mb-3">3. SMS & Phone Numbers</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Customer phone numbers are used solely to send review request messages on your behalf. We do not sell,
            share, or use customer phone numbers for any other purpose. Recipients can reply STOP at any time to opt out.
          </p>

          <h2 className="text-lg font-bold text-navy-900 mt-8 mb-3">4. Data Storage & Security</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Data is stored securely using industry-standard encryption. We use Supabase for database hosting and Stripe
            for payment processing. We do not store credit card numbers on our servers.
          </p>

          <h2 className="text-lg font-bold text-navy-900 mt-8 mb-3">5. Third-Party Services</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            We use Twilio for SMS delivery, Stripe for payments, and Supabase for data storage.
            Each service has its own privacy policy governing data they process.
          </p>

          <h2 className="text-lg font-bold text-navy-900 mt-8 mb-3">6. Your Rights</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            You can request to view, update, or delete your data at any time by contacting support@reviewping.app.
            Canceling your account will remove all stored data within 30 days.
          </p>

          <h2 className="text-lg font-bold text-navy-900 mt-8 mb-3">7. Contact</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Questions about this policy? Email us at support@reviewping.app.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
