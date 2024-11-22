import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";




const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-purple-500">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's discuss your next project
          </p>
        </motion.div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Name Input */}
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Project discussion"
                  required
                />
              </div>
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={8}
                className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
                placeholder="Your message..."
                required
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <div className="flex justify-center gap-8">
            <a href="https://www.linkedin.com/in/gogul-tamilselvan/" target="_blank" className="text-purple-500 hover:text-purple-300 text-2xl">
              <FaLinkedin/>
            </a>
            <a href="mailto:gogulthedev@gmail.com" className="text-purple-500 hover:text-purple-300 text-2xl">
              <SiGmail/>
            </a>
            <a href="https://github.com/Gogul-Tamilselvan" target="_blank" className="text-purple-500 hover:text-purple-300 text-2xl">
              <FaGithub/>
            </a>
            <a href="https://www.instagram.com/gogultamilselvan/" target="_blank" className="text-purple-500 hover:text-purple-300 text-2xl">
              <AiFillInstagram/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
