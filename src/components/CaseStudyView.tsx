import React from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  Users, 
  Layers, 
  Wrench, 
  AlertCircle, 
  Lightbulb, 
  Compass, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { Button } from './Button';

interface CaseStudyViewProps {
  projectId?: string;
  onBack: () => void;
  onOpenBooking: () => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  projectId = 'classic-decoder',
  onBack,
  onOpenBooking,
}) => {
  const project = projectsData.find((p) => p.id === projectId) || projectsData[0];
  const cs = project.caseStudy;

  if (!cs) {
    return (
      <div className="clean-container py-24 text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Case study in preparation</h2>
        <button onClick={onBack} className="text-sm font-semibold underline text-slate-900 dark:text-white">
          Return to Selected Work
        </button>
      </div>
    );
  }

  return (
    <article className="clean-container py-12 md:py-20 space-y-12">
      {/* Top back navigation */}
      <div>
        <Button
          variant="secondary"
          onClick={onBack}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio Overview</span>
        </Button>
      </div>

      {/* Header section */}
      <header className="space-y-6 border-b border-slate-200 dark:border-slate-800 pb-10">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {project.industry}
          </span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="text-slate-600 dark:text-slate-400">{project.year}</span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 rounded-xs font-bold">
            CONFIRMED METRIC
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight max-w-4xl">
          {cs.outcomeHeadline}
        </h1>

        {/* Primary Outcome Card */}
        <div className="clean-card p-6 sm:p-8 bg-slate-50/70 dark:bg-slate-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider mb-1">
              Confirmed Primary Result
            </div>
            <div className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white">
              {cs.metric}
            </div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
              Baseline: {cs.baseline}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Measurement: {cs.measurementMethod}
            </div>
          </div>

          {cs.liveLink && (
            <Button
              variant="primary"
              href={cs.liveLink}
              target="_blank"
            >
              <span>Visit Live Platform</span>
              <ExternalLink className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Project Meta Details */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
          <div>
            <span className="text-slate-400 block text-[11px] mb-0.5 font-medium">My Role</span>
            <span className="text-slate-900 dark:text-white font-semibold">{cs.role}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px] mb-0.5 font-medium">Team</span>
            <span className="text-slate-900 dark:text-white font-semibold">{cs.team}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px] mb-0.5 font-medium">Timeline</span>
            <span className="text-slate-900 dark:text-white font-semibold">{cs.timeline}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px] mb-0.5 font-medium">Core Stack</span>
            <span className="text-slate-900 dark:text-white font-semibold truncate block">{cs.tools.join(', ')}</span>
          </div>
        </div>
      </header>

      {/* 30-Second Summary Section */}
      <section className="clean-card p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider">
          <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>30-Second Executive Summary</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="space-y-1.5 border-l-2 border-red-400 pl-3">
            <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider block">
              The Problem
            </span>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {cs.tldr.problem}
            </p>
          </div>

          <div className="space-y-1.5 border-l-2 border-slate-900 dark:border-white pl-3">
            <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block">
              What I Did
            </span>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {cs.tldr.whatIDid}
            </p>
          </div>

          <div className="space-y-1.5 border-l-2 border-emerald-500 pl-3">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
              The Result
            </span>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {cs.tldr.result}
            </p>
          </div>
        </div>
      </section>

      {/* Starting Point & Research */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Compass className="w-5 h-5 text-slate-700 dark:text-slate-300" />
          <span>Starting Point & Discovery</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {cs.startingPoint}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="clean-card p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              User Pain Points
            </h4>
            <ul className="space-y-2.5">
              {cs.researchAndDiscovery.userPainPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <AlertCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="clean-card p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Research Insights
            </h4>
            <ul className="space-y-2.5">
              {cs.researchAndDiscovery.insights.map((insight, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Key Design Decisions */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-slate-700 dark:text-slate-300" />
          <span>Key Design Decisions & Measurable Impact</span>
        </h2>

        <div className="space-y-5">
          {cs.keyDecisions.map((decision, idx) => (
            <div
              key={idx}
              className="clean-card p-6 sm:p-8 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Decision 0{idx + 1}
                </span>
                <span className="text-xs bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 rounded-xs font-semibold">
                  {decision.impact}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {decision.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xs bg-red-50/50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30">
                  <span className="text-[11px] uppercase font-bold text-red-700 dark:text-red-400 block mb-1">
                    Problem State
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {decision.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xs bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <span className="text-[11px] uppercase font-bold text-slate-900 dark:text-white block mb-1">
                    Design Solution
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {decision.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design System Highlights */}
      <section className="clean-card p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-slate-700 dark:text-slate-300" />
          <span>Design System & Engineering Handoff</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          Bridging design mockups to production code was critical for launch velocity. I established shared token naming conventions mapped 1:1 between Figma Styles and the engineering Tailwind configuration.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {cs.designSystemHighlights.map((highlight, i) => (
            <div key={i} className="p-3.5 rounded-xs bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testing & Learnings */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="clean-card p-6 space-y-3">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Testing & Usability Iteration
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {cs.testingAndIteration}
          </p>
        </div>

        <div className="clean-card p-6 space-y-3">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Key Takeaways & Learnings
          </h3>
          <ul className="space-y-2">
            {cs.learnings.map((learning, i) => (
              <li key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-white mt-1.5 shrink-0" />
                <span>{learning}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Case Study Bottom Actions */}
      <footer className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button
          variant="secondary"
          onClick={onBack}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all projects</span>
        </Button>

        <Button
          variant="primary"
          onClick={onOpenBooking}
        >
          <span>Plan a virtual chat</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </footer>
    </article>
  );
};
