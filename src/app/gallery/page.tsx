'use client';

import React, { useState } from 'react';
import { GalleryGrid } from '@/components/GalleryGrid';
import { QuickEnquiryModal } from '@/components/QuickEnquiryModal';
import { ImageIcon } from 'lucide-react';

export default function GalleryPage() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  return (
    <div className="space-y-12 sm:space-y-16 py-8">
      
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 opacity-0 animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-chayam-green font-bold text-xs uppercase tracking-widest border border-emerald-200">
          <ImageIcon className="w-4 h-4 text-yellow-500" />
          <span>Our Portfolio</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black font-display text-chayam-charcoal tracking-tight">
          Project Gallery
        </h1>

        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Explore our extensive portfolio of precision-crafted signage, outdoor advertising, and architectural branding solutions delivered across India.
        </p>
      </section>

      {/* 2. Filtering Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 animate-fade-up-delayed">
        <GalleryGrid onOpenEnquiry={() => setEnquiryModalOpen(true)} />
      </section>

      <QuickEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
      />
    </div>
  );
}
