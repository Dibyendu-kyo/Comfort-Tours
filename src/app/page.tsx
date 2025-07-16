import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with background image */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/3d-icon-traveling-vacation.jpg"
            alt="Travel Hero Background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg tracking-tight">Ride with Comfort</h1>
          <p className="text-2xl md:text-2xl text-white max-w-3xl mb-8 drop-shadow">Premier travel solutions in Pune since 2006. Car rentals, tour packages, and corporate travel—trusted by top companies and families alike.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn text-lg">Get a Quote</Link>
            <Link href="/services" className="btn text-lg">Plan Your Trip</Link>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary tracking-tight">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="card flex flex-col items-center">
            <Image src="/images/car-rental.png" alt="Car Rental" width={80} height={80} />
            <h3 className="text-xl font-semibold mt-4 mb-2 text-primary">Car Rentals</h3>
            <p className="text-gray-600 text-center mb-4">Wide range of vehicles for every need—economy, premium, SUVs, and luxury cars.</p>
            <Link href="/services" className="btn">View Cars</Link>
          </div>
          <div className="card flex flex-col items-center">
            <Image src="/images/tour-package.png" alt="Tour Packages" width={80} height={80} />
            <h3 className="text-xl font-semibold mt-4 mb-2 text-primary">Tour Packages</h3>
            <p className="text-gray-600 text-center mb-4">Curated tours: Ashtavinayaka, Konkan, North India, and more. Customizable for families & groups.</p>
            <Link href="/services" className="btn">Explore Packages</Link>
          </div>
          <div className="card flex flex-col items-center">
            <Image src="/images/corporate.png" alt="Corporate Travel" width={80} height={80} />
            <h3 className="text-xl font-semibold mt-4 mb-2 text-primary">Corporate Travel</h3>
            <p className="text-gray-600 text-center mb-4">Employee transport, event logistics, and fleet management for businesses.</p>
            <Link href="/services" className="btn">Corporate Solutions</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8 bg-[#f8f5f0] rounded-xl my-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-secondary tracking-tight">Why Choose Comfort Tours?</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold text-primary mb-2">18+</span>
            <span className="text-lg font-medium text-[#1a365d]">Years of Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold text-primary mb-2">200+</span>
            <span className="text-lg font-medium text-[#1a365d]">Fleet Size</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold text-primary mb-2">1000+</span>
            <span className="text-lg font-medium text-[#1a365d]">Clients Served</span>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center text-primary tracking-tight">Featured Tour Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
          <div className="card w-full max-w-xs flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-2 text-secondary">Ashtavinayaka Darshan</h3>
            <p className="text-gray-600 mb-2">2N/3D | Pune - 8 Ganpati Temples</p>
            <Link href="/services" className="btn mt-auto">View Details</Link>
          </div>
          <div className="card w-full max-w-xs flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-2 text-secondary">Konkan Beach Tour</h3>
            <p className="text-gray-600 mb-2">3N/4D | Alibaug, Ratnagiri, Ganpatipule</p>
            <Link href="/services" className="btn mt-auto">View Details</Link>
          </div>
          <div className="card w-full max-w-xs flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-2 text-secondary">North India Explorer</h3>
            <p className="text-gray-600 mb-2">6N/7D | Delhi, Agra, Jaipur</p>
            <Link href="/services" className="btn mt-auto">View Details</Link>
          </div>
        </div>
      </section>

      {/* Our Trusted Clients */}
      <section className="w-full max-w-screen-xl mx-auto py-16 px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-8 text-center text-secondary tracking-tight">Our Trusted Clients</h2>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          <Image src="/images/client1.png" alt="Client 1" width={100} height={40} />
          <Image src="/images/client2.png" alt="Client 2" width={100} height={40} />
          <Image src="/images/client3.png" alt="Client 3" width={100} height={40} />
          <Image src="/images/client4.png" alt="Client 4" width={100} height={40} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8 bg-white my-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary tracking-tight">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-12">
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
    </div>
  );
}
