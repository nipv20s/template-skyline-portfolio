import { motion } from 'framer-motion';
import { usePortfolioStore } from '../stores/usePortfolioStore';

export default function SubaruCar() {
  const { carPosition, isMoving } = usePortfolioStore();

  return (
    <motion.div
      className="fixed bottom-24 z-20"
      animate={{
        left: `${carPosition}%`,
      }}
      transition={{
        type: 'spring',
        stiffness: 50,
        damping: 20,
        duration: 2,
      }}
      style={{ transform: 'translateX(-50%)' }}
    >
      {/* Car Shadow */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black opacity-30 rounded-full blur-sm" />
      
      {/* Car Body */}
      <motion.div
        className="relative"
        animate={isMoving ? {
          y: [0, -2, 0, -1, 0],
        } : {}}
        transition={{
          duration: 0.3,
          repeat: isMoving ? Infinity : 0,
        }}
      >
        {/* Headlights */}
        <motion.div
          className="absolute -left-1 top-4 w-6 h-3 bg-gradient-to-r from-yellow-200 to-white rounded-full"
          animate={{
            opacity: [0.8, 1, 0.8],
            boxShadow: [
              '0 0 10px rgba(255, 255, 255, 0.5)',
              '0 0 20px rgba(255, 255, 255, 0.8)',
              '0 0 10px rgba(255, 255, 255, 0.5)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Main Car Body - Subaru-inspired design */}
        <svg width="80" height="40" viewBox="0 0 80 40" className="drop-shadow-lg">
          {/* Car body */}
          <path
            d="M10 25 L15 15 L25 12 L55 12 L65 15 L70 25 L70 30 L60 30 L60 28 L20 28 L20 30 L10 30 Z"
            fill="#2563eb"
            stroke="#1e40af"
            strokeWidth="1"
          />
          
          {/* Car roof */}
          <path
            d="M20 15 L25 8 L55 8 L60 15 Z"
            fill="#1e40af"
          />
          
          {/* Windows */}
          <path
            d="M22 14 L26 10 L54 10 L58 14 Z"
            fill="#0ea5e9"
            opacity="0.7"
          />
          
          {/* Wheels */}
          <circle cx="22" cy="28" r="6" fill="#1f2937" />
          <circle cx="22" cy="28" r="4" fill="#374151" />
          <circle cx="58" cy="28" r="6" fill="#1f2937" />
          <circle cx="58" cy="28" r="4" fill="#374151" />
          
          {/* Wheel rims */}
          <circle cx="22" cy="28" r="2" fill="#9ca3af" />
          <circle cx="58" cy="28" r="2" fill="#9ca3af" />
          
          {/* Subaru badge (stylized) */}
          <ellipse cx="42" cy="20" rx="8" ry="3" fill="#60a5fa" opacity="0.8" />
          <text x="42" y="22" textAnchor="middle" fontSize="4" fill="white">★</text>
        </svg>

        {/* Exhaust smoke when moving */}
        {isMoving && (
          <motion.div
            className="absolute -right-2 top-6 w-4 h-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1, 1.5],
              x: [-5, -15, -25],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          >
            <div className="w-full h-full bg-gray-400 rounded-full opacity-40" />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}