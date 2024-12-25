import React from 'react';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Background />
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;