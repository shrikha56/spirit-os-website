
import React from 'react';
import { Database, Cpu, Code2, Workflow, Zap, ShieldCheck, Clock, RefreshCw, Award, Sparkles } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-12 text-[#1F2937] leading-tight max-w-4xl">
            Our <span className="text-[#5B8FDE]">Competitive Edge</span>
          </h2>
          
          <div className="space-y-20">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="flex-1 md:max-w-xl">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-2xl font-black text-[#5B8FDE]">1.</span>
                  <h3 className="text-2xl font-black text-[#1F2937]">Weeks, Not Months</h3>
                </div>
                <p className="text-xl text-[#6B7280] leading-relaxed font-medium">
                  We deliver a functional, custom MVP for your tutoring centre in just a few weeks. While traditional agencies spend months in discovery, we use high-velocity development to get your infrastructure live and operational immediately.
                </p>
              </div>
              <div className="flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 flex items-center justify-center md:ml-auto">
                <img src="/weeks-not-months.png" alt="Weeks Not Months" className="w-72 md:w-96 object-contain" onError={(e) => { console.error('Failed to load image:', e); }} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="flex-1 md:max-w-xl">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-2xl font-black text-[#5B8FDE]">2.</span>
                  <h3 className="text-2xl font-black text-[#1F2937]">The 100% Conviction Period</h3>
                </div>
                <p className="text-xl text-[#6B7280] leading-relaxed font-medium">
                  Delivery is just the start. We work alongside you for a month of rapid iteration, refining every feature until you have 100% conviction that the platform is perfectly curated to your specific business logic.
                </p>
              </div>
              <div className="flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 flex items-center justify-center md:ml-auto">
                <img src="/100-percent-confidence.png" alt="100% Confidence" className="w-72 md:w-96 object-contain" onError={(e) => { console.error('Failed to load image:', e); }} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="flex-1 md:max-w-xl">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-2xl font-black text-[#5B8FDE]">3.</span>
                  <h3 className="text-2xl font-black text-[#1F2937]">Elite Engineering Talent</h3>
                </div>
                <p className="text-xl text-[#6B7280] leading-relaxed font-medium">
                  Your backend isn't built by entry-level devs. Our team consists of world-class engineers sourced from top-tier software development firms, bringing enterprise-grade architecture to the tutoring industry.
                </p>
              </div>
              <div className="flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 flex items-center justify-center md:ml-auto">
                <img src="/elite-engineering-talent.png" alt="Elite Engineering Talent" className="w-72 md:w-96 object-contain" onError={(e) => { console.error('Failed to load image:', e); }} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="flex-1 md:max-w-xl">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-2xl font-black text-[#5B8FDE]">4.</span>
                  <h3 className="text-2xl font-black text-[#1F2937]">Zero-Template Curation</h3>
                </div>
                <p className="text-xl text-[#6B7280] leading-relaxed font-medium">
                  We start all projects from scratch. Building bespoke software that mirrors exactly how you already operate, ensuring the tech supports your unique pedagogy rather than hindering it.
                </p>
              </div>
              <div className="flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 flex items-center justify-center md:ml-auto">
                <img src="/zero-template-curation.png" alt="Zero-Template Curation" className="w-72 md:w-96 object-contain" onError={(e) => { console.error('Failed to load image:', e); }} />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};
