'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ChevronRight } from 'lucide-react';

const KEEPSAKES = [
  {
    id: 'kinder-joy',
    name: 'The Desk Kinder Joy',
    emoji: '🍫',
    category: 'Comfort & Care',
    storyChapter: 'Chapter 2: The Little Things',
    summary: 'A surprise chocolate placed quietly on Samarth\'s desk on a heavy, stressful day.',
    reflection:
      'I was drowning in overthinking and feeling sad. Without making a fuss, Riddhi brought a Kinder Joy and left it on my desk. That simple gesture spoke louder than a thousand lectures—it proved that whenever I am hurting, she truly cares.',
    quote: '“She would do anything if I’m sad or hurt.”',
    accentColor: 'border-rose-300 bg-rose-50/70 text-rose-900',
  },
  {
    id: 'dupatta',
    name: 'The Rainy Day Dupatta',
    emoji: '🧣',
    category: 'Sisterly Warmth',
    storyChapter: 'Chapter 3: The Rainy Movie Day',
    summary: 'Offered without hesitation in a freezing cinema after walking through heavy rain.',
    reflection:
      'I had arrived drenched to the bone, shivering in the freezing air conditioned cinema hall. Riddhi took off her dupatta and gave it to me to stay warm. That selfless, warm gesture turned that rainy evening into the single best day of our friendship.',
    quote: '“It felt so comforting... that was the best day of our friendship.”',
    accentColor: 'border-emerald-300 bg-emerald-50/70 text-emerald-900',
  },
  {
    id: 'tomatoes-chaas',
    name: 'Aunty’s Extra Tomatoes & Chaas',
    emoji: '🍅',
    category: 'Daily Safe Haven',
    storyChapter: 'Chapter 7: Lunchtime Rituals',
    summary: 'Aunty’s fresh packed tomatoes and Uncle’s cold chaas shared during the 1-hour lunch break.',
    reflection:
      'For at least one hour every day, I was the carefree, joyful Samarth without overthinking everything. Eating Aunty’s extra tomatoes packed for Riddhi and enjoying Uncle\'s chaas was our daily peaceful sanctuary.',
    quote: '“That single hour was where overthinking stopped.”',
    accentColor: 'border-amber-300 bg-amber-50/70 text-amber-900',
  },
  {
    id: 'award-trophy',
    name: 'The Spark Employee Trophy',
    emoji: '🏆',
    category: 'Milestones & Pride',
    storyChapter: 'Chapter 6: Diwali Memories',
    summary: 'Nov 6th Diwali celebration on the sofa, culminating in the Spark Employee award.',
    reflection:
      'Sitting on the cream sofa for hours clicking our first photos, teasing, and having a blast. When I won the Spark Employee of the Month award, the genuine pride and joy in Riddhi’s eyes meant more than the trophy itself.',
    quote: '“Miss you Spark Employee of the Month #senior!”',
    accentColor: 'border-yellow-300 bg-yellow-50/70 text-yellow-900',
  },
  {
    id: 'truce-flag',
    name: 'The Tom & Jerry Truce Flag',
    emoji: '🐭',
    category: 'Sibling Rivalry',
    storyChapter: 'Chapter 8: Tom & Jerry',
    summary: 'The dramatic 18-10-26 resignation that lasted less than 24 hours before reconciliation.',
    reflection:
      '“Whatever we have is strictly professional at the office now... Goodbye story!” said on October 18th. By October 19th morning, we were laughing, sharing lunch, and back to being inseparable. Tom and Jerry forever.',
    quote: '“One day we are enemies, and the next day we are best friends forever again.”',
    accentColor: 'border-indigo-300 bg-indigo-50/70 text-indigo-900',
  },
  {
    id: 'diwali-diya',
    name: 'The Glowing Festive Diya',
    emoji: '🪔',
    category: 'Blessings & Light',
    storyChapter: 'Chapter 4 & 6: Festive Lights',
    summary: 'Held gently in cupped hands, carrying heartfelt prayers for big dreams.',
    reflection:
      'A quiet, serene moment holding the warm flame of Diwali blessings. Wishing that every dream comes true, that Riddhi clears her exam on the first attempt, and that our friendship remains blessed with Mahadev’s grace.',
    quote: '“May Mahadev bless you and all your dreams come true.”',
    accentColor: 'border-orange-300 bg-orange-50/70 text-orange-900',
  },
];

export default function MemoryKeepsakes() {
  const [selectedKeepsake, setSelectedKeepsake] = useState<typeof KEEPSAKES[0] | null>(null);

  return (
    <section id="keepsakes-vault" className="py-20 relative overflow-hidden bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage/15 border border-sage/25 text-sage-dark text-xs font-sans font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sage" />
            <span>Interactive Memory Box</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-warmbrown-dark">
            Our Physical Keepsakes
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-warmbrown/75 mt-2">
            The tangible artifacts and symbols that tell the story of our friendship
          </p>
        </div>

        {/* Keepsake Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {KEEPSAKES.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={() => setSelectedKeepsake(item)}
              className="paper-card rounded-xl p-6 bg-[#FDFCFA] border border-[#DFD5C6] shadow-md hover:shadow-xl transition-all cursor-pointer relative group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl p-2.5 rounded-xl bg-ivory-dark group-hover:scale-110 transition-transform inline-block shadow-inner">
                  {item.emoji}
                </span>
                <span className="text-[10px] uppercase font-sans tracking-widest font-bold px-2 py-1 rounded bg-amber-900/5 text-warmbrown/70">
                  {item.category}
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-warmbrown-dark group-hover:text-terracotta transition-colors">
                {item.name}
              </h3>
              <p className="text-xs font-sans text-warmbrown/60 uppercase tracking-wider mt-0.5 mb-2">
                {item.storyChapter}
              </p>
              <p className="text-xs font-sans text-warmbrown/80 line-clamp-2 leading-relaxed">
                {item.summary}
              </p>

              <div className="mt-4 pt-3 border-t border-amber-900/10 flex items-center justify-between text-xs text-terracotta font-medium">
                <span>Inspect Keepsake</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedKeepsake && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-warmbrown-dark/70 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
                onClick={() => setSelectedKeepsake(null)}
              />

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative z-10 max-w-lg w-full paper-card rounded-2xl p-6 sm:p-8 bg-[#FDFCFA] border border-[#D9CEBF] shadow-2xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{selectedKeepsake.emoji}</span>
                    <div>
                      <span className="text-xs uppercase font-sans font-bold tracking-widest text-terracotta">
                        {selectedKeepsake.category}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-warmbrown-dark">
                        {selectedKeepsake.name}
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedKeepsake(null)}
                    className="p-1.5 rounded-full hover:bg-amber-900/10 text-warmbrown transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 text-warmbrown/90 font-sans text-sm leading-relaxed my-4">
                  <div className="bg-ivory-dark/60 p-3.5 rounded-lg border border-amber-900/10">
                    <span className="text-xs font-bold text-warmbrown-dark uppercase tracking-wider block mb-1">
                      Context in Friendship:
                    </span>
                    <p>{selectedKeepsake.summary}</p>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-warmbrown-dark uppercase tracking-wider block mb-1">
                      Personal Reflection:
                    </span>
                    <p className="text-justify">{selectedKeepsake.reflection}</p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-amber-50 border-l-4 border-terracotta">
                    <p className="font-serif italic text-base text-terracotta-dark">
                      {selectedKeepsake.quote}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-amber-900/10 text-right">
                  <button
                    onClick={() => setSelectedKeepsake(null)}
                    className="px-5 py-2 rounded-full bg-warmbrown text-ivory text-xs font-sans font-medium uppercase tracking-wider hover:bg-terracotta transition-colors"
                  >
                    Close Memory Box
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
