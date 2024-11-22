import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowTopRightOnSquareIcon, GlobeAltIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'DigitalMoi',
      category: 'Web Development',
      image: 'https://i.ibb.co/JnWB6hq/Add-a-heading.png',
      description: 'A modern Moi platform with user friendly interface,printing options and qr code generation.',
      tech: ['React', 'Tailwind', 'Firebase',],
      link: 'https://digitalmoi.vercel.app/',
    },
    {
        title: 'Foodio',
        category: 'Web Development',
        image: 'https://i.ibb.co/r6j8bsF/Whats-App-Image-2024-03-30-at-9-16-16-PM.jpg',
        description: 'A modern Food Ordering platform with simple minimal ui, ',
        tech: ['React', 'Tailwind', 'Firebase',],
        link: 'https://gogul-foodio.vercel.app/',
      },
      {
        title: 'React Blog',
        category: 'Web Development',
        image: 'https://i.ibb.co/VYCbSzQ/blog.jpg',
        description: 'A modern Moi platform with user friendly interface,printing options and qr code generation.',
        tech: ['React', 'Tailwind', 'Firebase',],
        link: 'https://gogul-blog.vercel.app/',
      },
    
  ];

  return (
    <section id="projects" className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transforming ideas into exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-gradient-to-br from-purple-500/5 via-purple-500/10 to-pink-500/5 rounded-2xl overflow-hidden hover:from-purple-500/20 hover:via-purple-500/25 hover:to-pink-500/20 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </motion.div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 bg-purple-500/30 backdrop-blur-sm text-purple-300 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-md border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats Grid
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-purple-400">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div> */}

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg transition-colors"
                  >
                    <GlobeAltIcon className="w-5 h-5 mr-2" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href="https://github.com/Gogul-Tamilselvan/"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 rounded-lg transition-colors"
                  >
                    <CodeBracketIcon className="w-5 h-5 mr-2" />
                    Source Code
                  </motion.a>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
