import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Check, Mail, Globe, ArrowRight, User, Building, Send } from 'lucide-react';
import { profileData } from '../data/profile';
import { Button } from './Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [selectedTz, setSelectedTz] = useState('Pacific/Auckland');
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    roleType: 'Full-Time NZ Role (AEWV Sponsorship)',
    preferredTime: 'Morning (9:00 - 12:00 NZT)',
    notes: '',
  });

  if (!isOpen || typeof document === 'undefined') return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xs w-full max-w-xl overflow-hidden shadow-2xl my-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-700 dark:text-slate-300" />
              <h3 className="font-display font-bold text-slate-900 dark:text-white text-base">
                Book a Chat — New Zealand Business Hours
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-xs transition-colors"
              aria-label="Close booking modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 rounded-xs flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                  Meeting Request Received
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. I reply within 12 hours (aligned with Auckland & Wellington business hours) to confirm a calendar invitation or call.
                </p>
                <div className="pt-2">
                  <Button
                    variant="primary"
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="px-6 py-2.5"
                  >
                    Done
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="p-4 rounded-xs bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block">
                      Timezone Synchronized
                    </span>
                    <span className="text-xs font-semibold text-slate-900 dark:text-white">
                      Direct morning overlap with Auckland & Wellington
                    </span>
                  </div>

                  <select
                    value={selectedTz}
                    onChange={(e) => setSelectedTz(e.target.value)}
                    className="bg-white dark:bg-slate-900 text-xs text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xs px-2.5 py-1.5 outline-none font-medium"
                  >
                    <option value="Pacific/Auckland">Auckland (NZT)</option>
                    <option value="Australia/Sydney">Sydney (AEST)</option>
                    <option value="Asia/Bangkok">Bangkok (ICT)</option>
                  </select>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xs px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:border-slate-900 dark:focus:border-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. s.jenkins@company.co.nz"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xs px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:border-slate-900 dark:focus:border-white outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Company / Organisation
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. KiwiTech NZ"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xs px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:border-slate-900 dark:focus:border-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Opportunity Type
                      </label>
                      <select
                        value={formState.roleType}
                        onChange={(e) => setFormState({ ...formState, roleType: e.target.value })}
                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xs px-3.5 py-2 text-xs text-slate-900 dark:text-white focus:border-slate-900 dark:focus:border-white outline-none"
                      >
                        <option value="Full-Time NZ Role (AEWV Sponsorship)">
                          Full-Time NZ Role (AEWV Visa Sponsorship)
                        </option>
                        <option value="Remote Full-Time / Contract">
                          Remote Contract for New Zealand Team
                        </option>
                        <option value="Design Systems / Motion Consulting">
                          Design Systems / Motion Consulting
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Preferred Meeting Window (NZT)
                    </label>
                    <select
                      value={formState.preferredTime}
                      onChange={(e) => setFormState({ ...formState, preferredTime: e.target.value })}
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xs px-3.5 py-2 text-xs text-slate-900 dark:text-white focus:border-slate-900 dark:focus:border-white outline-none"
                    >
                      <option value="Morning (9:00 - 12:00 NZT)">Morning (9:00 - 12:00 NZT)</option>
                      <option value="Afternoon (13:00 - 17:00 NZT)">Afternoon (13:00 - 17:00 NZT)</option>
                      <option value="Flexible / Asynchronous">Flexible / Asynchronous</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Notes or Brief Description
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Brief note on your open role, project timeline, or team..."
                      value={formState.notes}
                      onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xs px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:border-slate-900 dark:focus:border-white outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Direct response from {profileData.name}
                    </span>
                    <Button
                      type="submit"
                      variant="primary"
                      className="px-6 py-2.5 font-bold"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Request Meeting</span>
                    </Button>
                  </div>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};
