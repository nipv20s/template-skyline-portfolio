import { motion } from 'framer-motion';
import { usePortfolioStore } from '../stores/usePortfolioStore';

interface TollGateProps {
  sectionIndex: number;
  isActive: boolean;
}

export default function TollGate({ sectionIndex, isActive }: TollGateProps) {
  const { sections } = usePortfolioStore();
  const section = sections[sectionIndex];

  return (
    <motion.div
      className="fixed bottom-24 z-10"
      style={{ 
        left: `${section.position}%`,
        transform: 'translateX(-50%)',
      }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: sectionIndex * 0.2 }}
    >
      {/* Toll Gate Structure */}
      <div className="relative">
        {/* Left Pillar */}
        <div className="absolute left-0 bottom-0 w-3 h-20 bg-gradient-to-t from-gray-600 to-gray-400" />
        
        {/* Right Pillar */}
        <div className="absolute right-0 bottom-0 w-3 h-20 bg-gradient-to-t from-gray-600 to-gray-400" />
        
        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600" />
        
        {/* Gate Barrier */}
        <motion.div
          className="absolute top-4 left-3 right-3 h-2 bg-red-500 rounded"
          animate={isActive ? {
            rotateZ: -45,
            backgroundColor: '#10b981',
            boxShadow: '0 0 10px rgba(16, 185, 129, 0.6)',
          } : {
            rotateZ: 0,
            backgroundColor: '#ef4444',
          }}
          transition={{ duration: 0.5 }}
          style={{ transformOrigin: 'left center' }}
        />
        
        {/* Status Light */}
        <motion.div
          className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full"
          animate={isActive ? {
            backgroundColor: '#10b981',
            boxShadow: '0 0 8px rgba(16, 185, 129, 0.8)',
          } : {
            backgroundColor: '#ef4444',
            boxShadow: '0 0 8px rgba(239, 68, 68, 0.8)',
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Section Label */}
        <motion.div
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap"
          animate={isActive ? {
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            color: '#10b981',
            scale: 1.1,
          } : {
            backgroundColor: 'rgba(107, 114, 128, 0.2)',
            color: '#9ca3af',
            scale: 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {section.title}
        </motion.div>
      </div>
    </motion.div>
  );
}