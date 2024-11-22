import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode } from "react-icons/fa";
import { LuInspect } from "react-icons/lu";
import { FaWordpress } from "react-icons/fa6";
import { SiAdobephotoshop ,SiAdobepremierepro} from "react-icons/si";
import { SiGoogleads } from "react-icons/si";






const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern technologies.',
    },
    {
      icon: LuInspect,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with attention to detail.',
    },
    {
      icon: FaWordpress,
      title: 'CRM Web Development',
      description: 'We build custom CRM systems to help you manage your business smoothly. Specializing in WordPress, we ensure your CRM is easy to use and tailored to your needs.',
    },
    {
        icon: SiAdobephotoshop,
        title: 'Photo Editing',
        description: 'We enhance your photos with professional editing, improving colors, details, and quality to make your images look their best.es.',
      },
      {
        icon: SiAdobepremierepro,
        title: 'Video Editing',
        description: 'We edit your videos to make them clear, engaging, and polished, adding effects and transitions to tell your story effectively.',
      },
      {
        icon: SiGoogleads,
        title: 'Social Media Marketing (SMM)',
        description: 'We help you grow your brand online by creating social media campaigns that engage your audience and drive results.',
      },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-purple-500">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Providing comprehensive solutions for your digital needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg p-2 mb-4">
                <service.icon className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
