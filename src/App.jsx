import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import OtherProjects from './components/OtherProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CVPage from './components/CVPage';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window === 'undefined') return 'portfolio';
    const hash = window.location.hash.toLowerCase();
    return hash === '#cv' || hash === '#/cv' ? 'cv' : 'portfolio';
  });

  const [modalState, setModalState] = useState({
    isOpen: false,
    project: null,
    slideIndex: 0,
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#cv' || hash === '#/cv') {
        setCurrentPage('cv');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('portfolio');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page, targetId = null) => {
    if (page === 'cv') {
      window.location.hash = '/cv';
      setCurrentPage('cv');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (window.location.hash === '#/cv' || window.location.hash === '#cv') {
        window.history.pushState(null, '', window.location.pathname);
      }
      setCurrentPage('portfolio');
      if (targetId) {
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleOpenModal = (project, slideIndex = 0) => {
    setModalState({
      isOpen: true,
      project,
      slideIndex,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  // If currently viewing CV page
  if (currentPage === 'cv') {
    return (
      <CVPage
        cv={portfolioData.cv}
        profile={portfolioData.profile}
        onBack={() => navigateTo('portfolio')}
      />
    );
  }

  // Main Portfolio View
  return (
    <div className="bg-[#fafafa] text-slate-700 min-h-screen selection:bg-slate-900 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        profile={portfolioData.profile}
        onNavigate={navigateTo}
      />

      {/* Main Content */}
      <main>
        <Hero
          profile={portfolioData.profile}
          onNavigateToCV={() => navigateTo('cv')}
        />
        <About
          profile={portfolioData.profile}
          onNavigateToCV={() => navigateTo('cv')}
        />
        <Skills skillsMatrix={portfolioData.skillsMatrix} />
        <Projects
          projects={portfolioData.featuredProjects}
          onOpenModal={handleOpenModal}
        />
        <OtherProjects
          otherProjects={portfolioData.otherProjects}
          githubUrl={portfolioData.profile.contact.github}
        />
        <Contact profile={portfolioData.profile} />
      </main>

      {/* Footer */}
      <Footer
        profile={portfolioData.profile}
        onNavigateToCV={() => navigateTo('cv')}
      />

      {/* Full-Screen Project Lightbox */}
      {modalState.isOpen && (
        <ProjectModal
          project={modalState.project}
          initialIndex={modalState.slideIndex}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
