import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-primary tracking-tight">
          Terms and Conditions
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
          Please read these terms and conditions carefully before using our website and services.
        </p>
        <p className="text-sm text-gray-500">Last Updated: 24 July 2025</p>
      </section>

      {/* Terms and Conditions Content */}
      <section className="mb-20">
        <div className="bg-white rounded-2xl shadow-lg card p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Welcome to Comfort Tours Pvt. Ltd.&apos;s official website (www.comfort-toursindia.com). By accessing or browsing this website, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please do not use our website.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">1. About Us</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Comfort Tours Pvt. Ltd. is a travel and transportation service provider offering car rentals, bus rentals, and customized tour services. This website is for informational purposes only and is designed to showcase our services and company profile.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">2. Website Use</h2>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-3">
              <li>You may browse this website for your personal or business information needs.</li>
              <li>You must not misuse the website in any way, including hacking, introducing viruses, or attempting unauthorized access to any part of the website or associated systems.</li>
              <li>Content on this website (text, images, branding, etc.) is owned by or licensed to Comfort Tours Pvt. Ltd. and may not be copied or reused without written permission.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">3. Service Information</h2>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-3">
              <li>All information provided on this website is general and subject to change without prior notice.</li>
              <li>For bookings or service inquiries, users are encouraged to contact us directly through phone, email, or our contact form.</li>
              <li>Availability, pricing, and terms for specific services will be discussed on a case-by-case basis and confirmed through official communication.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">4. Limitation of Liability</h2>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-3">
              <li>We make reasonable efforts to keep the website updated and accurate but do not guarantee its completeness or suitability for any specific purpose.</li>
              <li>Comfort Tours Pvt. Ltd. is not responsible for any loss or damage resulting from reliance on the information provided on this site.</li>
              <li>Links to third-party websites (if any) are provided for convenience only. We are not responsible for the content or practices of any external sites.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">5. Privacy</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Any information submitted through contact forms or inquiries is used solely to respond to your requests and will not be shared without your consent.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              For more details, please refer to our <Link href="/privacy-policy" className="text-primary hover:text-secondary underline">Privacy Policy</Link>.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">6. Changes to Terms</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Comfort Tours Pvt. Ltd. reserves the right to update or modify these Terms and Conditions at any time without prior notice. Continued use of the website indicates your acceptance of those changes.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">7. Contact Us</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you have any questions regarding these Terms and Conditions, please contact:
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
        <Link href="/" className="btn text-lg px-8 py-3 text-white">
          Back to Home
        </Link>
      </section>
    </div>
  );
}