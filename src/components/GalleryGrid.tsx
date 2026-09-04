'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, MapPin, Building, Calendar, X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { projectsData, ProjectItem } from '@/data/projects';

interface GalleryGridProps {
  onOpenEnquiry?: (serviceSlug?: string) => void;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    'All Projects',
    'LED Signage',
    'Indoor',
    'Outdoor',
    'Printing',
    'Custom Works',
  ];

  const filteredProjects =
    selectedCategory === 'All Projects'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Sticky Category Filter Bar */}
      <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-emerald-100 shadow-md flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-chayam-green text-white shadow-glow scale-105'
                : 'bg-gray-100 text-chayam-charcoal hover:bg-emerald-50 hover:text-chayam-green'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid - 12 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group relative bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-card hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Image Container */}
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />


            </div>

            {/* Bottom Card Summary Bar */}
            <div className="p-4 bg-chayam-green-subtle flex items-center justify-between border-t border-emerald-100">
              <span className="text-xs font-bold text-chayam-charcoal flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-chayam-green" />
                <span>Installed {project.year}</span>
              </span>

              <span className="text-xs font-bold text-chayam-green flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                View Details
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Project Lightbox Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-100 animate-in zoom-in-95 duration-200">
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2.5 bg-black/50 hover:bg-black text-white rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal High-Res Image */}
            <div className="relative w-full h-80 sm:h-96">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-3 py-1 bg-chayam-green text-xs font-bold uppercase rounded-full">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-black font-display mt-2">{selectedProject.title}</h3>
              </div>
            </div>

            {/* Modal Technical Details */}
            <div className="p-6 space-y-4">
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-700 bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                <div className="flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-chayam-green" />
                  <span>Client: <strong>{selectedProject.client}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-chayam-green" />
                  <span>Location: <strong>{selectedProject.location}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-chayam-green" />
                  <span>Year: <strong>{selectedProject.year}</strong></span>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {selectedProject.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-chayam-charcoal uppercase tracking-wider mb-2">
                  Technical Specifications & Materials:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {selectedProject.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="p-2 bg-gray-100 rounded-lg text-xs font-medium text-chayam-charcoal flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-chayam-green flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-chayam-charcoal font-bold text-xs rounded-xl"
                >
                  Close Preview
                </button>
                {onOpenEnquiry && (
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenEnquiry();
                    }}
                    className="px-5 py-2.5 bg-chayam-green text-white font-bold text-xs rounded-xl shadow-glow"
                  >
                    Request Similar Signage Quote
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
