import React from 'react';
import { 
  Globe, 
  Clock, 
  CheckCircle2, 
  FileCheck, 
  Calendar, 
  Mail, 
  ArrowRight,
  ShieldCheck,
  Heart
} from 'lucide-react';
import { newZealandData } from '../data/newzealand';
import { profileData } from '../data/profile';

interface NewZealandHubProps {
  onOpenBooking: () => void;
  onOpenResume: () => void;
}

export const NewZealandHub: React.FC<NewZealandHubProps> = ({
  onOpenBooking,
  onOpenResume,
}) => {
  return (
    <section id="new-zealand" className="py-20 md:py-28 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="clean-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 mb-3">
            <span>🇳🇿 New Zealand Hiring & Relocation Hub</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Ready to contribute to New Zealand's digital product landscape.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Transparent information regarding visa eligibility, remote collaboration cadence, and relocation readiness for Kiwi product teams and design agencies.
          </p>
        </div>

        {/* 2-Column Transparent Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Visa & Work Rights */}
          <div className="clean-card p-6 sm:p-8 bg-white dark:bg-slate-900 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-5">
                <FileCheck className="w-5 h-5" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Work Rights & Visa Status
              </span>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-1 mb-3">
                AEWV Sponsorship & Remote Engagement
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Currently based in Bangkok (UTC+7). Open to full-time remote contracts under New Zealand agreements or employer-sponsored relocation under the <strong>Accredited Employer Work Visa (AEWV)</strong> framework.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                {newZealandData.visaAndWorkRights.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
              {newZealandData.visaAndWorkRights.accreditedEmployerNote}
            </div>
          </div>

          {/* Card 2: Timezone Sync & Workflow */}
          <div className="clean-card p-6 sm:p-8 bg-white dark:bg-slate-900 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5">
                <Clock className="w-5 h-5" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Collaboration Cadence
              </span>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-1 mb-3">
                Seamless Timezone Overlap
              </h3>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 mb-4">
                <div className="text-xs font-semibold text-slate-900 dark:text-white">
                  4 to 5 hours daily synchronous overlap
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Bangkok early hours align smoothly with New Zealand morning standups, sprint reviews, and team critiques (9am – 1pm NZT).
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                {newZealandData.timezoneCollaboration.howIWork.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
              Overnight turnaround: Designs finalized in Bangkok are on your Auckland or Wellington desk by 9:00 AM.
            </div>
          </div>
        </div>

        {/* Why New Zealand Cultural Alignment Strip */}
        <div className="clean-card p-6 sm:p-8 bg-white dark:bg-slate-900 mb-12">
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-4">
            Why New Zealand?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newZealandData.whyNewZealand.map((item) => (
              <div key={item.title}>
                <div className="font-semibold text-sm text-slate-900 dark:text-white mb-1.5">
                  {item.title}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick CTA banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white dark:bg-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="font-display text-lg sm:text-xl font-bold">
              Ready to discuss an open role or contract?
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Available for immediate intro video chats aligned with your Auckland / Wellington business hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenResume}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors"
            >
              Download NZ-Format CV
            </button>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs transition-all shadow-sm"
            >
              Book Intro Call (NZT)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
