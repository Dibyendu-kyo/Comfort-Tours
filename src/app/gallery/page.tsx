import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Comfort Tours - Our Fleet & Services",
  description: "Comfort Tours Pvt. Ltd. – Pune's premier corporate travel and chauffeur-driven transport provider. With 2,000+ vehicles, 75+ corporate clients, and 21+ years of excellence, we deliver safe, reliable, and professional travel solutions across India.",
};

export default function Gallery() {
  const videos = [
    "/videos/WhatsApp Video 2025-07-17 at 1.01.13 PM.mp4",
    "/videos/WhatsApp Video 2025-07-17 at 1.02.03 PM.mp4",
    "/videos/WhatsApp Video 2025-02-21 at 14.34.26_9400d439.mp4",
    "/videos/VID-20250221-WA0008.mp4",
    "/videos/VID-20250907-WA0019.mp4",
    "/videos/VID-20250907-WA0020.mp4",
    "/videos/VID-20250907-WA0021.mp4",
    "/videos/VID-20250908-WA0002.mp4"
  ];



  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-primary tracking-tight">
          Our Gallery
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
          Explore our fleet, destinations, and memorable moments from 18+ years of exceptional service
        </p>
      </section>

      {/* Video Gallery */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary">Video Gallery</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
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

      {/* Photo Gallery */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary">Photo Gallery</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Explore our premium fleet and see the quality vehicles that make your journey comfortable and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Photo 1 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <Image
              src="/gallery/photos/IMG_0332.JPG"
              alt="Comfort Tours Fleet Vehicle"
              width={400}
              height={300}
              className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Premium Fleet</p>
              </div>
            </div>
          </div>

          {/* Photo 2 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <Image
              src="/gallery/photos/IMG_0447 (2).JPG"
              alt="Luxury Vehicle Interior"
              width={400}
              height={300}
              className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Luxury Interior</p>
              </div>
            </div>
          </div>

          {/* Photo 3 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <Image
              src="/gallery/photos/IMG-20250221-WA0056.jpg"
              alt="Executive Car Service"
              width={400}
              height={300}
              className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Executive Service</p>
              </div>
            </div>
          </div>

          {/* Photo 4 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <Image
              src="/gallery/photos/IMG_0488.JPG"
              alt="Corporate Transport"
              width={400}
              height={300}
              className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Corporate Transport</p>
              </div>
            </div>
          </div>

          {/* Photo 5 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <Image
              src="/gallery/photos/IMG_0490 (1).JPG"
              alt="Premium Vehicle Fleet"
              width={400}
              height={300}
              className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Premium Fleet</p>
              </div>
            </div>
          </div>

          {/* Photo 6 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <Image
              src="/gallery/photos/IMG_0497-1.jpg"
              alt="Chauffeur Driven Service"
              width={400}
              height={300}
              className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Chauffeur Service</p>
              </div>
            </div>
          </div>

          {/* Photo 7 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <Image
              src="/gallery/photos/IMG_0571.JPG"
              alt="Fleet Maintenance"
              width={400}
              height={300}
              className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Well Maintained</p>
              </div>
            </div>
          </div>

          {/* Photo 8 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <Image
              src="/gallery/photos/IMG_0616.JPG"
              alt="Travel Comfort"
              width={400}
              height={300}
              className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Travel Comfort</p>
              </div>
            </div>
          </div>

          {/* Photo 9 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <Image
              src="/gallery/photos/IMG-20250221-WA0005.jpg"
              alt="Professional Service"
              width={400}
              height={300}
              className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Professional Service</p>
              </div>
            </div>
          </div>

          {/* Photo 10 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <Image
              src="/gallery/photos/IMG-20250221-WA0055.jpg"
              alt="Quality Vehicles"
              width={400}
              height={300}
              className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Quality Vehicles</p>
              </div>
            </div>
          </div>

          {/* Photo 11 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <Image
              src="/gallery/photos/IMG-20250221-WA0094.jpg"
              alt="Reliable Transport"
              width={400}
              height={300}
              className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Professional Fleet</p>
              </div>
            </div>
          </div>

          {/* Photo 12 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <Image
              src="/gallery/photos/IMG_0474.JPG"
              alt="Professional Fleet"
              width={400}
              height={300}
              className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Trust</p>
              </div>
            </div>
          </div>
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