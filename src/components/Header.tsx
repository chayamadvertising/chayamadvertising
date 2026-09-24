'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { companyData } from '@/data/company';
import { servicesData } from '@/data/services';

interface HeaderProps {
  onOpenEnquiry: (serviceSlug?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services/led-signage', isDropdown: true },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Our Clients', href: '/clients' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-sm transition-all duration-300">

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo & Emblem - Clean without black background */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group py-1">
            <div className="relative w-10 h-10 sm:w-14 sm:h-14 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/chayam_emblem_clean.png"
                alt="CHAYAM Reticle Emblem Logo"
                fill
                className="object-contain drop-shadow-sm"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl sm:text-3xl font-black font-display tracking-tight text-chayam-charcoal leading-none">
                CHAYAM
              </span>
              <span className="text-[8px] sm:text-[11px] font-extrabold uppercase tracking-widest text-chayam-green mt-0.5 sm:mt-1">
                ADVERTISING & EVENTS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href) && link.href !== '/services/led-signage';

              if (link.isDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                        pathname.startsWith('/services')
                          ? 'text-chayam-green bg-chayam-green-mint'
                          : 'text-chayam-charcoal hover:text-chayam-green hover:bg-emerald-50'
                      }`}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180 text-chayam-green' : ''
                        }`}
                      />
                    </button>

                    {/* Services Dropdown Drawer - Minimalist Style matching mockup */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-56 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 py-2 rounded animate-in fade-in slide-in-from-top-2 duration-200">
                        {servicesData.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className={`block px-5 py-2.5 text-[13px] transition-colors ${
                              pathname === `/services/${service.slug}`
                                ? 'text-chayam-green font-medium bg-emerald-50/50'
                                : 'text-gray-700 hover:text-chayam-green hover:bg-gray-50'
                            }`}
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                    isActive
                      ? 'text-chayam-green bg-chayam-green-mint border border-emerald-200'
                      : 'text-chayam-charcoal hover:text-chayam-green hover:bg-emerald-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Enquiry Button */}
          <div className="hidden lg:block ml-4">
            <a
              href={companyData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-chayam-green hover:bg-chayam-green-hover text-white font-bold text-[16px] rounded-lg shadow-sm transition-all flex items-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>Enquiry</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-chayam-charcoal hover:text-chayam-green focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Expanding Mobile Menu (Pushes content down) */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-md ${
          mobileMenuOpen ? 'max-h-[800px] border-b border-emerald-100 opacity-100 shadow-md' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col max-w-7xl mx-auto">
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div key={link.name} className="flex flex-col border-b border-gray-100/50 last:border-0">
                  <button
                    onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                    className="flex items-center justify-between py-3.5 px-2 text-[17px] font-semibold text-chayam-charcoal hover:text-chayam-green w-full text-left"
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${mobileServicesExpanded ? 'rotate-180' : ''}`} />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out flex flex-col ${
                      mobileServicesExpanded ? 'max-h-[500px] opacity-100 pb-2' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {servicesData.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className={`pl-6 py-3 text-[15px] font-medium flex items-center gap-3 ${
                          pathname === `/services/${service.slug}`
                            ? 'text-chayam-green font-bold'
                            : 'text-gray-600 hover:text-chayam-green'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${pathname === `/services/${service.slug}` ? 'bg-chayam-green' : 'bg-emerald-200'}`} />
                        <span>{service.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`py-3.5 px-2 text-[17px] font-semibold border-b border-gray-100/50 last:border-0 flex items-center justify-between ${
                  isActive ? 'text-chayam-green' : 'text-chayam-charcoal hover:text-chayam-green'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
    </>
  );
};
