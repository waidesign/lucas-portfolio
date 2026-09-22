import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  ArrowRight
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { Button } from './Button';
import sarayah1Img from '../assets/images/sarayah1.webp';
import sarayah2Img from '../assets/images/sarayah2.webp';
import sarayah3Img from '../assets/images/sarayah3.webp';
import cdsite1Img from '../assets/images/cdsite1.webp';
import cdsite2Img from '../assets/images/cdsite2.webp';
import cdsite3Img from '../assets/images/cdsite3.webp';
import vdb1Img from '../assets/images/vdb1.webp';
import vdb2Img from '../assets/images/vdb2.webp';
import vdb3Img from '../assets/images/vdb3.webp';
import dvh1Img from '../assets/images/dvh1.webp';
import dvh2Img from '../assets/images/dvh2.webp';
import dvh3Img from '../assets/images/dvh3.webp';
import ffg1Img from '../assets/images/ffg1.webp';
import ffg2Img from '../assets/images/ffg2.webp';
import ffg3Img from '../assets/images/ffg3.webp';
import cdapp1Img from '../assets/images/cdapp1.webp';
import cdapp2Img from '../assets/images/cdapp2.webp';
import cdapp3Img from '../assets/images/cdapp3.webp';

interface CaseStudyModalProps {
  isOpen: boolean;
  projectId: string;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  isOpen,
  projectId,
  onClose,
  onOpenBooking,
}) => {
  const [modalScrolled, setModalScrolled] = useState(false);

  if (!isOpen) return null;

  const project = projectsData.find((p) => p.id === projectId) || projectsData[0];
  const cs = project.caseStudy;

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-y-auto overscroll-contain">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 20 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onScroll={(e) => setModalScrolled(e.currentTarget.scrollTop > 60)}
          className="relative w-full max-w-4xl bg-[#0c0c0e] text-white border-t sm:border border-neutral-800 rounded-t-lg sm:rounded-xs shadow-2xl z-10 h-[92vh] sm:h-auto sm:max-h-[90vh] overflow-y-auto overscroll-contain my-0 sm:my-auto"
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
              <span className={`text-[10px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold block truncate transition-all duration-200 ${
                modalScrolled ? 'opacity-100' : 'opacity-70 sm:opacity-0 sm:-translate-y-1 sm:pointer-events-none'
              }`}>
                {project.industry} ({project.year})
              </span>
              <h2 className={`text-xs sm:text-lg font-bold text-white tracking-tight truncate transition-all duration-200 ${
                modalScrolled ? 'opacity-100' : 'opacity-0 h-0 sm:h-auto pointer-events-none'
              }`}>
                {project.title}
              </h2>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {cs?.liveLink && (
                <Button
                  variant="secondary"
                  href={cs.liveLink}
                  target="_blank"
                  className="py-1 px-2.5 sm:py-1.5 sm:px-3 text-[11px] sm:text-xs"
                >
                  <span className="hidden xs:inline sm:inline">
                    {project.category === 'Mobile' || cs.liveLink.includes('apple.com') ? 'View on App Store' : 'Visit Live Site'}
                  </span>
                  <span className="inline xs:hidden sm:hidden">
                    {project.category === 'Mobile' || cs.liveLink.includes('apple.com') ? 'App Store' : 'Live Site'}
                  </span>
                  <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </Button>
              )}

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
          </div>

          {/* Modal Content Structured as Clean Title & Paragraph Sections */}
          <div className="px-4 pb-8 pt-4 sm:px-10 sm:pb-10 space-y-8 sm:space-y-10 text-neutral-300">
            {cs ? (
              <>
                {/* Description */}
                <section className="space-y-4 border-b border-neutral-800 pb-8">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white tracking-tight leading-tight">
                    {project.title}
                  </h1>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {project.subtitle}
                  </p>
                  <div className="space-y-2 pt-2">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Project Description</h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {cs.projectDescription || project.summary}
                    </p>
                  </div>
                </section>

                {/* Image above Key Features (Sarayah, Classic Decoder & Vehicle Databases) */}
                {project.id === 'sarayah-phuket-villas' && (
                  <div className="overflow-hidden rounded-xs border border-neutral-800 bg-neutral-900/60 shadow-sm">
                    <img
                      src={sarayah1Img}
                      alt="Sarayah Phuket Villas - Key Features Preview"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {project.id === 'classic-decoder' && (
                  <div className="overflow-hidden rounded-xs border border-neutral-800 bg-neutral-900/60 shadow-sm">
                    <img
                      src={cdsite1Img}
                      alt="Classic Decoder - Industry Firsts Preview"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {project.id === 'vehicle-databases' && (
                  <div className="overflow-hidden rounded-xs border border-neutral-800 bg-neutral-900/60 shadow-sm">
                    <img
                      src={vdb1Img}
                      alt="Vehicle Databases - Key Features Preview"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {project.id === 'detailed-vehicle-history' && (
                  <div className="overflow-hidden rounded-xs border border-neutral-800 bg-neutral-900/60 shadow-sm">
                    <img
                      src={dvh1Img}
                      alt="Detailed Vehicle History - Key Features Preview"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {project.id === 'fierce-fight-gear' && (
                  <div className="overflow-hidden rounded-xs border border-neutral-800 bg-neutral-900/60 shadow-sm">
                    <img
                      src={ffg1Img}
                      alt="Fierce Fight Gear - Key Features Preview"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {project.id === 'classic-decoder-mobile' && (
                  <div className="overflow-hidden rounded-xs border border-neutral-800 bg-neutral-900/60 shadow-sm">
                    <img
                      src={cdapp1Img}
                      alt="Classic Decoder Mobile - Key Features Preview"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Key Features */}
                {cs.keyFeatures && cs.keyFeatures.length > 0 && (
                  <section className="space-y-4 border-b border-neutral-800 pb-8">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      {cs.keyFeaturesIntro || 'Key Features of the Product'}
                    </h3>
                    <ul className="space-y-2 pt-2">
                      {cs.keyFeatures.map((feat, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-neutral-300 leading-relaxed flex items-start gap-2">
                          <span className="text-neutral-500 font-bold">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Image above Challenges Overcome (Sarayah, Classic Decoder, Vehicle Databases, Detailed Vehicle History, Fierce Fight Gear & Classic Decoder Mobile) */}
                {project.id === 'sarayah-phuket-villas' && (
                  <div className="overflow-hidden rounded-xs border border-neutral-800 bg-neutral-900/60 shadow-sm">
                    <img
                      src={sarayah2Img}
                      alt="Sarayah Phuket Villas - Challenges Overcome Preview"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {project.id === 'classic-decoder' && (
                  <div className="overflow-hidden rounded-xs border border-neutral-800 bg-neutral-900/60 shadow-sm">
                    <img
                      src={cdsite2Img}
                      alt="Classic Decoder - Challenges Overcome Preview"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {project.id === 'vehicle-databases' && (
                  <div className="overflow-hidden rounded-xs border border-neutral-800 bg-neutral-900/60 shadow-sm">
                    <img
                      src={vdb2Img}
                      alt="Vehicle Databases - Challenges Overcome Preview"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {project.id === 'detailed-vehicle-history' && (
                  <div className="overflow-hidden rounded-xs border border-neutral-800 bg-neutral-900/60 shadow-sm">
                    <img
                      src={dvh2Img}
                      alt="Detailed Vehicle History - Challenges Overcome Preview"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {project.id === 'fierce-fight-gear' && (
                  <div className="overflow-hidden rounded-xs border border-neutral-800 bg-neutral-900/60 shadow-sm">
                    <img
                      src={ffg2Img}
                      alt="Fierce Fight Gear - Challenges Overcome Preview"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {project.id === 'classic-decoder-mobile' && (
                  <div className="overflow-hidden rounded-xs border border-neutral-800 bg-neutral-900/60 shadow-sm">
                    <img
                      src={cdapp2Img}
                      alt="Classic Decoder Mobile - Challenges Overcome Preview"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Challenges Overcome */}
                {cs.challengesOvercome && cs.challengesOvercome.length > 0 ? (
                  <section className="space-y-4 border-b border-neutral-800 pb-8">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Challenges Overcome</h3>
                    <div className="space-y-3.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {cs.challengesOvercome.map((ch, idx) => (
                        typeof ch === 'string' ? (
                          <p key={idx}>{ch}</p>
                        ) : (
                          <p key={idx}>
                            {ch.title && <strong className="text-white font-semibold">{ch.title}: </strong>}
                            {ch.description}
                          </p>
                        )
                      ))}
                    </div>
                  </section>
                ) : (
                  cs.keyDecisions && cs.keyDecisions.length > 0 && (
                    <section className="space-y-4 border-b border-neutral-800 pb-8">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">Challenges Overcome</h3>
                      <div className="space-y-3.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {cs.keyDecisions.map((kd, idx) => (
                          <p key={idx}>
                            <strong className="text-white font-semibold">{kd.title}: </strong>
                            {kd.solution}
                          </p>
                        ))}
                      </div>
                    </section>
                  )
                )}

                {/* Image above Outcomes & Impact (Sarayah, Classic Decoder, Vehicle Databases, Detailed Vehicle History, Fierce Fight Gear & Classic Decoder Mobile) */}
                {project.id === 'sarayah-phuket-villas' && (
                  <div className="overflow-hidden rounded-xs border border-neutral-800 bg-neutral-900/60 shadow-sm">
                    <img
                      src={sarayah3Img}
                      alt="Sarayah Phuket Villas - Outcomes & Impact Preview"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {project.id === 'classic-decoder' && (
                  <div className="overflow-hidden rounded-xs border border-neutral-800 bg-neutral-900/60 shadow-sm">
                    <img
                      src={cdsite3Img}
                      alt="Classic Decoder - Outcomes & Impact Preview"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {project.id === 'vehicle-databases' && (
                  <div className="overflow-hidden rounded-xs border border-neutral-800 bg-neutral-900/60 shadow-sm">
                    <img
                      src={vdb3Img || vdb2Img}
                      alt="Vehicle Databases - Outcomes & Impact Preview"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {project.id === 'detailed-vehicle-history' && (
                  <div className="overflow-hidden rounded-xs border border-neutral-800 bg-neutral-900/60 shadow-sm">
                    <img
                      src={dvh3Img}
                      alt="Detailed Vehicle History - Outcomes & Impact Preview"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {project.id === 'fierce-fight-gear' && (
                  <div className="overflow-hidden rounded-xs border border-neutral-800 bg-neutral-900/60 shadow-sm">
                    <img
                      src={ffg3Img}
                      alt="Fierce Fight Gear - Outcomes & Impact Preview"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {project.id === 'classic-decoder-mobile' && (
                  <div className="overflow-hidden rounded-xs border border-neutral-800 bg-neutral-900/60 shadow-sm">
                    <img
                      src={cdapp3Img}
                      alt="Classic Decoder Mobile - Outcomes & Impact Preview"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Outcomes & Impact */}
                {cs.outcomesAndImpact && cs.outcomesAndImpact.length > 0 ? (
                  <section className="space-y-4 border-b border-neutral-800 pb-8">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Outcomes & Impact</h3>
                    <div className="space-y-3.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {cs.outcomesAndImpact.map((out, idx) => (
                        <p key={idx}>{out}</p>
                      ))}
                    </div>
                  </section>
                ) : (
                  cs.tldr && (
                    <section className="space-y-4 border-b border-neutral-800 pb-8">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">Outcomes & Impact</h3>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {cs.tldr.result}
                      </p>
                    </section>
                  )
                )}

                {/* Role, Team Size, Tech Stacks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Role</h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {cs.role}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Team Size</h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {cs.team}
                    </p>
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Tech Stacks</h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {cs.tools.join(', ')}
                    </p>
                  </div>
                </div>

                {/* Footer action inside modal */}
                <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-end gap-4">
                  <Button
                    variant="primary"
                    onClick={() => {
                      setModalScrolled(false);
                      onClose();
                      onOpenBooking();
                    }}
                  >
                    <span>Plan a virtual chat</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </>
            ) : (
              <div className="py-12 text-center text-neutral-500 font-mono text-xs">
                Case study details coming soon.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};
