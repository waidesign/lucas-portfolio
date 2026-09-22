import React, { useState } from 'react';
import { 
  ExternalLink, 
  ArrowUpRight,
  Check, 
  Copy,
  Calendar,
  Mail
} from 'lucide-react';
import { profileData } from '../data/profile';
import { Button } from './Button';
import wpalogoImg from '../assets/images/wpalogo.svg';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenResume: () => void;
  onNavigate?: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenBooking, 
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer id="contact" className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black py-16 transition-colors">
      <div className="clean-container">
        {/* Main Footer Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 min-w-0">
          {/* Brand & Statement */}
          <div className="space-y-4 min-w-0 max-w-sm w-full md:w-auto">
            {/* Logo */}
            <img
              src={wpalogoImg}
              alt="Wai Phyo Aung Logo"
              className="w-8 h-8 object-contain"
            />

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              &ldquo;Burma To The World.&rdquo;
            </p>

            {/* Email quick copy */}
            <div className="pt-1 w-full max-w-full">
              <Button
                variant="secondary"
                onClick={handleCopyEmail}
                title="Click to copy email address"
                className="group relative w-full sm:w-[248px] max-w-full h-[36px] overflow-hidden justify-center transition-all px-2.5"
              >
                {copiedEmail ? (
                  <span className="inline-flex items-center justify-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium transition-all duration-200">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Email Copied to Clipboard</span>
                  </span>
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Default state */}
                    <span className="absolute inset-0 flex items-center justify-center gap-1.5 transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-1.5 group-hover:pointer-events-none">
                      <Mail className="w-3.5 h-3.5 text-current" />
                      <span>Get In Touch</span>
                    </span>
                    {/* Hover state */}
                    <span className="absolute inset-0 flex items-center justify-center gap-1.5 transition-all duration-300 ease-out opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0">
                      <Copy className="w-3.5 h-3.5 text-current" />
                      <span className="truncate">{profileData.contact.email}</span>
                    </span>
                  </div>
                )}
              </Button>
            </div>

            {/* Social Links line */}
            <div className="pt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs">
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

          {/* Direct Inquiries */}
          <div className="space-y-3.5 w-full sm:w-auto min-w-0">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Direct Inquiries
            </h4>
            <div className="flex flex-col gap-2.5 w-full max-w-full sm:w-56">
              <Button
                variant="primary"
                onClick={onOpenBooking}
                className="w-full justify-center px-3 py-2 text-[11px] sm:text-xs"
              >
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate sm:whitespace-normal">Schedule a Virtual Chat</span>
              </Button>

              <Button
                variant="secondary"
                href="https://www.dropbox.com/scl/fi/z30c6hwlsyq8u54e7ziq1/resume.waiphyoaung.pdf?rlkey=1s0pwgtbrkqx6tw9bv2xz4x2b&e=2&st=ad9814oj&dl=0"
                target="_blank"
                className="w-full justify-center px-3 py-2 text-[11px] sm:text-xs"
              >
                <span>Get Resume</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
