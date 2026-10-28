import React, { useState } from 'react';

export default function About({ profile }) {
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

            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                Informasi Pendidikan & Spesialisasi
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3 rounded-lg bg-white border border-slate-200/80">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    PENDIDIKAN
                  </span>
                  <span className="font-semibold text-slate-900 block">
                    {profile.education.institution}
                  </span>
                  <span className="text-slate-500 text-[11px] mt-0.5 block">
                    {profile.education.degree}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-white border border-slate-200/80">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    DOMISILI
                  </span>
                  <span className="font-semibold text-slate-900 block">
                    Indonesia
                  </span>
                  <span className="text-slate-500 text-[11px] mt-0.5 block">
                    WIB / UTC+7 (Siap Relokasi)
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-white border border-slate-200/80">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    FOKUS SISTEM
                  </span>
                  <span className="font-semibold text-slate-900 block">
                    Full-Stack & DB
                  </span>
                  <span className="text-slate-500 text-[11px] mt-0.5 block">
                    Node.js, PostgreSQL, Cloud
                  </span>
                </div>
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
