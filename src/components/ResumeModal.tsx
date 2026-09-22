import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Mail, MapPin, Globe, FileText, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';
import { experienceData } from '../data/experience';
import { Button } from './Button';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen || typeof document === 'undefined') return null;

  const handlePrint = () => {
    window.print();
  };

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xs w-full max-w-3xl overflow-hidden shadow-2xl my-6 flex flex-col max-h-[90vh]"
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shrink-0">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-slate-700 dark:text-slate-300" />
              <h3 className="font-display font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                Curriculum Vitae — New Zealand Format (ATS-Compliant)
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="primary"
                href="https://www.dropbox.com/scl/fi/z30c6hwlsyq8u54e7ziq1/resume.waiphyoaung.pdf?rlkey=1s0pwgtbrkqx6tw9bv2xz4x2b&e=2&st=ad9814oj&dl=0"
                target="_blank"
                title="Open original PDF in new tab"
                className="py-1.5 px-3"
              >
                <span>Original PDF</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>

              <Button
                variant="secondary"
                onClick={handlePrint}
                title="Print or Save as PDF"
                className="hidden sm:inline-flex py-1.5 px-3"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </Button>

              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-xs transition-colors cursor-pointer"
                aria-label="Close CV modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Clean NZ ATS Document Body */}
          <div className="p-6 sm:p-10 overflow-y-auto bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 space-y-7 font-sans">
            {/* CV Header */}
            <div className="border-b border-slate-200 dark:border-slate-800 pb-5 space-y-1.5">
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
                {profileData.name}
              </h1>
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Senior UI/UX Designer & Senior Motion Graphics Designer
              </div>

              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-slate-400" />
                  <span>{profileData.contact.email}</span>
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>Bangkok (UTC+7) • Relocation / Remote to NZ</span>
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-3 h-3 text-slate-400" />
                  <span>Portfolio: waiphyoaung.framer.website</span>
                </span>
              </div>
            </div>

            {/* Target & Work Rights Statement */}
            <div className="space-y-1.5 p-4 rounded-xs bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Professional Summary & New Zealand Work Rights
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Senior Product Designer with 10 years of experience across UI/UX and motion graphics. Proven record delivering high-conversion design systems, including a verified +150% online sales increase for Classic Decoder. Seeking UI/UX roles with New Zealand employers supporting Accredited Employer Work Visa (AEWV) sponsorship or full-time remote contracts.
              </p>
            </div>

            {/* Core Competencies */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
                Core Competencies & Stack
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <strong className="text-slate-900 dark:text-white block mb-0.5">Product UI/UX:</strong>
                  <span className="text-slate-600 dark:text-slate-400">Design systems, wireframing, user research, WCAG AA accessibility, interactive prototyping.</span>
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white block mb-0.5">Motion & Interaction:</strong>
                  <span className="text-slate-600 dark:text-slate-400">Micro-interaction choreography, Lottie exports, After Effects, keyframe specifications.</span>
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white block mb-0.5">Tools & Delivery:</strong>
                  <span className="text-slate-600 dark:text-slate-400">Figma, FigJam, Cursor, v0.dev, Tailwind tokens, Framer, Webflow, React basics.</span>
                </div>
              </div>
            </div>

            {/* Work History */}
            <div className="space-y-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
                Employment History
              </h2>

              {experienceData.roles.map((role) => (
                <div key={role.id} className="space-y-1.5 text-xs">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                      {role.role} — <span className="font-medium text-slate-600 dark:text-slate-400">{role.company}</span>
                    </h3>
                    <span className="text-slate-500 font-mono text-[11px]">{role.period}</span>
                  </div>

                  <div className="text-slate-500 text-[11px] italic">
                    {role.location}
                  </div>

                  <ul className="space-y-1 pt-1">
                    {role.bullets.map((b, i) => (
                      <li key={i} className="text-slate-700 dark:text-slate-300 flex items-start gap-2 leading-relaxed">
                        <span className="text-slate-400 font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
                Education & Credentials
              </h2>
              <div className="text-xs space-y-0.5">
                <div className="font-bold text-slate-900 dark:text-white">
                  {profileData.education.degree}
                </div>
                <div className="text-slate-600 dark:text-slate-400">
                  {profileData.education.institution} ({profileData.education.partnerInstitution})
                </div>
              </div>
            </div>

            {/* Referees */}
            <div className="space-y-1 border-t border-slate-200 dark:border-slate-800 pt-4 text-xs">
              <h2 className="font-bold uppercase tracking-wider text-slate-900 dark:text-white text-[11px]">
                Referees
              </h2>
              <p className="text-slate-500 dark:text-slate-400 italic">
                2–3 professional references (design leadership and engineering management) available upon request.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};
