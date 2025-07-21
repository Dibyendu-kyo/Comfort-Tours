"use client";

import Image from "next/image";
import { useState } from "react";

const clientLogos = [
  "Wipro.png",
  "sew.png",
  "HCL.png",
  "ZS_Associates_Logo.png",
  "TechMahindra.png",
  "Thermax.png",
  "LnT.png",
  "MaxionWheels.png",
  "Mitutoyo.png",
  "Persistent.png",
  "BitWiseSolutions.png",
  "BirlaSoft.png",
  "DresserRand.png",
  "entercoms.png",
  "exotech-logo.png",
  "Metito.png",
  "mngl.jpg",
  "ReadyRoti.png",
  "Sydler.png",
  "Sterlite.png",
  "voss-automotive.png",
  "Atlas-Copco-Logo.svg.png",
  "dassault-systmes.png",
];

export default function ClientCarousel() {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate the logos array to create seamless loop
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <div className="w-full overflow-hidden py-8">
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background gradient for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        {/* Continuous scrolling container */}
        <div 
          className={`flex gap-12 items-center ${isHovered ? 'animate-scroll-paused' : 'animate-scroll'}`}
          style={{
            width: `${duplicatedLogos.length * 240}px`, // 240px per logo (192px width + 48px gap)
          }}
        >
          {duplicatedLogos.map((logo, i) => (
            <div 
              key={`${logo}-${i}`} 
              className="flex-shrink-0 flex items-center justify-center h-28 w-48 group"
            >
              <div className="relative w-full h-full flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 p-4 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 group-hover:border-primary/20">
                <Image
                  src={`/logo/${logo}`}
                  alt={logo.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ")}
                  width={180}
                  height={90}
                  className="object-contain h-full w-auto transition-all duration-300 group-hover:brightness-110"
                  priority={i < 6}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 