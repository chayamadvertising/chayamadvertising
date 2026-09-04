'use client';

import React from 'react';
import Image from 'next/image';
import { clientBrandsData, industryVerticalsData } from '@/data/clients';
import { Award, Building2, CheckCircle2, Sparkles, MapPin } from 'lucide-react';

export default function ClientsPage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      {/* 2. Hero Banner Section */}
      <section className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-10 opacity-0 animate-fade-up">
        <h1 className="text-[48px] font-bold font-display text-chayam-charcoal tracking-tight leading-tight">
          Our Clients
        </h1>
        <p className="text-[20px] font-sans text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Trusted by leading brands across industries
        </p>
      </section>

      {/* 3. Trusted Brands Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 opacity-0 animate-fade-up-delayed">
        <h2 className="text-[30px] font-semibold font-display text-chayam-charcoal">
          Proud to Partner with Businesses That Value Quality and Innovation
        </h2>
        <p className="text-[18px] font-sans text-gray-600 max-w-4xl mx-auto leading-relaxed">
          From small businesses to large corporations, we've had the privilege of serving diverse clients across retail, hospitality, healthcare, corporate, and more.
        </p>
      </section>

      {/* 4. Client Brands Wall Image Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative w-full h-[300px] sm:h-[500px] rounded-3xl overflow-hidden shadow-card border border-gray-100">
           <Image
             src="/images/client_wall_1786601272609.jpg"
             alt="Sign Wizard Client Brands Showcase"
             fill
             className="object-cover"
           />
        </div>
      </section>

      {/* 4. Client Logos Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* We use a fallback layout for the logos as subtle grey/white cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
          {clientBrandsData.map((client, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center group hover:border-chayam-green hover:shadow-md transition-all duration-300 min-h-[160px]"
            >
              {client.logo ? (
                <div className="relative w-full h-20 mb-3 group-hover:scale-105 transition-transform flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={140}
                    height={80}
                    className="object-contain max-h-full"
                  />
                </div>
              ) : (
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-black text-white text-lg shadow-sm mb-4 group-hover:scale-110 transition-transform flex-shrink-0"
                  style={{ backgroundColor: client.color }}
                >
                  {client.initials}
                </div>
              )}
              <h3 className="text-[14px] font-sans font-semibold text-chayam-charcoal leading-snug">
                {client.name}
              </h3>
            </div>
          ))}
        </div>
      </section>


      {/* 5. Industries We Serve Section */}
      <section className="py-16 bg-emerald-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <h2 className="text-[36px] font-semibold font-display text-chayam-charcoal leading-tight">
              Industries We Serve
            </h2>
            <p className="text-[18px] font-sans text-gray-600 leading-relaxed">
              From real estate, healthcare, to corporate industries, we serve all industry types with top-notch quality large format printing services. No matter your business type, we maximize your brand's presence with impactful prints.
            </p>
          </div>

          {/* 12 Industry Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryVerticalsData.map((industry, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-card border border-gray-100 flex flex-col items-center group"
              >
                <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                  <Image
                    src={industry.image} 
                    alt={industry.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="p-6 text-center w-full">
                  <h3 className="text-[20px] font-sans font-bold text-chayam-charcoal">
                    {industry.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
