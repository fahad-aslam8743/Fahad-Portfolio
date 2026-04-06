import { motion } from 'framer-motion';
import { FiArrowUpRight, FiMessageSquare } from 'react-icons/fi';

const Contact = () => {
  return (
    <section className="py-20 md:py-32 px-5 md:px-6 bg-[#030712] relative overflow-hidden" id="contact">
      
      <div className="max-w-6xl mx-auto mb-12 md:mb-20 relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <span className="text-blue-500 font-mono text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.5em] uppercase mb-3 md:mb-4 block">
            05. Connection
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Touch</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 md:h-2 bg-blue-600 mt-4 rounded-full"
          />
        </motion.div>
        
        <div className="absolute -top-10 left-0 text-[10rem] font-black text-white/[0.02] select-none pointer-events-none hidden lg:block uppercase">
          Hello
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute -top-10 -left-10 w-32 h-32 md:w-64 md:h-64 bg-blue-600/10 blur-[60px] md:blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] bg-slate-900/20 border border-white/5 p-8 md:p-24 text-center backdrop-blur-3xl shadow-2xl"
        >
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[grid-white_20px]" />

          <div className="inline-flex p-4 md:p-5 rounded-2xl md:rounded-3xl bg-blue-500/10 text-blue-400 mb-6 md:mb-10 relative z-10">
            <FiMessageSquare size={32} className="md:w-10 md:h-10" />
          </div>
          
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter mb-6 md:mb-8 relative z-10 leading-[1.2] md:leading-[1.1]">
            Ready to build <br className="hidden md:block"/> something <span className="text-blue-500">legendary?</span>
          </h2>
          
          <p className="text-slate-500 text-sm md:text-lg mb-8 md:mb-12 max-w-xs md:max-w-md mx-auto font-light relative z-10">
            Currently accepting job offers and freelance collaborations for 
            <span className="text-white font-medium"> 2026</span>. Let's turn your vision into high-performance code.
          </p>

          <motion.a
            href="mailto:notxfahad@gmail.com"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 md:gap-4 bg-white text-black px-8 md:px-12 py-4 md:py-6 rounded-2xl md:rounded-[2rem] font-black text-sm md:text-lg hover:bg-blue-500 hover:text-white transition-all duration-500 shadow-2xl shadow-blue-500/10 relative z-10"
          >
            Send an Email <FiArrowUpRight className="text-xl md:text-2xl" />
          </motion.a>

          <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-[8px] md:text-[10px] font-mono text-slate-600 uppercase tracking-[0.2em] md:tracking-[0.4em] relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span>Based in Pakistan</span>
            </div>
            <span className="hidden md:block opacity-20 text-white">|</span>
            <span>Remote Friendly</span>
            <span className="hidden md:block opacity-20 text-white">|</span>
            <span>Worldwide Sync</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;