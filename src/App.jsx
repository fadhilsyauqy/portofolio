import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import OtherProjects from './components/OtherProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    project: null,
    slideIndex: 0,
  });

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

  return (
    <div className="bg-[#fafafa] text-slate-700 min-h-screen selection:bg-slate-900 selection:text-white">
      {/* Top Navigation */}
      <Navbar profile={portfolioData.profile} />

      {/* Main Content */}
      <main>
        <Hero profile={portfolioData.profile} />
        <About profile={portfolioData.profile} />
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
      <Footer profile={portfolioData.profile} />

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
