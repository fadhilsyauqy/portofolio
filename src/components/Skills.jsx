import React from 'react';

export default function Skills({ skillsMatrix }) {
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
          Matriks Keahlian & Teknologi
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mb-12">
          Perangkat dan bahasa yang saya kuasai dan aplikasikan dalam siklus perancangan sistem nyata.
        </p>

        {/* Structured Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsMatrix.map((group) => (
            <div
              key={group.category}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs hover:border-slate-300 transition-colors"
            >
              <h3 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider pb-3 mb-3 border-b border-slate-100 flex items-center justify-between">
                <span>{group.category}</span>
                <span className="text-[10px] text-slate-400 font-normal">
                  {group.items.length} tools
                </span>
              </h3>

              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.name} className="flex flex-col text-sm">
                    <span className="font-medium text-slate-800">{item.name}</span>
                    <span className="text-xs text-slate-500 font-mono mt-0.5">
                      {item.note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
