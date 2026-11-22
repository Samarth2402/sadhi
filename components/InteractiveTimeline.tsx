'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Building2, Gift, Film, Heart, Compass, Sparkles, Coffee, Zap, Plane } from 'lucide-react';
import { TIMELINE_EVENTS } from '@/lib/story-data';

interface InteractiveTimelineProps {
  onSelectChapter: (chapterId: string) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-4 h-4 text-terracotta" />,
  Gift: <Gift className="w-4 h-4 text-rose-600" />,
  Film: <Film className="w-4 h-4 text-mutedblue" />,
  Heart: <Heart className="w-4 h-4 text-dustyrose" />,
  Compass: <Compass className="w-4 h-4 text-sage" />,
  Sparkles: <Sparkles className="w-4 h-4 text-warmgold" />,
  Coffee: <Coffee className="w-4 h-4 text-amber-700" />,
  Zap: <Zap className="w-4 h-4 text-indigo-600" />,
  Plane: <Plane className="w-4 h-4 text-sky-600" />,
};

const CHAPTER_TARGETS = [
  'chapter-1-the-beginning',
  'chapter-2-little-things',
  'chapter-3-rainy-movie-day',
  'chapter-4-all-in-one-friend',
  'chapter-5-outings-and-banter',
  'chapter-6-diwali-memories',
  'chapter-7-lunchtime-rituals',
  'chapter-8-tom-and-jerry',
  'chapter-9-unending-story',
];

export default function InteractiveTimeline({ onSelectChapter }: InteractiveTimelineProps) {
  return (
    <section className="py-20 bg-ivory relative border-b border-amber-900/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ivory-dark border border-amber-900/15 text-warmbrown text-xs font-sans font-bold tracking-widest uppercase mb-3">
            <Clock className="w-3.5 h-3.5 text-terracotta" />
            <span>Interactive Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-warmbrown-dark">
            The Timeline of Memories
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-warmbrown/75 mt-2">
            Click any milestone to jump directly into that chapter of our story
          </p>
        </div>

        {/* Timeline Horizontal / Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TIMELINE_EVENTS.map((event, idx) => {
            const targetId = CHAPTER_TARGETS[idx];

            return (
              <motion.div
                key={idx}
                whileHover={{ y: -3, scale: 1.02 }}
                onClick={() => onSelectChapter(targetId)}
                className="paper-card rounded-xl p-5 bg-[#FDFCFA] border border-[#E3D9CC] shadow-sm hover:shadow-md cursor-pointer transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-terracotta bg-terracotta/10 px-2 py-0.5 rounded">
                      {event.year}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-ivory-dark border border-amber-900/10 flex items-center justify-center">
                      {ICON_MAP[event.icon]}
                    </div>
                  </div>

                  <span className="text-xs font-serif italic text-warmbrown/60 block mb-1">
                    {event.period}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-warmbrown-dark group-hover:text-terracotta transition-colors leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-xs font-sans text-warmbrown/75 mt-2 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-900/10 flex items-center justify-between text-[11px] font-sans text-warmbrown/50">
                  <span className="font-medium bg-amber-900/5 px-2 py-0.5 rounded">
                    #{event.tag}
                  </span>
                  <span className="text-terracotta font-medium group-hover:underline">
                    Read Chapter →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
