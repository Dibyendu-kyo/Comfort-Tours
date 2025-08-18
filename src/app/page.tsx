import Image from "next/image";
import Link from "next/link";
import ClientCarousel from "@/components/ClientCarousel";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex items-center justify-start min-h-[80vh] sm:min-h-[85vh] md:h-[calc(100vh-4rem)] px-4 sm:px-6 md:px-8 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/home-hero-img.png"
            alt="Chauffeur Driven Transport Solutions"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="transition-transform duration-1000 ease-in-out object-right sm:object-center"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full py-8 sm:py-12 md:py-0">
          <div className="max-w-2xl">
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-2 font-medium">Corporate India&apos;s Largest</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold mb-4 sm:mb-6 text-white drop-shadow-2xl tracking-tight leading-tight">
              Chauffeur Driven<br />
              Transport Solutions
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-xl mb-8 sm:mb-10 md:mb-12 drop-shadow-lg leading-relaxed">
              Premier travel solutions in Pune since 2006, offering car and bus rentals for corporate travel. Trusted by top companies across PAN India.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-4xl">
            {/* Row 1 */}
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-red-500 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 11h6v6H9z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-500">2000+</div>
                  <div className="text-white text-xs sm:text-sm">Vehicles</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-red-500 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-500">75+</div>
                  <div className="text-white text-xs sm:text-sm">Corporate Companies</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-red-500 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-500">2M</div>
                  <div className="text-white text-xs sm:text-sm">Trips In FY 24</div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-red-500 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-500">10+</div>
                  <div className="text-white text-xs sm:text-sm">Cities In India</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-red-500 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-500">21+</div>
                  <div className="text-white text-xs sm:text-sm">Years Of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="w-full max-w-screen-xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-primary tracking-tight">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">

          {/* Inter City */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-4 sm:p-6">
            <div className="relative w-full h-40 sm:h-44 md:h-48 mb-4 sm:mb-6 rounded-lg overflow-hidden">
              <Image
                src="/gallery/home_services/Intercity.png"
                alt="Inter City Travel"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary text-center">Inter City</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-4 flex-grow leading-relaxed">Comfortable and reliable travel between cities with well-maintained vehicles and experienced drivers.</p>
            <Link href="/services" className="btn text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">Learn More</Link>
          </div>

          {/* Intra City */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-4 sm:p-6">
            <div className="relative w-full h-40 sm:h-44 md:h-48 mb-4 sm:mb-6 rounded-lg overflow-hidden">
              <Image
                src="/gallery/home_services/Intracity.png"
                alt="Intra City Travel"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary text-center">Intra City</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-4 flex-grow leading-relaxed">Convenient city travel solutions for your daily commuting, meetings, shopping, or leisure plans.</p>
            <Link href="/services" className="btn text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">Learn More</Link>
          </div>

          {/* Airport Transfer */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-4 sm:p-6">
            <div className="relative w-full h-40 sm:h-44 md:h-48 mb-4 sm:mb-6 rounded-lg overflow-hidden">
              <Image
                src="/gallery/home_services/Airport cab service.png"
                alt="Airport Transfer"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary text-center">Airport Transfer</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-4 flex-grow leading-relaxed">Hassle-free pick-up and drop-off services to and from the airport, ensuring you&apos;re always on time.</p>
            <Link href="/services" className="btn text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">Learn More</Link>
          </div>

          {/* Long-Term Rental */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-4 sm:p-6">
            <div className="relative w-full h-40 sm:h-44 md:h-48 mb-4 sm:mb-6 rounded-lg overflow-hidden">
              <Image
                src="/gallery/home_services/Long Term Car Rental.png"
                alt="Long-Term Rental"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary text-center">Long-Term Rental</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-4 flex-grow leading-relaxed">Flexible and affordable long-term cab rentals for businesses, corporate needs, or personal use.</p>
            <Link href="/services" className="btn text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">Learn More</Link>
          </div>

          {/* Point to Point Model */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-4 sm:p-6">
            <div className="relative w-full h-40 sm:h-44 md:h-48 mb-4 sm:mb-6 rounded-lg overflow-hidden">
              <Image
                src="/gallery/home_services/Point to point Model.png"
                alt="Point to Point Model"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary text-center">Point to Point Model</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-4 flex-grow leading-relaxed">Direct and cost-effective rides between two specific locations with transparent pricing.</p>
            <Link href="/services" className="btn text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">Learn More</Link>
          </div>

          {/* Route Based Model */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-4 sm:p-6">
            <div className="relative w-full h-40 sm:h-44 md:h-48 mb-4 sm:mb-6 rounded-lg overflow-hidden">
              <Image
                src="/gallery/home_services/Route Based Model.png"
                alt="Route Based Model"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary text-center">Route Based Model</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-4 flex-grow leading-relaxed">Pre-defined route travel services ideal for corporate shuttles and employee transportation.</p>
            <Link href="/services" className="btn text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">Learn More</Link>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full max-w-screen-xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl my-12 sm:my-16 md:my-20" style={{ background: 'linear-gradient(135deg, #e67817 0%, #007dc0 100%)' }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10 text-white tracking-tight">Why Choose Comfort Tours?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 text-center">
          <div className="flex flex-col items-center px-4 sm:px-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Trusted & Reliable</h3>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">21+ years of experience serving corporate and individual clients across India</p>
          </div>
          <div className="flex flex-col items-center px-4 sm:px-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Large Fleet</h3>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">2000+ well-maintained vehicles ranging from economy to luxury cars</p>
          </div>
          <div className="flex flex-col items-center px-4 sm:px-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Corporate Preferred</h3>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">Trusted by 75+ corporate companies with 2M+ trips completed in FY 24</p>
          </div>
        </div>
      </section>

      {/* What makes Comfort Tours your best choice */}
      <section className="w-full max-w-6xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-start">
          {/* Top Row - Left: Heading */}
          <div className="flex flex-col justify-center text-left mb-6 md:mb-0">
            <div className="mb-3 sm:mb-4 text-gray-500 text-sm sm:text-base md:text-lg font-medium tracking-wide">Luxury • Comfort • Convenience</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              What makes <span className="text-red-500 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Comfort Tours</span><br />
              your best choice?
            </h2>
          </div>

          {/* Top Row - Middle: Card 1 */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group min-h-[250px] sm:min-h-[280px] md:h-[300px]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 rounded-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 text-center leading-tight">Convenience and Flexibility</h3>
            <p className="text-gray-600 text-xs sm:text-sm text-center leading-relaxed">Enjoy the convenience and flexibility of having access to a fleet of vehicles as per your need and comfort.</p>
          </div>

          {/* Top Row - Right: Card 2 */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group min-h-[250px] sm:min-h-[280px] md:h-[300px]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 rounded-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h10M7 16h8" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 text-center leading-tight">Streamlined Management</h3>
            <p className="text-gray-600 text-xs sm:text-sm text-center leading-relaxed">Easily track and manage rental bookings, expenses, and usage data through our online booking tool that integrates with the travel desks of our customers.</p>
          </div>

          {/* Bottom Row - Left & Middle: Wide Range of Vehicles (spans 2 cols) */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 md:col-span-2 min-h-[250px] sm:min-h-[280px] md:h-[300px]">
            <div className="text-center mb-4">
              <h3 className="font-bold text-xl mb-3 text-gray-900">Wide Range of Vehicles</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                From economy cars for everyday use to luxury sedans for executive travel, we operate a fleet of <span className="font-semibold text-red-500">2000+</span> vehicles for you to choose from.
              </p>
            </div>
            <div className="relative h-32 rounded-xl overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200">
              <Image
                src="/gallery/home_services/event.jpeg"
                alt="Car fleet"
                width={400}
                height={128}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center center'
                }}
                className="transition-transform duration-500 hover:scale-105 w-full h-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>

          {/* Bottom Row - Right: Card 4 (24/7 Support) */}
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group h-[300px]">
            <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" stroke="currentColor" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 15a4 4 0 108-0v-1a4 4 0 00-8 0v1z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5v.01" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 text-center leading-tight">24/7 Support</h3>
            <p className="text-gray-600 text-sm text-center leading-relaxed">You can rely on our dedicated team to provide prompt assistance whenever needed.</p>
          </div>
        </div>
      </section>

      {/* Our Trusted Clients */}
      <section className="w-full max-w-screen-xl mx-auto py-16 px-4 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-secondary tracking-tight">Our Trusted Clients</h2>
        <ClientCarousel />
        <div className="flex justify-end mt-8">
          <Link href="/clients" className="text-primary hover:text-secondary font-semibold text-lg transition-colors duration-300 flex items-center gap-2">
            View All Clients
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8 bg-white my-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-primary tracking-tight">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="card flex flex-col items-start">
            <p className="text-lg mb-4">&ldquo;Comfort Tours made our holiday absolutely stress-free! From transport to hotels, everything was perfectly arranged. Highly recommended for a relaxed travel experience.&rdquo;</p>
            <span className="font-semibold text-primary">Rohit Deshmukh, Mumbai</span>
          </div>
          <div className="card flex flex-col items-start">
            <p className="text-lg mb-4">&ldquo;Best tour company we&apos;ve experienced! Professional team, great service, and amazing memories. Thank you, Comfort Tours, for making our trip unforgettable.&rdquo;</p>
            <span className="font-semibold text-primary">Priya Nair, Pune</span>
          </div>
          <div className="card flex flex-col items-start">
            <p className="text-lg mb-4">&ldquo;We loved every moment of our tour with Comfort Tours. Very well organized itineraries and friendly support throughout. Definitely booking with them again.&rdquo;</p>
            <span className="font-semibold text-primary">Vijay Kulkarni, Nagpur</span>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}