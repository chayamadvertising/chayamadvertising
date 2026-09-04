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
            <div className="p-4 bg-chayam-green-subtle flex flex-col sm:flex-row items-center justify-between border-t border-emerald-100 gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(project);
                }}
                className="w-full sm:w-auto px-4 py-2 bg-chayam-charcoal text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 hover:bg-black transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                View Image
              </button>

              {/* Direct WhatsApp Enquiry Button */}
              <a
                href={`https://wa.me/919048239785?text=Hi, I would like to enquire about this project from your gallery: ${encodeURIComponent(project.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-full sm:w-auto px-4 py-2 bg-chayam-green text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 shadow-glow transition-colors hover:bg-emerald-700"
              >
                Enquiry
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Simplified Image Lightbox Modal - Full Screen Zoom on Mobile (Black), White Background on Desktop */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black sm:bg-white/95 sm:backdrop-blur-md p-0 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          {/* Modal Close Button */}
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[110] p-2.5 bg-white/20 sm:bg-gray-100 hover:bg-white/30 sm:hover:bg-gray-200 text-white sm:text-black rounded-full transition-colors shadow-sm"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="relative w-full h-full sm:max-w-6xl sm:max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal High-Res Image Container - Scales fully without borders on mobile */}
            <div className="relative w-full h-full flex items-center justify-center flex-1 min-h-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="max-w-full max-h-full object-contain shadow-none sm:shadow-2xl rounded-none sm:rounded-xl"
              />
            </div>
            
            {/* Title / Client Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:static sm:p-0 sm:mt-4 text-center shrink-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent sm:bg-none pointer-events-none">
              <h3 className="text-white sm:text-chayam-charcoal text-lg sm:text-2xl font-bold">{selectedProject.title}</h3>
              <p className="text-gray-300 sm:text-gray-500 text-sm font-medium">{selectedProject.client}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
