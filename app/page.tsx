import Head from 'next/head';
import { motion, useScroll, useTransform } from 'framer-motion';
import CustomCursor from '@/components/CustomCursor';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import ThemeToggle from '@/components/ThemeToggle';
import Image from 'next/image';

// Scroll progress bar
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-purple-600 dark:bg-purple-400 origin-left z-50"
      style={{ scaleX: scale }}
    />
  );
};

export default function Home() {
  const projects = [
    {
      id: 1,
      title: 'Flow',
      description: 'A responsive design system for modern web applications',
      image: '/images/flow.jpg',
      tags: ['UI Design', 'Figma', 'Responsive']
    },
    {
      id: 2,
      title: 'Orbit',
      description: 'Mobile app for tracking personal growth and habits',
      image: '/images/orbit.jpg',
      tags: ['Mobile', 'Prototype', 'User Research']
    },
    {
      id: 3,
      title: 'Bloom',
      description: 'E-commerce platform for sustainable products',
      image: '/images/bloom.jpg',
      tags: ['Web Design', 'Shopify', 'Branding']
    },
    {
      id: 4,
      title: 'Frame',
      description: 'Video editing tool for content creators',
      image: '/images/frame.jpg',
      tags: ['Web App', 'Animation', 'User Testing']
    }
  ];

  return (
    <>
      <Head>
        <title>Twinkle Pathak | UX/UI Designer</title>
        <meta name="description" content="Portfolio of Twinkle Pathak - UX/UI Designer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:title" content="Twinkle Pathak - UX/UI Designer" />
        <meta property="og:description" content="Portfolio of Twinkle Pathak" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourportfolio.com" />
      </Head>

      <ScrollProgress />
      <ThemeToggle />
      <CustomCursor />

      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-br from-[#6B46C1] to-[#8B5CF6] relative overflow-hidden flex items-center justify-center">
          <div className="container px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white text-[clamp(2.5rem, 6vw, 4rem)] font-bold leading-tight max-w-4xl mx-auto skew-x-2"
            >
              I design digital experiences that people enjoy using.
            </motion.h1>
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-sm animate-bounce"
              whileHover={{ scale: 1.1 }}
            >
              Scroll down
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4 bg-white dark:bg-gray-900" id="projects">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                My Work
              </h2>
              <a
                href="#contact"
                className="px-6 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors dark:hover:bg-gray-700"
              >
                Get in Touch
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="relative h-64 group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={project.id <= 2}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-sm">{project.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full dark:bg-purple-900 dark:text-purple-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800" id="about">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <motion.img
                  src="https://via.placeholder.com/500"
                  alt="Twinkle Pathak"
                  className="rounded-lg shadow-xl w-full h-auto"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                />
              </div>
              <div className="md:w-1/2">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold text-gray-800 dark:text-white mb-6"
                >
                  About Me
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-600 dark:text-gray-300 mb-4"
                >
                  Hello! I'm Twinkle Pathak, a passionate UX/UI designer with 5+ years of experience creating beautiful,
                  intuitive digital experiences. I specialize in crafting pixel-perfect designs that are
                  both visually stunning and highly functional.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 dark:text-gray-300 mb-6"
                >
                  When I'm not designing, you can find me exploring new design tools, contributing to
                  open-source projects, or sharing my knowledge through tutorials and articles.
                </motion.p>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="px-6 py-2 bg-purple-600 text


