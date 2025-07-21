"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-black/70 backdrop-blur-md text-white rounded-full border border-white/20 shadow-lg hover:bg-black/80 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <i className="bi bi-arrow-up text-xl"></i>
        </button>
      )}
    </>
  );
}
