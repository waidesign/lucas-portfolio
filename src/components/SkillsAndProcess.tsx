import React from 'react';
import { 
  Compass, 
  Layers, 
  Code2, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  Repeat,
  ArrowRight
} from 'lucide-react';
import { skillsData, toolsData, processStages } from '../data/skillsAndTools';

export const SkillsAndProcess: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="clean-container">
        {/* Section Title */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Capabilities & Methodology
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1.5 tracking-tight">
            End-to-end design craft, from discovery to production code.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            A balanced approach grounded in engineering logic, aesthetic refinement, and systematic execution.
          </p>
        </div>

        {/* 3 Core Pillars (Clean, spacious, highly legible) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skillsData.map((category, idx) => {
            const icons = [Compass, Layers, Code2];
            const Icon = icons[idx % icons.length];

            return (
              <div
                key={category.title}
                className="clean-card p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-800 dark:text-slate-200 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-5">
                    {category.description}
                  </p>

                  <ul className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tool Stack (Clean, curated) */}
        <div className="clean-card p-6 sm:p-8 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Production Tool Stack
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Industry-standard design, motion, and developer handoff tools used daily.
              </p>
            </div>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto">
              AI-Accelerated Workflow
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {toolsData.map((tool) => (
              <div
                key={tool.name}
                className={`p-3 rounded-xl border transition-colors ${
                  tool.highlight
                    ? 'border-slate-300 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/60'
                    : 'border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900'
                }`}
              >
                <div className="font-semibold text-xs text-slate-900 dark:text-white">
                  {tool.name}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {tool.proficiency}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Process (Clear 6 steps, unhurried) */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Product Lifecycle
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              How I deliver predictable results
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processStages.map((stage) => (
              <div
                key={stage.step}
                className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 mb-2">
                    STAGE {stage.step}
                  </div>
                  <div className="font-display text-base font-bold text-slate-900 dark:text-white mb-2">
                    {stage.title}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400">
                  <strong className="text-slate-700 dark:text-slate-300 font-semibold">Deliverables:</strong> {stage.deliverables}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
