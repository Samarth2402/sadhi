'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, ChevronDown } from 'lucide-react';
import { ALL_PHOTOS } from '@/lib/story-data';
import { PhotoItem } from '@/lib/types';

interface HeroProps {
  onStartStory: () => void;
  onOpenPhoto: (photo: PhotoItem) => void;
}

export default function Hero({ onStartStory, onOpenPhoto }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Editorial Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-amber-100/40 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-rose-100/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-50/30 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Monogram & Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory-dark border border-amber-900/15 mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-terracotta" />
          <span className="text-xs font-sans tracking-widest uppercase font-semibold text-warmbrown">
            Capermint Technology • 2026 & Beyond
          </span>
        </motion.div>

        {/* Main Title Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="space-y-3 mb-6"
        >
          <h2 className="font-sans text-sm md:text-base uppercase tracking-[0.25em] text-terracotta font-semibold">
            Samarth × Riddhi
          </h2>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-warmbrown-dark tracking-tight leading-[1.05]">
            The Unending Story
          </h1>
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-warmbrown/80 max-w-2xl mx-auto pt-2">
            One Office. A Thousand Memories. An Unending Story.
          </p>
        </motion.div>

        {/* Story Intro Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-2xl mx-auto text-sm sm:text-base font-sans text-warmbrown/75 leading-relaxed mb-10"
        >
          From passing nods in the Capermint hallways to side-by-side workstations,
          Kinder Joy surprises, soaking wet movie evenings, and endless Tom & Jerry banters—a
          celebration of an unbreakable brother-sister best friendship that will outlast any distance.
        </motion.p>

        {/* Scrapbook Visual Composition: 3 Floating Polaroids Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-4xl mx-auto my-10 py-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 md:gap-8 items-center justify-center">
            {/* Polaroid 1: Sofa Portrait */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -4, zIndex: 30 }}
              className="polaroid-frame -rotate-3 transition-transform"
              onClick={() => onOpenPhoto(ALL_PHOTOS.diwali_portrait)}
            >
              <div className="washi-tape washi-tape-warmgold -top-3 left-6" />
              <div className="aspect-[4/3] bg-stone-100 overflow-hidden rounded-sm relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/api/photos/diwali_portrait"
                  alt={ALL_PHOTOS.diwali_portrait.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-3 text-center">
                <span className="font-handwriting text-lg text-warmbrown-dark block">
                  Nov 6 Diwali Sofa 🛋️
                </span>
                <span className="text-[10px] uppercase tracking-wider text-warmbrown/50 font-sans">
                  Click to inspect
                </span>
              </div>
            </motion.div>

            {/* Polaroid 2: Centerpiece Diya (Riddhi) */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
              className="polaroid-frame sm:-translate-y-4 rotate-1 transition-transform"
              onClick={() => onOpenPhoto(ALL_PHOTOS.riddhi_diya)}
            >
              <div className="washi-tape washi-tape-terracotta -top-3 right-6" />
              <div className="aspect-[3/4] bg-stone-100 overflow-hidden rounded-sm relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/api/photos/riddhi_diya"
                  alt={ALL_PHOTOS.riddhi_diya.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-3 text-center">
                <span className="font-handwriting text-lg text-warmbrown-dark block">
                  Diwali Wishes & Light 🪔
                </span>
                <span className="text-[10px] uppercase tracking-wider text-warmbrown/50 font-sans">
                  Click to inspect
                </span>
              </div>
            </motion.div>

            {/* Polaroid 3: Playful Sofa Teasing */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 4, zIndex: 30 }}
              className="polaroid-frame rotate-3 transition-transform"
              onClick={() => onOpenPhoto(ALL_PHOTOS.diwali_playful)}
            >
              <div className="washi-tape washi-tape-sage -top-3 left-8" />
              <div className="aspect-[4/3] bg-stone-100 overflow-hidden rounded-sm relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/api/photos/diwali_playful"
                  alt={ALL_PHOTOS.diwali_playful.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-3 text-center">
                <span className="font-handwriting text-lg text-warmbrown-dark block">
                  Tom & Jerry Mode 🐱🐭
                </span>
                <span className="text-[10px] uppercase tracking-wider text-warmbrown/50 font-sans">
                  Click to inspect
                </span>
              </div>
            </motion.div>
          </div>
          <p className="text-xs font-sans text-warmbrown/50 mt-4 italic">
            * All five authentic original photographs are preserved inside our private memory vault.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={onStartStory}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-terracotta hover:bg-terracotta-dark text-ivory font-sans font-medium text-sm tracking-wide uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 active:scale-95 group"
          >
            <BookOpen className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            <span>Begin The Story</span>
          </button>

          <a
            href="#tom-jerry-corner"
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-ivory-dark hover:bg-cream border border-amber-900/15 text-warmbrown font-sans font-medium text-sm transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <span>🐱🐭 The Tom & Jerry Dynamic</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-16 text-warmbrown/40 flex flex-col items-center gap-1 cursor-pointer"
          onClick={onStartStory}
        >
          <span className="text-[11px] font-sans uppercase tracking-widest">Scroll to explore</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </div>
    </section>
  );
}
