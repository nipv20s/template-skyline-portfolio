import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function ResumeSection() {
  const experience = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Lead a team of 5 developers in creating scalable web applications. Improved application performance by 40% and implemented modern CI/CD practices.',
      achievements: ['Increased user engagement by 60%', 'Reduced load times by 40%', 'Mentored 3 junior developers'],
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using React, Node.js, and AWS. Collaborated with design teams to implement pixel-perfect UIs.',
      achievements: ['Delivered 15+ projects on time', 'Implemented automated testing', 'Reduced deployment time by 50%'],
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'Remote',
      period: '2019 - 2020',
      description: 'Created responsive websites and web applications for various clients across different industries.',
      achievements: ['Built 20+ responsive websites', 'Achieved 98% client satisfaction', 'Implemented SEO best practices'],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      location: 'California, USA',
      period: '2015 - 2019',
      gpa: '3.8/4.0',
    },
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer',
    'React.js Certified Developer',
    'Scrum Master Certification',
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            My professional journey, skills, and achievements in the world of web development.
          </p>
          
          <motion.button
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-orange-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            <span>Download PDF</span>
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Experience */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Briefcase className="w-6 h-6 text-orange-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Work Experience</h3>
              </div>
              
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-white">{job.title}</h4>
                        <p className="text-orange-400 font-medium">{job.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-gray-300 mt-2 md:mt-0">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {job.period}
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    
                    <div className="space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-orange-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                >
                  <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                  <p className="text-orange-400 font-medium mb-2">{edu.school}</p>
                  <div className="flex justify-between text-sm text-gray-300">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">GPA: {edu.gpa}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Skills & Certifications */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Technical Skills */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Technical Skills</h3>
              <div className="space-y-3">
                {[
                  'JavaScript/TypeScript',
                  'React.js/Next.js',
                  'Node.js/Express',
                  'Python/Django',
                  'PostgreSQL/MongoDB',
                  'AWS/Docker',
                  'Git/CI/CD',
                  'REST/GraphQL APIs',
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="flex items-center text-gray-300"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.05, duration: 0.3 }}
                  >
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Award className="w-5 h-5 text-orange-400 mr-2" />
                <h3 className="text-xl font-bold text-white">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    className="flex items-center text-gray-300"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
                  >
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    {cert}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Languages</h3>
              <div className="space-y-3">
                {[
                  { lang: 'English', level: 'Native' },
                  { lang: 'Spanish', level: 'Conversational' },
                  { lang: 'Japanese', level: 'Basic' },
                ].map((language, index) => (
                  <motion.div
                    key={language.lang}
                    className="flex justify-between items-center text-gray-300"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.05, duration: 0.3 }}
                  >
                    <span>{language.lang}</span>
                    <span className="text-orange-400 text-sm">{language.level}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}