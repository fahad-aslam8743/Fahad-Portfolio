import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

 
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "education", "skills", "projects"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled ? "py-2" : "py-4 md:py-6"
    }`}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div className={`max-w-5xl mx-auto px-2 md:px-6 py-2 transition-all duration-500 rounded-2xl border ${
        scrolled 
          ? "bg-[#030712]/80 backdrop-blur-xl border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]" 
          : "bg-transparent border-transparent"
      }`}>
        <div className="flex justify-center md:justify-between items-center relative min-h-[44px]">
          
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block text-white font-black text-xl tracking-tighter cursor-pointer shrink-0"
            onClick={(e) => scrollToSection(e, "home")}
          >
            FAHAD<span className="text-blue-500">.</span>
          </motion.div>
          
          
          <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center">
            <div className="flex items-center p-1 bg-white/5 rounded-xl border border-white/5 relative no-scrollbar overflow-hidden">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`relative px-2.5 md:px-4 py-1.5 md:py-2 text-[9px] md:text-[11px] font-bold uppercase tracking-tight md:tracking-widest transition-colors duration-300 z-10 whitespace-nowrap ${
                      isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {link.name}
                    
                    {}
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg -z-10 border bg-blue-600 border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            onClick={(e) => scrollToSection(e, "contact")}
            className="hidden md:flex bg-blue-600 text-white px-5 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 shrink-0"
          >
            Let's Talk
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;