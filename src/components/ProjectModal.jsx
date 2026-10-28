import React, { useEffect, useState, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { GitHubIcon } from './Icons';

export default function ProjectModal({ project, initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [imageError, setImageError] = useState(false);
  const touchStartX = useRef(null);

  const slides = project?.slides || [];
  const currentSlide = slides[currentIndex];
  const hasMultiple = slides.length > 1;

  const handlePrev = useCallback(() => {
    setImageError(false);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const handleNext = useCallback(() => {
    setImageError(false);
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasMultiple) handlePrev();
      if (e.key === 'ArrowRight' && hasMultiple) handleNext();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, handlePrev, handleNext, hasMultiple]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40 && hasMultiple) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  if (!project || !currentSlide) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-modal-enter select-none"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="w-full max-w-6xl mx-auto flex items-center justify-between gap-4 pb-4 border-b border-neutral-800 text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-w-0 pr-4">
          <div className="flex items-center gap-2.5">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
              {project.category}
            </span>
            <span className="text-xs font-mono text-neutral-400">
              {currentIndex + 1} / {slides.length}
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight truncate mt-1">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 mt-0.5 line-clamp-1">
            {currentSlide.desc}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lihat kode di GitHub"
              className="p-2 rounded-lg bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors border border-neutral-700"
              title="Repositori GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
          )}

          <div className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-neutral-400 border border-neutral-800 px-2 py-1 rounded bg-neutral-900">
            <span>Esc</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Tutup pratinjau"
            className="p-2 rounded-lg bg-neutral-850 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors border border-neutral-750"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div
        className="w-full max-w-6xl mx-auto flex-1 flex items-center justify-center relative my-auto py-2"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {hasMultiple && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Slide sebelumnya"
              className="absolute left-2 sm:left-4 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-neutral-900/90 hover:bg-white hover:text-neutral-950 text-white border border-neutral-700 shadow-xl flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Slide berikutnya"
              className="absolute right-2 sm:right-4 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-neutral-900/90 hover:bg-white hover:text-neutral-950 text-white border border-neutral-700 shadow-xl flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* The Image Viewport */}
        <div className="w-full h-full max-h-[72vh] flex items-center justify-center p-2">
          {imageError ? (
            <div className="text-center p-8 bg-neutral-900 rounded-xl border border-neutral-800 max-w-md">
              <p className="text-neutral-400 text-sm">Gambar tidak dapat dimuat.</p>
              <p className="text-neutral-500 text-xs font-mono mt-2 break-all">{currentSlide.img}</p>
            </div>
          ) : (
            <img
              key={currentSlide.img}
              src={currentSlide.img}
              alt={currentSlide.desc || project.title}
              onError={() => setImageError(true)}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl transition-all duration-200"
            />
          )}
        </div>
      </div>

      {/* Bottom Bar: Dots */}
      <div
        className="w-full max-w-6xl mx-auto flex items-center justify-between pt-3 border-t border-neutral-800 text-xs font-mono text-neutral-400"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="hidden sm:block text-[11px]">
          {hasMultiple && 'Gunakan tombol panah ← dan → untuk navigasi'}
        </div>

        {hasMultiple ? (
          <div className="flex items-center gap-1.5 mx-auto sm:mx-0">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setImageError(false);
                  setCurrentIndex(idx);
                }}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  idx === currentIndex
                    ? 'w-6 bg-white'
                    : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                }`}
              />
            ))}
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
