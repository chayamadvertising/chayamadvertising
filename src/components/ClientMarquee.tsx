'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { clientBrandsData } from '@/data/clients';

export const ClientMarquee: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = clientBrandsData.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3500); // Auto-scroll every 3.5 seconds
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="w-full bg-white py-16 overflow-hidden relative">
      
      {/* Top Red & Blue border based on the attached design */}
      <div className="absolute top-0 left-0 w-full h-[2px] flex max-w-6xl mx-auto inset-x-0">
         <div className="w-1/2 bg-[#e31837]"></div>
         <div className="w-1/2 bg-[#001f5b]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-between">
        
        <button 
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-[#001f5b] text-white flex items-center justify-center z-30 hover:scale-110 transition-transform shadow-md focus:outline-none"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="flex-1 relative h-[180px] sm:h-[160px] max-w-5xl mx-auto overflow-hidden">
          {clientBrandsData.map((item, index) => {
            // Calculate offset relative to currentIndex for circular infinite loop
            let offset = index - currentIndex;
            if (offset < -Math.floor(totalItems / 2)) offset += totalItems;
            if (offset > Math.floor(totalItems / 2)) offset -= totalItems;

            const isCenter = offset === 0;
            
            // TranslateX and Scale based on offset (-2, -1, 0, 1, 2)
            let translateX = '0%';
            let scale = 'scale-100';
            let opacity = 'opacity-100';
            let zIndex = 10;
            
            if (offset === 0) {
              translateX = '0%';
              scale = 'scale-125';
              zIndex = 20;
            } else if (offset === -1) {
              translateX = '-120%';
              scale = 'scale-90';
              opacity = 'opacity-60';
              zIndex = 15;
            } else if (offset === 1) {
              translateX = '120%';
              scale = 'scale-90';
              opacity = 'opacity-60';
              zIndex = 15;
            } else if (offset === -2) {
              translateX = '-240%';
              scale = 'scale-75';
              opacity = 'opacity-30';
              zIndex = 10;
            } else if (offset === 2) {
              translateX = '240%';
              scale = 'scale-75';
              opacity = 'opacity-30';
              zIndex = 10;
            } else {
              // Hidden ones beyond +/- 2
              translateX = offset < 0 ? '-350%' : '350%';
              scale = 'scale-50';
              opacity = 'opacity-0';
              zIndex = 0;
            }

            return (
              <div
                key={item.name}
                className={`absolute top-1/2 left-1/2 transition-all duration-700 ease-in-out flex flex-col items-center justify-center text-center w-[120px] sm:w-[150px] ${zIndex > 0 ? '' : 'pointer-events-none'}`}
                style={{
                  transform: `translate(calc(-50% + ${translateX}), -50%)`,
                  zIndex: zIndex
                }}
              >
                <div className={`transition-all duration-700 w-full ${scale} ${opacity}`}>
                  {item.logo ? (
                    <div className="relative w-full h-20 mb-3 flex items-center justify-center">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={140}
                        height={80}
                        className="object-contain max-h-full drop-shadow-sm"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-14 h-14 mx-auto rounded-full flex items-center justify-center font-black text-white text-lg shadow-sm mb-3"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.initials}
                    </div>
                  )}
                  {/* Exactly the same text style as the client page */}
                  <div className={`transition-opacity duration-500 ${isCenter ? 'opacity-100' : 'opacity-0'}`}>
                    <h3 className="text-[13px] sm:text-[14px] font-sans font-semibold text-chayam-charcoal leading-snug">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button 
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-[#001f5b] text-white flex items-center justify-center z-30 hover:scale-110 transition-transform shadow-md focus:outline-none"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      {/* Bottom Red & Blue border based on the attached design */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] flex max-w-6xl mx-auto inset-x-0">
         <div className="w-1/2 bg-[#e31837]"></div>
         <div className="w-1/2 bg-[#001f5b]"></div>
      </div>
    </div>
  );
};
