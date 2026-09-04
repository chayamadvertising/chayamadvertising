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

              {onOpenEnquiry && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenEnquiry();
                  }}
                  className="w-full sm:w-auto px-4 py-2 bg-chayam-green text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 shadow-glow transition-colors"
                >
                  Enquiry
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Simplified Image Lightbox Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center justify-center animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-12 right-0 z-20 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal High-Res Image Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
            </div>
            
            {/* Title / Client Info */}
            <div className="mt-4 text-center">
              <h3 className="text-white text-lg sm:text-xl font-bold">{selectedProject.title}</h3>
              <p className="text-gray-300 text-sm">{selectedProject.client}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
