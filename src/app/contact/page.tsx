'use client';

import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Zap,
  Building2,
  Factory,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { companyData } from '@/data/company';

export default function ContactPage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Banner & Cards (Redesigned) */}
      <section className="bg-chayam-charcoal text-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-xl -mx-4 sm:mx-0 border border-emerald-900/60">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight">
            Let's Connect!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Card 1: Call Us */}
          <div className="bg-white rounded-xl p-8 text-center flex flex-col items-center justify-between shadow-lg border border-emerald-50">
            <div className="w-16 h-16 rounded-full bg-chayam-green text-white flex items-center justify-center mb-5 shadow-[0_4px_14px_rgba(16,185,129,0.3)]">
              <Phone className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold font-display text-chayam-charcoal mb-4">Call us</h3>
            <p className="text-[15px] text-gray-600 mb-8 leading-relaxed">
              Our support team is available during business hours. Please feel free to call us.
            </p>
            <a href={`tel:${companyData.rawPhone}`} className="text-sm font-bold text-chayam-green flex items-center justify-center gap-2 hover:underline mt-auto">
              <Phone className="w-4 h-4" /> Call: {companyData.phone}
            </a>
          </div>

          {/* Card 2: Chat with us */}
          <div className="bg-white rounded-xl p-8 text-center flex flex-col items-center justify-between shadow-lg border border-emerald-50">
            <div className="w-16 h-16 rounded-full bg-chayam-green text-white flex items-center justify-center mb-5 shadow-[0_4px_14px_rgba(16,185,129,0.3)]">
              <WhatsAppIcon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-display text-chayam-charcoal mb-4">Chat with us</h3>
            <p className="text-[15px] text-gray-600 mb-8 leading-relaxed">
              You can chat with us for any queries. We are here to give you all the assistance.
            </p>
            <a href={companyData.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-chayam-green flex items-center justify-center gap-2 hover:underline mt-auto">
              <WhatsAppIcon className="w-4 h-4" /> Chat now
            </a>
          </div>

          {/* Card 3: Send an email */}
          <div className="bg-white rounded-xl p-8 text-center flex flex-col items-center justify-between shadow-lg border border-emerald-50">
            <div className="w-16 h-16 rounded-full bg-chayam-green text-white flex items-center justify-center mb-5 shadow-[0_4px_14px_rgba(16,185,129,0.3)]">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold font-display text-chayam-charcoal mb-4">Send an email</h3>
            <p className="text-[15px] text-gray-600 mb-8 leading-relaxed">
              If you have any queries, feel free to drop your mail at our given email ID. We will get back to you as soon as possible.
            </p>
            <a href={`mailto:${companyData.email}`} className="text-sm font-bold text-chayam-green flex items-center justify-center gap-2 hover:underline break-all mt-auto">
              <Mail className="w-4 h-4" /> {companyData.email}
            </a>
          </div>
        </div>
      </section>

      {/* 2. CORPORATE HQ & FACTORY BOX */}
      <section className="bg-chayam-charcoal text-white rounded-3xl p-8 sm:p-10 shadow-lg border border-emerald-900/60 relative overflow-hidden">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black font-display text-white">
            Main HQ & Production Plant
          </h2>

          <div className="space-y-2 text-gray-300 text-sm">
            <p className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-chayam-green flex-shrink-0 mt-0.5" />
              <span>{companyData.fullAddress}</span>
            </p>
            <p className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-chayam-green flex-shrink-0" />
              <span>Operating Hours: <strong>{companyData.operatingHours}</strong></span>
            </p>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE LOCATION MAP COMPONENT */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-chayam-green">
              Interactive Navigation Map
            </span>
            <h2 className="text-2xl font-black font-display text-chayam-charcoal">
              Locate Our Mukkam Plant on Google Maps
            </h2>
          </div>
          <a
            href="https://maps.google.com/?q=North+Karassery+Mukkam+Kozhikode+Kerala"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-chayam-green hover:underline flex items-center gap-1"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Embedded Google Map iframe with Kozhikode/Mukkam fallback */}
        <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-xl border-2 border-emerald-100 group">
          <iframe
            title="Chayam Advertising & Events Mukkam Plant Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.197943503525!2d75.9865!3d11.3218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDE5JzE4LjUiTiA3NcKwNTknMTEuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
          />

          {/* Clickable Overlay */}
          <a 
            href="https://maps.google.com/?q=North+Karassery+Mukkam+Kozhikode+Kerala" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center bg-black/0 hover:bg-black/10 transition-colors"
            title="Click to open in Google Maps"
          >
            {/* Optional: 'Open in Maps' tooltip indicator that shows on hover */}
            <div className="opacity-0 group-hover:opacity-100 bg-white text-chayam-charcoal font-bold px-6 py-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-chayam-green" />
              Get Directions
            </div>
          </a>

          {/* Location Overlay Card */}
          <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-emerald-100 max-w-sm pointer-events-none">
            <div className="flex items-center gap-2 text-chayam-green font-bold text-xs uppercase mb-1">
              <MapPin className="w-4 h-4 text-chayam-green" />
              <span>Chayam Production Hub</span>
            </div>
            <div className="text-sm font-bold text-chayam-charcoal">
              North Karassery, Mukkam, Kozhikode, Kerala - 673602
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Phone: +91 9048239785
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
