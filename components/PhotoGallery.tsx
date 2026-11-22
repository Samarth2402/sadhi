'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, ShieldCheck } from 'lucide-react';
import { ALL_PHOTOS } from '@/lib/story-data';
import { PhotoItem } from '@/lib/types';

interface PhotoGalleryProps {
  onOpenPhoto: (photo: PhotoItem) => void;
}

export default function PhotoGallery({ onOpenPhoto }: PhotoGalleryProps) {
  const photoList = Object.values(ALL_PHOTOS);

  return (
    <section id="diwali-gallery" className="py-24 relative overflow-hidden bg-[#F6F1E9] border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory border border-amber-900/15 text-terracotta text-xs font-sans font-bold tracking-widest uppercase mb-3 shadow-sm">
            <ImageIcon className="w-3.5 h-3.5 text-terracotta" />
            <span>The Five Authentic Memories</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-warmbrown-dark">
            Our Scrapbook Photo Album
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-warmbrown/75 mt-2">
            Preserving our original photographs exactly as they were captured—candid, festive, and real.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-xs font-sans text-warmbrown/60">
            <ShieldCheck className="w-4 h-4 text-sage" />
            <span>Encrypted private memory vault • Click any Polaroid to inspect in full resolution</span>
          </div>
        </div>

        {/* Scrapbook Polaroid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-start">
          {photoList.map((photo, index) => {
            const washiTapes = [
              'washi-tape-warmgold',
              'washi-tape-terracotta',
              'washi-tape-sage',
              'washi-tape-dustyrose',
              'washi-tape-mutedblue',
            ];
            const tapeClass = washiTapes[index % washiTapes.length];

            return (
              <motion.div
                key={photo.id}
                whileHover={{ scale: 1.04, rotate: 0 }}
                onClick={() => onOpenPhoto(photo)}
                className={`polaroid-frame relative ${photo.scrapbookRotation} group`}
              >
                {/* Decorative Washi Tape */}
                <div className={`washi-tape ${tapeClass} -top-3.5 ${index % 2 === 0 ? 'left-8' : 'right-8'}`} />

                {/* Photo Container */}
                <div
                  className={`bg-stone-100 overflow-hidden rounded-sm relative ${
                    photo.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/api/photos/${photo.id}`}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-amber-950/0 group-hover:bg-amber-950/10 transition-colors pointer-events-none" />
                </div>

                {/* Polaroid Caption Footer */}
                <div className="pt-4 px-1 text-center">
                  <h3 className="font-serif text-lg font-bold text-warmbrown-dark leading-snug">
                    {photo.title}
                  </h3>
                  <p className="font-handwriting text-xl text-terracotta mt-1 leading-snug">
                    "{photo.caption}"
                  </p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-amber-900/10 text-[11px] font-sans text-warmbrown/50">
                    <span>{photo.dateTag}</span>
                    <span className="font-medium text-terracotta group-hover:underline">
                      View Full Size ↗
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sibling bond footnote */}
        <div className="mt-14 text-center">
          <p className="text-xs font-sans text-warmbrown/60 max-w-xl mx-auto leading-relaxed">
            * Three photographs celebrate our Diwali moments side-by-side on the sofa; two celebrate Riddhi’s festive light and childhood memory. Zero AI modifications, zero filters—just authentic, genuine friendship.
          </p>
        </div>
      </div>
    </section>
  );
}
