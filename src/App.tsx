import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ThemeProvider } from './components/ThemeContext';
import { Nav } from './components/Nav';
import { CleanPortfolio } from './components/CleanPortfolio';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ShowreelModal } from './components/ShowreelModal';
import { BookingModal } from './components/BookingModal';
import { ResumeModal } from './components/ResumeModal';
import { Agentation } from 'agentation';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('classic-decoder');
  const [caseStudyModalOpen, setCaseStudyModalOpen] = useState(false);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleOpenBooking = () => {
    window.open('https://cal.com/wai.design-start-a-virtual-chat', '_blank', 'noopener,noreferrer');
  };

  // Sync hash routing and active section on scroll
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });

    if (window.location.hash && window.location.hash !== '#home') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['experience', 'case-studies', 'testimonials', 'blog', 'work', 'showreel', 'skills', 'about', 'contact', 'home'].includes(hash)) {
        if (hash !== 'home' && hash !== '') {
          setActiveSection(hash === 'work' ? 'case-studies' : hash);
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 50);
        } else {
          setActiveSection('home');
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
      }
    };

    const handleScroll = () => {
      const blogEl = document.getElementById('blog');
      const testimonialsEl = document.getElementById('testimonials');
      const caseStudiesEl = document.getElementById('case-studies') || document.getElementById('work');
      const experienceEl = document.getElementById('experience');
      const scrollPos = window.scrollY + 200;

      if (blogEl && scrollPos >= blogEl.offsetTop) {
        setActiveSection('blog');
      } else if (testimonialsEl && scrollPos >= testimonialsEl.offsetTop) {
        setActiveSection('testimonials');
      } else if (caseStudiesEl && scrollPos >= caseStudiesEl.offsetTop) {
        setActiveSection('case-studies');
      } else if (experienceEl && scrollPos >= experienceEl.offsetTop) {
        setActiveSection('experience');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('hashchange', handleHash);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigate = (section: string) => {
    setActiveSection(section === 'work' ? 'case-studies' : section);
    window.location.hash = section;
    if (section === 'home' || section === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCaseStudyModalOpen(true);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-background text-foreground font-sans antialiased selection:bg-slate-900 selection:text-white dark:selection:bg-white dark:selection:text-slate-900 transition-colors pt-16 max-w-full overflow-x-clip min-w-0">
        {/* Minimal Editorial Navigation */}
        <Nav
          activeSection={activeSection}
          onNavigate={handleNavigate}
          onOpenBooking={handleOpenBooking}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Main Page Entrance with Subtle Blur-to-Normal Transition */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(16px)', y: 10 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex flex-col max-w-full min-w-0 overflow-x-clip"
        >
          {/* Main Content Landmark */}
          <main id="main-content" className="flex-1 focus:outline-none max-w-full min-w-0">
            <CleanPortfolio
              onOpenCaseStudy={handleSelectProject}
              onOpenBooking={handleOpenBooking}
              onOpenResume={() => setResumeOpen(true)}
              onOpenShowreel={() => setShowreelOpen(true)}
            />
          </main>

          {/* Global Footer */}
          <Footer
            onOpenBooking={handleOpenBooking}
            onOpenResume={() => setResumeOpen(true)}
            onNavigate={handleNavigate}
          />
        </motion.div>

        {/* Interactive Case Study Modal */}
        <CaseStudyModal
          isOpen={caseStudyModalOpen}
          projectId={selectedProjectId}
          onClose={() => setCaseStudyModalOpen(false)}
          onOpenBooking={handleOpenBooking}
        />

        {/* Interactive Modals */}
        <ShowreelModal
          isOpen={showreelOpen}
          onClose={() => setShowreelOpen(false)}
        />

        <BookingModal
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
        />

        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />

        {/* Agentation dev toolbar */}
        {(import.meta.env.DEV || (typeof process !== 'undefined' && process.env.NODE_ENV === 'development')) && (
          <Agentation />
        )}
      </div>
    </ThemeProvider>
  );
}
