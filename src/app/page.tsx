import Image from "next/image";
import Link from "next/link";
import ClientCarousel from "@/components/ClientCarousel";
import HeroCarousel from "@/components/HeroCarousel";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with automatic carousel */}
      <section className="relative flex flex-col items-center justify-center h-[calc(100vh-4rem)] text-center px-4 overflow-hidden">
        <HeroCarousel />
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white drop-shadow-2xl tracking-tight animate-fade-in-up">
            Ride with Comfort
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mb-8 drop-shadow-lg animate-fade-in-up px-4" style={{ animationDelay: '0.3s' }}>
            Premier travel solutions in Pune since 2006. Car rentals, tour packages, and corporate travel—trusted by top companies and families alike.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link href="/contact" className="btn text-lg shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              Get a Quote
            </Link>
            <Link href="/services" className="btn text-lg shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-primary tracking-tight">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300">
            <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
              <Image 
                src="/images/rental_car.png" 
                alt="Car Rental Services" 
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Car Rentals</h3>
            <p className="text-gray-600 text-center mb-4 flex-grow">Wide range of vehicles for every need—economy, premium, SUVs, and luxury cars.</p>
            <Link href="/services" className="btn text-white">View Cars</Link>
          </div>
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300">
            <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
              <Image 
                src="/images/Tour_packages.png" 
                alt="Tour Packages" 
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Tour Packages</h3>
            <p className="text-gray-600 text-center mb-4 flex-grow">Curated tours: Ashtavinayaka, Konkan, North India, and more. Customizable for families & groups.</p>
            <Link href="/services" className="btn text-white">Explore Packages</Link>
          </div>
          <div className="card flex flex-col items-center group hover:shadow-xl transition-all duration-300">
            <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
              <Image 
                src="/images/Corporate_packages.png" 
                alt="Corporate Travel Packages" 
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Corporate Travel</h3>
            <p className="text-gray-600 text-center mb-4 flex-grow">Employee transport, event logistics, and fleet management for businesses.</p>
            <Link href="/services" className="btn">Corporate Solutions</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl my-20" style={{ background: 'linear-gradient(135deg, #e67817 0%, #007dc0 100%)' }}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-white tracking-tight">Why Choose Comfort Tours?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center">
          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold text-white mb-2">18+</span>
            <span className="text-lg font-medium text-white/90">Years of Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold text-white mb-2">200+</span>
            <span className="text-lg font-medium text-white/90">Fleet Size</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold text-white mb-2">1000+</span>
            <span className="text-lg font-medium text-white/90">Clients Served</span>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center text-primary tracking-tight">Featured Tour Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
          <div className="card w-full max-w-sm flex flex-col group hover:shadow-xl transition-all duration-300">
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/tour/malaysia1.webp"
                alt="Malaysia Tour Package"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="flex flex-col flex-grow px-2">
              <h3 className="text-lg font-semibold mb-2 text-secondary">Malaysia</h3>
              <p className="text-gray-600 mb-4 flex-grow">5N/6D | Kuala Lumpur, Genting Highlands<br />Experience the vibrant culture and modern attractions of Malaysia</p>
              <a href="https://comfortvacanze.com/package" target="_blank" rel="noopener noreferrer" className="btn mt-auto">View Details</a>
            </div>
          </div>
          <div className="card w-full max-w-sm flex flex-col group hover:shadow-xl transition-all duration-300">
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/tour/singapore-banner-1.webp"
                alt="Singapore Tour Package"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="flex flex-col flex-grow px-2">
              <h3 className="text-lg font-semibold mb-2 text-secondary">Singapore</h3>
              <p className="text-gray-600 mb-4 flex-grow">4N/5D | Marina Bay, Sentosa Island<br />Discover the Lion City&apos;s stunning skyline and world-class attractions</p>
              <a href="https://comfortvacanze.com/package" target="_blank" rel="noopener noreferrer" className="btn mt-auto">View Details</a>
            </div>
          </div>
          <div className="card w-full max-w-sm flex flex-col group hover:shadow-xl transition-all duration-300">
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/tour/vietnam-banner-1.webp"
                alt="Vietnam Tour Package"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="flex flex-col flex-grow px-2">
              <h3 className="text-lg font-semibold mb-2 text-secondary">Vietnam</h3>
              <p className="text-gray-600 mb-4 flex-grow">6N/7D | Ho Chi Minh City, Hanoi, Ha Long Bay<br />Explore Vietnam&apos;s rich history, culture, and breathtaking landscapes</p>
              <a href="https://comfortvacanze.com/package" target="_blank" rel="noopener noreferrer" className="btn mt-auto">View Details</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <a 
            href="https://comfortvacanze.com/package" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:text-secondary font-semibold text-lg transition-colors duration-300 flex items-center justify-center gap-2"
          >
            View More International Packages
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
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
            <p className="text-lg mb-4">&quot;Comfort Tours made our holiday absolutely stress-free! From transport to hotels, everything was perfectly arranged. Highly recommended for a relaxed travel experience.&quot;</p>
            <span className="font-semibold text-primary">Rohit Deshmukh, Mumbai</span>
          </div>
          <div className="card flex flex-col items-start">
            <p className="text-lg mb-4">&quot;Best tour company we’ve experienced! Professional team, great service, and amazing memories. Thank you, Comfort Tours, for making our trip unforgettable.&quot;</p>
            <span className="font-semibold text-primary">Priya Nair, Pune</span>
          </div>
          <div className="card flex flex-col items-start">
            <p className="text-lg mb-4">&quot;We loved every moment of our tour with Comfort Tours. Very well organized itineraries and friendly support throughout. Definitely booking with them again.&quot;</p>
            <span className="font-semibold text-primary">Vijay Kulkarni, Nagpur</span>
          </div>
        </div>
      </section>
      
      <ScrollToTop />
    </div>
  );
}
