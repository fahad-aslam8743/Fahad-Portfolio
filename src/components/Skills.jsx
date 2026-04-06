import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiSupabase, SiVite, SiFramer 
} from 'react-icons/si';

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "group-hover:text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "group-hover:text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "group-hover:text-yellow-400" },
  { name: "React", icon: <FaReact />, color: "group-hover:text-cyan-400" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "group-hover:text-sky-400" },
  { name: "Supabase", icon: <SiSupabase />, color: "group-hover:text-emerald-500" },
  { name: "Vite", icon: <SiVite />, color: "group-hover:text-purple-500" },
  { name: "Framer", icon: <SiFramer />, color: "group-hover:text-pink-500" },
  { name: "Git", icon: <FaGitAlt />, color: "group-hover:text-orange-600" },
  { name: "Node.js", icon: <FaNodeJs />, color: "group-hover:text-green-500" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Skills = () => {
  return (
    <section className="py-20 md:py-32 px-5 md:px-6 bg-[#030712] relative overflow-hidden" id="skills">
      
      
      <div className="max-w-6xl mx-auto mb-12 md:mb-20 relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <span className="text-blue-500 font-mono text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.5em] uppercase mb-3 md:mb-4 block">
            03. Expertise
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Arsenal</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 md:h-2 bg-blue-600 mt-4 rounded-full"
          />
        </motion.div>
        
        
        <div className="absolute -top-10 left-0 text-[10rem] font-black text-white/[0.02] select-none pointer-events-none hidden lg:block uppercase">
          Stack
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
         
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-slate-900/20 border border-white/5 flex flex-col items-center justify-center gap-4 md:gap-6 transition-all duration-500 hover:border-blue-500/30 hover:bg-slate-900/40 shadow-2xl overflow-hidden"
            >
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-blue-500/5 pointer-events-none" />

              
              <div className={`text-4xl md:text-5xl text-slate-500 transition-all duration-500 ${skill.color} drop-shadow-2xl`}>
                {skill.icon}
              </div>
              
              
              <span className="text-slate-400 text-[9px] md:text-[10px] font-mono font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase group-hover:text-white transition-colors duration-300">
                {skill.name}
              </span>

              
              <div className="absolute top-4 right-4 w-1 h-1 rounded-full bg-white/5 group-hover:bg-blue-500 transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;