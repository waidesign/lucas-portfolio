import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ExternalLink, 
  Sliders, 
  Activity, 
  Box, 
  Layers, 
  Eye, 
  CheckCircle2, 
  ChevronRight 
} from 'lucide-react';
import { projectsData, ProjectItem } from '../data/projects';

interface ProjectShowcaseProps {
  onOpenCaseStudy: (projectId: string) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onOpenCaseStudy }) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Web' | 'Mobile' | 'Motion' | 'Design System'>('All');

  // Filter out Classic Decoder as it has its own prominent Flagship section
  const projects = projectsData.filter((p) => p.id !== 'classic-decoder');

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedFilter);

  return (
    <section className="py-20 md:py-28 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="clean-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Selected Commercial Projects
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1.5 tracking-tight">
              Crafted for conversion, usability, and scale.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 self-start md:self-auto">
            {(['All', 'Web', 'Mobile', 'Motion', 'Design System'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedFilter === filter
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {filter === 'All' ? 'All Projects' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid (Clean, generous, easy to digest) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="clean-card flex flex-col justify-between overflow-hidden group"
              >
                {/* Visual Header / Preview Mock */}
                <div className="p-6 sm:p-7 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-slate-800/80">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                      {project.category} • {project.year}
                    </span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {project.industry}
                    </span>
                  </div>

                  {/* Interactive / Visual Preview Representation */}
                  <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 shadow-xs transition-transform group-hover:translate-y-[-2px]">
                    {project.id === 'vehicle-databases' && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-900 dark:text-white">API Quota Simulator</span>
                          <span className="font-mono text-emerald-600 dark:text-emerald-400">100,000 req/mo</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-blue-500 h-full w-3/4 rounded-full" />
                        </div>
                        <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                          <span>Interactive tier calculator</span>
                          <span className="font-semibold text-slate-800 dark:text-slate-200">$0.0018 / call</span>
                        </div>
                      </div>
                    )}

                    {project.id === 'detailed-vehicle-history' && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-emerald-500" />
                            <span className="text-xs font-bold text-slate-900 dark:text-white">Vehicle Health Score</span>
                          </div>
                          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                            94 / 100
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-[11px]">
                          <div className="p-2 rounded bg-slate-50 dark:bg-slate-800 text-center">
                            <span className="text-slate-400 block text-[9px] uppercase">Title</span>
                            <span className="font-semibold text-emerald-600 dark:text-emerald-400">Clean</span>
                          </div>
                          <div className="p-2 rounded bg-slate-50 dark:bg-slate-800 text-center">
                            <span className="text-slate-400 block text-[9px] uppercase">Odometer</span>
                            <span className="font-semibold text-slate-700 dark:text-slate-300">Accurate</span>
                          </div>
                          <div className="p-2 rounded bg-slate-50 dark:bg-slate-800 text-center">
                            <span className="text-slate-400 block text-[9px] uppercase">Salvage</span>
                            <span className="font-semibold text-slate-700 dark:text-slate-300">None</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.id === 'fierce-fight-gear' && (
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-900 dark:text-white">3D Customizer Stage</span>
                          <span className="text-[11px] text-amber-600 dark:text-amber-400 font-medium">360° Real-time Preview</span>
                        </div>
                        <div className="flex items-center gap-2 pt-1">
                          <span className="text-[11px] text-slate-500 dark:text-slate-400">Leather Texture:</span>
                          <span className="w-4 h-4 rounded-full bg-stone-900 border border-slate-300" title="Matte Onyx" />
                          <span className="w-4 h-4 rounded-full bg-amber-800 border border-slate-300" title="Classic Saddle" />
                          <span className="w-4 h-4 rounded-full bg-red-800 border border-slate-300" title="Crimson Grain" />
                        </div>
                      </div>
                    )}

                    {project.id === 'sarayah-phuket-villas' && (
                      <div className="space-y-2">
                        <div className="text-xs font-serif italic text-slate-600 dark:text-slate-400">
                          "Editorial Architectural Sanctuary"
                        </div>
                        <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100 dark:border-slate-800">
                          <span className="text-slate-500">Plan-to-View Hotspots</span>
                          <span className="font-semibold text-slate-800 dark:text-slate-200">Zero OTA Commissions</span>
                        </div>
                      </div>
                    )}

                    {project.id === 'lumina-workspace' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-slate-500">cubic-bezier(0.16, 1, 0.3, 1)</span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">CSS + Framer</span>
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                          Automated motion token handoff for React engineering teams.
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white dark:bg-slate-900">
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Card Actions */}
                  <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => onOpenCaseStudy(project.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white hover:underline"
                    >
                      <span>View Case Study</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {project.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
