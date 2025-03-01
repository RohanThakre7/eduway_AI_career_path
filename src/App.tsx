import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Steps from './components/Steps';
import Footer from './components/Footer';
import ProfileSidebar from './components/ProfileSidebar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative overflow-x-hidden">
      <Navbar toggleSidebar={toggleSidebar} />
      <ProfileSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main>
        <Hero />
        <About />
        <Features />
        <CallToAction />
        <Steps />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;