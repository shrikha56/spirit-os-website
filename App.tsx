
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { CaseStudy } from './components/CaseStudy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Philosophy />
        <CaseStudy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
