import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white overflow-hidden">
      {/* Navigation Bar */}
      <NavBar />

      {/* Animated Content Wrapper */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Page Sections */}
        <Hero />
        <About />
        <Services />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;
