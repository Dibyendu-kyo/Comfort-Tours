import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Comfort Tours - Corporate Transport Solutions",
  description: "Comfort Tours Pvt. Ltd. – Pune&apos;s premier corporate travel and chauffeur-driven transport provider. With 2,000+ vehicles, 75+ corporate clients, and 21+ years of excellence, we deliver safe, reliable, and professional travel solutions across India.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      {/* Hero Section */}
      <section className="relative mb-12 sm:mb-16 md:mb-20 text-center">
        <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 rounded-2xl overflow-hidden mb-6 sm:mb-8">
          <Image
            src="/images/services 01.png"
            alt="Comfort Tours Services"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-3 sm:mb-4 tracking-tight drop-shadow-2xl text-white px-4">
              Our Services
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg text-white px-4">
              Comprehensive Travel Solutions for Every Journey - From Economy to Luxury
            </p>
          </div>
        </div>
      </section>

      {/* Our Service Models */}
      <section className="mb-12 sm:mb-16 md:mb-20">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-primary">Our Service Models</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            At Comfort Tours, we provide customized transport models designed to meet the needs of corporates, institutions, and individuals. With a fleet of 2,000+ vehicles and 21+ years of expertise, we ensure safe, reliable, and professional travel solutions across India.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">

          {/* Inter City */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-4 sm:p-6 md:p-8">
            <div className="relative w-full h-44 sm:h-48 md:h-56 mb-4 sm:mb-5 md:mb-6 rounded-xl overflow-hidden">
              <Image
                src="/gallery/home_services/Intercity.png"
                alt="Inter City Travel"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-primary text-center">Intercity Travel</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-4 sm:mb-5 md:mb-6 flex-grow leading-relaxed">Seamless and comfortable travel between cities with professional chauffeurs and modern vehicles. Perfect for business trips and corporate journeys.</p>
            <Link href="/contact" className="btn text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base">Request Intercity Quote</Link>
          </div>

          {/* Intra City */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-8">
            <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
              <Image
                src="/gallery/home_services/Intracity.png"
                alt="Intra City Travel"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary text-center">Intracity Travel</h3>
            <p className="text-gray-600 text-center mb-6 flex-grow leading-relaxed">Convenient city rides for meetings, shopping, daily commuting, or leisure. Reliable, punctual, and hassle-free.</p>
            <Link href="/contact" className="btn text-white px-8 py-3">Book City Travel</Link>
          </div>

          {/* Airport Transfer */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-8">
            <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
              <Image
                src="/gallery/home_services/Airport cab service.png"
                alt="Airport Transfer"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary text-center">Airport Transfers</h3>
            <p className="text-gray-600 text-center mb-6 flex-grow leading-relaxed">On-time pick-up and drop-off services with real-time tracking — ensuring you never miss a flight.</p>
            <Link href="/contact" className="btn text-white px-8 py-3">Book Airport Transfer</Link>
          </div>

          {/* Long-Term Rental */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-8">
            <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
              <Image
                src="/gallery/home_services/Long Term Car Rental.png"
                alt="Long-Term Rental"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary text-center">Long-Term Rentals</h3>
            <p className="text-gray-600 text-center mb-6 flex-grow leading-relaxed">Cost-effective long-term leasing for corporates and individuals, with dedicated drivers and flexible contracts.</p>
            <Link href="/contact" className="btn text-white px-8 py-3">Get Rental Proposal</Link>
          </div>

          {/* Point to Point Model */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-8">
            <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
              <Image
                src="/gallery/home_services/Point to point Model.png"
                alt="Point to Point Model"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary text-center">Point-to-Point Model</h3>
            <p className="text-gray-600 text-center mb-6 flex-grow leading-relaxed">Direct, transparent, and cost-effective travel between fixed locations.</p>
            <Link href="/contact" className="btn text-white px-8 py-3">Learn More</Link>
          </div>

          {/* Route Based Model */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-8">
            <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
              <Image
                src="/gallery/home_services/Route Based Model.png"
                alt="Route Based Model"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary text-center">Route-Based Model</h3>
            <p className="text-gray-600 text-center mb-6 flex-grow leading-relaxed">Pre-defined shuttle routes designed for corporate employee transportation and daily commutes.</p>
            <Link href="/contact" className="btn text-white px-8 py-3">Request Route Plan</Link>
          </div>

          {/* Kilometer Model */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-8">
            <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
              <Image
                src="/gallery/home_services/Kilometer model.png"
                alt="Kilometer Model"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary text-center">Kilometer Model</h3>
            <p className="text-gray-600 text-center mb-6 flex-grow leading-relaxed">Pay only for the distance you travel with our flexible per-kilometer billing system.</p>
            <Link href="/contact" className="btn text-white px-8 py-3">Get Pricing</Link>
          </div>

          {/* Trip Based Model */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-8">
            <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
              <Image
                src="/gallery/home_services/Trip Based Model.png"
                alt="Trip Based Model"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary text-center">Trip-Based Model</h3>
            <p className="text-gray-600 text-center mb-6 flex-grow leading-relaxed">Fixed-price packages designed for specific trips, tours, or customized travel plans.</p>
            <Link href="/contact" className="btn text-white px-8 py-3">Explore Packages</Link>
          </div>

          {/* Fixed Cab Model */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-8">
            <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
              <Image
                src="/gallery/home_services/Fixed Cab Model.png"
                alt="Fixed Cab Model"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary text-center">Fixed Cab Model</h3>
            <p className="text-gray-600 text-center mb-6 flex-grow leading-relaxed">Dedicated cab services at a fixed cost for a set period or route — ideal for executives and corporates.</p>
            <Link href="/contact" className="btn text-white px-8 py-3">Book Fixed Cab</Link>
          </div>

          {/* FTE Model */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-8">
            <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
              <Image
                src="/gallery/home_services/FTE Model.png"
                alt="FTE Model"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary text-center">FTE Model (Full-Time Equivalent)</h3>
            <p className="text-gray-600 text-center mb-6 flex-grow leading-relaxed">A fully dedicated transport solution tailored to your organization&apos;s daily needs, with guaranteed vehicle availability.</p>
            <Link href="/contact" className="btn text-white px-8 py-3">Request Corporate Proposal</Link>
          </div>

        </div>
      </section>

      {/* Corporate & Event Services */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary">Corporate & Event Services</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Professional transportation solutions for businesses, institutions, and special events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Corporate Travel */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/gallery/home_services/corporate.jpeg"
                alt="Corporate Travel"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Corporate Travel</h3>
              <p className="text-gray-600 mb-4 font-medium">Dedicated employee transportation & fleet management</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">Cost-optimized shuttle solutions for IT, BPO, and manufacturing companies</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">GPS-enabled fleet with professional chauffeurs</p>
                </div>
              </div>

              <Link href="/contact" className="btn w-full text-white text-center inline-block">
                Get Corporate Travel Quote
              </Link>
            </div>
          </div>

          {/* Event Transportation */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/gallery/home_services/event.jpeg"
                alt="Event Transportation"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Event Transportation</h3>
              <p className="text-gray-600 mb-4 font-medium">Reliable transport solutions for conferences, weddings & group events</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">Large fleet for seamless logistics management</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">Experienced drivers ensuring safety and punctuality</p>
                </div>
              </div>

              <Link href="/contact" className="btn w-full text-white text-center inline-block">
                Plan Your Event Transport
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}