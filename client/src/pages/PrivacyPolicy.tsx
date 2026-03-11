import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyPolicy() {
  const { langPrefix } = useLanguage();
  return (
    <>
      <SEO
        title="Privacy Policy | Fluentry — English Coaching Morocco"
        description="Read Fluentry's privacy policy. We are committed to protecting your personal data and being transparent about how we collect and use information."
        path="/privacy-policy"
      />
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-3xl bg-white rounded-2xl shadow-md p-8 sm:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: March 2026</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              Fluentry is an online English coaching platform operated by Mr. Ibrahim K., based in Morocco. We provide 1-on-1 English coaching, group coaching, and educational resources to students and professionals across Morocco and beyond. You can reach us at <a href="mailto:ibrahimkabaikm@gmail.com" className="text-blue-600 underline">ibrahimkabaikm@gmail.com</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-3">We may collect the following types of information:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Contact information</strong> — your name, email address, and phone number when you fill out a contact form, book a lesson, or subscribe to our newsletter.</li>
              <li><strong>Usage data</strong> — pages visited, time spent, and interactions on our website, collected via analytics tools (e.g., Plausible Analytics, which is privacy-friendly and does not use cookies).</li>
              <li><strong>Communication data</strong> — messages you send us via WhatsApp, email, or our website forms.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>To respond to your enquiries and provide coaching services.</li>
              <li>To send you educational content and updates you have opted into.</li>
              <li>To improve our website and services based on usage patterns.</li>
              <li>We do <strong>not</strong> sell your data to third parties.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal data only for as long as necessary to provide our services or as required by applicable law. You may request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed">
              You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at <a href="mailto:ibrahimkabaikm@gmail.com" className="text-blue-600 underline">ibrahimkabaikm@gmail.com</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              Fluentry uses Plausible Analytics, a privacy-first analytics tool that does not use cookies and does not collect personally identifiable information. No cookie consent banner is required.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              For any privacy-related questions, please contact us at <a href="mailto:ibrahimkabaikm@gmail.com" className="text-blue-600 underline">ibrahimkabaikm@gmail.com</a> or via WhatsApp at +212 672 580 932.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
