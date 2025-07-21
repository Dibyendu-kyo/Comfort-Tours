'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const carCategories = [
  {
    name: "Economy Cars",
    vehicles: [
      { name: "Tata Indica", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&h=120&fit=crop" },
      { name: "Hyundai Santro", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=200&h=120&fit=crop" },
    ],
    features: ["Fuel Efficient", "Easy City Drive", "Affordable", "Perfect for Short Trips"],
    description: "Perfect for city commutes and short distance travel"
  },
  {
    name: "Premium Sedans",
    vehicles: [
      { name: "Honda City", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200&h=120&fit=crop" },
      { name: "Skoda Octavia", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=200&h=120&fit=crop" },
    ],
    features: ["Luxury Interiors", "Spacious", "AC", "Professional Chauffeur"],
    description: "Comfortable and stylish for business and leisure travel"
  },
  {
    name: "SUVs & MUVs",
    vehicles: [
      { name: "Toyota Innova", img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=200&h=120&fit=crop" },
      { name: "Mahindra Xylo", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=120&fit=crop" },
    ],
    features: ["Large Groups", "Comfort Ride", "Luggage Space", "Family Friendly"],
    description: "Ideal for family trips and group travel with ample space"
  },
  {
    name: "Luxury Fleet",
    vehicles: [
      { name: "BMW 5 Series", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=200&h=120&fit=crop" },
      { name: "Mercedes E-Class", img: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=200&h=120&fit=crop" },
    ],
    features: ["Chauffeur Driven", "Top Safety", "Premium Experience", "VIP Service"],
    description: "Ultimate luxury experience for special occasions and VIP travel"
  },
];

const tourPackages = [
  { name: "Ashtavinayaka Darshan", type: "Religious", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=300&h=200&fit=crop", desc: "2N/3D | Pune - 8 Ganpati Temples" },
  { name: "Konkan Beach Tour", type: "Beach", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop", desc: "3N/4D | Alibaug, Ratnagiri, Ganpatipule" },
  { name: "North India Explorer", type: "Cultural", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=300&h=200&fit=crop", desc: "6N/7D | Delhi, Agra, Jaipur" },
  { name: "Mahabaleshwar Weekend", type: "Hill Station", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop", desc: "2N/3D | Mahabaleshwar, Panchgani" },
];

const packageTypes = ["All", ...Array.from(new Set(tourPackages.map(p => p.type)))];

export default function ServicesPage() {
  const [filter, setFilter] = useState("All");
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
      {/* Hero Section */}
      <section className="relative mb-20 text-center">
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
          <Image
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=600&fit=crop&crop=center&q=80"
            alt="Comfort Tours Services"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-2xl text-white">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg text-white">
              Comprehensive Travel Solutions for Every Journey - From Economy to Luxury
            </p>
          </div>
        </div>
      </section>

      {/* Car Rentals */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Car Rental Fleet</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our diverse fleet of well-maintained vehicles, each category designed to meet specific travel needs and budgets.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {carCategories.map((cat) => (
            <div key={cat.name} className="bg-white rounded-2xl shadow-lg card p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">{cat.name}</h3>
                <p className="text-gray-600">{cat.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {cat.vehicles.map((v, i) => (
                  <div key={i} className="relative rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <Image src={v.img} alt={v.name} width={200} height={120} className="w-full h-24 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                      <span className="text-white text-sm font-semibold">{v.name}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {cat.features.map(f => (
                    <span key={f} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {f}
                    </span>
                  ))}
                </div>
                <div className="flex justify-start">
                  <Link href="/contact" className="btn">Book Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Tour Packages */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Tour Packages</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover amazing destinations with our carefully curated tour packages designed for every type of traveler.
          </p>
        </div>
        
        <div className="flex gap-4 mb-8 flex-wrap justify-center">
          {packageTypes.map(type => (
            <button 
              key={type} 
              onClick={() => setFilter(type)} 
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === type 
                  ? 'bg-secondary text-primary shadow-lg scale-105' 
                  : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tourPackages.filter(p => filter === "All" || p.type === filter).map(pkg => (
            <div key={pkg.name} className="bg-white rounded-2xl shadow-lg card p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="relative rounded-lg overflow-hidden mb-4">
                <Image src={pkg.img} alt={pkg.name} width={300} height={200} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-4 right-4">
                  <span className="bg-secondary text-primary px-3 py-1 rounded-full text-sm font-bold">{pkg.type}</span>
                </div>
              </div>
              <h3 className="font-bold text-xl mb-2 text-primary">{pkg.name}</h3>
              <p className="text-gray-600 mb-4">{pkg.desc}</p>
              <Link href="/contact" className="btn w-full">Book Package</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate & Event Services */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Corporate & Event Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional transportation solutions for businesses, institutions, and special events.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
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
            <Link href="/contact" className="btn w-full">Get Corporate Quote</Link>
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
            <Link href="/contact" className="btn w-full">Plan Event Transport</Link>
          </div>
        </div>
      </section>
    </div>
  );
} 