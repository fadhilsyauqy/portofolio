import React from 'react';

export default function Projects({ projects, onOpenModal }) {
  return (
    <section id="projects" className="py-20 sm:py-24 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
          <span>03</span>
          <span className="text-slate-300">/</span>
          <span>Karya Pilihan</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
          Studi Kasus & Proyek Utama
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mb-16">
          Sistem perangkat lunak yang telah saya rancang, bangun, dan dokumentasikan secara komprehensif.
        </p>

        {/* Project List */}
        <div className="space-y-16">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs hover:border-slate-300 transition-all duration-200"
            >
              {/* Window-like Header bar */}
              <div className="bg-slate-50/80 px-6 py-3.5 border-b border-slate-200/80 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="ml-2 text-slate-500 font-medium tracking-wider">
                    {project.index} // {project.category}
                  </span>
                </div>
                <span className="text-slate-400 hidden sm:inline">
                  {project.timeline}
                </span>
              </div>

              <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left/Main Column: Content */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Architectural Highlights - Clean typographic list without repetitive icons */}
                    <div className="mb-6 space-y-2">
                      <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                        Sorotan Teknis:
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                        {project.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-slate-300 font-mono select-none mt-0.5">—</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Stack & Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2.5 py-1 bg-slate-50 text-slate-700 rounded border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        type="button"
                        onClick={() => onOpenModal(project, 0)}
                        className="text-xs font-mono font-medium px-3.5 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors cursor-pointer"
                      >
                        Galeri ({project.slides.length})
                      </button>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono font-medium px-3.5 py-2 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-colors"
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column: Screenshot Card with Preview Trigger */}
                <div className="lg:col-span-5">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => onOpenModal(project, 0)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onOpenModal(project, 0);
                      }
                    }}
                    className="group relative rounded-xl overflow-hidden border border-slate-200/90 bg-slate-100 cursor-pointer aspect-[16/10]"
                  >
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-xs font-mono font-medium text-white bg-slate-950/80 px-3 py-1.5 rounded-md backdrop-blur-xs">
                        Buka Pratinjau
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
