
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 bg-[#F8FAFC] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-8 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-9 h-9 flex items-center justify-center transition-transform group-hover:scale-110">
                <img 
                  src="/logo.png" 
                  alt="Spirit OS Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-black text-[#1F2937] tracking-tighter">Spirit OS</span>
            </div>
            <p className="text-[#6B7280] leading-relaxed font-medium">
              We specialize in the engineering of bespoke backend systems and high-growth operational infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div>
              <h4 className="font-bold mb-6 text-xs uppercase tracking-[0.2em] text-[#1F2937]">Philosophy</h4>
              <ul className="space-y-4 text-sm font-semibold text-[#6B7280]">
                <li><a href="#philosophy" className="hover:text-[#5B8FDE] transition-colors">Infrastructure</a></li>
                <li><a href="#philosophy" className="hover:text-[#5B8FDE] transition-colors">Performance</a></li>
                <li><a href="#philosophy" className="hover:text-[#5B8FDE] transition-colors">The Anti-SaaS Hook</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xs uppercase tracking-[0.2em] text-[#1F2937]">Execution</h4>
              <ul className="space-y-4 text-sm font-semibold text-[#6B7280]">
                <li><a href="#case-study" className="hover:text-[#5B8FDE] transition-colors">Case Studies</a></li>
                <li><a href="#case-study" className="hover:text-[#5B8FDE] transition-colors">Ryse Academy</a></li>
                <li><a href="#" className="hover:text-[#5B8FDE] transition-colors">Q1 Deployment</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xs uppercase tracking-[0.2em] text-[#1F2937]">Contact</h4>
              <ul className="space-y-4 text-sm font-semibold text-[#6B7280]">
                <li><a href="#contact" className="hover:text-[#5B8FDE] transition-colors">Audit Inquiry</a></li>
                <li><a href="#" className="hover:text-[#5B8FDE] transition-colors">Direct Support</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-200 text-xs font-bold text-[#6B7280] uppercase tracking-widest">
          <p>© 2024 Spirit OS. Bespoke infrastructure for high growth.</p>
          <div className="flex items-center gap-8 mt-6 md:mt-0">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              <span>Operational Excellence Confirmed</span>
            </div>
            <a href="#" className="hover:text-[#1F2937]">Privacy Policy</a>
            <a href="#" className="hover:text-[#1F2937]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
