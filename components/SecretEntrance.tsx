'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, Sparkles, ArrowRight, BookHeart, Eye, EyeOff } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SecretEntranceProps {
  onUnlock: () => void;
}

export default function SecretEntrance({ onUnlock }: SecretEntranceProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setError('Incorrect password. Please try again.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsUnlocked(true);
        confetti({
          particleCount: 75,
          spread: 65,
          origin: { y: 0.6 },
          colors: ['#C86D51', '#D4A373', '#7E9A86', '#C2847A', '#F4EFE6'],
        });

        setTimeout(() => {
          onUnlock();
        }, 1100);
      } else {
        setError('Incorrect password. Please try again.');
      }
    } catch {
      setError('Connection error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#FAF7F2] overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-amber-100/60 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-rose-100/50 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-emerald-100/30 blur-2xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-md w-full"
      >
        {/* Memory Book Container */}
        <div className="paper-card rounded-2xl p-8 sm:p-10 border border-[#D9CEBF] shadow-2xl relative overflow-hidden bg-[#FDFCFA]">
          {/* Top Washi Tape */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 washi-tape washi-tape-terracotta" />

          {/* Book Header */}
          <div className="text-center mb-8">
            <motion.div
              animate={isUnlocked ? { rotate: [0, -8, 8, 0], scale: 1.1 } : {}}
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-ivory-dark border-2 border-amber-900/15 flex items-center justify-center text-terracotta shadow-sm"
            >
              {isUnlocked ? (
                <Unlock className="w-7 h-7 text-sage" />
              ) : (
                <Lock className="w-7 h-7 text-terracotta" />
              )}
            </motion.div>

            <p className="text-xs font-sans uppercase tracking-widest text-terracotta font-semibold mb-1">
              Private Friendship Memory Book
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-warmbrown-dark tracking-tight">
              Samarth × Riddhi
            </h1>
            <p className="font-serif italic text-base text-warmbrown/75 mt-1">
              "The Unending Story"
            </p>
            <div className="w-16 h-0.5 bg-terracotta/30 mx-auto my-3" />
            <p className="text-xs font-sans text-warmbrown/70 leading-relaxed max-w-xs mx-auto">
              One Office. A Thousand Memories. An Unending Story.
            </p>
          </div>

          {/* Password Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="passcode"
                className="block text-xs font-sans font-medium text-warmbrown-dark mb-1.5 uppercase tracking-wider"
              >
                Enter Secret Passcode
              </label>
              <div className="relative">
                <input
                  id="passcode"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Enter passcode..."
                  disabled={isLoading || isUnlocked}
                  autoComplete="current-password"
                  className="w-full px-4 py-3 pr-11 bg-ivory rounded-lg border border-amber-900/20 text-warmbrown-dark placeholder:text-warmbrown/40 text-sm focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-all shadow-inner font-sans"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-warmbrown/40 hover:text-warmbrown p-1 transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-sans text-rose-700 bg-rose-50/80 p-2.5 rounded border border-rose-200 text-center"
              >
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={isLoading || isUnlocked}
              className={`w-full py-3.5 px-6 rounded-lg text-sm font-sans font-medium tracking-wide uppercase transition-all flex items-center justify-center gap-2 shadow-md ${
                isUnlocked
                  ? 'bg-sage text-ivory'
                  : 'bg-terracotta hover:bg-terracotta-dark text-ivory hover:shadow-lg active:scale-[0.99]'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 animate-spin" /> Unlocking Vault...
                </span>
              ) : isUnlocked ? (
                <span className="flex items-center gap-2">
                  <Unlock className="w-4 h-4" /> Opening Memory Book...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <span>Open The Memory Book</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </button>
          </form>

          {/* Footer note */}
          <div className="mt-8 pt-5 border-t border-amber-900/10 text-center">
            <p className="text-[11px] font-sans text-warmbrown/50 flex items-center justify-center gap-1.5">
              <BookHeart className="w-3.5 h-3.5 text-terracotta/70" />
              <span>A private memorial of brother-sister best friendship</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
