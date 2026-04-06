import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
   
   
    <section className="relative min-h-[100dvh] flex flex-col justify-center items-center px-6 py-24 md:py-0 overflow-hidden bg-[#030712]" id="home">
      
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[1000px] md:h-[600px] bg-blue-600/10 blur-[60px] md:blur-[160px] rounded-full pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
       
        className="z-10 text-center w-full md:-mt-16"
      >
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 md:gap-3 px-5 py-2 mb-8 md:mb-12 rounded-full border border-white/5 bg-white/5 backdrop-blur-xl shadow-2xl"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[9px] md:text-[10px] font-mono font-bold tracking-[0.3em] md:tracking-[0.4em] text-blue-100 uppercase">
            Available for Internships 2026
          </span>
        </motion.div>
        
        
        <h1 className="text-[17vw] sm:text-[15vw] md:text-[10rem] font-black tracking-[-0.05em] text-white leading-[0.9] md:leading-[0.8] mb-8 select-none">
          Fahad <br className="xs:hidden" /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-100 via-slate-400 to-slate-700">
            Aslam
          </span>
        </h1>
        
        
        <div className="h-6 md:h-10 text-sm md:text-3xl font-light text-slate-400 mb-12 md:mb-16 tracking-[0.05em] md:tracking-[0.1em]">
          <TypeAnimation
            sequence={[
              'Frontend Architect', 2000, 
              'React Specialist', 2000, 
              'UI/UX Enthusiast', 2000,
              'Problem Solver', 2000
            ]}
            repeat={Infinity}
          />
        </div>

        
        <div className="flex gap-8 md:gap-12 justify-center items-center">
          {[ 
            { Icon: FaGithub, link: "https://github.com/fahad-aslam8743", label: "Github" },
            { Icon: FaLinkedin, link: "https://www.linkedin.com/in/fahad-aslam-a84653306", label: "LinkedIn" },
            { Icon: FaInstagram, link: "https://www.instagram.com/notwebdevfahad", label: "Instagram" },
            { Icon: FaFacebook, link: "https://www.facebook.com/share/18kSSZuFYs/", label: "Facebook" }
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="group relative flex items-center justify-center text-slate-500 hover:text-white transition-all duration-300"
            >
              <item.Icon className="text-xl md:text-3xl" />
              <span className="hidden md:block absolute -bottom-10 text-[8px] font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {item.label}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
      
     
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3], y: [0, 5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 md:bottom-12 flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-10 md:h-20 bg-gradient-to-b from-blue-600 via-blue-400 to-transparent opacity-40" />
        <span className="text-[7px] md:text-[9px] font-mono tracking-[0.5em] text-slate-300 uppercase">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;