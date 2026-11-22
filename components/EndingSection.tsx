'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Sparkles } from 'lucide-react';
import { ALL_PHOTOS } from '@/lib/story-data';
import { PhotoItem } from '@/lib/types';

interface EndingSectionProps {
  onScrollToTop: () => void;
  onOpenPhoto?: (photo: PhotoItem) => void;
}

export default function EndingSection({ onScrollToTop, onOpenPhoto }: EndingSectionProps) {
  return (
    <section className="relative min-h-screen py-32 md:py-48 flex items-center justify-center sunset-scene-bg overflow-hidden text-center">
      {/* Cinematic Sunset Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Giant Sunset Orb */}
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[850px] md:h-[850px] rounded-full bg-gradient-to-t from-orange-200/40 via-rose-200/30 to-transparent blur-3xl opacity-70" />

        {/* Ambient Twilight Floating Lights */}
        <motion.div
          animate={{
            y: [-15, 15, -15],
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-amber-200/35 blur-2xl"
        />
        <motion.div
          animate={{
            y: [15, -15, 15],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/3 right-1/5 w-72 h-72 rounded-full bg-rose-200/30 blur-2xl"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Scene 1: Tasteful Scrapbook Keepsake in Sunset Light */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 relative"
        >
          <div className="relative inline-flex items-center justify-center">
            {/* Left Photo: Diwali Sofa Portrait */}
            <motion.div
              whileHover={{ scale: 1.04, rotate: -4, zIndex: 20 }}
              onClick={() => onOpenPhoto && onOpenPhoto(ALL_PHOTOS.diwali_portrait)}
              className="polaroid-frame -rotate-4 w-48 sm:w-56 md:w-64 cursor-pointer shadow-2xl transition-transform"
            >
              <div className="washi-tape washi-tape-warmgold -top-3 left-4" />
              <div className="aspect-[4/3] bg-stone-100 overflow-hidden rounded-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/api/photos/diwali_portrait"
                  alt={ALL_PHOTOS.diwali_portrait.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-2.5 text-center">
                <span className="font-handwriting text-base sm:text-lg text-warmbrown-dark block">
                  Nov 6 Diwali Sofa 🛋️
                </span>
              </div>
            </motion.div>

            {/* Right Photo: Diya Glow (Riddhi) */}
            <motion.div
              whileHover={{ scale: 1.04, rotate: 5, zIndex: 20 }}
              onClick={() => onOpenPhoto && onOpenPhoto(ALL_PHOTOS.riddhi_diya)}
              className="polaroid-frame rotate-5 w-40 sm:w-48 md:w-56 -ml-8 sm:-ml-12 sm:translate-y-4 cursor-pointer shadow-2xl transition-transform"
            >
              <div className="washi-tape washi-tape-terracotta -top-3 right-4" />
              <div className="aspect-[3/4] bg-stone-100 overflow-hidden rounded-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/api/photos/riddhi_diya"
                  alt={ALL_PHOTOS.riddhi_diya.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-2.5 text-center">
                <span className="font-handwriting text-base sm:text-lg text-warmbrown-dark block">
                  The Diya Glow 🪔
                </span>
              </div>
            </motion.div>
          </div>

          <p className="font-handwriting text-lg sm:text-xl text-warmbrown/70 mt-6 block">
            To all the memories behind us, and every chapter yet to be written.
          </p>
        </motion.div>

        {/* Scene 2: Breathing Space & Emotional Lead-in */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory/80 border border-amber-900/15 backdrop-blur-sm shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            <span className="text-xs font-sans font-medium uppercase tracking-widest text-warmbrown/80">
              The Journey Continues
            </span>
          </div>
        </motion.div>

        {/* Scene 3: The Cinematic Main Message with Original Font Styles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.3 }}
          className="space-y-4 mb-10 max-w-2xl mx-auto"
        >
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-warmbrown-dark leading-snug">
            “Some stories have an ending. Ours has another chapter.”
          </p>

          <p className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-terracotta tracking-tight">
            To be continued...
          </p>

          <div className="w-20 h-0.5 bg-amber-900/20 mx-auto my-6" />

          {/* Personal Sign-off in beloved original handwriting style */}
          <p className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-warmbrown-dark pt-2">
            Forever your irritating friend,
          </p>
          <p className="font-serif text-2xl sm:text-3xl font-bold text-terracotta">
            Samarth <span className="font-serif font-normal italic text-warmbrown/70 text-xl sm:text-2xl">(Spidey)</span>
          </p>
        </motion.div>

        {/* Scene 4: Peaceful Return Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-14 sm:mt-20 flex flex-col items-center gap-3"
        >
          <button
            onClick={onScrollToTop}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-ivory/80 hover:bg-ivory border border-amber-900/15 text-warmbrown hover:text-terracotta text-xs font-sans font-medium uppercase tracking-wider transition-all shadow-sm hover:shadow active:scale-95 backdrop-blur-sm"
          >
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 text-terracotta" />
            <span>Return to the Beginning</span>
          </button>
          <span className="text-[11px] font-sans text-warmbrown/50 tracking-wider">
            Capermint Technology • Sindhu Bhavan • Dubai • Canada • Forever
          </span>
        </motion.div>
      </div>
    </section>
  );
}
