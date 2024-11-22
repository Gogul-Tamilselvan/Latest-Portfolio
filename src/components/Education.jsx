import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Master of Computer Science',
      school: 'Khadir Mohideen College, Adirampattinam',
      period: '2021 - 2023',
    },
    {
      degree: 'Bachelor of Computer Science',
      school: 'Khadir Mohideen College, Adirampattinam',
      period: '2018 - 2021',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-purple-500">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic background and qualifications
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto grid gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-8 hover:from-purple-500/20 hover:to-pink-500/20 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-500">{edu.degree}</h3>
                  <p className="text-lg text-gray-300">{edu.school}</p>
                </div>
                <p className="text-gray-400">{edu.period}</p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
