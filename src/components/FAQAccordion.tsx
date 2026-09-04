'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { ServiceFAQ } from '@/data/services';

interface FAQAccordionProps {
  faqs: ServiceFAQ[];
  title?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  title = 'Frequently Asked Technical Questions',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {title && (
        <h3 className="text-2xl font-bold font-display text-chayam-charcoal flex items-center gap-2 mb-6">
          <HelpCircle className="w-6 h-6 text-chayam-green" />
          <span>{title}</span>
        </h3>
      )}

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isOpen
                  ? 'bg-chayam-green-mint/80 border-chayam-green shadow-md'
                  : 'bg-white border-gray-200 hover:border-emerald-300'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-5 text-left font-bold text-chayam-charcoal text-base flex justify-between items-center gap-4 focus:outline-none"
              >
                <span className="flex-1 leading-snug">{faq.question}</span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                    isOpen ? 'bg-chayam-green text-white rotate-180' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-sm text-gray-700 leading-relaxed border-t border-emerald-100/60 animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
