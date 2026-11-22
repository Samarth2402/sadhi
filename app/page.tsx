'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SecretEntrance from '@/components/SecretEntrance';
import ChapterCard from '@/components/ChapterCard';
import PhotoLightbox from '@/components/PhotoLightbox';
import TomJerryCorner from '@/components/TomJerryCorner';
import GujaratiWishesCard from '@/components/GujaratiWishesCard';
import PhotoGallery from '@/components/PhotoGallery';
import MemoryKeepsakes from '@/components/MemoryKeepsakes';
import InteractiveTimeline from '@/components/InteractiveTimeline';
import LetterSection from '@/components/LetterSection';
import EndingSection from '@/components/EndingSection';
import { STORY_CHAPTERS, ALL_PHOTOS } from '@/lib/story-data';
import { PhotoItem } from '@/lib/types';
import { ShieldCheck, Sparkles } from 'lucide-react';

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  // Check auth status on initial load
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch('/api/auth/status');
        const data = await res.json();
        setIsAuthenticated(data.authenticated === true);
      } catch {
        setIsAuthenticated(false);
      }
    }
    checkAuth();
  }, []);

  const handleUnlock = () => {
    setIsAuthenticated(true);
  };

  const handleLockVault = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {
      // ignore
    }
    setIsAuthenticated(false);
  };

  const handleScrollToChapter = (chapterId: string) => {
    const el = document.getElementById(chapterId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show loading indicator briefly during initial verification
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-2 border-terracotta border-t-transparent rounded-full animate-spin" />
          <p className="font-serif italic text-warmbrown/70 text-sm">
            Opening private friendship vault...
          </p>
        </div>
      </div>
    );
  }

  // If not authenticated, show secret entrance
  if (!isAuthenticated) {
    return <SecretEntrance onUnlock={handleUnlock} />;
  }

  // Once authenticated, show cinematic story website
  return (
    <div className="min-h-screen bg-ivory text-warmbrown selection:bg-terracotta/20">
      {/* Top Navigation */}
      <Navbar onLockVault={handleLockVault} />

      {/* Hero Section */}
      <Hero
        onStartStory={() => handleScrollToChapter('chapter-1-the-beginning')}
        onOpenPhoto={(photo) => setActivePhoto(photo)}
      />

      {/* Interactive Timeline Navigation */}
      <InteractiveTimeline onSelectChapter={handleScrollToChapter} />

      {/* Story Chapters Narrative */}
      <main className="relative">
        {STORY_CHAPTERS.map((chapter, index) => (
          <ChapterCard
            key={chapter.id}
            chapter={chapter}
            index={index}
            onOpenPhoto={(photo) => setActivePhoto(photo)}
          />
        ))}
      </main>

      {/* Dedicated Photo Gallery for the 5 Authentic Photos */}
      <PhotoGallery onOpenPhoto={(photo) => setActivePhoto(photo)} />

      {/* Authentic Gujarati Wishes & Diya Blessing */}
      <GujaratiWishesCard onOpenPhoto={(photo) => setActivePhoto(photo)} />

      {/* Tom & Jerry Dynamic Sibling Banter Playground */}
      <TomJerryCorner />

      {/* Interactive Memory Keepsakes Box */}
      <MemoryKeepsakes />

      {/* Personal Handwritten Letter */}
      <LetterSection />

      {/* Ending Section - Cinematic Sunset Movie Scene */}
      <EndingSection
        onScrollToTop={handleScrollToTop}
        onOpenPhoto={(photo) => setActivePhoto(photo)}
      />

      {/* Full-Screen Photo Lightbox */}
      <PhotoLightbox photo={activePhoto} onClose={() => setActivePhoto(null)} />
    </div>
  );
}
