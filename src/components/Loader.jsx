import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030712]"
    >
      <div className="relative">
        {}
        <h1 className="text-white font-black text-4xl tracking-tighter z-10 relative">
          FAHAD<span className="text-blue-500">.</span>
        </h1>
        
        {}
        <div className="absolute -bottom-4 left-0 w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-blue-500"
          />
        </div>
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="mt-10 text-slate-600 font-mono text-[10px] uppercase tracking-[0.5em]"
      >
        Initializing_Systems
      </motion.p>
    </motion.div>
  );
};

export default Loader;