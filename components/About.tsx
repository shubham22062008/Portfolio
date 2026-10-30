"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2">
            <motion.img
              src="https://via.placeholder.com/400"
              alt="Your Name"
              className="rounded-lg shadow-xl w-full h-auto"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Hello! I'm a passionate UX/UI designer with 5+ years of experience creating beautiful,
              intuitive digital experiences. I specialize in crafting pixel-perfect designs that are
              both visually stunning and highly functional.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              When I'm not designing, you can find me exploring new design tools, contributing to
              open-source projects, or sharing my knowledge through tutorials and articles.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
              >
                Download CV
              </a>
              <a
                href="#"
                className="px-6 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}