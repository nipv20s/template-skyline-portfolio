import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolioStore } from './stores/usePortfolioStore';

// Components
import CityBackground from './components/CityBackground';
import SubaruCar from './components/SubaruCar';
import TollGate from './components/TollGate';
import ProgressBar from './components/ProgressBar';
import Navigation from './components/Navigation';

// Sections
import WelcomeSection from './components/sections/WelcomeSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ResumeSection from './components/sections/ResumeSection';
import ContactSection from './components/sections/ContactSection';

const sectionComponents = {
  welcome: WelcomeSection,
  about: AboutSection,
  projects: ProjectsSection,
  resume: ResumeSection,
  contact: ContactSection,
};

function App() {
  const { currentSection, sections } = usePortfolioStore();
  const CurrentSectionComponent = sectionComponents[sections[currentSection]?.id as keyof typeof sectionComponents];

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden relative">
      {/* City Background */}
      <CityBackground />
      
      {/* Toll Gates */}
      {sections.map((section, index) => (
        <TollGate
          key={section.id}
          sectionIndex={index}
          isActive={currentSection === index}
        />
      ))}
      
      {/* Subaru Car */}
      <SubaruCar />
      
      {/* Progress Bar */}
      <ProgressBar />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Content Sections */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            {CurrentSectionComponent && <CurrentSectionComponent />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;