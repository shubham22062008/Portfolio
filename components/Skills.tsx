"use client";

import { motion } from 'framer-motion';

const skills = [
  { name: 'UI/UX Design', icon: '🎨', level: 95 },
  { name: 'Figma', icon: '🔶', level: 90 },
  { name: 'React', icon: '⚛️', level: 85 },
  { name: 'TypeScript', icon: '🔥', level: 80 },
  { name: 'Next.js', icon: '🚀', level: 88 },
  { name: 'Tailwind CSS', icon: '✨', level: 82 },
  { name: 'User Research', icon: '🔍', level: 78 },
  { name: 'Prototyping', icon: '🎭', level: 85 },
];

export default function Skills() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-2xl">{skill.icon}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                <motion.div
                  className="bg-purple-600 dark:bg-purple-400 rounded-full h-2.5"
                  style={{ width: `${skill.level}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 text-right">
                {skill.level}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}