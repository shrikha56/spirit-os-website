
import React from 'react';
import { Database, Cpu, Code2, Workflow, Zap, ShieldCheck } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-24">
          <span className="text-[#5B8FDE] font-bold text-sm tracking-widest uppercase mb-4 block">The Anti-SaaS Hook</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 text-[#1F2937] leading-tight">
            Stop paying for <br /> features you <span className="text-[#5B8FDE]">don't use.</span>
          </h2>
          <p className="text-xl text-[#6B7280] leading-relaxed font-medium">
            Generic SaaS platforms force your business into their logic. We replace brittle spreadsheets with hardened, bespoke infrastructure that evolves with you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Important Dark Card */}
          <div className="md:col-span-2 md:row-span-2 p-12 rounded-[2.5rem] bg-[#2D3748] text-white flex flex-col justify-between overflow-hidden relative group shadow-xl">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-[#5B8FDE] rounded-cluely flex items-center justify-center mb-10 shadow-lg">
                <Workflow className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Software Built for You</h3>
              <p className="text-xl text-white/70 font-medium leading-relaxed max-w-md">
                We build bespoke, high-performance infrastructure for high growth tutoring companies. No generic templates, no technical debt, just operational excellence.
              </p>
            </div>
            <div className="absolute right-[-10%] bottom-[-10%] w-2/3 aspect-square bg-[#5B8FDE]/10 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000"></div>
          </div>

          {/* Feature Card - Light Gray */}
          <div className="p-10 rounded-[2.5rem] bg-[#E5E9F0] border border-white flex flex-col justify-between transition-all hover:shadow-md">
            <div className="w-12 h-12 rounded-cluely bg-white flex items-center justify-center shadow-sm">
              <Database className="w-6 h-6 text-[#5B8FDE]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#1F2937]">Unified Backends</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">Hardened data models that eliminate duplicate entries and manual spreadsheet syncs.</p>
            </div>
          </div>

          {/* Feature Card - Light Gray */}
          <div className="p-10 rounded-[2.5rem] bg-[#E5E9F0] border border-white flex flex-col justify-between transition-all hover:shadow-md">
             <div className="w-12 h-12 rounded-cluely bg-white flex items-center justify-center shadow-sm">
              <Code2 className="w-6 h-6 text-[#5B8FDE]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#1F2937]">Client-First Logic</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">Every line of code is owned by you and built specifically for your internal workflows.</p>
            </div>
          </div>

          {/* Wide Card */}
          <div className="md:col-span-3 p-12 rounded-[2.5rem] bg-white border border-gray-100 flex flex-col md:flex-row items-center gap-10 shadow-sm">
            <div className="w-20 h-20 rounded-[1.5rem] bg-[#E5E9F0] flex items-center justify-center shrink-0">
               <Cpu className="w-10 h-10 text-[#5B8FDE]" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-[#1F2937]">High Performance Infrastructure</h3>
              <p className="text-[#6B7280] text-lg font-medium">Our backend systems are optimized for speed. No loading spinners, no timeouts, just lightning-fast administrative operations for your staff and tutors.</p>
            </div>
            <div className="flex items-center gap-4 px-6 py-4 bg-[#F8FAFC] rounded-cluely border border-gray-100">
                <Zap className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                <span className="font-bold text-[#1F2937]">Zero Latency Ops</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
