import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';
import { usePortfolioStore } from '../../stores/usePortfolioStore';

export default function WelcomeSection() {
  const { nextSection } = usePortfolioStore();

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Welcome
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <h2 className="text-2xl md:text-3xl text-white font-light">
              to the Future of Web Development
            </h2>
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Embark on a journey through my digital portfolio where innovation meets creativity. 
          Follow the Subaru as it navigates through different sections of my work and experience.
        </motion.p>

        {/* Feature Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {[
            { title: 'Interactive Design', desc: 'Experience portfolio navigation like never before' },
            { title: 'Modern Tech Stack', desc: 'Built with React, TypeScript, and Framer Motion' },
            { title: 'Responsive Experience', desc: 'Optimized for all devices and screen sizes' },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={nextSection}
          className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2 mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span>Start Journey</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}