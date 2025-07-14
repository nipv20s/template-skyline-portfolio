import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Home, User, Code, FileText, Mail } from 'lucide-react';
import { usePortfolioStore } from '../stores/usePortfolioStore';

const iconMap = {
  Home,
  User,
  Code,
  FileText,
  Mail,
};

export default function Navigation() {
  const { currentSection, sections, nextSection, previousSection, setCurrentSection, setCarPosition, setIsMoving } = usePortfolioStore();

  const navigateToSection = (index: number) => {
    if (index !== currentSection) {
      setCurrentSection(index);
      setCarPosition(sections[index].position);
      setIsMoving(true);
      setTimeout(() => setIsMoving(false), 2000);
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30">
      <motion.div
        className="bg-black/20 backdrop-blur-sm rounded-full p-2 border border-white/10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex items-center space-x-2">
          {/* Previous Button */}
          <motion.button
            onClick={previousSection}
            disabled={currentSection === 0}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          {/* Section Indicators */}
          <div className="flex space-x-2">
            {sections.map((section, index) => {
              const IconComponent = iconMap[section.icon as keyof typeof iconMap];
              return (
                <motion.button
                  key={section.id}
                  onClick={() => navigateToSection(index)}
                  className={`p-3 rounded-full transition-all ${
                    currentSection === index
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={section.title}
                >
                  <IconComponent className="w-5 h-5" />
                </motion.button>
              );
            })}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={nextSection}
            disabled={currentSection === sections.length - 1}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}