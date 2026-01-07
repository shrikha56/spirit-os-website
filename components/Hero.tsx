
import React from 'react';
import { ArrowRight, Code2, Layers, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-6 hero-gradient overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="hero-mesh"></div>
      <div className="blob w-[500px] h-[500px] bg-[#7CB8E8] top-[-10%] left-[-10%] blur-[120px]"></div>
      <div className="blob w-[600px] h-[600px] bg-[#E0E7FF] bottom-[-20%] right-[-10%] blur-[150px] animation-delay-2000"></div>
      <div className="blob w-[400px] h-[400px] bg-[#FFEDD5] top-[20%] right-[10%] blur-[100px] animation-delay-4000 opacity-30"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border-white/60 text-[#5B8FDE] text-[13px] font-bold mb-12 shadow-sm transform hover:scale-105 transition-transform cursor-default">
          <Sparkles className="w-3.5 h-3.5" />
          Bespoke Tutoring Infrastructure Layer
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-[9.5rem] font-black tracking-tight text-[#1F2937] mb-10 leading-[0.88] drop-shadow-sm">
          Software Built <br />
          For Your <span className="text-[#5B8FDE] relative">
            Workflow.
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#5B8FDE]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-[#6B7280] font-medium leading-relaxed mb-14 px-4">
          The "Anti-SaaS" approach for high-growth tutoring centers. <br className="hidden md:block" />
          We engineer systems that map <span className="text-[#1F2937] font-bold border-b-2 border-[#5B8FDE]/30">perfectly</span> to your actual operations.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-28">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative w-full md:w-auto px-12 py-6 bg-[#5B8FDE] text-white rounded-2xl text-xl font-bold hover:bg-[#4A8FEF] shadow-[0_20px_40px_-10px_rgba(91,143,222,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(91,143,222,0.6)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Deployment <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <button 
            onClick={() => document.getElementById('case-study')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto px-12 py-6 glass border-gray-200 text-[#1F2937] rounded-2xl text-xl font-bold hover:bg-white/60 transition-all duration-300"
          >
            See Ryse Academy
          </button>
        </div>

        {/* Enhanced Mockup Element */}
        <div className="relative max-w-6xl mx-auto p-3 glass rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border-white/60 float-animation">
          <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[16/8.5] shadow-inner relative border border-gray-100">
             <div className="absolute top-0 left-0 w-full p-7 border-b border-gray-50 flex items-center justify-between bg-[#F8FAFC]/50 backdrop-blur-sm">
                <div className="flex gap-2.5">
                   <div className="w-3.5 h-3.5 rounded-full bg-[#E5E9F0] border border-gray-200"></div>
                   <div className="w-3.5 h-3.5 rounded-full bg-[#E5E9F0] border border-gray-200"></div>
                   <div className="w-3.5 h-3.5 rounded-full bg-[#E5E9F0] border border-gray-200"></div>
                </div>
                <div className="h-5 w-48 bg-gray-200/40 rounded-full border border-gray-100"></div>
             </div>
             
             <div className="p-14 h-full pt-24 flex items-center justify-center">
                <div className="grid grid-cols-12 gap-10 w-full h-full">
                   <div className="col-span-7 bg-[#F1F5F9]/50 rounded-[2.5rem] p-12 flex flex-col justify-between border border-gray-100/50 shadow-sm">
                      <div className="space-y-8">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md border border-gray-100">
                            <Layers className="text-[#5B8FDE] w-8 h-8" />
                        </div>
                        <div className="space-y-4">
                          <div className="h-7 w-5/6 bg-gray-200/70 rounded-full"></div>
                          <div className="h-5 w-3/5 bg-gray-100/70 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="h-12 w-40 bg-[#5B8FDE] rounded-xl shadow-lg shadow-blue-500/20"></div>
                        <div className="h-12 w-24 bg-white border border-gray-200 rounded-xl"></div>
                      </div>
                   </div>
                   
                   <div className="col-span-5 flex flex-col gap-10">
                      <div className="flex-1 glass border-gray-100/40 rounded-[2.5rem] p-10 flex items-center gap-5 shadow-sm">
                         <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center border border-green-100">
                            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.4)]"></div>
                         </div>
                         <div className="space-y-2">
                           <div className="h-4 w-32 bg-gray-200/70 rounded-full"></div>
                           <div className="h-3 w-20 bg-gray-100/70 rounded-full"></div>
                         </div>
                      </div>
                      
                      <div className="flex-[1.8] bg-[#2D3748] rounded-[2.5rem] p-10 flex flex-col justify-end shadow-xl relative overflow-hidden group">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
                         <Code2 className="text-white/30 w-14 h-14 mb-6" />
                         <div className="space-y-3">
                           <div className="h-5 w-3/4 bg-white/20 rounded-full"></div>
                           <div className="h-5 w-1/2 bg-white/10 rounded-full"></div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          
          {/* Floating Glass Element */}
          <div className="absolute -right-12 top-1/4 w-56 p-7 glass-dark rounded-[2rem] shadow-2xl float-animation hidden lg:block border-white/20">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <div className="h-2 w-24 bg-white/20 rounded-full"></div>
            </div>
            <div className="h-2.5 w-full bg-white/10 rounded-full mb-3"></div>
            <div className="h-2.5 w-5/6 bg-white/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
