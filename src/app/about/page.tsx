import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Comfort Tours - 21+ Years of Excellence",
  description: "Comfort Tours Pvt. Ltd. – Pune's premier corporate travel and chauffeur-driven transport provider. With 2,000+ vehicles, 75+ corporate clients, and 21+ years of excellence, we deliver safe, reliable, and professional travel solutions across India.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
      {/* Hero Section */}
      <section className="mb-20 text-center">

        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
          <Image
            src="/gallery/photos/IMG-20250221-WA0005.jpg"
            alt="Comfort Tours Excellence"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-2xl text-white px-4">
              About Comfort Tours
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg text-white text-center px-4">
              Pune&apos;s Premier Travel Partner Since 2006 - Redefining Luxury Travel with Safety & Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">Our Story</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              Founded in 2006 by a team of passionate professionals, Comfort Tours Pvt. Ltd. began by serving the growing transport needs of Pune’s IT and corporate sector.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              We were the <strong>first company in Pune to introduce GPS-enabled buses </strong> for employee transport, setting new benchmarks in safety and efficiency.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              Today, Comfort Tours is among India’s most trusted partners for <strong>corporate travel, employee transportation, and luxury fleet rentals </strong> — ensuring seamless journeys for businesses and individuals alike.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="btn text-center text-white">Our Services</Link>
              <Link href="/contact" className="btn bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white text-center">
                Get Quote
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="p-12 flex items-center justify-center">
              <Image
                src="/images/comfort-tours-logo-01.png"
                alt="Comfort Tours Logo"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Vision & Mission */}
      <section className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 text-primary">Vision & Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8 card hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be India&apos;s most trusted and innovative travel partner, delivering exceptional experiences while setting industry standards for safety, reliability, and service excellence.
            </p>
          </div>
          <div className="bg-gradient-to-br from-secondary/10 to-primary/5 rounded-2xl p-8 card hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide safe, comfortable, and cost-effective travel solutions through our modern fleet, trained chauffeurs, and customer-first approach — ensuring every journey exceeds expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="mb-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 text-primary">Key Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 2,000+ Vehicles */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">2,000+</h3>
            <p className="text-gray-600 text-sm">Vehicles across economy, executive & luxury categories</p>
          </div>

          {/* 75+ Corporate Clients */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">75+</h3>
            <p className="text-gray-600 text-sm">Corporate Clients including leading IT & Fortune 500 companies</p>
          </div>

          {/* First in Pune */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 713.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">First in Pune</h3>
            <p className="text-gray-600 text-sm">To launch GPS-enabled buses for safe employee transport</p>
          </div>

          {/* 21+ Years */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">21+ Years</h3>
            <p className="text-gray-600 text-sm">Of Excellence in corporate and individual travel</p>
          </div>
        </div>
      </section>

      {/* Company Profile Table */}
      <section className="mb-20">
        <div className="bg-white rounded-xl shadow card p-8">
          <h2 className="text-2xl font-bold mb-6 text-primary">Company Profile</h2>
          <table className="w-full text-left border-separate border-spacing-y-2">
            <tbody>
              <tr><th className="pr-4 text-gray-600 font-semibold">Company Name:</th><td>Comfort Tours Pvt. Ltd.</td></tr>
              <tr><th className="pr-4 text-gray-600 font-semibold">Registered Address:</th><td>Office No. 1, 2nd Floor, Rucha Building, Sr. No. 4/12, 4/13, 4/14, Punavale, Pune - 411033</td></tr>
              <tr><th className="pr-4 text-gray-600 font-semibold">Subsidiary Company:</th><td>Sahara Rent A Car Pvt. Ltd.</td></tr>
              <tr><th className="pr-4 text-gray-600 font-semibold">PAN No.:</th><td>AACCC7556L</td></tr>
              <tr><th className="pr-4 text-gray-600 font-semibold">Service Tax No.:</th><td>AACCC7556LS 001</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="mb-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl p-8 md:p-12" style={{ background: 'linear-gradient(135deg, #e67817 0%, #007dc0 100%)' }}>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-white">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-3">
            <p className="text-lg font-semibold">Comfort Tours Pvt. Ltd.</p>
            <p className="text-base">Office No. 1, 2nd Floor, Rucha Building, Punavale, Pune – 411033</p>
            <p className="text-base">Phone: +91-20-41230000</p>
            <p className="text-base">Email: info@comfort-toursindia.com</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-500 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Contact Us
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" style={{ backgroundColor: '#e67817' }}>
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
} 