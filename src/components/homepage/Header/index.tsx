"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Banner } from "@/types/banner.types";

interface HeroBannerProps {
  banners?: Banner[];
}

export default function HeroBanner({ banners = [] }: HeroBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeBanners = banners.filter((b) => b.isActive).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));

  useEffect(() => {
    if (activeBanners.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeBanners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeBanners.length]);

  if (activeBanners.length === 0) {
    return null; // Don't show if no banners
  }

  return (
    <section className="relative w-full h-[30vh] sm:h-[40vh] md:h-[60vh] lg:h-[80vh] overflow-hidden bg-white">
      <AnimatePresence mode="wait">
        {activeBanners.map((banner, index) => {
          if (index !== currentIndex) return null;
          return (
            <motion.div
              key={banner._id || index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              {/* Desktop Image */}
              <div className="hidden md:block w-full h-full relative">
                <Image
                  src={banner.desktopImage}
                  alt={banner.title || "Banner"}
                  fill
                  priority={index === 0}
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              {/* Mobile Image */}
              <div className="block md:hidden w-full h-full relative">
                <Image
                  src={banner.mobileImage}
                  alt={banner.title || "Banner"}
                  fill
                  priority={index === 0}
                  className="object-contain"
                  sizes="100vw"
                />
              </div>


            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Dots Indicator */}
      {activeBanners.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {activeBanners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}