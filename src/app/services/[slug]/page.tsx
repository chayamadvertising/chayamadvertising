import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Phone,
  ArrowRight,
  Building,
  CheckCircle2,
  MapPin,
  Sparkles,
  Layers,
  Cpu
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { servicesData } from '@/data/services';
import { companyData } from '@/data/company';
import { industryVerticalsData } from '@/data/clients';
import { FAQAccordion } from '@/components/FAQAccordion';

// Generate static params for SSG pre-rendering at build time
export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 opacity-0 animate-fade-up">
      {/* Page Title / Hero Banner */}
      <section className="relative w-full h-[500px] sm:h-[600px] bg-chayam-charcoal flex items-center justify-center overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-chayam-charcoal via-black/40 to-black/60" />

        <div className="relative z-10 w-full max-w-[800px] mx-auto px-4 text-center space-y-4 text-white opacity-0 animate-fade-up-delayed">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-chayam-green text-white font-bold text-xs uppercase tracking-widest shadow-glow">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>Chayam Specialty Division</span>
          </div>

          <h1 className="text-[44px] font-bold font-display tracking-tight text-white leading-tight">
            {service.title}
          </h1>

          <p className="text-[18px] font-medium text-gray-200 leading-relaxed">
            {service.shortDesc}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={`tel:${companyData.rawPhone}`}
              className="px-6 py-3 bg-chayam-green hover:bg-chayam-green-hover text-white font-bold text-sm rounded-xl shadow-glow flex items-center gap-2 transition-transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Call Direct (+91 9048239785)</span>
            </a>

            <a
              href={companyData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm rounded-xl flex items-center gap-2 transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>Instant WhatsApp Enquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* Overview & Feature Blocks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-[36px] font-semibold font-display text-chayam-charcoal leading-tight">
              {service.overviewTitle || `What is ${service.title}?`}
            </h2>
            <div className="space-y-4">
              {service.fullDesc.map((paragraph, i) => (
                <p key={i} className="text-[16px] text-gray-700 leading-[1.6]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="relative w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={service.overviewImage || service.heroImage}
              alt={service.overviewTitle || service.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. Industries We Serve Section */}
      <section className="py-16 bg-emerald-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <h2 className="text-[36px] font-semibold font-display text-chayam-charcoal leading-tight">
              Industries We Serve
            </h2>
            <p className="text-[18px] font-sans text-gray-600 leading-relaxed">
              From real estate, healthcare, to corporate industries, we serve all industry types with top-notch quality large format printing services. No matter your business type, we maximize your brand's presence with impactful prints.
            </p>
          </div>

          {/* 12 Industry Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryVerticalsData.map((industry, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-card border border-gray-100 flex flex-col items-center group"
              >
                <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                  <Image
                    src={industry.image} 
                    alt={industry.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="p-6 text-center w-full">
                  <h3 className="text-[20px] font-sans font-bold text-chayam-charcoal">
                    {industry.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types / Features Cards OR Process Steps */}
      {(service.serviceTypes || service.processSteps) && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-[36px] font-semibold font-display text-chayam-charcoal leading-tight">
              {service.serviceTypes ? 'Types of Signage & Services' : 'Our Design Process'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(service.serviceTypes || service.processSteps)?.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 shadow-card rounded-2xl p-8 space-y-4">
                <h3 className="text-[22px] font-semibold text-chayam-charcoal leading-snug text-left">
                  {item.title}
                </h3>
                <p className="text-[15px] text-gray-600 leading-[1.6] text-left">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}



      {/* Project Gallery / Showcase Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-[36px] font-semibold font-display text-chayam-charcoal leading-tight">
            Recent Installations Portfolio
          </h2>
          <Link
            href="/gallery"
            className="text-[16px] font-bold text-chayam-green hover:underline flex items-center gap-1"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.recentInstallations.map((inst, i) => (
            <div
              key={i}
              className="relative h-72 rounded-3xl overflow-hidden shadow-xl group border border-emerald-100"
            >
              <Image
                src={inst.image}
                alt={inst.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white space-y-1 text-left">
                <span className="text-xs font-bold text-emerald-400 uppercase">
                  {inst.client}
                </span>
                <h3 className="text-[22px] font-semibold font-display">{inst.title}</h3>
                <p className="text-[15px] text-gray-300 flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  {inst.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}
