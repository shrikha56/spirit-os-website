
import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-9 h-9 flex items-center justify-center transition-transform group-hover:scale-110">
              <img 
                src="/logo.png" 
                alt="Spirit OS Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-black text-[#1F2937] tracking-tighter">Spirit OS</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#philosophy" className="text-sm font-semibold text-[#6B7280] hover:text-[#5B8FDE] transition-colors">Philosophy</a>
            <a href="#case-study" className="text-sm font-semibold text-[#6B7280] hover:text-[#5B8FDE] transition-colors">Case Study</a>
            <a href="#contact" className="text-sm font-semibold text-[#6B7280] hover:text-[#5B8FDE] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
