import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Play, 
  Pause, 
  Sparkles, 
  Clock, 
  Layers, 
  Zap, 
  CheckCircle2, 
  Sliders, 
  ExternalLink 
} from 'lucide-react';

interface MotionShowcaseProps {
  onOpenShowreel?: () => void;
}

export const MotionShowcase: React.FC<MotionShowcaseProps> = ({ onOpenShowreel }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTrack, setActiveTrack] = useState<number>(0);

  const tracks = [
    {
      id: 'vin-motion',
      title: 'Progressive Disclosure & Latency Masking',
      project: 'Classic Decoder SaaS',
      metric: '-60% Perceived Latency',
      description: 'Custom lightweight Lottie micro-interactions providing real-time feedback during asynchronous database verification pings, eliminating user page-refresh habits.',
      specs: '240ms cubic-bezier(0.16, 1, 0.3, 1) spring physics',
    },
    {
      id: 'gear-3d',
      title: 'Kinetic 360° Material Feedback',
      project: 'Fierce Fight Gear Customizer',
      metric: 'Tactile Haptic Feedback',
      description: 'Smooth radial color and texture switching states that reflect physical leather sheen in real-time, giving combat athletes high confidence before high-ticket checkout.',
      specs: '60fps hardware-accelerated CSS transforms',
    },
    {
      id: 'token-engine',
      title: 'Figma-to-Code Animation Tokens',
      project: 'Lumina Workspace Design System',
      metric: '1:1 Developer Parity',
      description: 'Standardized motion tokens mapped directly to Framer Motion and Tailwind CSS transitions, guaranteeing zero visual drift between design reviews and live code.',
      specs: 'Standardized spring curves & motion token schema',
    },
  ];

  return (
    <section id="showreel" className="py-20 md:py-28 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="clean-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Motion Design & Interaction Craft
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1.5 tracking-tight">
              Motion with purpose, not just ornament.
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md">
            10 years in motion graphics applied to digital interfaces. Guiding attention, softening latency, and confirming transactional actions.
          </p>
        </div>

        {/* Clean Showcase Frame */}
        <div className="clean-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Interactive Motion Canvas / Video Simulator (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-slate-950 text-white flex flex-col justify-between relative min-h-[360px] sm:min-h-[420px]">
            {/* Top status */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs font-mono font-medium text-slate-300">
                  INTERACTION_REEL_60FPS.MP4
                </span>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">
                1080p • Lottie & React Motion
              </span>
            </div>

            {/* Central Animated Motion Graphic Graphic Simulation */}
            <div className="my-auto py-10 flex flex-col items-center justify-center text-center relative z-10">
              <motion.div
                animate={isPlaying ? {
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, -1, 0],
                } : {}}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-800 to-amber-500/30 border border-white/20 p-4 flex flex-col items-center justify-center shadow-2xl relative"
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500/20 to-emerald-500/20 blur-lg -z-10" />
                <Zap className="w-10 h-10 text-amber-400 mb-2" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300">
                  {tracks[activeTrack].metric}
                </span>
              </motion.div>

              <div className="mt-6 font-display font-bold text-lg sm:text-xl text-white">
                {tracks[activeTrack].title}
              </div>
              <div className="text-xs text-slate-400 font-mono mt-1">
                {tracks[activeTrack].specs}
              </div>
            </div>

            {/* Bottom Controls Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10 relative z-10">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isPlaying ? 'Pause Simulation' : 'Play Motion'}</span>
                </button>

                {onOpenShowreel && (
                  <button
                    onClick={onOpenShowreel}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-slate-950 font-bold text-xs hover:bg-slate-200 transition-colors shadow-xs"
                  >
                    <span>Full Reel (01:15)</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                )}
              </div>

              <div className="text-xs text-slate-400 font-mono">
                Track {activeTrack + 1} of {tracks.length}
              </div>
            </div>
          </div>

          {/* Right Track Selector & Narrative (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-white dark:bg-slate-900 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Motion Case Studies
              </span>
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mt-1 mb-4">
                Interactive Choreography Breakdown
              </h3>

              <div className="space-y-3">
                {tracks.map((track, idx) => (
                  <button
                    key={track.id}
                    onClick={() => setActiveTrack(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                      activeTrack === idx
                        ? 'border-slate-900 dark:border-white bg-slate-50 dark:bg-slate-800 shadow-xs'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-slate-900 dark:text-white">
                        {track.title}
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                        {track.metric}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mb-1.5 font-medium">
                      {track.project}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                      {track.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Zero bloated video dependencies</span>
              </span>
              <span>Lottie & SVG</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
