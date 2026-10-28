import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Tentang', href: '#about', isRoute: false },
  { label: 'Keahlian', href: '#skills', isRoute: false },
  { label: 'Karya Pilihan', href: '#projects', isRoute: false },
  { label: 'Kontak', href: '#contact', isRoute: false },
  { label: 'Curriculum Vitae', href: '#cv', isRoute: true },
];

export default function Navbar({ profile, onNavigate }) {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setMobileOpen(false);
    if (link.isRoute) {
      if (onNavigate) onNavigate('cv');
    } else {
      const target = document.querySelector(link.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/90 shadow-2xs'
          : 'bg-white/60 backdrop-blur-xs border-b border-slate-100'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Identity & Status */}
        <a
          href="#about"
          onClick={(e) => handleLinkClick(e, { href: '#about', isRoute: false })}
          className="flex items-center gap-2.5 text-slate-900 group"
        >
          <span className="font-semibold text-sm tracking-tight group-hover:text-accent transition-colors">
            {profile.name}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            WIB
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 text-sm">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = !link.isRoute && activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`transition-colors duration-150 py-1 ${
                  link.isRoute
                    ? 'text-slate-900 font-semibold px-2.5 py-1 rounded-md bg-slate-100/90 hover:bg-slate-200/80 border border-slate-200/70 text-xs font-mono'
                    : isActive
                    ? 'text-slate-900 font-medium'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button: Clean text button without redundant icon */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.contact.email}`}
            className="hidden sm:inline-flex items-center text-xs font-mono font-medium px-3.5 py-1.5 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-2xs"
          >
            Kirim Email
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigasi"
            className="md:hidden p-1.5 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-6 py-4 space-y-2 animate-in fade-in duration-150">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className={`block py-2 text-sm font-medium transition-colors ${
                link.isRoute
                  ? 'text-slate-950 font-semibold border-t border-slate-100 pt-3 text-xs font-mono'
                  : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href={`mailto:${profile.contact.email}`}
            className="inline-flex w-full items-center justify-center text-xs font-mono font-medium px-4 py-2.5 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors mt-2"
          >
            Kirim Email
          </a>
        </div>
      )}
    </header>
  );
}
