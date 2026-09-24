'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
}

const slides: Slide[] = [
  { id: 1, image: '/images/banner_diya.jpg' },
  { id: 2, image: '/images/banner_hifocus.jpg' },
  { id: 3, image: '/images/banner_vedhika.jpg' },
  { id: 4, image: '/images/banner_kaleido.jpg' },
  { id: 5, image: '/images/banner_koyilatt.jpg' },
  { id: 7, image: '/images/banner_diya_2.jpg' },
];

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col w-full group">
      {/* Carousel Image Container */}
      <div
        className="relative w-full sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-emerald-100 bg-chayam-charcoal flex items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slide Images Container */}
        <div
          className="flex w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="w-full flex-shrink-0 relative flex items-center justify-center"
            >
              {/* Background Image - native height on mobile, cover on desktop */}
              <img
                src={slide.image}
                alt={`Banner ${slide.id}`}
                className="w-full h-auto sm:w-full sm:h-full sm:object-cover sm:object-center block"
              />
            </div>
          ))}
        </div>

        {/* Prev / Next Navigation Buttons (Overlay) */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/30 transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 hover:scale-110 active:scale-95 flex items-center justify-center"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/30 transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 hover:scale-110 active:scale-95 flex items-center justify-center"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Dots Indicator - DESKTOP ONLY (Overlay) */}
        <div className="hidden sm:flex absolute bottom-6 right-6 z-20 items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? 'w-8 bg-chayam-green shadow-glow'
                  : 'w-2.5 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Dots Indicator - MOBILE ONLY (Below the image) */}
      <div className="flex sm:hidden items-center justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentSlide
                ? 'w-6 bg-chayam-green shadow-glow'
                : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

