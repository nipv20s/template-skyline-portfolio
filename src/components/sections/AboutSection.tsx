import { motion } from 'framer-motion';
import { Code, Palette, Zap, Heart } from 'lucide-react';

export default function AboutSection() {
  const skills = [
    { name: 'Frontend Development', level: 95, icon: Code, color: 'from-blue-500 to-cyan-400' },
    { name: 'UI/UX Design', level: 88, icon: Palette, color: 'from-purple-500 to-pink-400' },
    { name: 'Performance Optimization', level: 92, icon: Zap, color: 'from-yellow-500 to-orange-400' },
    { name: 'User Experience', level: 90, icon: Heart, color: 'from-green-500 to-emerald-400' },
  ];

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A passionate full-stack developer with a love for creating beautiful, functional, and user-centered digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">My Story</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                With over 5 years of experience in web development, I specialize in creating 
                interactive and responsive applications that not only look great but perform exceptionally.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                My journey began with a fascination for how websites work, and it has evolved into 
                a career focused on pushing the boundaries of what's possible on the web.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or planning my next road trip in my trusty Subaru.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Projects', value: '50+' },
                { label: 'Experience', value: '5 Years' },
                { label: 'Happy Clients', value: '100+' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 text-center border border-cyan-400/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Skills & Expertise</h3>
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} mr-3`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="ml-auto text-cyan-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 1 + index * 0.1, duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}