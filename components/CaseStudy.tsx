
import React from 'react';

export const CaseStudy: React.FC = () => {
  return (
    <section id="case-study" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <span className="text-[#5B8FDE] font-bold text-sm tracking-[0.3em] uppercase mb-4 block">Proof of Execution</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-[#1F2937]">The Ryse Standard.</h2>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-[#5B8FDE]/5 rounded-[3.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <div className="relative grid lg:grid-cols-2 gap-0 bg-white rounded-[3rem] border border-gray-100 shadow-xl overflow-hidden">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-10">
                <div className="px-5 py-2 bg-green-50 text-green-700 text-xs font-bold rounded-cluely border border-green-100 uppercase tracking-widest">
                  Nearing Completion: Q1 2026
                </div>
              </div>
              
              <h3 className="text-4xl font-black mb-8 text-[#1F2937]">Ryse Academy</h3>
              
              <div className="space-y-8">
                

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5B8FDE] mb-3">Challenge</p>
                  <p className="text-xl text-[#6B7280] leading-relaxed font-medium">
                    Originally working with Ryse Academy, they looked at setting up their business the traditional way, managing tutors and students on spreadsheets and manually setting up invoices.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5B8FDE] mb-3">Solution</p>
                  <p className="text-xl text-[#6B7280] leading-relaxed font-medium">
                    The bespoke backend infrastructure Spirit OS is currently deploying.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#E5E9F0] p-12 flex flex-col justify-center items-center">
              <div className="w-full h-full bg-white rounded-[2.5rem] shadow-2xl relative p-8 overflow-hidden group flex items-center justify-center min-h-[400px]">
                 <img 
                  src="/ryse-logo.png" 
                  alt="Ryse Academy Logo" 
                  className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-[4s] group-hover:scale-105"
                  onError={(e) => {
                    console.error('Failed to load image:', e.currentTarget.src);
                  }}
                 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
