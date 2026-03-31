import { motion } from 'framer-motion';
import { FiUser, FiZap, FiTarget } from 'react-icons/fi';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-20 md:py-32 px-5 md:px-6 bg-[#030712] relative overflow-hidden" id="about">
      
      {}
      <div className="max-w-6xl mx-auto mb-12 md:mb-20 relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <span className="text-blue-500 font-mono text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase mb-3 block">
            01. Background
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Persona</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 md:h-2 bg-blue-600 mt-4 rounded-full"
          />
        </motion.div>
        
        {}
        <div className="absolute -top-10 left-0 text-[10rem] font-black text-white/[0.02] select-none pointer-events-none hidden lg:block">
          ABOUT
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
      >
        
        {}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-8 group relative p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-slate-900/20 border border-white/5 overflow-hidden flex flex-col justify-between hover:bg-slate-900/40 transition-all duration-500 shadow-2xl"
        >
          {}
          <div className="absolute -top-24 -right-24 w-48 h-48 md:w-64 md:h-64 bg-blue-500/10 blur-[60px] md:blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-all duration-700" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-blue-500 mb-6">
              <FiUser size={20} className="md:w-6 md:h-6" />
              <span className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase">Identity</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4 md:mb-6 leading-tight">
              Fahad <span className="text-slate-500">Aslam</span>
            </h3>
            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">
              I’m a Frontend Developer focused on crafting refined, high-performance digital experiences. 
              I combine technical precision with a deep attention to detail to build interfaces that feel 
              <span className="text-white font-medium"> smooth, responsive, and intuitive.</span>
            </p>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-3 md:gap-4 text-[10px] font-mono text-slate-600">
            <span>#React</span> <span>#Tailwind</span> <span>#CreativeDev</span>
          </div>
        </motion.div>

        {}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="md:col-span-4 p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-blue-600 flex flex-col justify-between group relative overflow-hidden order-last md:order-none"
        >
          <FiTarget className="text-white/10 absolute -right-4 -top-4" size={100} />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-blue-200 mb-6 md:mb-8">
              <FiZap size={18} />
              <span className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold">The Vision</span>
            </div>
            <p className="text-lg md:text-xl font-bold text-white leading-tight">
              Creating products that solve problems, elevate brands, and leave a 
              <span className="block mt-2 underline decoration-blue-400 decoration-2 md:decoration-4 underline-offset-4">lasting impression.</span>
            </p>
          </div>
          
          <p className="text-blue-100 text-xs md:text-sm font-light mt-6 relative z-10">
            Delivering work that is visually premium, scalable, and future-ready.
          </p>
        </motion.div>

        {}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-12 group p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-slate-900/20 border border-white/5 flex flex-col lg:flex-row gap-8 lg:gap-10 items-center hover:border-blue-500/30 transition-all duration-500"
        >
          <div className="flex-1 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start items-center gap-3 text-slate-500 mb-3">
              <span className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] uppercase">Continuum</span>
            </div>
            <h3 className="text-white text-xl md:text-2xl font-bold mb-3">The Evolution</h3>
            <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed">
              My journey began with curiosity and quickly evolved into a strong commitment to frontend development. 
              Each step has sharpened my skills and pushed me toward more polished user experiences.
            </p>
          </div>
          
          {}
          <div className="w-full lg:w-auto flex flex-row justify-center gap-3 md:gap-4">
            <div className="flex-1 lg:flex-none p-5 md:p-6 rounded-3xl bg-white/5 border border-white/5 text-center min-w-[100px] md:min-w-[120px]">
              <div className="text-2xl md:text-3xl font-black text-white">2026</div>
              <div className="text-[8px] md:text-[10px] text-slate-600 uppercase tracking-widest mt-1">Ready</div>
            </div>
            <div className="flex-1 lg:flex-none p-5 md:p-6 rounded-3xl bg-blue-500/10 border border-blue-500/20 text-center min-w-[100px] md:min-w-[120px]">
              <div className="text-2xl md:text-3xl font-black text-blue-500">100%</div>
              <div className="text-[8px] md:text-[10px] text-blue-400 uppercase tracking-widest mt-1">Committed</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;