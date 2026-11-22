'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Users, ZoomIn, ShieldCheck } from 'lucide-react';
import { PhotoItem } from '@/lib/types';

interface PhotoLightboxProps {
  photo: PhotoItem | null;
  onClose: () => void;
}

export default function PhotoLightbox({ photo, onClose }: PhotoLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (photo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [photo, onClose]);

  if (!photo) return null;

  // The photo source is served through our authenticated API endpoint
  const photoUrl = `/api/photos/${photo.id}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-warmbrown-dark/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
          onClick={onClose}
        />

        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 max-w-4xl w-full bg-ivory-light border border-amber-900/20 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-ivory-dark/80 border-b border-amber-900/10">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-terracotta inline-block" />
              <h3 className="font-serif text-xl md:text-2xl font-bold text-warmbrown-dark">
                {photo.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-amber-900/10 text-warmbrown transition-colors"
              aria-label="Close photo view"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Image Canvas */}
          <div className="flex-1 overflow-auto p-4 md:p-6 flex items-center justify-center bg-stone-900/5">
            <div className="relative group max-w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photoUrl}
                alt={photo.alt}
                className="max-h-[62vh] w-auto object-contain rounded-md shadow-md mx-auto"
                loading="eager"
              />
              <div className="absolute bottom-3 right-3 bg-warmbrown-dark/75 text-ivory text-xs px-2.5 py-1 rounded-full backdrop-blur-sm flex items-center gap-1.5 opacity-90">
                <ShieldCheck className="w-3.5 h-3.5 text-sage-light" />
                <span>Private Memory</span>
              </div>
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="px-6 py-4 bg-ivory border-t border-amber-900/10">
            <p className="font-serif text-lg text-warmbrown italic mb-3">
              "{photo.caption}"
            </p>
            {photo.storyNote && (
              <p className="text-sm font-sans text-warmbrown/80 mb-3 bg-cream-paper p-3 rounded border border-amber-900/10">
                <strong className="text-terracotta-dark font-medium">Memory Note: </strong>
                {photo.storyNote}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-4 text-xs text-warmbrown-light">
              <span className="flex items-center gap-1.5 bg-ivory-dark px-2.5 py-1 rounded-full">
                <Calendar className="w-3.5 h-3.5 text-terracotta" />
                {photo.dateTag}
              </span>
              <span className="flex items-center gap-1.5 bg-ivory-dark px-2.5 py-1 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-sage" />
                {photo.locationTag}
              </span>
              <span className="flex items-center gap-1.5 bg-ivory-dark px-2.5 py-1 rounded-full">
                <Users className="w-3.5 h-3.5 text-mutedblue" />
                {photo.people.join(' & ')}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
