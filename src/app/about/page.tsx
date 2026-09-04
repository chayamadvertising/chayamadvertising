'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Award,
  Factory,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Target,
  Compass,
  Heart,
  Clock,
  MapPin,
} from 'lucide-react';
import { companyData } from '@/data/company';

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      {/* 2. Page Title & Subtitle Banner */}
      <section className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-10 opacity-0 animate-fade-up">
        <h1 className="text-[44px] font-bold font-display text-chayam-charcoal tracking-tight leading-tight">
          About Us
        </h1>
        <p className="text-[18px] font-sans text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Crafting excellence in signage and branding for over 22 years
        </p>
      </section>



      {/* Story Summary - Professional Layout */}
      <section className="py-20 lg:py-28 bg-white border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Title Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-4">
              <span className="text-chayam-green font-bold tracking-widest uppercase text-sm">
                About The Company
              </span>
              <h2 className="text-4xl sm:text-5xl font-black font-display text-chayam-charcoal leading-tight">
                Our Story
              </h2>
              <div className="w-16 h-1.5 bg-chayam-green rounded-full"></div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-8">
              <p className="text-xl sm:text-2xl text-chayam-charcoal font-medium leading-relaxed mb-8">
                <strong>Chayam</strong>, based in Mukkam, Kozhikode, has been a leader in the signage industry in Kerala and across India since <strong>2004</strong>.
              </p>
              
              <div className="space-y-6 text-base sm:text-lg text-gray-600 leading-loose">
                <p>
                  We specialize in indoor and outdoor advertising solutions, handling everything from concept to installation. Our team combines creativity, precision, and advanced technology to craft durable and impactful signage that helps businesses stand out.
                </p>
                <p>
                  With years of experience and a commitment to excellence, we transform spaces into experiences. Whether it's a small retail storefront or a large-scale outdoor billboard, we deliver solutions that not only meet but exceed our clients' expectations. Our approach is rooted in understanding your brand's unique identity and translating it into compelling visual communication.
                </p>
                <p>
                  At Chayam, we believe that great signage is more than just displaying information—it's about creating lasting impressions, building brand recognition, and driving business success. We work closely with our clients throughout the entire process, ensuring that every project reflects their vision and values while maintaining the highest standards of quality and durability.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Corporate Pillars */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <section className="py-16 bg-gradient-to-r from-chayam-charcoal via-chayam-charcoal-light to-chayam-charcoal text-white rounded-3xl px-4 sm:px-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-[36px] font-black font-display text-white leading-tight">
              Our Vision, Mission & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-chayam-green/20 text-chayam-green flex items-center justify-center">
                <Target className="w-5 h-5 text-chayam-green" />
              </div>
              <h3 className="text-[22px] font-bold font-display text-white">Our Vision</h3>
              <p className="text-[15px] text-gray-300 leading-relaxed">
                To be the most trusted and innovative signage solutions provider, empowering businesses to achieve maximum brand visibility and impact.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-chayam-green/20 text-chayam-green flex items-center justify-center">
                <Compass className="w-5 h-5 text-chayam-green" />
              </div>
              <h3 className="text-[22px] font-bold font-display text-white">Our Mission</h3>
              <p className="text-[15px] text-gray-300 leading-relaxed">
                Deliver exceptional signage and branding solutions through quality craftsmanship, innovative design, and unparalleled customer service.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-chayam-green/20 text-chayam-green flex items-center justify-center">
                <Heart className="w-5 h-5 text-chayam-green" />
              </div>
              <h3 className="text-[22px] font-bold font-display text-white">Our Values</h3>
              <p className="text-[15px] text-gray-300 leading-relaxed">
                Quality, integrity, innovation, and customer satisfaction drive everything we do. We believe in building lasting relationships through excellence.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* 5. Our Team & Process Section */}
      <section className="py-20 bg-white border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-[36px] font-black font-display text-chayam-charcoal tracking-tight">
              We Have Best Team and Best Process
            </h2>
            <p className="text-[16px] text-gray-600 leading-relaxed">
              Our streamlined process ensures your signage project is completed with precision, quality, and efficiency from start to finish.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-12 right-12 h-1 bg-emerald-100 z-0"></div>

            {/* Step 1 */}
            <div className="space-y-4 relative">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center border-2 border-emerald-200 text-chayam-green font-bold text-xl relative z-10">
                01
              </div>
              <h3 className="text-[20px] font-bold text-chayam-charcoal">Initial Consultation</h3>
            </div>
            
            {/* Step 2 */}
            <div className="space-y-4 relative">
              <div className="w-16 h-16 mx-auto bg-chayam-green text-white rounded-full flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] relative z-10 scale-110">
                02
              </div>
              <h3 className="text-[20px] font-bold text-chayam-charcoal">Design Development</h3>
            </div>

            {/* Step 3 */}
            <div className="space-y-4 relative">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center border-2 border-emerald-200 text-chayam-green font-bold text-xl relative z-10">
                03
              </div>
              <h3 className="text-[20px] font-bold text-chayam-charcoal">Approval & Production</h3>
            </div>

            {/* Step 4 */}
            <div className="space-y-4 relative">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center border-2 border-emerald-200 text-chayam-green font-bold text-xl relative z-10">
                04
              </div>
              <h3 className="text-[20px] font-bold text-chayam-charcoal">Quality Check</h3>
            </div>

            {/* Step 5 */}
            <div className="space-y-4 relative">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center border-2 border-emerald-200 text-chayam-green font-bold text-xl relative z-10">
                05
              </div>
              <h3 className="text-[20px] font-bold text-chayam-charcoal">Installation</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[36px] font-black font-display text-chayam-charcoal">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyData.guarantees.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-chayam-green shadow-sm transition-all duration-300 space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-chayam-green-mint flex items-center justify-center text-chayam-green">
                  <CheckCircle className="w-5 h-5 text-chayam-green" />
                </div>
                <h3 className="text-[20px] font-bold font-display text-chayam-charcoal group-hover:text-chayam-green transition-colors">
                  {item.title}
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our Sister Concerns Section */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-full bg-chayam-green rounded-3xl p-8 sm:p-12 shadow-xl border border-emerald-500">
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
        </div>
      </section>

      {/* 8. Frequently Asked Questions (FAQ) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-[36px] font-black font-display text-chayam-charcoal">
              Frequently Asked Questions
            </h2>
            <p className="text-[16px] text-gray-600">
              Get quick answers about Chayam and how we work.
            </p>
          </div>
          
          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group bg-white rounded-2xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
              <summary className="flex items-center justify-between gap-1.5">
                <h3 className="text-[18px] font-bold text-chayam-charcoal group-open:text-chayam-green">
                  Who is Chayam?
                </h3>
                <span className="shrink-0 rounded-full bg-chayam-green-mint p-1.5 text-chayam-green sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-[15px] text-gray-600">
                Chayam is a premier signage and branding solutions provider based in Mukkam, Kerala, serving clients nationwide with high-quality advertising solutions since 2004.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-white rounded-2xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
              <summary className="flex items-center justify-between gap-1.5">
                <h3 className="text-[18px] font-bold text-chayam-charcoal group-open:text-chayam-green">
                  What makes Chayam different from other signage companies?
                </h3>
                <span className="shrink-0 rounded-full bg-chayam-green-mint p-1.5 text-chayam-green sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-[15px] text-gray-600">
                We manufacture 100% in-house at our 15,000 sq.ft facility using premium materials like Samsung IP67 LEDs and imported cast acrylic, ensuring absolute quality control and rapid turnaround times.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-white rounded-2xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
              <summary className="flex items-center justify-between gap-1.5">
                <h3 className="text-[18px] font-bold text-chayam-charcoal group-open:text-chayam-green">
                  Do you offer custom signage solutions?
                </h3>
                <span className="shrink-0 rounded-full bg-chayam-green-mint p-1.5 text-chayam-green sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-[15px] text-gray-600">
                Yes, every project is entirely customized. From unique 3D architectural letters to massive highway billboards, we tailor the design, materials, and illumination to perfectly match your brand guidelines.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-white rounded-2xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
              <summary className="flex items-center justify-between gap-1.5">
                <h3 className="text-[18px] font-bold text-chayam-charcoal group-open:text-chayam-green">
                  What industries do you serve?
                </h3>
                <span className="shrink-0 rounded-full bg-chayam-green-mint p-1.5 text-chayam-green sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-[15px] text-gray-600">
                We serve a wide spectrum of industries including retail jewelry, textiles, education, healthcare, real estate, hospitality, and corporate sectors.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-white rounded-2xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
              <summary className="flex items-center justify-between gap-1.5">
                <h3 className="text-[18px] font-bold text-chayam-charcoal group-open:text-chayam-green">
                  Do you manage both indoor and outdoor signage projects?
                </h3>
                <span className="shrink-0 rounded-full bg-chayam-green-mint p-1.5 text-chayam-green sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-[15px] text-gray-600">
                Absolutely. We handle ultra-slim indoor LED fabric lightboxes and wayfinding signs, as well as extreme-weather resistant outdoor facade signage and highway hoardings.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-white rounded-2xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
              <summary className="flex items-center justify-between gap-1.5">
                <h3 className="text-[18px] font-bold text-chayam-charcoal group-open:text-chayam-green">
                  How do you ensure quality and durability?
                </h3>
                <span className="shrink-0 rounded-full bg-chayam-green-mint p-1.5 text-chayam-green sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-[15px] text-gray-600">
                We utilize strict QA protocols, 48-hour continuous burn-in electrical testing for illuminated signs, and source only industrial-grade materials built specifically to withstand heavy tropical monsoons.
              </p>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-white rounded-2xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
              <summary className="flex items-center justify-between gap-1.5">
                <h3 className="text-[18px] font-bold text-chayam-charcoal group-open:text-chayam-green">
                  How do you approach project timelines?
                </h3>
                <span className="shrink-0 rounded-full bg-chayam-green-mint p-1.5 text-chayam-green sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-[15px] text-gray-600">
                We operate with a strict 99% on-time guarantee. With 24/7 emergency production capabilities at our plant, we meticulously plan installation schedules to meet your grand opening deadlines.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
