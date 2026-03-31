import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi';


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import ProjectSection from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-6 md:right-10 z-[90] p-3 md:p-4 bg-blue-600/20 backdrop-blur-xl border border-blue-500/30 text-blue-400 rounded-full shadow-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <HiArrowUp className="text-xl md:text-2xl group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

 
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#030712] text-slate-200 selection:bg-blue-500/30 selection:text-blue-200 min-h-screen outline-none">
      
      {}
      {!loading && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-blue-600 origin-left z-[110]"
          style={{ scaleX }}
        />
      )}

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.main
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Navbar />
            
            {}
            <ScrollToTop />
            
            {}
            <div id="home">
              <Hero />
            </div>

            <div id="about" className="relative z-10">
              <About />
            </div>

            <div id="education" className="relative z-10">
              <Education />
            </div>

            <div id="skills" className="relative z-10">
              <Skills />
            </div>

            <div id="projects" className="relative z-10">
              <ProjectSection />
            </div>

            <div id="contact" className="relative z-10">
              <Contact />
            </div>

            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;