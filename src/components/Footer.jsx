const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 md:py-16 bg-[#030712] border-t border-white/5 px-5 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-8">
        
        {}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-white font-black text-2xl md:text-3xl tracking-tighter mb-1">
            FAHAD<span className="text-blue-500">.</span>
          </div>
          <p className="text-slate-600 text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em]">
            Frontend Architect
          </p>
        </div>

        {}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-slate-500 text-[10px] md:text-xs font-mono uppercase tracking-widest">
          <a href="#projects" className="hover:text-blue-500 transition-colors duration-300">Projects</a>
          <a href="#about" className="hover:text-blue-500 transition-colors duration-300">About</a>
          <a 
            href="https://github.com/fahad-aslam8743" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Github
          </a>
        </div>

        {}
        <div className="flex flex-col items-center md:items-end">
           <p className="text-slate-700 text-[9px] md:text-[10px] font-mono tracking-tighter">
            © {year} CODED_BY_FAHAD_ASLAM
          </p>
          {}
          <div className="h-px w-8 bg-blue-500/20 mt-2 md:hidden" />
        </div>

      </div>
    </footer>
  );
};

export default Footer;