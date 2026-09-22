import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  Smartphone, 
  Monitor, 
  Search, 
  Layers,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { projectsData } from '../data/projects';

interface FlagshipCaseStudyProps {
  onOpenCaseStudy: (projectId: string) => void;
}

export const FlagshipCaseStudy: React.FC<FlagshipCaseStudyProps> = ({ onOpenCaseStudy }) => {
  const project = projectsData.find((p) => p.id === 'classic-decoder') || projectsData[0];
  const [activeVinSample, setActiveVinSample] = useState<'mustang' | 'charger'>('mustang');
  const [isDecoding, setIsDecoding] = useState(false);
  const [decodedResult, setDecodedResult] = useState<{
    year: string;
    make: string;
    model: string;
    engine: string;
    assembly: string;
    verified: boolean;
  }>({
    year: '1968',
    make: 'Ford',
    model: 'Mustang Fastback GT',
    engine: '390ci V8 4-Barrel',
    assembly: 'San Jose, California',
    verified: true,
  });

  const handleSimulateDecode = (type: 'mustang' | 'charger') => {
    setActiveVinSample(type);
    setIsDecoding(true);
    setTimeout(() => {
      if (type === 'mustang') {
        setDecodedResult({
          year: '1968',
          make: 'Ford',
          model: 'Mustang Fastback GT',
          engine: '390ci V8 4-Barrel',
          assembly: 'San Jose, California',
          verified: true,
        });
      } else {
        setDecodedResult({
          year: '1970',
          make: 'Dodge',
          model: 'Charger R/T 440 Magnum',
          engine: '440ci Six Pack V8',
          assembly: 'St. Louis, Missouri',
          verified: true,
        });
      }
      setIsDecoding(false);
    }, 450);
  };

  return (
    <section id="work" className="py-20 md:py-28 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="clean-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Featured Flagship Project
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1.5 tracking-tight">
              Classic Decoder: +150% Online Sales Uplift
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md">
            Overhauled an outdated automotive VIN decoding system into a high-converting, mobile-first product experience.
          </p>
        </div>

        {/* Big Spacious Showcase Container */}
        <div className="clean-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Narrative Column (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div>
              {/* Outcome Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-300 text-xs font-bold mb-6">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>+150% Verified E-Commerce Conversion Uplift</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                Restructuring an outdated 7-step desktop tool into a frictionless 3-step progressive flow.
              </h3>

              <div className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <p>
                  <strong className="text-slate-900 dark:text-white font-semibold">The Problem:</strong> Enthusiasts faced a 7-step desktop form with 14 mandatory fields upfront. Mobile conversion was under 0.6% and cart abandonment exceeded 70%.
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white font-semibold">What I Did:</strong> Designed a single-bar progressive disclosure hero, engineered instant VIN database validation, introduced blurred live report spec previews to establish trust, and established an 8pt tokenized Figma design system.
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white font-semibold">Key Results:</strong> +150% sustained online sales over 90 days, 38% reduction in checkout drop-off, and 60% perceived latency reduction via purposeful micro-interactions.
                </p>
              </div>

              {/* Quick tags */}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {['Conversion Optimization', 'Figma Tokens', 'Mobile App', 'Lottie Motion', 'Automotive SaaS'].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenCaseStudy('classic-decoder')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold text-xs transition-all shadow-xs hover:opacity-90 active:scale-98"
              >
                <span>Read Full Case Study</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href="https://classicdecoder.com"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-medium transition-colors"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Interactive Prototype Column (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 bg-slate-50 dark:bg-slate-950 flex flex-col justify-center">
            {/* Interactive Browser Frame */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
              {/* Browser chrome header */}
              <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-800/50 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                </div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate max-w-[200px]">
                  classicdecoder.com/inspect
                </div>
                <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified Prototype</span>
                </span>
              </div>

              {/* Interactive Prototype Body */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Interactive VIN Decoder Simulator
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Test progressive disclosure UX:
                  </span>
                </div>

                {/* Sample selector buttons */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <button
                    onClick={() => handleSimulateDecode('mustang')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeVinSample === 'mustang'
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    1968 Mustang (8R02S100...)
                  </button>
                  <button
                    onClick={() => handleSimulateDecode('charger')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeVinSample === 'charger'
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    1970 Dodge Charger (XS29L0G...)
                  </button>
                </div>

                {/* Simulated Search Bar */}
                <div className="relative mb-5">
                  <div className="flex items-center border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 bg-slate-50/80 dark:bg-slate-800/80">
                    <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                    <span className="font-mono text-xs sm:text-sm text-slate-900 dark:text-white flex-1 truncate">
                      {activeVinSample === 'mustang' ? '8R02S100234-FORD-MUSTANG' : 'XS29L0G150821-CHARGER-RT'}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-2 py-0.5 rounded">
                      Instant Ping: 42ms
                    </span>
                  </div>
                </div>

                {/* Live Decoded Spec Card with Subtle Motion */}
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-4 relative">
                  {isDecoding ? (
                    <div className="py-8 flex flex-col items-center justify-center gap-2">
                      <div className="w-6 h-6 border-2 border-slate-300 border-t-slate-900 dark:border-slate-700 dark:border-t-white rounded-full animate-spin" />
                      <span className="text-xs text-slate-500 font-mono">Querying historical registry...</span>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 pb-2">
                        <div>
                          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                            Identified Classic Vehicle
                          </div>
                          <div className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                            {decodedResult.year} {decodedResult.make} {decodedResult.model}
                          </div>
                        </div>
                        <span className="text-xs px-2 py-1 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-semibold">
                          Match Confirmed
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Factory Powertrain</span>
                          <span className="font-semibold text-slate-800 dark:text-slate-200">{decodedResult.engine}</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Original Assembly Plant</span>
                          <span className="font-semibold text-slate-800 dark:text-slate-200">{decodedResult.assembly}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                        <span>Progressive disclosure unlocked instant buyer trust</span>
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">Zero drop-off preview</span>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Feature Comparison Note */}
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Responsive parity on iOS & Android</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>8pt Figma Tokens in React</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
