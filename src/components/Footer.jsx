import React from 'react';

export default function Footer({ profile, onNavigateToCV }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
        <div>
          <span>&copy; {new Date().getFullYear()} {profile.name}.</span>
          <span className="block sm:inline sm:ml-2 text-slate-400">
            Dibuat dengan React & Express.
          </span>
        </div>

        <div className="flex items-center gap-6">
          {onNavigateToCV && (
            <button
              onClick={onNavigateToCV}
              className="text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Curriculum Vitae
            </button>
          )}

          <button
            onClick={scrollToTop}
            className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Kembali ke Atas ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
