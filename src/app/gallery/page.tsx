import React from "react";

export default function Gallery() {
  const videos = [
    "/videos/WhatsApp Video 2025-07-17 at 1.01.13 PM.mp4",
    "/videos/WhatsApp Video 2025-07-17 at 1.02.03 PM.mp4"
  ];

  return (
    <div className="gallery-section py-12 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-primary">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {videos.map((src, idx) => (
          <video key={idx} controls className="w-full rounded shadow-lg">
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
    </div>
  );
} 