import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'IMTAC India pvt ltd',
      role: 'Software Engineer',
      period: 'June 2024 - Present',
      description: 'working as a Liferay software developer, specializing in building and maintaining enterprise-level web applications using the Liferay platform.',
    },
    {
      company: 'MotionCut',
      role: 'Web Developer Intern',
      period: 'Nov 2023 - Jan 2024',
      description: 'worked as an intern in full-stack development, gaining hands-on experience in both front-end and back-end technologies.',
    },
    {
      company: 'Qspiders',
      role: 'Java Fullstack',
      period: 'Sep 2023 - Mar 2024',
      description: 'completed a Java full-stack course, where I learned both front-end and back-end development using Java technologies.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-purple-500">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey in technology and design
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full w-px bg-purple-500/50">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500" />
              </div>
              <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-semibold text-purple-500">{exp.role}</h3>
                <p className="text-lg font-medium mb-2">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
