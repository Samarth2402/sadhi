'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Sparkles, Feather } from 'lucide-react';

export default function LetterSection() {
  return (
    <section id="letter-section" className="py-24 bg-[#FBF9F5] border-b border-amber-900/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-terracotta/10 border border-terracotta/20 text-terracotta text-xs font-sans font-bold tracking-widest uppercase mb-3">
            <Feather className="w-3.5 h-3.5 text-terracotta" />
            <span>Handwritten Words</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-warmbrown-dark">
            A Letter to My Spidyy
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-warmbrown/75 mt-1">
            From the desk next to yours, with all the gratitude in the world.
          </p>
        </div>

        {/* Vintage Letter Stationery */}
        <div className="paper-card rounded-2xl p-8 sm:p-12 md:p-16 bg-[#FFFDF9] border border-[#D9CEBF] shadow-2xl relative">
          <div className="washi-tape washi-tape-warmgold -top-3 left-12" />
          <div className="washi-tape washi-tape-terracotta -top-3 right-12" />

          {/* Letter Date & Salutation */}
          <div className="flex justify-between items-center text-xs font-sans text-warmbrown/60 border-b border-amber-900/10 pb-4 mb-8">
            <span className="font-serif italic text-base text-warmbrown">To: Riddhi Shah (Spidyy / Gandaaa Aaalluuu)</span>
            <span>Workstation Beside Yours</span>
          </div>

          {/* Letter Body in Beautiful Typography */}
          <div className="space-y-6 font-serif text-lg sm:text-xl text-warmbrown-dark leading-relaxed">
            <p>
              Dear Spidyy,
            </p>

            <p>
              When I look back at how we started at Capermint Technology—two quiet people who just smiled and walked past each other in the corridor—it still amazes me how much has changed. Who would have thought that a simple office desk relocation would bring someone into my life who has become so irreplaceable?
            </p>

            <p>
              You became my ultimate all-in-one: a mom who gets furious when I don’t take care of my health or skip meals, a sister who punches my arm and scolds me whenever I make mistakes, and a best friend who sits patiently through my endless overthinking.
            </p>

            <p>
              I will never forget the day you brought me that Kinder Joy when I was down, or that freezing rainy evening when you gave me your dupatta to keep warm. And I definitely won’t forget all our hours sitting on the sofa on November 6th taking our first photos, or having lunch with Aunty’s extra tomatoes and Uncle’s chaas. Those weren’t just small moments—they were safe havens for me.
            </p>

            <p>
              Sure, we have fought more times than anyone can count. We are Tom and Jerry through and through—enemies on October 18th declaring "strictly professional", and laughing together over lunch by October 19th. But every single fight has only made our bond stronger and more honest.
            </p>

            <p>
              I know how hard you are working for your IELTS exam, and I know without a single shred of doubt that you are going to clear it on your very first attempt with flying colors. And wherever life takes us—whether I am in Dubai, you are in Canada, or we are crossing oceans between flights—this friendship remains forever untouched.
            </p>

            <p>
              I don’t say any of this out of romance, but out of pure, deep love for your company and who you are. Your smile genuinely matters to me. Thank you for being in my corner, for putting up with my dramatics, and for being the sister and best friend I never knew I needed.
            </p>
          </div>

          {/* Sign-off */}
          <div className="mt-12 pt-6 border-t border-amber-900/10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-warmbrown/50">
                With a lifetime of respect & mischief,
              </p>
              <p className="font-handwriting text-3xl sm:text-4xl text-terracotta mt-1">
                Samarth
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-sans text-warmbrown/60 italic">
                “Forever your irritating friend & senior”
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
