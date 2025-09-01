'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Card from '@/components/ui/Card';
import { Skill } from '@/types';

const skills: Skill[] = [
  // Frontend
  { id: 'react', name: 'React', icon: '⚛️', category: 'frontend', proficiency: 80 },
  { id: 'nextjs', name: 'Next.js', icon: '▲', category: 'frontend', proficiency: 80 },
  { id: 'typescript', name: 'TypeScript', icon: '📘', category: 'frontend', proficiency: 88 },
  { id: 'tailwind', name: 'Tailwind CSS', icon: '🎨', category: 'frontend', proficiency: 72 },
  { id: 'html', name: 'HTML5', icon: '🌐', category: 'frontend', proficiency: 95 },
  { id: 'css', name: 'CSS3', icon: '🎯', category: 'frontend', proficiency: 90 },
  
  // Backend
  { id: 'nodejs', name: 'Node.js', icon: '🟢', category: 'backend', proficiency: 85 },
  { id: 'express', name: 'Express.js', icon: '🚂', category: 'backend', proficiency: 82 },
  
  // Database
  { id: 'postgresql', name: 'PostgreSQL', icon: '🐘', category: 'database', proficiency: 78 },
  { id: 'mongodb', name: 'MongoDB', icon: '🍃', category: 'database', proficiency: 75 },
  { id: 'redis', name: 'Redis', icon: '🔴', category: 'database', proficiency: 70 },
  
  // Tools
  { id: 'git', name: 'Git', icon: '📝', category: 'tools', proficiency: 88 },
  { id: 'docker', name: 'Docker', icon: '🐳', category: 'tools', proficiency: 60 },
  { id: 'aws', name: 'AWS', icon: '☁️', category: 'tools', proficiency: 50 },
];

const categories = [
  { id: 'frontend', name: 'Frontend', color: 'from-blue-500 to-purple-600' },
  { id: 'backend', name: 'Backend', color: 'from-green-500 to-blue-600' },
  { id: 'database', name: 'Database', color: 'from-orange-500 to-red-600' },
  { id: 'tools', name: 'Tools', color: 'from-purple-500 to-pink-600' },
];

export default function Skills() {
  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <SectionWrapper
      id="skills"
      title="Skills & Technologies"
      subtitle="Technologies I work with"
    >
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 bg-gradient-to-r ${category.color} text-white shadow-lg hover:shadow-xl`}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group"
          >
            <Card className="text-center p-6 hover:shadow-2xl transition-all duration-300">
              {/* Skill Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              
              {/* Skill Name */}
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                {skill.name}
              </h3>
              
              {/* Proficiency Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                />
              </div>
              
              {/* Proficiency Percentage */}
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {skill.proficiency}%
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <Card variant="glassmorphism" className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            Always Learning
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I&#39;m constantly expanding my skill set and staying up-to-date with the latest 
            technologies and best practices. I believe in continuous learning and 
            adapting to new challenges in the ever-evolving world of web development.
          </p>
        </Card>
      </motion.div>
    </SectionWrapper>
  );
}
