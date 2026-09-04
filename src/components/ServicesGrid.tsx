import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Lightbulb,
  Layout,
  Printer,
  Scissors,
  Sparkles,
  Maximize,
  Building2,
  Truck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { servicesData } from '@/data/services';
import { companyData } from '@/data/company';

const iconMap: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="w-6 h-6 text-chayam-green" />,
  Layout: <Layout className="w-6 h-6 text-chayam-green" />,
  Printer: <Printer className="w-6 h-6 text-chayam-green" />,
  Scissors: <Scissors className="w-6 h-6 text-chayam-green" />,
  Sparkles: <Sparkles className="w-6 h-6 text-chayam-green" />,
  Maximize: <Maximize className="w-6 h-6 text-chayam-green" />,
  Building2: <Building2 className="w-6 h-6 text-chayam-green" />,
  Truck: <Truck className="w-6 h-6 text-chayam-green" />,
};

interface ServicesGridProps {
  onOpenEnquiry: (serviceSlug?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-[40px] font-black font-display text-chayam-charcoal tracking-tight">
            Our Services
          </h2>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              className="group relative bg-chayam-green-mint/60 hover:bg-white rounded-3xl p-6 border border-emerald-100/80 hover:border-chayam-green shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Image Thumbnail */}
              <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 p-2.5 bg-white/90 backdrop-blur-md rounded-xl shadow-md">
                  {iconMap[service.icon] || <Lightbulb className="w-6 h-6 text-chayam-green" />}
                </div>
              </div>

              {/* Title & Short Description */}
              <div className="space-y-3 mb-6">
                <h3 className="text-[32px] font-bold font-display text-chayam-charcoal group-hover:text-chayam-green transition-colors leading-tight">
                  {service.title}
                </h3>
                {service.shortDesc && (
                  <p className="text-[16px] text-gray-600 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-emerald-100 flex items-center justify-between gap-2">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-[16px] font-bold text-chayam-charcoal group-hover:text-chayam-green flex items-center gap-1 hover:underline"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={companyData.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-chayam-green hover:bg-chayam-green-hover text-white font-bold text-xs rounded-lg shadow-sm transition-transform group-hover:scale-105"
                >
                  Enquire
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
