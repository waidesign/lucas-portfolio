import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Calendar, 
  ArrowUpRight, 
  ExternalLink, 
  Maximize2, 
  CheckCircle2, 
  Clock, 
  Play, 
  Sparkles, 
  Layers, 
  ChevronRight, 
  Search, 
  Sliders, 
  Code2, 
  ShieldCheck, 
  Eye, 
  Palette, 
  TrendingUp, 
  Download, 
  Linkedin, 
  Send, 
  Briefcase, 
  Globe2,
  Bookmark,
  Share2,
  X,
  Info
} from 'lucide-react';
import { profileData } from '../data/profile';
import { projectsData, ProjectItem } from '../data/projects';
import { experienceData, ExperienceItem } from '../data/experience';
import { writingData } from '../data/writing';
import { newZealandData } from '../data/newzealand';
import { skillsData, toolsData } from '../data/skillsAndTools';
import { Button } from './Button';
import { TestimonialsSection } from './TestimonialsSection';
import { BlogSection } from './BlogSection';
import { ExperienceModal } from './ExperienceModal';
import profileImg from '../assets/images/profileimg.webp';
import cdsiteThumb from '../assets/images/cdsite-thumbnail.webp';
import cdappThumb from '../assets/images/cdapp-thumbnail.webp';
import vdbsiteThumb from '../assets/images/vdbsite-thumbnail.webp';
import dvhsiteThumb from '../assets/images/dvhsite-thumbnail.webp';
import ffgThumb from '../assets/images/ffg-thumbnail.webp';
import sarayahThumb from '../assets/images/sarayah-thumbnail.webp';

interface CleanPortfolioProps {
  onOpenCaseStudy: (id: string) => void;
  onOpenBooking: () => void;
  onOpenResume: () => void;
  onOpenShowreel: () => void;
}

export const CleanPortfolio: React.FC<CleanPortfolioProps> = ({
  onOpenCaseStudy,
  onOpenBooking,
  onOpenResume,
  onOpenShowreel,
}) => {
  // Selected experience item for full details modal
  const [selectedExperienceModal, setSelectedExperienceModal] = useState<ExperienceItem | null>(null);

  // Selected project category filter
  const [projectFilter, setProjectFilter] = useState<string>('All');

  // Active badge category tab for the compact Skills & Tools card
  const [activeBadgeTab, setActiveBadgeTab] = useState<'skills' | 'tools'>('skills');

  const skillBadges = [
    'User Research',
    'Wireframing',
    'Storyboarding',
    'Prototyping',
    'Micro-interaction',
    'Animation',
    'Motion Graphics',
    'Lo-Fi & Hi-Fi Designs',
    'Usability Testing',
    'Design Systems',
    'Accessibility',
    'Responsive design',
    'HTML & CSS',
    'JavaScript',
    'AI vibe-coding',
    'AI no-code-development',
    'AI tools for design',
    'AI-Integration',
    'SEO-Friendly',
    'Developer-hadoff-design',
  ];

  const toolBadges = [
    'Figma',
    'Figma AI',
    'FigJam',
    'Webflow',
    'Framer',
    'Google AI Studio',
    'Antigravity',
    'Claude Code',
    'Cursor',
    'Google Apps',
    'JIRA',
    'v0.dev',
    'Adobe After Effects',
    'Adobe Premiere Pro',
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Github',
    'Bitbucket',
    'Lottie Files',
  ];
  
  // Interactive preview state for Classic Decoder
  const [vinInput, setVinInput] = useState('1967SHELBYGT500');
  const [vinStatus, setVinStatus] = useState<'idle' | 'scanning' | 'verified'>('verified');
  const [activeTabDecoder, setActiveTabDecoder] = useState<'interface' | 'comparison' | 'tokens'>('interface');

  // Interactive tier slider for Vehicle Databases
  const [apiCalls, setApiCalls] = useState<number>(50000);

  // Interactive swatch for Fierce Fight Gear
  const [selectedLeather, setSelectedLeather] = useState<'oxblood' | 'matte-black' | 'gold'>('oxblood');

  const handleVinSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vinInput.trim()) return;
    setVinStatus('scanning');
    setTimeout(() => {
      setVinStatus('verified');
    }, 600);
  };

  const filteredProjects = projectFilter === 'All' 
    ? projectsData 
    : projectsData.filter((p) => {
        if (projectFilter === 'Automotive') return p.industry.includes('Automotive');
        if (projectFilter === 'Mobile') return p.category === 'Mobile';
        if (projectFilter === 'Motion & 3D') return p.category === 'Motion' || p.tags.includes('Micro-Interactions');
        if (projectFilter === 'B2B & SaaS') return p.tags.includes('Pricing Architecture') || p.tags.includes('SaaS Concept');
        return true;
      });

  return (
    <div className="clean-container py-10 sm:py-16 max-w-6xl mx-auto">
      {/* 2-Column Desktop Grid matching https://thantheinthwin.vercel.app/ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start min-w-0">
        
        {/* =========================================================================
            LEFT COLUMN (lg:col-span-8) - Profile, About, Skills, Visuals Case Studies, Experience
            ========================================================================= */}
        <div className="lg:col-span-8 space-y-14 min-w-0">
          
          {/* 1. Profile Header Block */}
          <div className="space-y-4">
            {/* Mobile-only status badge above picture and names */}
            <div className="flex sm:hidden">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-xs w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for work
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 min-w-0 overflow-hidden">
              {/* Left Side: Avatar + Details */}
              <div className="flex items-center gap-3 sm:gap-5 min-w-0 flex-1">
                {/* Designer Avatar with subtle status border */}
                <div className="relative shrink-0 group/avatar">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xs bg-linear-to-br from-neutral-800 to-neutral-950 border border-neutral-200 dark:border-white/20 p-0.5 shadow-md flex items-center justify-center overflow-hidden">
                    <img
                      src={profileImg}
                      alt="Wai Phyo Aung portrait"
                      className="w-full h-full object-cover rounded-xs lg:filter lg:grayscale lg:group-hover/avatar:grayscale-0 contrast-105 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Identity */}
                <div className="space-y-1 min-w-0 flex-1">
                  <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white truncate">
                    {profileData.name}
                  </h1>

                  <p className="text-xs sm:text-base font-semibold text-neutral-900 dark:text-white tracking-tight">
                    Senior UI/UX & Motion Designer
                  </p>

                  {/* Email line */}
                  <a 
                    href="mailto:waiphyoaung.design@gmail.com"
                    className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors block font-mono break-all"
                  >
                    waiphyoaung.design@gmail.com
                  </a>
                </div>
              </div>

              {/* Right Side: Available for work badge & Links line */}
              <div className="flex flex-col items-start sm:items-end gap-2.5 pt-1 sm:pt-0 shrink-0 min-w-0">
                {/* Status Pill (Desktop only) */}
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-xs w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available for work
                </span>

                {/* Social Links line */}
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:justify-end">
                  <span className="text-neutral-400 dark:text-neutral-500">Links</span>
                  <a
                    href="https://linkedin.com/in/waiphyoaung-design"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-0.5 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                  </a>
                  <span className="text-neutral-300 dark:text-neutral-700">•</span>
                  <a
                    href="https://medium.com/@waiphyoaung.design"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-0.5 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    <span>Medium</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-200 dark:border-neutral-800" />

          {/* 2. About Section */}
          <div className="space-y-6 sm:space-y-7" id="about">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold tracking-wide uppercase text-neutral-900 dark:text-white">
                About
              </h2>
              <Button
                variant="primary"
                href="https://www.dropbox.com/scl/fi/z30c6hwlsyq8u54e7ziq1/resume.waiphyoaung.pdf?rlkey=1s0pwgtbrkqx6tw9bv2xz4x2b&e=2&st=ad9814oj&dl=0"
                target="_blank"
                title="Open resume in new tab"
              >
                <span>Get Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </div>

            <div className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-3.5 pt-1">
              <p>
                A Senior UI/UX and Motion Graphics Designer with 10 years of experience in web design, digital products, and animation building scalable product design systems, high-conversion landing pages, and kinetic mobile interfaces. What I am so good at? I excel at taking complex, data-heavy systems and breaking them down into effortless, easy-to-access user interfaces.
              </p>
              <p>
                I have a strong track record of delivering high-quality designs on time and within client budget. I am also a strong communicator and collaborator, able to work effectively with cross-functional teams.
              </p>
              {/* Hidden for now per request:
              <p className="text-sm font-semibold text-neutral-900 dark:text-white leading-relaxed pt-0.5">
                "I am currently open to Senior UI/UX Designer or Senior Product Designer roles along with the Accredited Employer Work Visa (AEWV) in New Zealand and ready to relocate for any on-site vacancy."
              </p>
              */}
            </div>
          </div>

          {/* Skills & Tools Card for Mobile / Tablet Viewports (Rendered right under About section) */}
          <div className="block lg:hidden">
            <div id="skills-mobile" className="p-3.5 sm:p-4 rounded-xs border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0c] space-y-3 shadow-xs">
              {/* Header with Title and Category Filter Tabs */}
              <div className="space-y-2.5 border-b border-neutral-100 dark:border-neutral-800/80 pb-2.5">
                <div className="flex items-center justify-between">
                  <h2 className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-900 dark:text-white">
                    Skills & Tools
                  </h2>
                </div>

                {/* Category Filter Pills (Skills & Tools) */}
                <div className="flex items-center gap-1.5 p-1 rounded-xs bg-neutral-100/80 dark:bg-[#121215] border border-neutral-200/60 dark:border-neutral-800/60">
                  <button
                    onClick={() => setActiveBadgeTab('skills')}
                    className={`flex-1 py-1 px-2 rounded-xs text-[10px] font-mono font-medium transition-all text-center cursor-pointer ${
                      activeBadgeTab === 'skills'
                        ? 'bg-white text-neutral-900 shadow-xs dark:bg-[#202025] dark:text-white font-semibold'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    Skills ({skillBadges.length})
                  </button>
                  <button
                    onClick={() => setActiveBadgeTab('tools')}
                    className={`flex-1 py-1 px-2 rounded-xs text-[10px] font-mono font-medium transition-all text-center cursor-pointer ${
                      activeBadgeTab === 'tools'
                        ? 'bg-white text-neutral-900 shadow-xs dark:bg-[#202025] dark:text-white font-semibold'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    Tools ({toolBadges.length})
                  </button>
                </div>
              </div>

              {/* Badges Stack Display */}
              <div className="pt-0.5">
                {activeBadgeTab === 'skills' ? (
                  <div className="flex flex-wrap gap-1.5">
                    {skillBadges.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2.5 py-1 rounded-xs text-[11px] font-medium bg-neutral-100 hover:bg-neutral-200/70 text-neutral-800 border border-neutral-200/90 dark:bg-[#18181c] dark:hover:bg-[#222228] dark:text-neutral-100 dark:border-white/5 transition-colors whitespace-nowrap shadow-2xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-1.5">
                    {toolBadges.map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex items-center px-2.5 py-1 rounded-xs text-[11px] font-medium bg-neutral-100 hover:bg-neutral-200/70 text-neutral-800 border border-neutral-200/90 dark:bg-[#18181c] dark:hover:bg-[#222228] dark:text-neutral-100 dark:border-white/5 transition-colors whitespace-nowrap shadow-2xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-200 dark:border-neutral-800" />

          {/* 3. Professional Experience Section */}
          <div className="space-y-6 sm:space-y-8 scroll-mt-24" id="experience">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-semibold tracking-wide uppercase text-neutral-900 dark:text-white">
                Professional Experience
              </h2>
              <div className="relative group inline-flex items-center" id="experience-info-tooltip">
                <span
                  tabIndex={0}
                  role="button"
                  aria-label="Click any expand icon to see more details."
                  className="cursor-help text-neutral-400 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-300 transition-colors p-0.5 rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
                >
                  <Info className="w-3.5 h-3.5" />
                </span>
                <div
                  role="tooltip"
                  className="pointer-events-none absolute bottom-full left-0 sm:left-1/2 sm:-translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-150 flex flex-col items-start sm:items-center z-30 drop-shadow-sm"
                >
                  <div className="w-max max-w-[220px] sm:max-w-none px-2.5 py-1 text-xs font-normal rounded bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 shadow-md">
                    Click any expand icon to see more details.
                  </div>
                  <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-neutral-900 dark:border-t-neutral-100 -mt-px ml-2 sm:ml-0" />
                </div>
              </div>
            </div>

            <div className="space-y-8 pt-1">
              {experienceData.roles.map((role, idx) => (
                <div 
                  key={role.id}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start ${
                    idx > 0 ? 'pt-8 border-t border-dotted border-neutral-300 dark:border-neutral-800' : ''
                  }`}
                >
                  <div className="md:col-span-3 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    {role.period}
                  </div>
                  <div className="md:col-span-9 space-y-2.5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                          {role.role}
                        </h3>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                          {role.companyUrl ? (
                            <a
                              href={role.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white underline underline-offset-2 transition-colors inline-flex items-center gap-1 font-medium"
                            >
                              {role.company}
                              <ExternalLink className="w-3 h-3 opacity-60 inline" />
                            </a>
                          ) : (
                            role.company
                          )}
                          {' • '}{role.location}
                        </p>
                      </div>

                      {/* Expandable Modal Icon Button */}
                      <button
                        onClick={() => setSelectedExperienceModal(role)}
                        className="p-1.5 sm:p-2 rounded-xs bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0 shadow-xs"
                        title={`View ${role.role} details & key achievements`}
                        aria-label={`View ${role.role} details & key achievements`}
                      >
                        <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {role.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-neutral-200 dark:border-neutral-800" />

          {/* 4. Works Cards Grid */}
          <div className="space-y-6 sm:space-y-8 scroll-mt-24 relative" id="case-studies">
            <span id="work" className="absolute -top-24 left-0" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-semibold tracking-wide uppercase text-neutral-900 dark:text-white">
                  Works & Case Studies
                </h2>
                <div className="relative group inline-flex items-center" id="case-study-info-tooltip">
                  <span
                    tabIndex={0}
                    role="button"
                    aria-label="Click any case study to learn more details."
                    className="cursor-help text-neutral-400 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-300 transition-colors p-0.5 rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </span>
                  <div
                    role="tooltip"
                    className="pointer-events-none absolute bottom-full left-0 sm:left-1/2 sm:-translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-150 flex flex-col items-start sm:items-center z-30 drop-shadow-sm"
                  >
                    <div className="w-max max-w-[220px] sm:max-w-none px-2.5 py-1 text-xs font-normal rounded bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 shadow-md">
                      Click any case study to learn more details.
                    </div>
                    <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-neutral-900 dark:border-t-neutral-100 -mt-px ml-2 sm:ml-0" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {projectsData.map((project) => {
                const projectImages: Record<string, string> = {
                  'classic-decoder': cdsiteThumb,
                  'classic-decoder-mobile': cdappThumb,
                  'vehicle-databases': vdbsiteThumb,
                  'detailed-vehicle-history': dvhsiteThumb,
                  'fierce-fight-gear': ffgThumb,
                  'sarayah-phuket-villas': sarayahThumb,
                };
                return (
                  <React.Fragment key={project.id}>
                    <div
                      onClick={() => onOpenCaseStudy(project.id)}
                      className="group p-4 sm:p-6 rounded-xs border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0c0c0e] hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 shadow-xs hover:shadow-md"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <span className="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-xs text-[10px] sm:text-[11px] font-medium bg-neutral-100 text-neutral-800 border border-neutral-200/90 dark:bg-[#18181c] dark:text-neutral-100 dark:border-white/5 shadow-2xs cursor-default">
                            User Experience & Interface Design
                          </span>
                        </div>

                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-bold text-neutral-900 dark:text-white transition-colors">
                              {project.title}
                            </h3>
                            <Maximize2 className="w-4 h-4 text-neutral-400 group-hover:scale-110 transition-transform" />
                          </div>
                          <p className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400">
                            {project.subtitle}
                          </p>
                        </div>

                        {/* Image Preview Thumbnail Placeholder */}
                        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-xs border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 pt-1">
                          <img
                            src={projectImages[project.id] || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'}
                            alt={project.title}
                            className="w-full h-full object-cover lg:filter lg:grayscale lg:group-hover:grayscale-0 lg:group-hover:scale-105 transition-all duration-500 contrast-105"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:opacity-60 opacity-0 lg:group-hover:opacity-0 transition-opacity duration-500" />
                        </div>
                      </div>
                    </div>

                    {/* Banner card under Classic Decoder */}
                    {project.id === 'classic-decoder' && (
                      <div className="group/banner p-4 sm:p-6 rounded-xs border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0c0c0e] shadow-xs">
                        {/* 2-column layout */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
                          {/* Left Column: Compact GIF (Black & White by default on desktop, original on hover; original on mobile) */}
                          <div className="w-full md:col-span-4 flex justify-center sm:justify-start">
                            <div className="w-full max-w-[200px] sm:max-w-[220px]">
                              <div
                                style={{ width: '100%', height: 0, paddingBottom: '100%', position: 'relative' }}
                                className="rounded-xs overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 select-none md:filter md:grayscale md:group-hover/banner:grayscale-0 md:hover:grayscale-0 transition-all duration-500"
                              >
                                <iframe
                                  src="https://giphy.com/embed/7NoNw4pMNTvgc"
                                  width="100%"
                                  height="100%"
                                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0, pointerEvents: 'none' }}
                                  className="giphy-embed pointer-events-none"
                                  allowFullScreen
                                  title="Motion Design & Video Reel via GIPHY"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Right Column: Copy and Button */}
                          <div className="md:col-span-8 space-y-2 sm:space-y-2.5">
                            <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white leading-snug">
                              Looking for Motion Design & Video Editing Work?
                            </h3>

                            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                              Beyond UI/UX, I specialize in kinetic motion design, brand animations, and high-impact video editing. Head over to my Behance portfolio to explore complete video case studies!
                            </p>

                            <div className="flex flex-wrap gap-1.5 pt-0.5">
                              {['Motion Graphics', 'Video Editing', '2D Animation', 'Micro-interactions', 'After Effects'].map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-xs bg-neutral-100 text-neutral-700 dark:bg-neutral-800/60 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-700/60 font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <div className="pt-1">
                              <Button
                                variant="primary"
                                href="https://www.behance.net/waiphyoaungdesign"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto"
                              >
                                <span>Case studies on Behance</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div className="border-t border-neutral-200 dark:border-neutral-800" />

          {/* 4. Testimonials Section */}
          <TestimonialsSection />

          <div className="border-t border-neutral-200 dark:border-neutral-800" />

          {/* 6. Blog & Articles Section */}
          <BlogSection />

        </div>

        {/* =========================================================================
            RIGHT COLUMN (lg:col-span-4) - Sticky Compact Skills & Tools Card + Coffee Chat
            ========================================================================= */}
        <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-20 space-y-3 self-start">
          
          {/* Skill and Tools Badges Card (Compact, no nested scrollbar) */}
          <div id="skills" className="p-3.5 sm:p-4 rounded-xs border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0c] space-y-3 shadow-xs">
            {/* Header with Title and Category Filter Tabs */}
            <div className="space-y-2.5 border-b border-neutral-100 dark:border-neutral-800/80 pb-2.5">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-900 dark:text-white">
                  Skills & Tools
                </h2>
              </div>

              {/* Category Filter Pills (Skills & Tools) */}
              <div className="flex items-center gap-1.5 p-1 rounded-xs bg-neutral-100/80 dark:bg-[#121215] border border-neutral-200/60 dark:border-neutral-800/60">
                <button
                  onClick={() => setActiveBadgeTab('skills')}
                  className={`flex-1 py-1 px-2 rounded-xs text-[10px] font-mono font-medium transition-all text-center cursor-pointer ${
                    activeBadgeTab === 'skills'
                      ? 'bg-white text-neutral-900 shadow-xs dark:bg-[#202025] dark:text-white font-semibold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  Skills ({skillBadges.length})
                </button>
                <button
                  onClick={() => setActiveBadgeTab('tools')}
                  className={`flex-1 py-1 px-2 rounded-xs text-[10px] font-mono font-medium transition-all text-center cursor-pointer ${
                    activeBadgeTab === 'tools'
                      ? 'bg-white text-neutral-900 shadow-xs dark:bg-[#202025] dark:text-white font-semibold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  Tools ({toolBadges.length})
                </button>
              </div>
            </div>

            {/* Badges Stack Display */}
            <div className="pt-0.5">
              {activeBadgeTab === 'skills' ? (
                <div className="flex flex-wrap gap-1.5">
                  {skillBadges.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-2.5 py-1 rounded-xs text-[11px] font-medium bg-neutral-100 hover:bg-neutral-200/70 text-neutral-800 border border-neutral-200/90 dark:bg-[#18181c] dark:hover:bg-[#222228] dark:text-neutral-100 dark:border-white/5 transition-colors whitespace-nowrap shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-1.5">
                  {toolBadges.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center px-2.5 py-1 rounded-xs text-[11px] font-medium bg-neutral-100 hover:bg-neutral-200/70 text-neutral-800 border border-neutral-200/90 dark:bg-[#18181c] dark:hover:bg-[#222228] dark:text-neutral-100 dark:border-white/5 transition-colors whitespace-nowrap shadow-2xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Card 2: Schedule a Virtual Coffee Chat (Special CTA) */}
          <button
            onClick={onOpenBooking}
            className="relative overflow-hidden w-full text-left p-3.5 rounded-xs border border-neutral-200 dark:border-neutral-800 hover:border-slate-900 dark:hover:border-white bg-white dark:bg-[#0a0a0c] transition-all duration-300 group shadow-xs cursor-pointer active:scale-98"
          >
            {/* Subtle Fill Animation Layer - slides up from bottom */}
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-slate-900 dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none"
            />

            <div className="relative z-10 flex items-start justify-between">
              <h3 className="text-xs font-bold text-neutral-900 dark:text-white group-hover:text-white dark:group-hover:text-slate-950 transition-colors duration-300">
                Schedule a Virtual Chat
              </h3>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white dark:group-hover:text-slate-950 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <p className="relative z-10 text-[11px] text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-300 dark:group-hover:text-neutral-700 mt-1 leading-relaxed transition-colors duration-300">
              Start the Conversation! Great Ideas Begin Here.
            </p>
          </button>

        </div>

      </div>

      {/* Expandable Experience Details Modal Portal */}
      <ExperienceModal
        role={selectedExperienceModal}
        onClose={() => setSelectedExperienceModal(null)}
      />
    </div>
  );
};
