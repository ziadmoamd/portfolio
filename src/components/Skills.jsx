/*
SkillsSection.jsx
React + Tailwind component for a "Skills" section with animations (Framer Motion).

Features:
- Responsive grid of skills icons / names
- Each skill card animates individually from bottom to top only when it enters the viewport
- Hover effect with scale and shadow

*/

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Palette, Database, Smartphone, Globe } from 'lucide-react';

const skills = [
  { id: 1, name: 'HTML', icon: <Globe className="w-8 h-8" /> },
  { id: 2, name: 'CSS', icon: <Palette className="w-8 h-8" /> },
  { id: 3, name: 'JavaScript', icon: <Code className="w-8 h-8" /> },
  { id: 4, name: 'React', icon: <Layers className="w-8 h-8" /> },
  { id: 5, name: 'Tailwind CSS', icon: <Palette className="w-8 h-8" /> },
  { id: 6, name: 'Databases', icon: <Database className="w-8 h-8" /> },
  { id: 7, name: 'Responsive Design', icon: <Smartphone className="w-8 h-8" /> },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function SkillsSection() {
  return (
    <section  className="py-12 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Our Skills</h2>
          
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.08, boxShadow: '0 8px 25px rgba(0,0,0,0.15)' }}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="text-indigo-600 dark:text-indigo-400 mb-3">{skill.icon}</div>
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
