'use client'
import { useState } from "react";

const carCategories = [
  {
    name: "Small Car Segment",
    vehicles: [
      { name: "Tata Indica", img: "https://source.unsplash.com/100x60/?car,small" },
      { name: "Hyundai Santro", img: "https://source.unsplash.com/100x60/?hatchback" },
    ],
    features: ["Fuel Efficient", "Easy City Drive", "Affordable"]
  },
  {
    name: "Premium Car Segment",
    vehicles: [
      { name: "Honda City", img: "https://source.unsplash.com/100x60/?sedan" },
      { name: "Skoda Octavia", img: "https://source.unsplash.com/100x60/?luxury-car" },
    ],
    features: ["Luxury Interiors", "Spacious", "AC"]
  },
  {
    name: "SUV & MUV Segment",
    vehicles: [
      { name: "Toyota Innova", img: "https://source.unsplash.com/100x60/?suv" },
      { name: "Mahindra Xylo", img: "https://source.unsplash.com/100x60/?muv" },
    ],
    features: ["Large Groups", "Comfort Ride", "Luggage Space"]
  },
  {
    name: "Luxury Car Segment",
    vehicles: [
      { name: "BMW 5 Series", img: "https://source.unsplash.com/100x60/?bmw" },
      { name: "Mercedes E-Class", img: "https://source.unsplash.com/100x60/?mercedes" },
    ],
    features: ["Chauffeur Driven", "Top Safety", "Premium Experience"]
  },
];

const tourPackages = [
  { name: "Ashtavinayaka Darshan", type: "Religious", img: "https://source.unsplash.com/200x120/?temple,india", desc: "2N/3D | Pune - 8 Ganpati Temples" },
  { name: "Konkan Beach Tour", type: "Beach", img: "https://source.unsplash.com/200x120/?beach,konkan", desc: "3N/4D | Alibaug, Ratnagiri, Ganpatipule" },
  { name: "North India Explorer", type: "Cultural", img: "https://source.unsplash.com/200x120/?tajmahal,india", desc: "6N/7D | Delhi, Agra, Jaipur" },
  { name: "Mahabaleshwar Weekend", type: "Hill Station", img: "https://source.unsplash.com/200x120/?hillstation,mahabaleshwar", desc: "2N/3D | Mahabaleshwar, Panchgani" },
];

const packageTypes = ["All", ...Array.from(new Set(tourPackages.map(p => p.type)))];

export default function ServicesPage() {
  const [filter, setFilter] = useState("All");
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-primary tracking-tight flex items-center gap-2">
          <span>Our Services</span>
          <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><polygon points="0,0 32,16 0,32" fill="#ffd700" /></svg>
        </h1>
        {/* Car Rentals */}
        <h2 className="text-2xl font-bold mb-6 text-secondary">Car Rentals</h2>
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {carCategories.map((cat) => (
            <div key={cat.name} className="bg-white rounded-xl shadow card p-8 flex flex-col">
              <h3 className="text-xl font-semibold mb-4 text-primary">{cat.name}</h3>
              <div className="flex gap-6 mb-4">
                {cat.vehicles.map((v, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <img src={v.img} alt={v.name} className="w-20 h-12 object-cover rounded mb-1" />
                    <span className="text-sm text-gray-700">{v.name}</span>
                  </div>
                ))}
              </div>
              <ul className="list-disc ml-5 text-gray-600 text-sm">
                {cat.features.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
        {/* Tour Packages */}
        <h2 className="text-2xl font-bold mb-6 text-secondary">Tour Packages</h2>
        <div className="flex gap-4 mb-8 flex-wrap">
          {packageTypes.map(type => (
            <button key={type} onClick={() => setFilter(type)} className={`px-5 py-2 rounded-full border font-semibold transition header-link ${filter === type ? 'bg-secondary text-primary border-secondary' : 'bg-white text-primary border-primary'}`}>{type}</button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {tourPackages.filter(p => filter === "All" || p.type === filter).map(pkg => (
            <div key={pkg.name} className="bg-white rounded-xl shadow card p-6 flex flex-col items-center">
              <img src={pkg.img} alt={pkg.name} className="w-full h-32 object-cover rounded mb-4" />
              <h3 className="font-semibold text-lg mb-1 text-primary">{pkg.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{pkg.desc}</p>
              <span className="text-xs bg-secondary text-primary px-2 py-1 rounded-full mb-2">{pkg.type}</span>
              <button className="mt-auto btn w-full">View Details</button>
            </div>
          ))}
        </div>
        {/* Corporate Travel */}
        <h2 className="text-2xl font-bold mb-6 text-secondary">Corporate Travel</h2>
        <div className="bg-[#fffbe6] rounded-xl p-8 mb-12 card">
          <p className="text-gray-700 mb-4 text-lg">We offer dedicated employee transport, event logistics, and fleet management for businesses and institutions. Our solutions are trusted by top IT, BPO, and manufacturing companies in Pune.</p>
          <img src="https://source.unsplash.com/600x200/?corporate,business,travel" alt="Corporate Travel" className="w-full h-40 object-cover rounded-xl" />
        </div>
        {/* Event Transportation */}
        <h2 className="text-2xl font-bold mb-6 text-secondary">Event Transportation</h2>
        <div className="bg-[#fffbe6] rounded-xl p-8 card">
          <p className="text-gray-700 mb-4 text-lg">From conferences to weddings and large group movements, Comfort Tours provides safe, reliable, and timely event transportation with a modern fleet and professional drivers.</p>
          <img src="https://source.unsplash.com/600x200/?bus,conference,wedding,travel" alt="Event Transportation" className="w-full h-40 object-cover rounded-xl" />
        </div>
      </section>
    </div>
  );
} 