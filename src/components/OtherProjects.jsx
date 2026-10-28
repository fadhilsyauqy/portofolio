import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GitHubIcon } from './Icons';

export default function OtherProjects({ otherProjects, githubUrl }) {
  return (
    <section className="py-20 sm:py-24 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
          <span>04</span>
          <span className="text-slate-300">/</span>
          <span>Eksplorasi Rekayasa</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Eksperimen & Proyek Akademik
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Proyek tugas besar, sistem informasi spasial, dan implementasi arsitektur perangkat lunak.
            </p>
          </div>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-600 hover:text-slate-950 transition-colors self-start sm:self-auto pb-1"
          >
            <span>Semua repositori di GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Dense, Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProjects.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between shadow-2xs hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span>{item.category}</span>
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repo ${item.title}`}
                      className="text-slate-400 hover:text-slate-900 transition-colors p-1"
                    >
                      <GitHubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
