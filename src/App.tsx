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
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative overflow-x-hidden">
      <Navbar toggleSidebar={toggleSidebar} user={user} setUser={setUser} />
      <ProfileSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} user={user} />
      
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