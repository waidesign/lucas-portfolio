import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  Compass
} from 'lucide-react';
import { profileData } from '../data/profile';
import { experienceData } from '../data/experience';

export const AboutAndExperience: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="clean-container">
        {/* Section Title */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            About & Career Journey
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1.5 tracking-tight">
            From video rhythm and civil engineering to digital product design.
          </h2>
        </div>

        {/* Narrative Split Card (Engineering + Motion + UI/UX) */}
        <div className="clean-card p-6 sm:p-8 md:p-10 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
              {experienceData.narrativeLead}
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {experienceData.narrativeDetail}
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                  1. Civil Engineering
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Disciplined systems thinking, modular grids, and structural constraints.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                  2. Motion Graphics
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Visual rhythm, narrative pacing, and user cognitive attention control.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                  3. Product UI/UX Lead
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Conversion-led interfaces, design token architectures, and measurable CRO.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Education Foundation</span>
              </div>
              <div className="font-display font-bold text-sm text-slate-900 dark:text-white">
                {profileData.education.degree}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                {profileData.education.institution}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                {profileData.education.partnerInstitution}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-400">
              Structured engineering documentation aligns directly with New Zealand technical standards and cross-functional team expectations.
            </div>
          </div>
        </div>

        {/* Experience Timeline (Clean, vertical, legible) */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Work History
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Professional experience across agency & product teams
            </h3>
          </div>

          <div className="space-y-6">
            {experienceData.roles.map((role) => (
              <div
                key={role.id}
                className="clean-card p-6 sm:p-8 relative"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                        {role.role}
                      </h4>
                      {role.isCurrent && (
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                      {role.companyUrl ? (
                        <a
                          href={role.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-slate-700 dark:text-slate-300"
                        >
                          {role.company}
                        </a>
                      ) : (
                        role.company
                      )}
                      {' • '}{role.location}
                    </div>
                  </div>

                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 self-start sm:self-auto">
                    {role.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {role.summary}
                </p>

                <ul className="space-y-2 mb-4">
                  {role.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  {role.skillsGained.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
