import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TermsOfService() {
  const { langPrefix } = useLanguage();
  return (
    <>
      <SEO
        title="Terms of Service | Fluentry — English Coaching Morocco"
        description="Read Fluentry's terms of service. These terms govern your use of our website and coaching services."
        path="/terms-of-service"
      />
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-3xl bg-white rounded-2xl shadow-md p-8 sm:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: March 2026</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using the Fluentry website (fluentry.online) and our coaching services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Services</h2>
            <p className="text-gray-600 leading-relaxed">
              Fluentry provides online English coaching services including 1-on-1 lessons, group coaching, IELTS preparation, Business English programs, and educational resources. All services are delivered remotely via video call (Google Meet or equivalent) unless otherwise agreed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Payments and Refunds</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Payment terms are agreed upon before the start of any coaching program. Fluentry offers a results guarantee on select programs — if you do not achieve your stated goal within the agreed timeframe, we will continue coaching you at no additional cost until you do.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Refund requests must be submitted within 7 days of the first session. Refunds are not available after the program has been completed or after 50% of the sessions have been delivered.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Cancellations and Rescheduling</h2>
            <p className="text-gray-600 leading-relaxed">
              Students must provide at least 24 hours' notice to cancel or reschedule a session. Sessions cancelled with less than 24 hours' notice may be counted as completed. Repeated no-shows may result in termination of the coaching agreement without refund.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              All content on the Fluentry website — including blog articles, lesson materials, worksheets, and resources — is the intellectual property of Fluentry and Mr. Ibrahim K. You may not reproduce, distribute, or use this content commercially without prior written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              Fluentry is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid by the student for the relevant program.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to update these terms at any time. Continued use of our services after changes are posted constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              For any questions about these terms, please contact us at <a href="mailto:ibrahimkabaikm@gmail.com" className="text-blue-600 underline">ibrahimkabaikm@gmail.com</a> or via WhatsApp at +212 672 580 932.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
