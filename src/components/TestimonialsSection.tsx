import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  relationship: string;
  initials: string;
  isReal?: boolean;
}

// Only the first 2 are shown; the rest are hidden until ready
const TESTIMONIALS: Testimonial[] = [
  {
    id: 'hafsa-a',
    quote:
      "Having managed Wai, I can confidently say he is a standout asset to our product team. He uniquely combines sharp UI/UX design with fluid, purposeful motion design that brings products to life. Wai doesn't just make things look good—he solves real user problems and thinks through every edge case. His dynamic prototypes and micro-interactions consistently elevated our user experience and design standards.",
    author: 'Hafsa A.',
    role: 'Project Manager',
    company: 'Empire Pixel Co., Ltd Canada',
    relationship: 'Direct Manager',
    initials: 'HA',
    isReal: true,
  },
  {
    id: 'fahad-q',
    quote:
      "I've had the pleasure of working closely with Wai Phyo Aung at Empire Pixel, where I've had the opportunity to manage and guide him as an Art Director.\n\nWhen Wai started with us, his core strengths were in animation and video editing. But what really stood out to me was his mindset. He was never someone who wanted to stay limited to what he already knew. He consistently pushed himself to learn, experiment, and take on new challenges. Over time, I watched him grow beyond animation and editing and develop himself into a stronger, more versatile designer. He started thinking more deeply about composition, visual hierarchy, typography, storytelling, and the overall creative direction behind a piece of work, not just how to execute it.\n\nWhat impressed me even more was how quickly he adapted to the changing creative landscape with AI. Wai embraced new AI-powered workflows and explored vibe coding through Google AI Studio, Antigravity, and Claude Code, using these tools not simply as shortcuts, but as ways to experiment, prototype, solve problems, and expand what he could create. That willingness to adapt is something I genuinely value in a creative professional.\n\nFrom an Art Director's perspective, one of the most rewarding things is seeing someone you've worked with evolve. Wai has gone from being primarily an animator and editor to becoming a more complete creative, someone who can think across motion, video, design, technology, and AI.\n\nBeyond his technical abilities, Wai is hardworking, curious, receptive to feedback, and willing to step outside his comfort zone. He doesn't just wait for someone to tell him what to learn. He actively explores and finds ways to improve himself.\n\nI'm genuinely proud of the growth I've seen in him at Empire Pixel, and I believe his ability to combine creativity with emerging technology will continue to open new doors for him. Wai is a great example of what happens when talent is combined with curiosity, adaptability, and the willingness to keep learning.",
    author: 'Fahad Qaiser',
    role: 'Art Director',
    company: 'Empire Pixel Co., Ltd Canada',
    relationship: 'Art Director / Direct Manager',
    initials: 'FQ',
    isReal: true,
  },
  // Hidden testimonials — uncomment to re-enable
  // {
  //   id: 'marcus-t',
  //   quote: 'Working with Wai bridged the gap between Figma and production code effortlessly...',
  //   author: 'Marcus T.',
  //   role: 'Staff Frontend Engineer',
  //   relationship: 'Engineering Lead / Colleague',
  //   initials: 'MT',
  // },
  // {
  //   id: 'elena-r',
  //   quote: 'Wai has a rare ability to translate complex product logic into crisp, intuitive workflows...',
  //   author: 'Elena R.',
  //   role: 'Head of Product',
  //   relationship: 'Product Leadership',
  //   initials: 'ER',
  // },
  // {
  //   id: 'david-k',
  //   quote: "Wai's attention to detail across typography, responsive layouts, and design systems is world-class...",
  //   author: 'David K.',
  //   role: 'Design Systems Lead',
  //   relationship: 'Design Peer',
  //   initials: 'DK',
  // },
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [expanded, setExpanded] = useState(false);

  const total = TESTIMONIALS.length;
  const current = TESTIMONIALS[currentIndex];

  const handleSelect = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setExpanded(false);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
    setExpanded(false);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    setExpanded(false);
  };

  // Slide animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 24 : -24,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -24 : 24,
      opacity: 0,
    }),
  };

  return (
    <div className="space-y-4 sm:space-y-5 scroll-mt-24" id="testimonials">
      {/* Section Header with Navigation Controls */}
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-sm font-semibold tracking-wide uppercase text-neutral-900 dark:text-white">
          Testimonials
        </h2>

        {/* Back / Next Navigation Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mr-1 hidden sm:inline-block">
            {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>

          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xs border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0c] text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors flex items-center gap-1 text-xs font-medium cursor-pointer shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
          </button>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xs border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0c] text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors flex items-center gap-1 text-xs font-medium cursor-pointer shadow-xs"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Single Card Carousel */}
      <div className="relative p-5 sm:p-7 rounded-xs border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0c] shadow-xs overflow-hidden min-h-[260px] flex flex-col justify-between">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.24, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col justify-between flex-1 gap-5"
          >
            {/* Card Header */}
            <div>
              <Quote className="w-5 h-5 text-neutral-400 dark:text-neutral-500 rotate-180" />
            </div>

            {/* Testimonial Quote with read-more toggle */}
            <div>
              <blockquote
                className={`text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal whitespace-pre-line overflow-hidden transition-all duration-300 ${
                  expanded ? '' : 'line-clamp-4'
                }`}
              >
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              {/* Only show toggle if quote is long enough to be clamped */}
              {current.quote.length > 300 && (
                <button
                  onClick={() => setExpanded((e) => !e)}
                  className="mt-2 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors font-medium cursor-pointer"
                >
                  {expanded ? 'Show less ↑' : 'Read more ↓'}
                </button>
              )}
            </div>

            {/* Author Footer & Step Dots */}
            <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xs bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-mono text-xs font-bold flex items-center justify-center shadow-xs shrink-0">
                  {current.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm text-neutral-900 dark:text-white leading-tight">
                    {current.author}
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    {current.role}
                    {current.company && (
                      <span className="text-neutral-400 dark:text-neutral-500">
                        {' '}|{' '}{current.company}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Step indicator pills */}
              <div className="flex items-center gap-1.5 self-end sm:self-center">
                {TESTIMONIALS.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === currentIndex
                        ? 'w-6 bg-neutral-900 dark:bg-white'
                        : 'w-1.5 bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TestimonialsSection;
