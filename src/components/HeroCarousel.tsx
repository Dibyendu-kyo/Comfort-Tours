"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  {
    src: "/images/3d-icon-traveling-vacation.jpg",
    alt: "Travel and Vacation",
    title: "Travel with Comfort",
    description: "Your trusted travel partner for unforgettable journeys and experiences"
  },
  {
    src: "/images/Corporate_packages.png",
    alt: "Corporate Travel Packages",
    title: "Corporate Travel Solutions",
    description: "Professional transportation services for businesses and corporate events"
  },
  {
    src: "/images/rental_car.png", 
    alt: "Car Rental Services",
    title: "Premium Car Rentals",
    description: "Wide range of vehicles from economy to luxury for all your travel needs"
  },
  {
    src: "/images/Tour_packages.png",
    alt: "Tour Packages",
    title: "Curated Tour Packages", 
    description: "Memorable journeys to popular destinations with complete travel arrangements"
  }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {heroImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority={index === 0}
            className="transition-transform duration-1000 ease-in-out hover:scale-105"
          />
        </div>
      ))}
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 shadow-lg' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            style={{
              backgroundColor: index === currentIndex ? '#e67817' : undefined
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}