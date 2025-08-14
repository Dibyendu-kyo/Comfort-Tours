import Image from "next/image";
import Link from "next/link";

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
            Comprehensive transportation solutions designed to meet every travel need with flexible pricing models and dedicated service.
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
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-primary text-center">Inter City</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-4 sm:mb-5 md:mb-6 flex-grow leading-relaxed">Comfortable and reliable travel between cities with well-maintained vehicles and experienced drivers, ensuring a smooth journey every time.</p>
            <Link href="/contact" className="btn text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base">Get Quote</Link>
          </div>

          {/* Intra City */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-8">
            <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
              <Image
                src="/gallery/home_services/Intracity.png"
                alt="Intra City Travel"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary text-center">Intra City</h3>
            <p className="text-gray-600 text-center mb-6 flex-grow leading-relaxed">Convenient city travel solutions for your daily commuting, meetings, shopping, or leisure plans within the same city.</p>
            <Link href="/contact" className="btn text-white px-8 py-3">Get Quote</Link>
          </div>

          {/* Airport Transfer */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-8">
            <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
              <Image
                src="/gallery/home_services/Airport cab service.png"
                alt="Airport Transfer"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary text-center">Airport Transfer</h3>
            <p className="text-gray-600 text-center mb-6 flex-grow leading-relaxed">Hassle-free pick-up and drop-off services to and from the airport, ensuring you&apos;re always on time for your flights.</p>
            <Link href="/contact" className="btn text-white px-8 py-3">Get Quote</Link>
          </div>

          {/* Long-Term Rental */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-8">
            <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
              <Image
                src="/gallery/home_services/Long Term Car Rental.png"
                alt="Long-Term Rental"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary text-center">Long-Term Rental</h3>
            <p className="text-gray-600 text-center mb-6 flex-grow leading-relaxed">Flexible and affordable long-term cab rentals for businesses, corporate needs, or personal use.</p>
            <Link href="/contact" className="btn text-white px-8 py-3">Get Quote</Link>
          </div>

          {/* Point to Point Model */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-8">
            <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
              <Image
                src="/gallery/home_services/Point to point Model.png"
                alt="Point to Point Model"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary text-center">Point to Point Model</h3>
            <p className="text-gray-600 text-center mb-6 flex-grow leading-relaxed">Direct and cost-effective rides between two specific locations with transparent pricing.</p>
            <Link href="/contact" className="btn text-white px-8 py-3">Get Quote</Link>
          </div>

          {/* Route Based Model */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-8">
            <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
              <Image
                src="/gallery/home_services/Route Based Model.png"
                alt="Route Based Model"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary text-center">Route Based Model</h3>
            <p className="text-gray-600 text-center mb-6 flex-grow leading-relaxed">Pre-defined route travel services ideal for corporate shuttles, employee transportation, or regular commutes.</p>
            <Link href="/contact" className="btn text-white px-8 py-3">Get Quote</Link>
          </div>

          {/* Kilometer Model */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-8">
            <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
              <Image
                src="/gallery/home_services/Kilometer model.png"
                alt="Kilometer Model"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary text-center">Kilometer Model</h3>
            <p className="text-gray-600 text-center mb-6 flex-grow leading-relaxed">Pay only for the distance you travel with our per-kilometer pricing system.</p>
            <Link href="/contact" className="btn text-white px-8 py-3">Get Quote</Link>
          </div>

          {/* Trip Based Model */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-8">
            <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
              <Image
                src="/gallery/home_services/Trip Based Model.png"
                alt="Trip Based Model"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary text-center">Trip Based Model</h3>
            <p className="text-gray-600 text-center mb-6 flex-grow leading-relaxed">Fixed price packages designed for specific trips, tours, or custom travel plans.</p>
            <Link href="/contact" className="btn text-white px-8 py-3">Get Quote</Link>
          </div>

          {/* Fixed Cab Model */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-8">
            <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
              <Image
                src="/gallery/home_services/Fixed Cab Model.png"
                alt="Fixed Cab Model"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary text-center">Fixed Cab Model</h3>
            <p className="text-gray-600 text-center mb-6 flex-grow leading-relaxed">A dedicated cab available for your service at a fixed cost for a set period or route.</p>
            <Link href="/contact" className="btn text-white px-8 py-3">Get Quote</Link>
          </div>

          {/* FTE Model */}
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300 p-8">
            <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
              <Image
                src="/gallery/home_services/FTE Model.png"
                alt="FTE Model"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary text-center">FTE Model</h3>
            <p className="text-gray-600 text-center mb-6 flex-grow leading-relaxed">Full-Time Equivalent vehicle model providing dedicated transport services tailored to your organization&apos;s daily needs.</p>
            <Link href="/contact" className="btn text-white px-8 py-3">Get Quote</Link>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8 card hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">Corporate Travel</h3>
                <p className="text-gray-600">Employee transport & fleet management</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Dedicated employee transport, event logistics, and fleet management for businesses and institutions. Trusted by top IT, BPO, and manufacturing companies in Pune.
            </p>
            <div className="relative rounded-lg overflow-hidden mb-4">
              <Image 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop" 
                alt="Corporate Travel" 
                width={400} 
                height={200} 
                className="w-full h-32 object-cover" 
              />
            </div>
            <Link href="/contact" className="btn w-full text-white">Get Corporate Quote</Link>
          </div>
          
          <div className="bg-gradient-to-br from-secondary/10 to-primary/5 rounded-2xl p-8 card hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">Event Transportation</h3>
                <p className="text-gray-600">Conferences, weddings & group events</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              From conferences to weddings and large group movements, we provide safe, reliable, and timely event transportation with our modern fleet and professional drivers.
            </p>
            <div className="relative rounded-lg overflow-hidden mb-4">
              <Image 
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=200&fit=crop" 
                alt="Event Transportation" 
                width={400} 
                height={200} 
                className="w-full h-32 object-cover" 
              />
            </div>
            <Link href="/contact" className="btn w-full text-white">Plan Event Transport</Link>
          </div>
        </div>
      </section>
    </div>
  );
}