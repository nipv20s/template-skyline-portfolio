import { motion } from 'framer-motion';
import { usePortfolioStore } from '../stores/usePortfolioStore';

export default function ProgressBar() {
  const { carPosition, currentSection, sections } = usePortfolioStore();

  return (
    <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-30">
      <div className="bg-black/20 backdrop-blur-sm rounded-full p-4 border border-white/10">
        <div className="flex items-center space-x-4">
          {/* Progress Track */}
          <div className="relative w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              animate={{ width: `${carPosition}%` }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
            
            {/* Section Markers */}
            {sections.map((section, index) => (
              <div
                key={section.id}
                className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white"
                style={{ left: `${section.position}%`, marginLeft: '-6px' }}
              >
                <motion.div
                  className="w-full h-full rounded-full"
                  animate={{
                    backgroundColor: currentSection >= index ? '#10b981' : '#6b7280',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            ))}
          </div>
          
          {/* Current Section Info */}
          <motion.div
            className="text-white font-medium"
            key={currentSection}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {sections[currentSection]?.title}
          </motion.div>
        </div>
      </div>
    </div>
  );
}