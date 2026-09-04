'use client';

import React, { useState } from 'react';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { QuickEnquiryModal } from '@/components/QuickEnquiryModal';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string | undefined>();

  const handleOpenEnquiry = (serviceSlug?: string) => {
    setSelectedServiceSlug(serviceSlug);
    setEnquiryModalOpen(true);
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        <title>Chayam Advertising & Events | 20+ Yrs Precision Signage & Flex Printing | Mukkam, Kozhikode</title>
        <meta
          name="description"
          content="Chayam Advertising & Events is Kerala's premier 3D LED channel letter signage, highway flex billboard, flatbed UV direct printing, acrylic laser, and retail branding manufacturer in North Karassery, Mukkam, Kozhikode."
        />
        <meta
          name="keywords"
          content="Chayam Advertising, Kozhikode signage, flex printing Mukkam, 3D LED channel letters, Malabar Gold signage, Kalyan Silks flex billboard, flatbed UV printing Kerala, acrylic laser cutting Kozhikode, neon signs Kerala, vehicle wrap Kozhikode"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen flex flex-col justify-between bg-white text-chayam-charcoal">
        <Header onOpenEnquiry={handleOpenEnquiry} />

        <main className="flex-grow">{children}</main>

        <Footer />

        <FloatingWhatsApp />

        <QuickEnquiryModal
          isOpen={enquiryModalOpen}
          onClose={() => setEnquiryModalOpen(false)}
          initialServiceSlug={selectedServiceSlug}
        />
      </body>
    </html>
  );
}
