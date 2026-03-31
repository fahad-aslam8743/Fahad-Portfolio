import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: "ElectroHub",
    type: "Premium E-Commerce",
    image: "https://res.cloudinary.com/dewiz9758/image/upload/v1774980014/bandicam_2026-03-31_22-36-37-946_m6ylzy.jpg",
    link: "https://electro-hub-e-commerce-store.vercel.app",
    repo: "https://github.com/fahad-aslam8743/ElectroHub-E-Commerce-Store.git",
    desc: "A high-performance store featuring TanStack Query caching and personalized user carts."
  },
  {
    title: "ZenTask",
    type: "Management System",
    image: "https://res.cloudinary.com/dewiz9758/image/upload/v1774980014/bandicam_2026-03-31_22-37-05-856_sjndf8.jpg",
    link: "https://zen-task-task-manager.vercel.app",
    repo: "https://github.com/fahad-aslam8743/ZenTask-Task-Manager.git",
    desc: "Professional Kanban board with Supabase backend and real-time drag-and-drop logic."
  },
  {
    title: "Finance Hub",
    type: "FinTech Analytics",
    image: "https://res.cloudinary.com/dewiz9758/image/upload/v1774980014/bandicam_2026-03-31_22-36-17-296_dsr4ed.jpg",
    link: "https://finance-hub-tracker-y9zz.vercel.app/",
    repo: "https://github.com/fahad-aslam8743/Finance-Hub-Tracker.git",
    desc: "Advanced data visualization tool for tracking expenses with pure logic and clean UI."
  }
];

const ProjectSection = () => {
  return (
    <section className="py-20 md:py-32 px-5 md:px-6 bg-[#030712] relative overflow-hidden" id="projects">
      
      {}
      <div className="max-w-7xl mx-auto mb-12 md:mb-20 relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <span className="text-blue-500 font-mono text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.5em] uppercase mb-3 md:mb-4 block">
            04. Portfolio
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Creations</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 md:h-2 bg-blue-600 mt-4 rounded-full"
          />
        </motion.div>
        
        {}
        <div className="absolute -top-10 left-0 text-[10rem] font-black text-white/[0.02] select-none pointer-events-none hidden lg:block uppercase">
          Works
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col h-full rounded-[2rem] md:rounded-[2.5rem] bg-slate-900/20 border border-white/5 overflow-hidden transition-all duration-500 hover:bg-slate-900/40 hover:border-blue-500/30 shadow-2xl"
            >
              {}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
              </div>

              {}
              <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                <div className="mb-4">
                  <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] text-blue-500 uppercase">{p.type}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-1 tracking-tight group-hover:text-blue-400 transition-colors">
                    {p.title}
                  </h3>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 md:mb-8 flex-grow font-light">
                  {p.desc}
                </p>

                {}
                <div className="flex gap-3 md:gap-4 mt-auto">
                  <motion.a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-2.5 md:py-3 rounded-xl font-bold text-[10px] md:text-xs hover:bg-blue-500 hover:text-white transition-all duration-300"
                  >
                    Demo <FiExternalLink size={14} className="hidden xs:block" />
                  </motion.a>
                  
                  <motion.a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-800/50 text-white py-2.5 md:py-3 rounded-xl font-bold text-[10px] md:text-xs border border-white/5 hover:border-blue-500/50 transition-all duration-300"
                  >
                    Code <FiGithub size={14} className="hidden xs:block" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;