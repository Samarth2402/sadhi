'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Quote } from 'lucide-react';
import { ALL_PHOTOS } from '@/lib/story-data';
import { PhotoItem } from '@/lib/types';

interface GujaratiWishesCardProps {
  onOpenPhoto: (photo: PhotoItem) => void;
}

export default function GujaratiWishesCard({ onOpenPhoto }: GujaratiWishesCardProps) {
  return (
    <section className="py-20 relative overflow-hidden bg-[#FAF6EE] border-b border-amber-900/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-warmgold/20 border border-warmgold/30 text-warmbrown text-xs font-sans font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Verbatim Gujarati Wishes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-warmbrown-dark">
            Riddhi’s Diwali & New Year Blessings
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-warmbrown/75 mt-2">
            The authentic words sent with warmth, humor, and sisterly blessings
          </p>
        </div>

        {/* Card Layout: Words + Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Authentic Words Container */}
          <div className="lg:col-span-7 paper-card rounded-2xl p-6 sm:p-9 bg-[#FFFDF9] border border-[#DECFBE] shadow-xl relative">
            <div className="washi-tape washi-tape-warmgold -top-3 left-10" />

            {/* Quote Badge */}
            <div className="flex items-center gap-2 text-terracotta mb-4">
              <Quote className="w-5 h-5 text-terracotta" />
              <span className="text-xs uppercase font-sans tracking-widest font-bold">
                From Riddhi to Samarth
              </span>
            </div>

            {/* Authentic Text in Gujarati */}
            <div className="space-y-4 text-warmbrown-dark font-sans leading-relaxed text-sm sm:text-base border-l-2 border-warmgold/40 pl-4 py-1">
              <p className="font-serif text-xl sm:text-2xl text-terracotta font-semibold italic">
                “Happy new year Samarth 🪔🎇”
              </p>

              <p>
                “I wish tari badhi ichaao puri thay, bau sari job kare tu agad and tari dream car ley.
                And hu j tara mate gift chu new year ni yaad rakhje mari baju ma besva malyu tane,
                bau ocha loko ne besva male samjyo! 😎”
              </p>

              <p>
                “Baki toh bhagvan ae kidhu ke ja Samarth ni life ma ane heran karje toh ae sidho rese thodo,
                atle hu heran karu chu tane. Baki last last ma year khatam thata kai saru thayu ae tara jode
                frndship thai ae atlu farya movie joi Sindhu Bhavan and sathe jamvanu.”
              </p>

              <p>
                “Mast life aam j nikade ups and down ma je thase joyu jase, and agad bi jode farsu Dubai thi India
                and India thi Dubai Canada fari laisu countries! ✈️”
              </p>

              <p className="font-serif italic text-base sm:text-lg text-warmbrown bg-amber-50/70 p-3 rounded-lg border border-amber-900/10">
                “Thank you mara mate gifts and chocolates lava maate atli badhi... love you as brother as a frnd
                and I’ll be always there for you. Miss you spark employee #senior #mansi no bestieeee! 🧿🧿”
              </p>
            </div>

            {/* Translation Footnote */}
            <div className="mt-6 pt-4 border-t border-amber-900/10 text-xs font-sans text-warmbrown/70 space-y-1">
              <p className="font-semibold text-terracotta">English Translation Essence:</p>
              <p className="italic">
                "Remember, I am your greatest New Year gift—few people get the privilege to sit beside me!
                God told me to enter your life and irritate you so you stay grounded, that's why I tease you.
                Thank you for all the chocolates and gifts. Love you as a brother and best friend—I’ll always be there for you anytime, anywhere!"
              </p>
            </div>
          </div>

          {/* Diya Photograph Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.03, rotate: 0 }}
              onClick={() => onOpenPhoto(ALL_PHOTOS.riddhi_diya)}
              className="polaroid-frame rotate-2 max-w-xs cursor-pointer shadow-2xl"
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
                <span className="font-handwriting text-xl text-warmbrown-dark block">
                  The Warmth of Diya 🪔✨
                </span>
                <span className="text-[11px] font-sans text-warmbrown/60">
                  Riddhi • Festive Light & Prayer
                </span>
              </div>
            </motion.div>
            <p className="text-xs font-sans text-warmbrown/50 mt-4 text-center">
              Click photo to open full-screen view
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
