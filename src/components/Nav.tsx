import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Calendar, 
  Menu, 
  X, 
  ArrowUpRight,
  Globe2
} from 'lucide-react';

import { Button } from './Button';
import wpalogoImg from '../assets/images/wpalogo.svg';

interface NavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  onOpenBooking: () => void;
  onOpenResume: () => void;
}

export const Nav: React.FC<NavProps> = ({
  activeSection,
  onNavigate,
  onOpenBooking,
  onOpenResume,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open without causing scroll jumps
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';

      return () => {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
      };
    }
  }, [mobileMenuOpen]);

  const navItems: Array<{ id: string; label: string; badge?: string }> = [
    { id: 'experience', label: 'Experience' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'blog', label: 'Blog' },
  ];

  return (
    <>
      {/* Skip to main content accessibility link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-neutral-900 text-white dark:bg-amber-400 dark:text-black font-semibold rounded-xs shadow-lg"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-white/95 dark:bg-[#0a0a0c]/95 backdrop-blur-md backdrop-saturate-150 border-b border-neutral-200/80 dark:border-neutral-800/80 py-3 shadow-xs'
            : 'bg-transparent border-b border-transparent py-4'
        }`}
      >
        <div className="clean-container flex items-center justify-between">
          {/* Logo / Brand Placeholder */}
          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="group focus-visible:outline-none cursor-pointer flex items-center"
            aria-label="Portfolio Home"
          >
            <img
              src={wpalogoImg}
              alt="Wai Phyo Aung Logo"
              className="w-8 h-8 object-contain transition-transform group-hover:scale-105"
            />
          </button>

          {/* Desktop Nav Links (lg+) */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => onNavigate(item.id)}
                className="px-3 py-1.5 text-sm font-medium rounded-xs transition-colors flex items-center gap-1.5 cursor-pointer border border-transparent text-neutral-600 dark:text-neutral-400 hover:border-neutral-200 dark:hover:border-neutral-800 hover:text-neutral-900 dark:hover:text-white"
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[10px] px-1.5 py-0.5 bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 rounded-xs font-semibold">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Mobile/Tablet Menu Toggle (<lg) */}
          <div className="flex lg:hidden items-center gap-1.5">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setMobileMenuOpen((prev) => !prev);
              }}
              className="p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xs cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Drawer (<lg) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] bottom-0 z-30 bg-white/95 dark:bg-[#0a0a0c]/95 backdrop-blur-2xl border-b border-neutral-200 dark:border-neutral-800 p-5 shadow-2xl lg:hidden overflow-y-auto flex flex-col justify-between"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-xs text-sm font-medium transition-colors flex items-center justify-between cursor-pointer border border-transparent text-slate-700 dark:text-slate-200 hover:border-neutral-200 dark:hover:border-neutral-800 hover:text-neutral-900 dark:hover:text-white"
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-xs px-2 py-0.5 rounded-xs bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-semibold">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">

              {/* Special Primary Button: Schedule a Virtual Chat */}
              <Button
                variant="primary"
                onClick={() => {
                  onOpenBooking();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 text-xs font-bold"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a Virtual Chat</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </Button>

              {/* Secondary Button: Get Resume */}
              <Button
                variant="secondary"
                href="https://www.dropbox.com/scl/fi/z30c6hwlsyq8u54e7ziq1/resume.waiphyoaung.pdf?rlkey=1s0pwgtbrkqx6tw9bv2xz4x2b&e=2&st=ad9814oj&dl=0"
                target="_blank"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-xs font-mono"
              >
                <span>Get Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
