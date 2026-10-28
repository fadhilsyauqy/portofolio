import React, { useState } from 'react';
import {
  ArrowLeft,
  Download,
  Printer,
  FileText,
  Eye,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Users,
  Code2,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';

export default function CVPage({ cv, profile, onBack }) {
  const [activeTab, setActiveTab] = useState('web'); // 'web' | 'pdf'

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-700 selection:bg-slate-900 selection:text-white pb-20">
      {/* Top Floating Control Bar (Hidden when printing) */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/90 shadow-2xs print-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-950 transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-slate-500" />
            <span>Kembali ke Portofolio</span>
          </button>

          {/* Center Tabs: Web View vs Original PDF */}
          <div className="inline-flex items-center p-1 bg-slate-100 rounded-lg border border-slate-200/80 text-xs font-medium">
            <button
              onClick={() => setActiveTab('web')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md transition-all cursor-pointer ${
                activeTab === 'web'
                  ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-slate-500" />
              <span>Format Web</span>
            </button>
            <button
              onClick={() => setActiveTab('pdf')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md transition-all cursor-pointer ${
                activeTab === 'pdf'
                  ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-slate-500" />
              <span>Pratinjau PDF Asli</span>
            </button>
          </div>

          {/* Right Actions: Print & Download */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Cetak CV / Simpan sebagai PDF"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 px-3 py-1.5 rounded-lg shadow-2xs transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Cetak</span>
            </button>
            <a
              href={cv.pdfUrl}
              download={cv.pdfFileName}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3.5 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-2xs"
            >
              <Download className="w-3.5 h-3.5 text-slate-300" />
              <span>Unduh PDF</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10">
        {activeTab === 'pdf' ? (
          /* PDF Preview Mode */
          <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 mb-4">
              <div>
                <h2 className="text-base font-semibold text-slate-900">
                  Dokumen Asli Curriculum Vitae
                </h2>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  Format resmi yang diterbitkan oleh Rahmat Fadhil Syauqy
                </p>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={cv.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 sm:flex-initial items-center justify-center gap-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 px-3.5 py-2 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  <span>Buka di Tab Baru</span>
                </a>
                <a
                  href={cv.pdfUrl}
                  download={cv.pdfFileName}
                  className="inline-flex flex-1 sm:flex-initial items-center justify-center gap-1.5 text-xs font-mono font-medium px-3.5 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-2xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh Dokumen</span>
                </a>
              </div>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="w-full h-[780px] bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
              <iframe
                src={`${cv.pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                title="Curriculum Vitae Rahmat Fadhil Syauqy"
                className="w-full h-full border-0"
              />
            </div>
            <p className="text-center text-xs text-slate-400 mt-4">
              Jika dokumen PDF tidak muncul di peramban Anda, silakan klik tombol "Buka di Tab Baru" atau "Unduh Dokumen".
            </p>
          </div>
        ) : (
          /* Web CV / Interactive Resume Mode */
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-12 shadow-sm print-page">
            {/* Header / Identity */}
            <div className="pb-8 border-b border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
                    {cv.fullName}
                  </h1>
                  <p className="text-sm sm:text-base font-mono font-semibold text-slate-600 tracking-wider uppercase mt-1">
                    {cv.title}
                  </p>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] font-mono mt-3 print-hidden">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{cv.status}</span>
                  </div>
                </div>

                {/* Print/Download Button inside Header (Visible only on print or handy copy) */}
                <div className="hidden print:block text-right text-xs font-mono text-slate-500">
                  <p>Curriculum Vitae</p>
                  <p>{new Date().getFullYear()}</p>
                </div>
              </div>

              {/* Contact Info Pills */}
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-600">
                <a
                  href={`tel:${cv.phoneClean}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>{cv.phone}</span>
                </a>
                <a
                  href={`mailto:${cv.email}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span>{cv.email}</span>
                </a>
                <a
                  href={cv.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 text-slate-500" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 print-hidden" />
                </a>
                <a
                  href={cv.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                >
                  <GitHubIcon className="w-3.5 h-3.5 text-slate-500" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 print-hidden" />
                </a>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{cv.location}</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <section className="py-7 border-b border-slate-200 print-break-inside-avoid">
              <h2 className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-500 mb-3">
                SUMMARY / RINGKASAN
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {cv.summary}
              </p>
            </section>

            {/* Work Experience */}
            <section className="py-7 border-b border-slate-200 print-break-inside-avoid">
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-4 h-4 text-slate-700" />
                <h2 className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-500">
                  WORK EXPERIENCE / PENGALAMAN KERJA
                </h2>
              </div>

              <div className="space-y-7">
                {cv.workExperience.map((work, idx) => (
                  <div key={idx} className="print-break-inside-avoid">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h3 className="text-base font-semibold text-slate-900">
                        {work.role} <span className="font-normal text-slate-400">|</span>{' '}
                        <span className="text-slate-800">{work.company}</span>
                      </h3>
                      <span className="text-xs font-mono text-slate-500 shrink-0">
                        {work.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                      <span>{work.location}</span>
                      <span className="text-slate-300">•</span>
                      <span className="font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                        {work.type}
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-slate-600 list-disc list-outside pl-4">
                      {work.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section className="py-7 border-b border-slate-200 print-break-inside-avoid">
              <div className="flex items-center gap-2 mb-6">
                <Code2 className="w-4 h-4 text-slate-700" />
                <h2 className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-500">
                  PROJECTS / PROYEK REKAYASA
                </h2>
              </div>

              <div className="space-y-6">
                {cv.projects.map((proj, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 print-break-inside-avoid"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-semibold text-slate-900">
                          {proj.name}
                        </h3>
                        {proj.github && (
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-slate-900 inline-flex items-center gap-0.5 text-xs font-mono transition-colors print-hidden"
                            title="Buka Repositori GitHub"
                          >
                            <span>GitHub</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mb-3 font-normal">
                      {proj.description}
                    </p>

                    {proj.bullets && (
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 list-disc list-outside pl-4 mb-3">
                        {proj.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="leading-relaxed">
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="pt-2 border-t border-slate-200/60 flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-mono text-slate-400 mr-1">Tools:</span>
                      {proj.tools.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono bg-white text-slate-700 border border-slate-200/80 px-2 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="py-7 border-b border-slate-200 print-break-inside-avoid">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-4 h-4 text-slate-700" />
                <h2 className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-500">
                  EDUCATION / RIWAYAT PENDIDIKAN
                </h2>
              </div>

              <div className="print-break-inside-avoid">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="text-base font-semibold text-slate-900">
                    {cv.education.institution}
                  </h3>
                  <span className="text-xs font-mono text-slate-500">
                    {cv.education.period}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 mb-2">
                  <span className="font-medium text-slate-800">{cv.education.degree}</span>
                  <span className="text-slate-300">•</span>
                  <span>{cv.education.location}</span>
                  <span className="text-slate-300">•</span>
                  <span className="font-mono font-medium text-slate-900 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-2 py-0.5 rounded">
                    IPK / GPA {cv.education.gpa}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <span className="font-medium text-slate-700">Mata kuliah relevan: </span>
                  {cv.education.coursework}
                </p>
              </div>
            </section>

            {/* Organizational Experience */}
            <section className="py-7 border-b border-slate-200 print-break-inside-avoid">
              <div className="flex items-center gap-2 mb-6">
                <Users className="w-4 h-4 text-slate-700" />
                <h2 className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-500">
                  ORGANIZATIONAL EXPERIENCE / PENGALAMAN ORGANISASI
                </h2>
              </div>

              <div className="space-y-6">
                {cv.organizationalExperience.map((org, idx) => (
                  <div key={idx} className="print-break-inside-avoid">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                        {org.role} <span className="font-normal text-slate-400">|</span>{' '}
                        <span className="text-slate-800">{org.organization}</span>
                      </h3>
                      <span className="text-xs font-mono text-slate-500 shrink-0">
                        {org.period}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mb-2">{org.location}</p>
                    <ul className="space-y-1 text-xs sm:text-sm text-slate-600 list-disc list-outside pl-4">
                      {org.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section className="pt-7 print-break-inside-avoid">
              <div className="flex items-center gap-2 mb-6">
                <Code2 className="w-4 h-4 text-slate-700" />
                <h2 className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-500">
                  TECHNICAL SKILLS / KEAHLIAN TEKNIS
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cv.technicalSkills.map((cat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/80"
                  >
                    <span className="block text-xs font-mono font-semibold text-slate-700 mb-2">
                      {cat.category}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-xs font-mono bg-white text-slate-700 border border-slate-200 px-2 py-0.5 rounded shadow-2xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer in CV page (Hidden when printing) */}
      <footer className="mt-16 text-center text-xs font-mono text-slate-400 print-hidden">
        <p>Curriculum Vitae &copy; {new Date().getFullYear()} {profile.name}</p>
        <div className="mt-3 flex items-center justify-center gap-3">
          <button
            onClick={onBack}
            className="text-slate-600 hover:text-slate-900 underline underline-offset-4 cursor-pointer"
          >
            Kembali ke Halaman Portofolio Utama
          </button>
          <span>•</span>
          <a
            href={cv.pdfUrl}
            download={cv.pdfFileName}
            className="text-slate-600 hover:text-slate-900 underline underline-offset-4"
          >
            Unduh Berkas PDF Resmi
          </a>
        </div>
      </footer>
    </div>
  );
}
