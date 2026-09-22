import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';
import { ExperienceItem } from '../data/experience';

interface ExperienceModalProps {
  role: ExperienceItem | null;
  onClose: () => void;
}

export const ExperienceModal: React.FC<ExperienceModalProps> = ({ role, onClose }) => {
  const [modalScrolled, setModalScrolled] = useState(false);

  // Freeze body scrolling and attach Escape key listener
  useEffect(() => {
    if (role) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [role, onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {role && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-y-auto overscroll-contain">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setModalScrolled(false);
              onClose();
            }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xs"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 20 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onScroll={(e) => setModalScrolled(e.currentTarget.scrollTop > 50)}
            className="relative w-full max-w-2xl bg-[#0c0c0e] text-white border-t sm:border border-neutral-800 rounded-t-lg sm:rounded-xs shadow-2xl z-10 h-[92vh] sm:h-auto sm:max-h-[90vh] overflow-y-auto overscroll-contain my-0 sm:my-auto"
          >
            {/* Sticky Header - Compact on mobile */}
            <div
              className={`sticky top-0 z-20 flex items-center justify-between gap-3 px-4 py-3 sm:p-6 transition-all duration-300 ${
                modalScrolled
                  ? 'bg-[#0c0c0e]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/60'
                  : 'bg-[#0c0c0e]/80 backdrop-blur-md border-b border-neutral-800/60 sm:border-neutral-800/40'
              }`}
            >
              <div className="min-w-0 flex-1 pr-2">
                <p className={`text-[10px] sm:text-xs font-mono text-neutral-400 truncate transition-all duration-200 ${
                  modalScrolled ? 'opacity-100' : 'opacity-70 sm:opacity-0 sm:-translate-y-1 sm:pointer-events-none'
                }`}>
                  {role.company} • {role.period}
                </p>
                <h3 className={`text-xs sm:text-lg font-bold text-white tracking-tight truncate transition-all duration-200 ${
                  modalScrolled ? 'opacity-100' : 'opacity-0 h-0 sm:h-auto pointer-events-none'
                }`}>
                  {role.role}
                </h3>
              </div>
              <button
                onClick={() => {
                  setModalScrolled(false);
                  onClose();
                }}
                className="p-1.5 rounded-xs text-neutral-400 hover:text-white hover:bg-neutral-800/80 transition-colors cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-4 pb-6 sm:px-8 sm:pb-8 pt-4 space-y-6">
              {/* Role Title in content area so it's always clearly visible */}
              <div className="space-y-1.5 border-b border-neutral-800 pb-5">
                <h2 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                  {role.role}
                </h2>
                <p className="text-xs sm:text-sm font-mono text-neutral-400">
                  {role.companyUrl ? (
                    <a
                      href={role.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-300 hover:text-white underline underline-offset-2 transition-colors inline-flex items-center gap-1 font-medium"
                    >
                      {role.company}
                      <ExternalLink className="w-3.5 h-3.5 opacity-70 inline" />
                    </a>
                  ) : (
                    role.company
                  )}
                  {' • '}{role.location} • {role.period}
                </p>
              </div>
              {/* Summary Section */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white tracking-wide">
                  Summary
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {role.summary}
                </p>
              </div>

              {/* Key Responsibilities */}
              {role.responsibilities && role.responsibilities.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {role.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-neutral-400 font-bold shrink-0 mt-0.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Achievements */}
              {role.achievements && role.achievements.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {role.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-neutral-400 font-bold shrink-0 mt-0.5">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Methodologies */}
              {role.methodologies && role.methodologies.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    Methodologies
                  </h4>
                  <div className="flex flex-wrap gap-2 pt-0.5">
                    {role.methodologies.map((method, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2.5 py-1 rounded-xs text-xs font-mono bg-neutral-800/90 text-neutral-200 border border-neutral-700/60"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stacks */}
              {role.technologies && role.technologies.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    Tech Stacks
                  </h4>
                  <div className="flex flex-wrap gap-2 pt-0.5">
                    {role.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2.5 py-1 rounded-xs text-xs font-mono bg-neutral-800/90 text-neutral-200 border border-neutral-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};
