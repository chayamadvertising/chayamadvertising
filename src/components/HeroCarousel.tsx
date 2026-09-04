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
    <div
      className="relative w-full aspect-[21/9] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-emerald-100 bg-chayam-charcoal group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slide Images Container */}
      <div
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="w-full h-full flex-shrink-0 relative"
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={`Banner ${slide.id}`}
              fill
              className="object-cover object-center"
              priority={index <= 2}
            />
          </div>
        ))}
      </div>

      {/* Prev / Next Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-md border border-white/30 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-md border border-white/30 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
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
  );
};

