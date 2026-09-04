import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, MessageSquare, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { companyData } from '@/data/company';
import { servicesData } from '@/data/services';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-chayam-green pt-16 pb-8 border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-emerald-100">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/chayam_emblem_clean.png"
                  alt="CHAYAM"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-black font-display tracking-tight text-chayam-charcoal leading-none">
                  CHAYAM
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-chayam-green text-[18px] font-bold tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-[14px] text-chayam-green font-medium">
              <li><Link href="/services/led-signage" className="hover:text-chayam-green-hover transition-colors">LED 3D Letter Signage</Link></li>
              <li><Link href="/services/indoor-advertising" className="hover:text-chayam-green-hover transition-colors">Indoor Advertising</Link></li>
              <li><Link href="/services/printing-branding" className="hover:text-chayam-green-hover transition-colors">Outdoor Advertising</Link></li>
              <li><Link href="/services/printing-branding" className="hover:text-chayam-green-hover transition-colors">Printing Services</Link></li>
              <li><Link href="/services/acrylic-works" className="hover:text-chayam-green-hover transition-colors">Laser Cutting</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-chayam-green text-[18px] font-bold tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-[14px] text-chayam-green font-medium">
              <li>
                <Link href="/about" className="hover:text-chayam-green-hover transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-chayam-green-hover transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-chayam-green-hover transition-colors">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-chayam-green-hover transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h3 className="text-chayam-green text-[18px] font-bold tracking-wider mb-4">
              Contact Details
            </h3>
            <div className="flex items-start gap-3 text-[14px] text-chayam-green font-medium">
              <MapPin className="w-4 h-4 mt-0.5 text-chayam-green flex-shrink-0" />
              <span className="leading-relaxed">{companyData.fullAddress}</span>
            </div>
            <div className="flex items-center gap-3 text-[14px] text-chayam-green font-medium">
              <Phone className="w-4 h-4 text-chayam-green flex-shrink-0" />
              <a href={`tel:${companyData.rawPhone}`} className="hover:text-chayam-green-hover transition-colors">
                {companyData.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-[14px] text-chayam-green font-medium">
              <Mail className="w-4 h-4 text-chayam-green" />
              <a href={`mailto:${companyData.email}`} className="hover:text-chayam-green-hover transition-colors">
                {companyData.email}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-black font-medium">
          <p>© {new Date().getFullYear()} Chayam. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-black" /> {companyData.location}</span>
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-black" /> {companyData.phone}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
