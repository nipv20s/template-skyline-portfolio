import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management and payment processing.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates and team communication features.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      github: '#',
      live: '#',
      featured: false,
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Advanced data visualization platform with machine learning insights and predictive analytics.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Python', 'TensorFlow', 'D3.js'],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'Social Media Platform',
      description: 'Modern social networking app with real-time messaging and content sharing capabilities.',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React Native', 'GraphQL', 'MongoDB'],
      github: '#',
      live: '#',
      featured: false,
    },
  ];

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of my most impactful work, showcasing various technologies and problem-solving approaches.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-cyan-400/50 transition-all duration-500 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <Zap className="w-4 h-4" />
                  <span>Featured</span>
                </div>
              )}

              <div className={`${project.featured ? 'lg:flex' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${project.featured ? 'lg:w-1/2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Project Info */}
                <div className={`p-6 ${project.featured ? 'lg:w-1/2 lg:p-8' : ''}`}>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-xs text-cyan-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-4 py-2 rounded-lg transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-gray-300 mb-4">Interested in seeing more of my work?</p>
          <motion.a
            href="#"
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-cyan-400/50 text-white px-6 py-3 rounded-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}