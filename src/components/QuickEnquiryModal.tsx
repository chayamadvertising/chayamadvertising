'use client';

import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { servicesData } from '@/data/services';
import { companyData } from '@/data/company';

interface QuickEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceSlug?: string;
}

export const QuickEnquiryModal: React.FC<QuickEnquiryModalProps> = ({
  isOpen,
  onClose,
  initialServiceSlug,
}) => {
  const [selectedService, setSelectedService] = useState(
    initialServiceSlug || 'led-signage'
  );
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceSlug) {
      setSelectedService(initialServiceSlug);
    }
  }, [initialServiceSlug]);

  if (!isOpen) return null;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceName =
      servicesData.find((s) => s.slug === selectedService)?.title || 'General Signage Enquiry';

    const textMessage = `Hello Chayam Advertising! 👋\n\nI want to request an urgent quote/enquiry:\n• *Name*: ${name || 'Valued Client'}\n• *Phone*: ${phone || 'Not provided'}\n• *Location*: ${location || 'Kozhikode'}\n• *Service Requested*: ${serviceName}\n• *Details*: ${message || 'Please contact me regarding my project.'}\n\nThank you!`;

    const encodedText = encodeURIComponent(textMessage);
    window.open(`https://wa.me/919048239785?text=${encodedText}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-100 animate-in zoom-in-95 duration-200">
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-chayam-charcoal via-chayam-charcoal-light to-chayam-charcoal p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-chayam-green mb-1">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>Fast Track Consultation</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black font-display tracking-tight text-white">
            Get an Instant Signage Quote
          </h2>
          <p className="text-xs text-gray-300 mt-1">
            Connect directly with our senior structural team in Mukkam, Kozhikode.
          </p>
        </div>

        {/* Modal Form Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-chayam-green rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-chayam-charcoal">Enquiry Initiated!</h3>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Your project details have been prepared and sent directly to our WhatsApp hotline (+91 9048239785).
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 bg-chayam-green text-white text-sm font-bold rounded-xl shadow-glow"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-chayam-charcoal uppercase tracking-wider mb-1">
                  Select Specialty Service *
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm font-semibold text-chayam-charcoal focus:ring-2 focus:ring-chayam-green focus:bg-white focus:outline-none"
                >
                  {servicesData.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-chayam-charcoal uppercase tracking-wider mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Nair"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-chayam-green focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-chayam-charcoal uppercase tracking-wider mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-chayam-green focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-chayam-charcoal uppercase tracking-wider mb-1">
                  Project Location / City
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Mavoor Road, Kozhikode"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-chayam-green focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-chayam-charcoal uppercase tracking-wider mb-1">
                  Project Requirements / Dimensions
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your LED letter size, billboard location, or flex quantity..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-chayam-green focus:outline-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Send via WhatsApp (+91 9048239785)</span>
                </button>

                <a
                  href={`tel:${companyData.rawPhone}`}
                  className="py-3 px-4 bg-chayam-charcoal hover:bg-black text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-chayam-green" />
                  <span>Direct Call</span>
                </a>
              </div>

              <div className="text-[11px] text-gray-500 text-center pt-1">
                🔒 Instant response from our North Karassery, Mukkam production office.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
