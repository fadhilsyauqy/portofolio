import React from 'react';
import { ArrowDown, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';

export default function Hero({ profile }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Availability Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-mono mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{profile.status}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 tracking-tight leading-[1.12] max-w-3xl">
          Rahmat Fadhil Syauqy
        </h1>
        <p className="text-xl sm:text-2xl text-slate-600 font-normal tracking-tight mt-3">
          Software & Data Engineer
        </p>

        {/* Narrative introduction */}
        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
          Lulusan Teknik Informatika dari Institut Teknologi Sumatera (ITERA). Berfokus pada perancangan
          aplikasi web full-stack yang tangguh, pemodelan basis data relasional (PostgreSQL & MySQL),
          serta visualisasi data yang informatif.
        </p>

        {/* Action Row */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={() => scrollTo('projects')}
            className="px-5 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-2xs cursor-pointer inline-flex items-center gap-2"
          >
            <span>Eksplorasi Proyek</span>
            <ArrowDown className="w-4 h-4 text-slate-400" />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="px-5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-2xs cursor-pointer inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-slate-500" />
            <span>Kontak Saya</span>
          </button>

          <div className="h-6 w-px bg-slate-200 mx-2 hidden sm:block" />

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profil"
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              title="GitHub"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profil"
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              title="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
