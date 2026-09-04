'use client';

import React from 'react';
import { companyData } from '@/data/company';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={companyData.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Chayam Advertising on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] hover:bg-[#20ba5a] text-white w-14 h-14 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300"
    >
      <WhatsAppIcon className="w-8 h-8 text-white" />
    </a>
  );
};
