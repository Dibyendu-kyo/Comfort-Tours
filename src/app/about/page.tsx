import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
      {/* Hero Section */}
      <section className="mb-20 text-center">

        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop&crop=center&q=80"
            alt="Comfort Tours Excellence"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-2xl text-white">
              About Comfort Tours
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg text-white text-center">
              Pune&apos;s Premier Travel Partner Since 2006 - Redefining Luxury Travel with Safety & Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The brainchild of dedicated professionals, Comfort Tours began its journey catering to the transport needs of software companies in Pune. Over time, we&apos;ve redefined luxury travel with a specific focus on safety and security.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We were the <strong>first to introduce GPS-enabled buses</strong> for the software industry in Pune, setting new standards for corporate transportation.
            </p>
            <div className="flex gap-4">
              <Link href="/services" className="btn">Our Services</Link>
              <Link href="/contact" className="btn bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white">
                Get Quote
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-lg p-8 flex items-center justify-center">
              <Image
                src="/images/comfort-tours-logo-01.png"
                alt="Comfort Tours Logo"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile Table */}
      <section className="mb-16">
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

      {/* Vision & Mission */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Vision & Mission</h2>
        <div className="grid md:grid-cols-2 gap-8">
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
              To be the most trusted and innovative travel partner in India, delivering exceptional experiences for every journey while setting industry standards for safety and service excellence.
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
              To provide safe, comfortable, and memorable travel solutions through our modern fleet, professional staff, and customer-first approach, ensuring every journey exceeds expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="mb-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Key Achievements</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">18+</h3>
            <p className="text-gray-600">Years of Excellence</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">200+</h3>
            <p className="text-gray-600">Fleet Vehicles</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">1000+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">GPS</h3>
            <p className="text-gray-600">First in Pune</p>
          </div>
        </div>
      </section>


    </div>
  );
} 