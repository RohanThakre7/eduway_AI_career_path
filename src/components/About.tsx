import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Lightbulb, Target, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about-us" ref={ref} className="section bg-white">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-primary-600">EDUWAY</span>
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          AI-powered personalized career guidance.
        </motion.p>
        
        <div className="flex flex-col lg:flex-row gap-12 mt-16">
          <motion.div 
            className="lg:w-[70%]"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-900">Our AI-Driven Approach</h3>
            
            <p className="text-lg text-neutral-700 mb-6">
              At EDUWAY, we believe that everyone deserves a career path that aligns with their unique skills, interests, and goals. Our advanced AI technology analyzes multiple factors to provide personalized career recommendations and learning resources.
            </p>
            
            <p className="text-lg text-neutral-700 mb-8">
              Unlike traditional career guidance that relies on standardized assessments, our AI continuously learns and adapts to provide increasingly accurate and personalized recommendations as you progress through your learning journey.
            </p>
            
            
           
          </motion.div>
          
          <motion.div 
            className="lg:w-[30%] flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full blur-3xl opacity-30"></div>
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 8,
                  ease: "easeInOut" 
                }}
                className="relative z-10"
              >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  <path fill="#0070C4" d="M45.7,-77.3C59.1,-69.8,70.3,-57.5,78.9,-43.3C87.5,-29.1,93.5,-12.9,92.4,2.7C91.3,18.2,83.1,33.1,73.5,47.4C63.9,61.7,52.8,75.4,38.8,81.5C24.8,87.6,7.8,86.1,-8.1,82.1C-24,78.1,-38.8,71.6,-51.8,62.3C-64.8,53,-76,40.9,-81.8,26.5C-87.6,12.1,-88,-4.6,-83.9,-19.8C-79.8,-35,-71.2,-48.7,-59.3,-57.2C-47.4,-65.7,-32.2,-69,-18.1,-72.9C-4,-76.8,9,-81.3,23.3,-81.5C37.6,-81.7,52.3,-77.6,45.7,-77.3Z" transform="translate(100 100)" />
                </svg>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="/public/assets/chara.jpg" 
                    alt="AI Technology" 
                    className="w-3/4 h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;