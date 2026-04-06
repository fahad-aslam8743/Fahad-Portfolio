import { motion } from 'framer-motion';
import { FiBookOpen, FiAward } from 'react-icons/fi';

const education = [
  {
    degree: "FSc (Pre-Engineering)",
    institution: "City Science College",
    duration: "2021 — 2023",
    desc: "Focused on Physics, Mathematics, and Chemistry. Developed a strong analytical foundation during these years.",
    status: "Completed"
  },
  {
    degree: "Matriculation",
    institution: "High School Education", 
    duration: "2018 — 2020",
    desc: "Completed secondary education with a major in Science subjects, securing a high merit position.",
    status: "Completed"
  }
];

const Education = () => {
  return (
    <section className="py-20 md:py-32 px-5 md:px-6 bg-[#030712] relative overflow-hidden" id="education">
      
      
      <div className="absolute top-1/2 right-0 text-[10rem] font-black text-white/[0.02] select-none pointer-events-none hidden lg:block uppercase">
        Academia
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        
        <div className="mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-500 font-mono text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.5em] uppercase mb-3 md:mb-4 block">
              02. Education
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none">
              Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Path</span>
            </h2>
            <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "60px" }}
               transition={{ duration: 1, delay: 0.5 }}
               className="h-1.5 md:h-2 bg-blue-600 mt-4 rounded-full" 
            />
          </motion.div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-slate-900/20 border border-white/5 hover:bg-slate-900/40 hover:border-blue-500/30 transition-all duration-500 shadow-2xl"
            >
              
              <div className="flex flex-row justify-between items-center mb-6 md:mb-8">
                <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                  <FiBookOpen className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="font-mono text-[9px] md:text-xs text-slate-500 bg-slate-800/30 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/5">
                  {edu.duration}
                </span>
              </div>

              
              <div className="space-y-2 md:space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-blue-500 text-xs md:text-sm font-medium flex items-center gap-2">
                  <FiAward size={14} /> {edu.institution}
                </p>
                <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base">
                  {edu.desc}
                </p>
              </div>

              
              <div className="mt-6 md:mt-8 pt-6 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] md:text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                    {edu.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;