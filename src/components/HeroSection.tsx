import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowDown, 
  ArrowRight, 
  FileText, 
  Calendar, 
  Clock, 
  Globe, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { profileData } from '../data/profile';
import { newZealandData } from '../data/newzealand';

interface HeroSectionProps {
  onExploreWork: () => void;
  onOpenBooking: () => void;
  onOpenResume: () => void;
  onViewNewZealand: () => void;
  onOpenShowreel?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onOpenBooking,
  onOpenResume,
  onViewNewZealand,
  onOpenShowreel,
}) => {
  // Live clocks for Bangkok and Auckland
  const [times, setTimes] = useState({
    bkk: '',
    akl: '',
    isNzBusinessHours: false,
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      
      // Bangkok UTC+7
      const bkkTime = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Bangkok',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }).format(now);

      // Auckland UTC+12/13
      const aklFormatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Pacific/Auckland',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      const aklTime = aklFormatter.format(now);

      // Calculate if it's currently roughly NZ standard business hours (8am - 6pm)
      const aklHour = parseInt(
        new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Pacific/Auckland',
          hour: 'numeric',
          hour12: false,
        }).format(now),
        10
      );
      const isNzDay = aklHour >= 8 && aklHour < 18;

      setTimes({
        bkk: bkkTime,
        akl: aklTime,
        isNzBusinessHours: isNzDay,
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="clean-container">
        {/* Top Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-2 mb-6"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for New Zealand Teams</span>
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
            Remote Contract or AEWV Visa Relocation
          </span>
        </motion.div>

        {/* Main Hero Headline */}
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]"
          >
            I design conversion-driven product interfaces and purposeful motion systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl"
          >
            Senior UI/UX & Motion Designer with 10 years of experience turning complex workflows into intuitive web applications, high-converting checkout flows, and production-ready design systems.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-3.5"
        >
          <button
            onClick={onExploreWork}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 font-semibold text-sm transition-all shadow-sm active:scale-98"
          >
            <span>Explore Selected Work</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 font-medium text-sm transition-all shadow-xs"
          >
            <FileText className="w-4 h-4 text-slate-500" />
            <span>NZ-Format CV (ATS)</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-700/80 font-medium text-sm transition-all"
          >
            <Calendar className="w-4 h-4 text-slate-500" />
            <span>Book Intro Call</span>
          </button>
        </motion.div>

        {/* Clean New Zealand Timezone & Collaboration Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-700 dark:text-emerald-400 shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  New Zealand Sync
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                  4–5 hrs daily standup overlap
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-0.5">
                Bangkok: <span className="font-semibold">{times.bkk || '11:00 AM'}</span> (ICT, UTC+7) • Auckland: <span className="font-semibold">{times.akl || '5:00 PM'}</span> (NZT)
              </p>
            </div>
          </div>

          <button
            onClick={onViewNewZealand}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 transition-colors"
          >
            <span>Learn about NZ relocation & visa details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

        {/* Key Metrics Strip (Clean, scannable, uncrowded) */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-slate-200/70 dark:border-slate-800/70">
          <div>
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              +150%
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mt-0.5">
              Online Sales Uplift
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Classic Decoder GA4 verified
            </div>
          </div>

          <div>
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              10 Years
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mt-0.5">
              Motion & Visual Craft
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              TV broadcast to product lead
            </div>
          </div>

          <div>
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              WCAG AA
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mt-0.5">
              Accessibility & Systems
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Figma tokens to production code
            </div>
          </div>

          <div>
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              B.Eng Civil
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mt-0.5">
              Engineering Foundation
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Systematic rigor & constraints
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
