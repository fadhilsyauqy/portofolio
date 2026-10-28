import React from 'react';

export default function Skills({ skillsMatrix }) {
  const totalSkills = skillsMatrix.reduce((acc, curr) => acc + curr.skills.length, 0);

  return (
    <section id="skills" className="py-20 sm:py-24 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
          <span>02</span>
          <span className="text-slate-300">/</span>
          <span>Kompetensi Teknis</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
          Keahlian & Teknologi
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mb-12">
          Teknologi dan perangkat yang saya pelajari selama perkuliahan Teknik Informatika dan saya terapkan dalam proyek akademik maupun magang.
        </p>

        {/* Unified Structured Panel - Clean, balanced, no uneven empty spaces */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-2xs divide-y divide-slate-100">
          {skillsMatrix.map((group) => (
            <div
              key={group.category}
              className="py-6 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start md:items-center"
            >
              {/* Category Info */}
              <div className="md:col-span-4">
                <h3 className="text-sm font-semibold text-slate-900 tracking-tight">
                  {group.category}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Skill Badges */}
              <div className="md:col-span-8 flex flex-wrap gap-2 sm:gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono bg-slate-50 text-slate-800 border border-slate-200/90 px-3 py-1.5 rounded-lg hover:bg-white hover:border-slate-400 hover:shadow-2xs transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Bottom Summary Bar */}
          <div className="pt-6 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-slate-400">
            <span>Fondasi komputasi & perangkat lunak dari kurikulum Teknik Informatika ITERA.</span>
            <span className="text-slate-500">{skillsMatrix.length} Kategori • {totalSkills} Teknologi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
