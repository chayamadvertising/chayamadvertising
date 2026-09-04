'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle,
  Clock,
  Cpu,
  Factory,
  Phone,
  ChevronRight,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { HeroCarousel } from '@/components/HeroCarousel';
import { ClientMarquee } from '@/components/ClientMarquee';
import { ServicesGrid } from '@/components/ServicesGrid';
import { StatsBar } from '@/components/StatsBar';
import { companyData } from '@/data/company';
import { QuickEnquiryModal } from '@/components/QuickEnquiryModal';

export default function HomePage() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string | undefined>();

  const handleOpenEnquiry = (slug?: string) => {
    setSelectedServiceSlug(slug);
    setEnquiryModalOpen(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION - Native HTML/CSS with Solid Background (Man removed) */}
      <section 
        className="relative w-full bg-[#07130e] text-white pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden border-b border-emerald-900/50 min-h-[600px] flex items-center"
      >

        {/* Right Half Background Image - Industrial Printer */}
        <div className="absolute inset-y-0 right-0 hidden md:block w-full md:w-3/5 lg:w-1/2 pointer-events-none z-0">
          {/* Gradients to fade the image perfectly into the dark background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07130e] via-[#07130e]/50 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07130e] via-transparent to-[#07130e] z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07130e] via-transparent to-transparent z-10" />
          
          <Image
            src="/images/hero_printer_malabar.jpg"
            alt="Large Format Industrial Printer Printing Malabar Gold Banner"
            fill
            className="object-cover object-left md:object-center opacity-40 md:opacity-60"
            priority
          />
        </div>

        {/* The Native HTML Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="md:col-span-8 lg:col-span-7 space-y-6 text-left opacity-0 animate-fade-up">
              {/* Badge: Over 22 Years of */}
              <div className="inline-flex items-center gap-3 sm:gap-4 flex-wrap">
                <span className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-[14px] bg-[#10b981] text-white font-bold text-[18px] shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  Over 22 Years
                </span>
                <span className="text-[18px] font-bold text-white tracking-wide">of</span>
              </div>

              {/* Main Display Headline */}
              <h1 className="text-[48px] font-black font-display text-white tracking-tight leading-[1.05]">
                Precision Signage <br />
                Quality & Consistency
              </h1>
            
              <p className="text-[18px] text-gray-300 leading-relaxed max-w-2xl font-medium mt-2 sm:mt-4">
                Chayam is a trusted signage partner across Kerala and India, delivering clear and durable signage since 2004.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2 sm:pt-4">
                <Link
                  href="/gallery"
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-[#10b981] hover:bg-emerald-500 text-white font-bold text-sm sm:text-base rounded-xl sm:rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </Link>
              </div>
            </div>
          </div>

          {/* 3 Split-Pill Stat Badges Floating Below Hero Banner */}
          <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative z-10 max-w-[900px] opacity-0 animate-fade-up-delayed-2">
            {/* Badge 1 */}
            <div className="flex items-stretch rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-emerald-900/40 bg-[#0b1712]">
              <div className="bg-[#10b981] text-white font-black text-xl sm:text-2xl lg:text-3xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center min-w-[110px] sm:min-w-[140px]">
                1 Lakh+
              </div>
              <div className="text-white font-bold text-xs sm:text-sm lg:text-base px-4 sm:px-6 py-3 sm:py-4 flex-1 flex items-center justify-center text-center">
                Project Completed
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex items-stretch rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-emerald-900/40 bg-[#0b1712]">
              <div className="bg-[#10b981] text-white font-black text-xl sm:text-2xl lg:text-3xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center min-w-[110px] sm:min-w-[140px]">
                1 Lakh+
              </div>
              <div className="text-white font-bold text-xs sm:text-sm lg:text-base px-4 sm:px-6 py-3 sm:py-4 flex-1 flex items-center justify-center text-center">
                Happy Clients
              </div>
            </div>

            {/* Badge 3 */}
            <div className="flex items-stretch rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-emerald-900/40 bg-[#0b1712]">
              <div className="bg-[#10b981] text-white font-black text-xl sm:text-2xl lg:text-3xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center min-w-[110px] sm:min-w-[140px]">
                22+
              </div>
              <div className="text-white font-bold text-xs sm:text-sm lg:text-base px-4 sm:px-6 py-3 sm:py-4 flex-1 flex items-center justify-center text-center">
                Years of Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SHOWCASE CAROUSEL SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-chayam-green bg-emerald-100 px-3 py-1 rounded-full">
            Interactive Showcase Slider
          </span>
          <h2 className="text-3xl font-black font-display text-chayam-charcoal mt-2">
            Signature Projects Manufactured in Mukkam
          </h2>
        </div>
        <HeroCarousel />
      </section>

      {/* 4. CLIENT LOGOS MARQUEE */}
      <section className="py-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-[36px] font-black font-display text-chayam-charcoal leading-tight">
            Powerful Partnerships.<br/>Proven Results.
          </h2>
        </div>
        <ClientMarquee />
      </section>

      {/* 5. SERVICES GRID (8 SPECIALTY CARDS) */}
      <ServicesGrid onOpenEnquiry={handleOpenEnquiry} />



      {/* 7. WHY CHOOSE US GRID */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-[36px] font-black font-display text-chayam-charcoal">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyData.guarantees.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-chayam-green-mint/50 border border-emerald-100 hover:border-chayam-green transition-all duration-300 space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-chayam-green">
                  <ShieldCheck className="w-5 h-5 text-chayam-green" />
                </div>
                <h3 className="text-lg font-bold font-display text-chayam-charcoal group-hover:text-chayam-green transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SISTER CONCERNS & CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-16">
        
        {/* Sister Concerns */}
        <div className="text-center w-full max-w-6xl mx-auto mb-16 bg-chayam-green rounded-3xl p-8 sm:p-12 shadow-xl border border-emerald-500">
          <h2 className="text-2xl sm:text-3xl font-black font-display text-white mb-8">Our Sister Concerns</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center">
            <div className="bg-white rounded-2xl p-4 w-full h-32 sm:h-40 flex items-center justify-center shadow-lg transition-transform hover:scale-105">
              <Image src="/images/sister_paris.png" alt="Paris Bake" width={400} height={200} className="w-auto h-full max-h-24 object-contain" />
            </div>
            <div className="bg-white rounded-2xl p-4 w-full h-32 sm:h-40 flex items-center justify-center shadow-lg transition-transform hover:scale-105">
              <Image src="/images/sister_adventure.png" alt="Ad-Venture" width={400} height={200} className="w-auto h-auto max-w-[70%] max-h-14 object-contain" />
            </div>
            <div className="bg-white rounded-2xl p-4 w-full h-32 sm:h-40 flex items-center justify-center shadow-lg transition-transform hover:scale-105">
              <Image src="/images/sister_hashtag.png" alt="Hashtag" width={400} height={200} className="w-auto h-full max-h-24 object-contain" />
            </div>
            <div className="bg-white rounded-2xl p-4 w-full h-32 sm:h-40 flex items-center justify-center shadow-lg transition-transform hover:scale-105">
              <Image src="/images/sister_signin.png" alt="Sign-in" width={400} height={200} className="w-auto h-full max-h-24 object-contain" />
            </div>
          </div>
        </div>


      </section>

      <QuickEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        initialServiceSlug={selectedServiceSlug}
      />
    </div>
  );
}
