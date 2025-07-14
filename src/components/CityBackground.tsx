import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Building {
  id: number;
  height: number;
  width: number;
  x: number;
  windows: boolean[];
}

export default function CityBackground() {
  const [buildings, setBuildings] = useState<Building[]>([]);

  useEffect(() => {
    // Generate random buildings
    const newBuildings: Building[] = [];
    for (let i = 0; i < 30; i++) {
      const height = Math.random() * 300 + 100;
      const width = Math.random() * 80 + 40;
      const windows = Array.from({ length: Math.floor(height / 30) * 3 }, () => Math.random() > 0.3);
      
      newBuildings.push({
        id: i,
        height,
        width,
        x: (i * 120) % window.innerWidth,
        windows,
      });
    }
    setBuildings(newBuildings);
  }, []);

  const animateWindows = () => {
    setBuildings(prev => 
      prev.map(building => ({
        ...building,
        windows: building.windows.map(() => Math.random() > 0.7)
      }))
    );
  };

  useEffect(() => {
    const interval = setInterval(animateWindows, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Gradient Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-blue-900 to-gray-900" />
      
      {/* Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Moon */}
      <motion.div
        className="absolute top-20 right-20 w-20 h-20 bg-yellow-100 rounded-full shadow-lg"
        animate={{
          boxShadow: [
            '0 0 20px rgba(255, 255, 150, 0.5)',
            '0 0 40px rgba(255, 255, 150, 0.8)',
            '0 0 20px rgba(255, 255, 150, 0.5)',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Buildings */}
      <div className="absolute bottom-0 left-0 right-0">
        {buildings.map((building) => (
          <motion.div
            key={building.id}
            className="absolute bottom-0 bg-gray-800 border-t border-gray-600"
            style={{
              height: building.height,
              width: building.width,
              left: building.x,
            }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: building.id * 0.1 }}
          >
            {/* Windows */}
            <div className="grid grid-cols-3 gap-1 p-2 h-full">
              {building.windows.map((isLit, windowIndex) => (
                <motion.div
                  key={windowIndex}
                  className={`w-3 h-4 ${
                    isLit ? 'bg-yellow-300' : 'bg-gray-700'
                  }`}
                  animate={{
                    backgroundColor: isLit 
                      ? ['#fde047', '#facc15', '#fde047'] 
                      : '#374151',
                    boxShadow: isLit 
                      ? '0 0 4px rgba(253, 224, 71, 0.6)' 
                      : 'none',
                  }}
                  transition={{ duration: 0.5 }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Ground/Road */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-800 to-gray-700">
        {/* Road markings */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-yellow-400" />
        <div className="flex justify-between items-center h-full px-8">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-8 h-1 bg-yellow-400 opacity-60" />
          ))}
        </div>
      </div>
    </div>
  );
}