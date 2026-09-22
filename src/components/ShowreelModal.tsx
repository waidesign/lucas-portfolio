import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Pause, Volume2, VolumeX, RotateCcw, Film } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(25);
  const [activeSegment, setActiveSegment] = useState('Classic Decoder VIN Engine');

  const reelSegments = [
    { time: '0:00 - 0:25', title: 'Classic Decoder VIN Engine', desc: 'Progressive disclosure micro-interactions & Lottie state animations' },
    { time: '0:25 - 0:45', title: 'Fierce Fight Gear 3D Customizer', desc: 'Tactile leather colorway & live typography preview' },
    { time: '0:45 - 1:00', title: 'Vehicle Databases API Dashboard', desc: 'Enterprise data visualization & interactive pricing tier slider' },
    { time: '1:00 - 1:15', title: 'Lumina Motion Token Engine', desc: 'Figma-to-code keyframe inspection playground' },
  ];

  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 250);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 dark:bg-black/85 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xs w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
            <div className="flex items-center gap-2">
              <Film className="w-4 h-4 text-slate-700 dark:text-slate-300" />
              <h3 className="font-display font-bold text-slate-900 dark:text-white text-base">
                Wai Phyo Aung — UI & Motion Showreel (01:15)
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-xs transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive Player Screen */}
          <div className="relative aspect-video bg-slate-950 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full p-6 sm:p-12 flex flex-col items-center justify-center">
                {/* Visual mock stage */}
                <div className="w-full max-w-lg bg-slate-900 border border-slate-700 rounded-xs p-6 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-400" />
                      <span className="w-3 h-3 rounded-full bg-amber-400" />
                      <span className="w-3 h-3 rounded-full bg-emerald-400" />
                      <span className="text-xs font-mono text-slate-400 ml-2">preview.motion-spec.ui</span>
                    </div>
                    <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-xs font-mono font-bold">
                      60 FPS
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                          Active Sequence
                        </div>
                        <div className="text-base font-bold text-white">
                          {activeSegment}
                        </div>
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">
                        cubic-bezier(0.16, 1, 0.3, 1)
                      </div>
                    </div>

                    <div className="h-20 bg-slate-950 rounded-xs border border-slate-800 p-3 flex items-center justify-around">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-xs bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-200"
                          style={{
                            transform: isPlaying ? `translateY(${Math.sin((progress + i * 20) / 10) * 8}px)` : 'none',
                            transition: 'transform 0.1s linear',
                          }}
                        >
                          0{i + 1}
                        </div>
                      ))}
                    </div>

                    <div className="text-[11px] text-slate-400 flex items-center justify-between">
                      <span>Perceived latency reduction: 60%</span>
                      <span className="text-emerald-400 font-semibold">Production Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Playback Controls Overlay Bar */}
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2">
              {/* Progress Scrubber */}
              <div
                className="w-full bg-white/20 hover:bg-white/30 h-1.5 rounded-xs cursor-pointer overflow-hidden"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const newProgress = Math.round((clickX / rect.width) * 100);
                  setProgress(newProgress);
                }}
              >
                <div
                  className="bg-white h-full rounded-xs transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 bg-white text-slate-900 rounded-xs transition-colors hover:bg-slate-100"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5 fill-slate-900" /> : <Play className="w-3.5 h-3.5 fill-slate-900 translate-x-0.5" />}
                  </button>

                  <button
                    onClick={() => setProgress(0)}
                    className="p-1.5 hover:text-white transition-colors"
                    title="Restart"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>

                  <span className="font-mono text-xs text-slate-300">
                    00:{Math.floor((progress * 75) / 100).toString().padStart(2, '0')} / 01:15
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1.5 hover:text-white transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                  <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-xs text-slate-300 font-mono">
                    1080p 60fps
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Reel Index Breakdown */}
          <div className="p-5 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Included Sequences
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {reelSegments.map((seg, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveSegment(seg.title);
                    setProgress(idx * 25);
                  }}
                  className="p-3 text-left rounded-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all text-xs"
                >
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono block">
                    {seg.time}
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white block mt-0.5">
                    {seg.title}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1 line-clamp-2">
                    {seg.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};
