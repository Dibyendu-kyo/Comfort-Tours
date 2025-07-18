import React from "react";
import Image from "next/image";

export default function Gallery() {
  const videos = [
    "/videos/WhatsApp Video 2025-07-17 at 1.01.13 PM.mp4",
    "/videos/WhatsApp Video 2025-07-17 at 1.02.03 PM.mp4"
  ];



  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary tracking-tight">
          Our Gallery
        </h1>
        <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Explore our fleet, destinations, and memorable moments from 18+ years of exceptional service
        </p>
      </section>

      {/* Video Gallery */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Video Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Watch our fleet in action and see why customers choose Comfort Tours for their travel needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {videos.map((src, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <video 
                controls 
                className="w-full h-64 object-cover"
              >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery - Coming Soon */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Photo Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Photo gallery coming soon. We're working on showcasing our fleet and destinations.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-12 text-center">
          <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-primary">Photos Coming Soon</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're preparing a beautiful collection of photos showcasing our fleet, destinations, and memorable journeys. Check back soon!
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary">Captured Moments</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600">Happy Journeys</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-600">Destinations Covered</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-gray-600">Fleet Vehicles</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">18+</div>
            <div className="text-gray-600">Years of Memories</div>
          </div>
        </div>
      </section>
    </div>
  );
} 