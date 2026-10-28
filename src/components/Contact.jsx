import React, { useState } from 'react';
import { GitHubIcon, LinkedInIcon } from './Icons';

export default function Contact({ profile }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const prefilledSubject = encodeURIComponent("Peluang Kerja Software Engineer - [Nama Perusahaan]");
  const mailtoUrl = `mailto:${profile.contact.email}?subject=${prefilledSubject}`;

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Index */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
          <span>05</span>
          <span className="text-slate-300">/</span>
          <span>Kontak & Ketersediaan Karir</span>
        </div>

        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Aktif Mencari Kerja (Open to Work)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Mari Terhubung untuk Peluang Karir
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Saya sedang aktif mencari peluang kerja dan siap bergabung ke dalam tim engineering Anda. Terbuka untuk posisi <strong>Software Engineer</strong>, <strong>Full-Stack Developer</strong>, maupun <strong>Backend Engineer</strong>.
          </p>
        </div>

        {/* Main Job-Seeker Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-2xs space-y-8">
          {/* Status & Work Preferences Bar - Clean typography without icon clutter */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6 border-b border-slate-100 text-xs font-mono">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase tracking-wider mb-1">
                PERAN YANG DIINCAR
              </span>
              <span className="text-slate-900 font-semibold font-sans text-xs block">
                Software Engineer, Full-Stack, Backend
              </span>
            </div>

            <div>
              <span className="text-slate-400 block text-[10px] uppercase tracking-wider mb-1">
                KESIAPAN KERJA
              </span>
              <span className="text-slate-900 font-semibold font-sans text-xs block">
                Full-Time, Kontrak (On-site / Hybrid / Remote)
              </span>
            </div>

            <div>
              <span className="text-slate-400 block text-[10px] uppercase tracking-wider mb-1">
                DOMISILI & WAKTU
              </span>
              <span className="text-slate-900 font-semibold font-sans text-xs block">
                Indonesia (WIB / UTC+7) — Siap Relokasi
              </span>
            </div>
          </div>

          {/* Quick Action Headline */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-slate-400 block mb-1">
                ALAMAT EMAIL RESMI
              </span>
              <a
                href={mailtoUrl}
                className="text-lg sm:text-2xl font-bold text-slate-900 hover:text-accent transition-colors break-all tracking-tight"
              >
                {profile.contact.email}
              </a>
              <p className="text-xs text-slate-500 mt-1">
                Silakan hubungi saya untuk undangan wawancara, penawaran posisi, atau tinjauan kualifikasi.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={mailtoUrl}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-slate-900 text-white text-xs font-mono font-medium hover:bg-slate-800 transition-colors cursor-pointer shadow-2xs"
              >
                Kirim Email
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 text-xs font-mono font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors cursor-pointer"
                title="Salin alamat email"
              >
                {copied ? 'Email Tersalin ✓' : 'Salin Alamat'}
              </button>
            </div>
          </div>

          {/* Channels Grid (LinkedIn & GitHub) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            {/* LinkedIn */}
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/70 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors">
                  <LinkedInIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-slate-900 block group-hover:text-blue-600 transition-colors">
                    LinkedIn Profil
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    /in/fadhilsyauqy08
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-400 group-hover:text-slate-900">
                Kunjungi ↗
              </span>
            </a>

            {/* GitHub */}
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/70 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-slate-950 transition-colors">
                  <GitHubIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-slate-900 block group-hover:text-slate-950 transition-colors">
                    GitHub Repositori
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    @fadhilsyauqy
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-400 group-hover:text-slate-900">
                Kunjungi ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
