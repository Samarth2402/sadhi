'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Sparkles, Quote, CheckCircle2 } from 'lucide-react';
import { StoryChapter, PhotoItem } from '@/lib/types';

interface ChapterCardProps {
  chapter: StoryChapter;
  onOpenPhoto: (photo: PhotoItem) => void;
  index: number;
}

export default function ChapterCard({ chapter, onOpenPhoto, index }: ChapterCardProps) {
  return (
    <article
      id={chapter.id}
      className="scroll-mt-24 py-16 md:py-24 border-b border-amber-900/10 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Chapter Header */}
        <div className="mb-10 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-sans font-bold tracking-widest uppercase bg-terracotta/10 text-terracotta border border-terracotta/20">
              Chapter {chapter.chapterNumber.toString().padStart(2, '0')}
            </span>
            {chapter.dateBadge && (
              <span className="flex items-center gap-1.5 text-xs font-sans text-warmbrown/70 bg-ivory-dark px-3 py-1 rounded-full border border-amber-900/10">
                <Calendar className="w-3.5 h-3.5 text-terracotta" />
                {chapter.dateBadge}
              </span>
            )}
            {chapter.location && (
              <span className="flex items-center gap-1.5 text-xs font-sans text-warmbrown/70 bg-ivory-dark px-3 py-1 rounded-full border border-amber-900/10">
                <MapPin className="w-3.5 h-3.5 text-sage" />
                {chapter.location}
              </span>
            )}
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-warmbrown-dark tracking-tight leading-tight">
            {chapter.title}
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-warmbrown/75 mt-1">
            {chapter.subtitle}
          </p>
        </div>

        {/* Content Grid: Narrative & Scrapbook Elements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="paper-card rounded-2xl p-6 sm:p-8 bg-[#FDFCFA] border border-[#E3D9CC]">
              <div className="space-y-4 text-warmbrown/90 leading-relaxed font-sans text-base">
                {chapter.paragraphs.map((para, i) => (
                  <p key={i} className="text-justify sm:text-left">
                    {para}
                  </p>
                ))}
              </div>

              {/* Key Highlights Pill Box */}
              <div className="mt-8 pt-6 border-t border-amber-900/10">
                <h4 className="text-xs uppercase tracking-widest text-terracotta font-semibold mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-terracotta" />
                  <span>Unforgettable Moments</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {chapter.keyHighlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs text-warmbrown/80 font-sans"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-sage flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Keepsake Callout if present */}
            {chapter.keepsake && (
              <motion.div
                whileHover={{ y: -2 }}
                className={`p-4 rounded-xl border flex items-start gap-3.5 shadow-sm ${chapter.keepsake.color}`}
              >
                <div className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center text-xl flex-shrink-0 shadow-inner">
                  {chapter.keepsake.emoji}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-sans font-bold uppercase tracking-wider opacity-75">
                      Memory Artifact
                    </span>
                    <span className="text-xs font-serif italic opacity-75">
                      {chapter.keepsake.name}
                    </span>
                  </div>
                  <p className="text-xs font-sans mt-0.5 opacity-90 leading-snug">
                    {chapter.keepsake.details}
                  </p>
                  {chapter.keepsake.quote && (
                    <p className="text-xs font-handwriting text-warmbrown-dark mt-2 font-medium">
                      “{chapter.keepsake.quote}”
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* Scrapbook Side: Handwritten Sticky Notes & Attached Polaroids */}
          <div className="lg:col-span-5 space-y-6">
            {/* Handwritten Sticky Notes */}
            {chapter.scrapbookNotes.map((note, nIdx) => {
              const tapeClasses = {
                terracotta: 'washi-tape-terracotta',
                sage: 'washi-tape-sage',
                warmgold: 'washi-tape-warmgold',
                dustyrose: 'washi-tape-dustyrose',
                mutedblue: 'washi-tape-mutedblue',
              }[note.tapeColor];

              return (
                <div
                  key={nIdx}
                  className={`scrapbook-note rounded-lg p-5 border border-amber-900/15 shadow-sm relative ${note.rotation || ''}`}
                >
                  <div className={`washi-tape ${tapeClasses} -top-2.5 left-1/3`} />
                  <div className="flex items-start gap-2 mb-2">
                    <Quote className="w-4 h-4 text-terracotta/40 flex-shrink-0 mt-0.5" />
                    <p className="font-handwriting text-xl sm:text-2xl text-warmbrown-dark leading-snug whitespace-pre-line">
                      {note.text}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-sans uppercase tracking-widest text-warmbrown/50 font-medium">
                      — {note.author}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Attached Photographs for this Chapter */}
            {chapter.photos.length > 0 && (
              <div className="space-y-6 pt-2">
                {chapter.photos.map((photo) => (
                  <motion.div
                    key={photo.id}
                    whileHover={{ scale: 1.03, rotate: 0 }}
                    onClick={() => onOpenPhoto(photo)}
                    className={`polaroid-frame relative ${photo.scrapbookRotation}`}
                  >
                    <div className="aspect-[4/3] bg-stone-100 overflow-hidden rounded-sm relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/api/photos/${photo.id}`}
                        alt={photo.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="pt-3 px-1">
                      <p className="font-handwriting text-lg text-warmbrown-dark leading-tight">
                        {photo.caption}
                      </p>
                      <div className="flex items-center justify-between mt-2 text-[11px] text-warmbrown/50 font-sans">
                        <span>{photo.dateTag}</span>
                        <span className="text-terracotta font-medium hover:underline">
                          View High-Res ↗
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
