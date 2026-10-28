import React, { useState } from 'react';
import { GraduationCap, MapPin, CheckCircle2, FileText } from 'lucide-react';

export default function About({ profile, onNavigateToCV }) {
  const [imgSrc, setImgSrc] = useState(profile.photo);

  return (
    <section id="about" className="py-20 sm:py-24 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
          <span>01</span>
          <span className="text-slate-300">/</span>
          <span>Tentang Saya</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-12">
          Latar Belakang & Pendekatan Rekayasa
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Narrative & Credentials */}
          <div className="md:col-span-7 space-y-6 text-slate-600 leading-relaxed text-base">
            {profile.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="pt-4 border-t border-slate-200">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">
                Spesifikasi & Riwayat Pendidikan
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-900">
                      {profile.education.institution}
                    </span>
                    <span className="text-slate-500 block text-xs">
                      {profile.education.degree}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-900">Domisili</span>
                    <span className="text-slate-500 block text-xs">
                      {profile.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-900">Fokus Pengembangan</span>
                    <span className="text-slate-500 block text-xs">
                      Full-Stack Web (Node.js, React, Laravel) & Relational DB (PostgreSQL, MySQL)
                    </span>
                  </div>
                </div>
              </div>

              {/* Link to Full CV */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onNavigateToCV}
                  className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-800 hover:text-slate-950 px-3 py-1.5 rounded-lg bg-slate-100/90 hover:bg-slate-200/80 transition-colors cursor-pointer border border-slate-200"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>Buka Curriculum Vitae (CV) Lengkap →</span>
                </button>
              </div>
            </div>
          </div>

          {/* Profile Photo - Clean & Minimalist */}
          <div className="md:col-span-5 flex flex-col items-center sm:items-start md:items-end">
            <div className="w-full max-w-[280px] bg-white p-2 rounded-2xl border border-slate-200/90 shadow-sm">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-100">
                <img
                  src={imgSrc}
                  alt={profile.name}
                  onError={() => setImgSrc(profile.photoFallback)}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="px-2 pt-3 pb-1 text-center sm:text-left">
                <p className="text-xs font-mono font-medium text-slate-900 truncate">
                  {profile.name}
                </p>
                <p className="text-[11px] font-mono text-slate-500">
                  Teknik Informatika ITERA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
