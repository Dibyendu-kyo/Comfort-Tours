import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-primary tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
          Your privacy is important to us. Learn how we collect, use, and protect your information.
        </p>
        <p className="text-sm text-gray-500">Last Updated: 24 July 2025</p>
      </section>

      {/* Privacy Policy Content */}
      <section className="mb-20">
        <div className="bg-white rounded-2xl shadow-lg card p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At Comfort Tours Pvt. Ltd., we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website: www.comfort-toursindia.com.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We may collect the following information when you use our website or contact us:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and message content submitted via contact forms.</li>
              <li><strong>Non-Personal Information:</strong> Browser type, device type, pages visited, and time spent on the site (via analytics tools like Google Analytics, if used).</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We use the information you provide to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Respond to your inquiries or service requests</li>
              <li>Improve our website experience</li>
              <li>Maintain internal records of potential customers and partners</li>
            </ul>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">3. Cookies</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device to help us understand website traffic and usage patterns.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              You can choose to disable cookies in your browser settings if you prefer.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We take reasonable steps to protect your information from unauthorized access, misuse, or disclosure. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">5. Third-Party Links</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Our website may contain links to external sites. We are not responsible for the privacy practices or content of those websites. Please review their policies separately.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              You may contact us to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Request a copy of the personal data we hold about you</li>
              <li>Ask us to correct or delete your information</li>
            </ul>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Simply email us at raj.kolpe@comfort-toursindia.com for any requests.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">7. Changes to This Policy</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">8. Contact Us</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact:
            </p>
            <div className="bg-primary/5 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-primary mb-3">Comfort Tours Pvt. Ltd.</h3>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> 
                <Link href="mailto:raj.kolpe@comfort-toursindia.com" className="text-primary hover:text-secondary ml-2">
                  raj.kolpe@comfort-toursindia.com
                </Link>
              </p>
              <p className="text-gray-700 mb-2">
                <Link href="mailto:bookings@comfort-toursindia.com" className="text-primary hover:text-secondary ml-16">
                  bookings@comfort-toursindia.com
                </Link>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> 
                <Link href="tel:+912041230000" className="text-primary hover:text-secondary ml-2">
                  +91-20-41230000
                </Link>
                <span className="mx-2">/</span>
                <Link href="tel:+919763704501" className="text-primary hover:text-secondary">
                  09763704501
                </Link>
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong> 
                <Link href="/" className="text-primary hover:text-secondary ml-2">
                  www.comfort-toursindia.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="text-center">
        <Link href="/" className="btn text-lg px-8 py-3">
          Back to Home
        </Link>
      </section>
    </div>
  );
}