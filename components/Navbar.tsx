'use client';

import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Sparkles, Image as ImageIcon, Lock, Volume2, VolumeX, Menu, X, HeartHandshake } from 'lucide-react';

interface NavbarProps {
  onLockVault: () => void;
  onOpenGallery?: () => void;
  activeChapterId?: string;
}

export default function Navbar({ onLockVault }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn('Playback error:', e);
      });
    }
  };

  const handleLock = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    onLockVault();
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/90 backdrop-blur-md border-b border-amber-900/10 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Background Audio - Dilruba Dilnasheen */}
      <audio
        ref={audioRef}
        src="/audio/music.mp3"
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <div
          onClick={() => scrollToSection('hero')}
          className="cursor-pointer group flex items-center gap-3"
        >
          <div className="w-9 h-9 rounded-full bg-cream-paper border border-amber-900/20 flex items-center justify-center text-terracotta group-hover:bg-terracotta group-hover:text-ivory transition-colors shadow-sm">
            <span className="font-serif font-bold text-lg">S×R</span>
          </div>
          <div>
            <h1 className="font-serif text-lg md:text-xl font-bold tracking-tight text-warmbrown-dark leading-none">
              Samarth × Riddhi
            </h1>
            <p className="font-sans text-[11px] tracking-widest uppercase text-terracotta font-medium mt-0.5">
              The Unending Story
            </p>
          </div>
        </div>

        {/* Center / Desktop Links */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-warmbrown">
          <button
            onClick={() => scrollToSection('chapter-1-the-beginning')}
            className="hover:text-terracotta transition-colors flex items-center gap-1.5"
          >
            <BookOpen className="w-4 h-4 text-terracotta/80" />
            <span>Chapters</span>
          </button>

          <button
            onClick={() => scrollToSection('diwali-gallery')}
            className="hover:text-terracotta transition-colors flex items-center gap-1.5"
          >
            <ImageIcon className="w-4 h-4 text-warmgold" />
            <span>Real Photos (5)</span>
          </button>

          <button
            onClick={() => scrollToSection('keepsakes-vault')}
            className="hover:text-terracotta transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-sage" />
            <span>Keepsakes</span>
          </button>

          <button
            onClick={() => scrollToSection('tom-jerry-corner')}
            className="hover:text-terracotta transition-colors flex items-center gap-1.5"
          >
            <span className="text-base">🐱🐭</span>
            <span>Tom & Jerry</span>
          </button>

          <button
            onClick={() => scrollToSection('letter-section')}
            className="hover:text-terracotta transition-colors flex items-center gap-1.5"
          >
            <HeartHandshake className="w-4 h-4 text-dustyrose" />
            <span>Personal Letter</span>
          </button>
        </nav>

        {/* Right Actions: Music Toggle (Dilruba Dilnasheen) + Lock Vault */}
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleMusic}
            title={isPlaying ? 'Pause music (Dilruba Dilnasheen)' : 'Play music (Dilruba Dilnasheen)'}
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
            className={`px-3 py-1.5 rounded-full border transition-all text-xs flex items-center gap-1.5 ${
              isPlaying
                ? 'border-terracotta bg-terracotta/10 text-terracotta shadow-sm animate-pulse-subtle'
                : 'border-amber-900/15 bg-ivory-light text-warmbrown/70 hover:text-warmbrown hover:bg-ivory'
            }`}
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-4 h-4 text-terracotta" />
                <span className="hidden sm:inline font-sans text-[11px] font-medium text-terracotta">
                  Dilruba Dilnasheen
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 opacity-60" />
                <span className="hidden sm:inline font-sans text-[11px] text-warmbrown/60">
                  Music
                </span>
              </>
            )}
          </button>

          <button
            onClick={handleLock}
            title="Lock Memory Book"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-ivory-dark border border-amber-900/20 hover:border-terracotta text-warmbrown hover:text-terracotta rounded-full transition-all shadow-sm"
          >
            <Lock className="w-3.5 h-3.5 text-terracotta" />
            <span className="hidden sm:inline">Lock Vault</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-warmbrown hover:bg-ivory-dark"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory border-b border-amber-900/15 px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <button
            onClick={() => scrollToSection('chapter-1-the-beginning')}
            className="w-full text-left py-2 px-3 rounded text-warmbrown hover:bg-ivory-dark flex items-center gap-2.5 text-sm font-medium"
          >
            <BookOpen className="w-4 h-4 text-terracotta" />
            <span>Chapters Storyline</span>
          </button>

          <button
            onClick={() => scrollToSection('diwali-gallery')}
            className="w-full text-left py-2 px-3 rounded text-warmbrown hover:bg-ivory-dark flex items-center gap-2.5 text-sm font-medium"
          >
            <ImageIcon className="w-4 h-4 text-warmgold" />
            <span>Real Photographs (5)</span>
          </button>

          <button
            onClick={() => scrollToSection('keepsakes-vault')}
            className="w-full text-left py-2 px-3 rounded text-warmbrown hover:bg-ivory-dark flex items-center gap-2.5 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4 text-sage" />
            <span>Memory Keepsakes</span>
          </button>

          <button
            onClick={() => scrollToSection('tom-jerry-corner')}
            className="w-full text-left py-2 px-3 rounded text-warmbrown hover:bg-ivory-dark flex items-center gap-2.5 text-sm font-medium"
          >
            <span>🐱🐭</span>
            <span>Tom & Jerry Dynamic</span>
          </button>

          <button
            onClick={() => scrollToSection('letter-section')}
            className="w-full text-left py-2 px-3 rounded text-warmbrown hover:bg-ivory-dark flex items-center gap-2.5 text-sm font-medium"
          >
            <HeartHandshake className="w-4 h-4 text-dustyrose" />
            <span>Personal Letter & Ending</span>
          </button>

          {/* Mobile Music Toggle */}
          <button
            onClick={toggleMusic}
            className="w-full text-left py-2 px-3 rounded text-warmbrown hover:bg-ivory-dark flex items-center justify-between text-sm font-medium border-t border-amber-900/10 pt-3"
          >
            <span className="flex items-center gap-2.5">
              {isPlaying ? (
                <Volume2 className="w-4 h-4 text-terracotta" />
              ) : (
                <VolumeX className="w-4 h-4 text-warmbrown/60" />
              )}
              <span>{isPlaying ? 'Pause Music' : 'Play Music (Dilruba Dilnasheen)'}</span>
            </span>
            {isPlaying && (
              <span className="text-[11px] text-terracotta font-medium animate-pulse">Playing</span>
            )}
          </button>
        </div>
      )}
    </header>
  );
}
