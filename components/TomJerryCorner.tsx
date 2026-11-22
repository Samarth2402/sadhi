'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, HeartHandshake, ShieldAlert, CheckCircle, Sparkles } from 'lucide-react';

const SIBLING_BANTERS = [
  {
    title: 'The Infamous 18-10-26 Resignation',
    situation: 'Samarth declaring eternal distance at the office',
    quote: '“Whatever we have is strictly professional at the office now, nothing beyond that—nothing more from my side. Goodbye story! 🛑”',
    resolution: 'Literally next day: “Once again, everything has been resolved 😂 We truly are Tom & Jerry!”',
    mood: 'Peak Overthinking vs Instant Forgiveness',
  },
  {
    title: 'The Yellow Top Girl Conspiracy',
    situation: 'Samarth demanding wingwoman assistance',
    quote: '“‘The girl with short hair in the light yellow top, black pants, and red buckle folding her arms’—she was the absolute best and you didn’t help me talk to her! Very bad of you, RIDDHI SHAH! 😤”',
    resolution: 'Riddhi: “You’re lucky you sit next to me, don’t push your luck!”',
    mood: 'Wingwoman Fail of the Century',
  },
  {
    title: 'The Mobile Phone Addict Alert',
    situation: 'During Sindhu Bhavan drive & shopping trip',
    quote: '“Yes, talk to him, but please don’t ignore the physical human sitting right in front of you! 📵 It can become a big problem, Spidyy!”',
    resolution: 'Riddhi: *Continues looking at phone screen smiling*',
    mood: 'Physical Human vs Smartphone Screen',
  },
  {
    title: 'The Great Tomato & Chaas Heist',
    situation: 'Every afternoon at lunch',
    quote: '“Aunty packs fresh tomatoes specially for Riddhi, and I end up eating half of them with Uncle\'s chaas. That single hour was my peaceful safe haven. 🍅”',
    resolution: 'Riddhi: “Stop stealing all my tomatoes, Samarth!”',
    mood: 'Sacred Lunch Routine',
  },
  {
    title: 'The Follow Request Drama',
    situation: 'The very first fight in friendship history',
    quote: '“I sent her a follow request at night that she didn’t accept right away. Next day she said she was asleep, but I knew she wasn’t! 📲”',
    resolution: 'First fight resolved by talking even more the next morning.',
    mood: 'The Origin of All Fights',
  },
];

export default function TomJerryCorner() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [rivalryLevel, setRivalryLevel] = useState(50);

  const nextBanter = () => {
    setCurrentIdx((prev) => (prev + 1) % SIBLING_BANTERS.length);
  };

  const current = SIBLING_BANTERS[currentIdx];

  return (
    <section id="tom-jerry-corner" className="py-20 bg-ivory-dark/40 border-y border-amber-900/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Original Character Dynamic */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-terracotta/10 border border-terracotta/20 text-terracotta text-xs font-sans font-bold tracking-widest uppercase mb-3">
            <span>🐱🐭 Original Duo Universe</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-warmbrown-dark">
            The Tom & Jerry Chronicles
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-warmbrown/75 mt-2">
            "One day we are enemies, and the next day we are best friends forever again."
          </p>
        </div>

        {/* Interactive Dynamic Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Character Illustration / Meter Card */}
          <div className="lg:col-span-5 paper-card rounded-2xl p-6 sm:p-8 bg-[#FDFCFA] border border-[#D9CEBF] shadow-lg text-center relative">
            <div className="washi-tape washi-tape-terracotta -top-3 left-8" />

            <div className="text-5xl mb-4">
              {rivalryLevel > 70 ? '😾💥' : rivalryLevel < 30 ? '🤗✨' : '🐱🐭'}
            </div>

            <h3 className="font-serif text-2xl font-bold text-warmbrown-dark">
              Daily Friendship Dial
            </h3>
            <p className="text-xs font-sans text-warmbrown/70 mt-1 mb-6">
              Drag to see where we stand on any given weekday:
            </p>

            {/* Slider */}
            <div className="space-y-3">
              <input
                type="range"
                min="0"
                max="100"
                value={rivalryLevel}
                onChange={(e) => setRivalryLevel(Number(e.target.value))}
                className="w-full accent-terracotta cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-sans font-semibold text-warmbrown/60 uppercase">
                <span>Besties Forever (0%)</span>
                <span>Standard Banter (50%)</span>
                <span>18-10-26 Drama (100%)</span>
              </div>
            </div>

            {/* Dynamic Status Box */}
            <div className="mt-6 p-4 rounded-xl bg-ivory-dark/60 border border-amber-900/10 text-left">
              <div className="flex items-center gap-2 text-xs font-bold font-sans uppercase tracking-wider text-terracotta mb-1">
                {rivalryLevel > 70 ? (
                  <>
                    <ShieldAlert className="w-4 h-4 text-rose-600" />
                    <span>State: Strictly Professional (for 4 hours max)</span>
                  </>
                ) : rivalryLevel < 30 ? (
                  <>
                    <HeartHandshake className="w-4 h-4 text-sage" />
                    <span>State: Kinder Joy & Tomato Sharing Mode</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-warmgold" />
                    <span>State: Non-stop desk teasing & eye-rolling</span>
                  </>
                )}
              </div>
              <p className="text-xs font-sans text-warmbrown/80 leading-relaxed">
                {rivalryLevel > 70
                  ? '“I am returning all the gifts and never speaking again.” (Resolved right after someone offers a snack).'
                  : rivalryLevel < 30
                  ? '“Love you as brother as a frnd and I\'ll always be there for you anytime, anywhere.”'
                  : '“God sent me into your life to irritate you so you stay on track, that\'s my official duty!”'}
              </p>
            </div>
          </div>

          {/* Banter Generator Display */}
          <div className="lg:col-span-7 paper-card rounded-2xl p-6 sm:p-8 bg-[#FAF7F2] border border-[#D9CEBF] shadow-lg relative">
            <div className="washi-tape washi-tape-sage -top-3 right-8" />

            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-sans uppercase font-bold tracking-widest text-terracotta">
                Real Incident #{currentIdx + 1} of {SIBLING_BANTERS.length}
              </span>
              <button
                onClick={nextBanter}
                className="flex items-center gap-1.5 text-xs font-sans font-medium text-warmbrown hover:text-terracotta transition-colors bg-ivory px-3 py-1.5 rounded-full border border-amber-900/15 shadow-sm"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Next Banter</span>
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div>
                  <h4 className="font-serif text-2xl font-bold text-warmbrown-dark">
                    {current.title}
                  </h4>
                  <p className="text-xs font-sans text-warmbrown/60 uppercase tracking-wider mt-0.5">
                    Context: {current.situation}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-cream-paper border-l-4 border-terracotta shadow-sm">
                  <p className="font-serif italic text-lg sm:text-xl text-warmbrown leading-snug">
                    {current.quote}
                  </p>
                </div>

                <div className="bg-ivory-dark/70 p-3.5 rounded-lg border border-amber-900/10 flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-sans font-bold uppercase tracking-wider text-warmbrown-dark block">
                      Outcome:
                    </span>
                    <p className="text-xs font-sans text-warmbrown/80 mt-0.5">
                      {current.resolution}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 pt-4 border-t border-amber-900/10 flex items-center justify-between text-xs text-warmbrown/50 font-sans">
              <span>Dynamic Tag: {current.mood}</span>
              <span className="font-handwriting text-base text-terracotta">
                #SpidyyAndSamarth
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
