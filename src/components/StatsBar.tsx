import React from 'react';
import { Award, CheckCircle, Users, Clock, ShieldCheck } from 'lucide-react';
import { companyData } from '@/data/company';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: <CheckCircle className="w-8 h-8 text-chayam-green" />,
      number: companyData.stats.projectsCompleted,
      label: 'Projects Completed Across Kerala',
      subtext: 'Retail facades, billboards & indoor branding',
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      number: companyData.stats.experienceYears,
      label: 'Industry Excellence',
      subtext: 'Established 2006 in Mukkam, Kozhikode',
    },
    {
      icon: <Users className="w-8 h-8 text-chayam-green" />,
      number: companyData.stats.skilledArtisans,
      label: 'In-House Technicians & Riggers',
      subtext: 'CNC operators, welders & electric engineers',
    },
    {
      icon: <Clock className="w-8 h-8 text-emerald-600" />,
      number: companyData.stats.onTimeInstallation,
      label: 'Rigging Guarantee',
      subtext: '24/7 shift ops for rush opening deadlines',
    },
  ];

  return (
    <section className="bg-gradient-to-r from-chayam-charcoal via-chayam-charcoal-light to-chayam-charcoal text-white py-12 border-y border-emerald-900/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#09b37d_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-chayam-green/50 hover:bg-white/10 transition-all group"
            >
              <div className="p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>

              <div>
                <div className="text-3xl font-black font-display tracking-tight text-white group-hover:text-chayam-green transition-colors">
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-gray-200">{stat.label}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.subtext}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
