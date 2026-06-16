import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ClipboardList, UserPlus } from 'lucide-react';

const CallToAction: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-secondary-900 opacity-95 z-0"></div>
      
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div 
          className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white"
          animate={{ 
            y: [0, 50, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-white"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.05, 1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Discover Your Ideal Career Path?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-white/90 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Take the first step towards a fulfilling career that aligns with your skills, interests, and goals. Our AI-powered platform will guide you every step of the way.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button 
              className="btn bg-white text-primary-700 hover:bg-neutral-100 focus:ring-white w-full sm:w-auto"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)" 
              }}
              animate={{ 
                boxShadow: ["0 0 0 rgba(255, 255, 255, 0)", "0 0 15px rgba(255, 255, 255, 0.3)", "0 0 0 rgba(255, 255, 255, 0)"]
              }}
              transition={{ 
                boxShadow: {
                  repeat: Infinity, 
                  duration: 2
                }
              }}
              onClick={() => window.open("http://localhost:8501", "_blank")}
            >
              <ClipboardList className="mr-2" size={20} />
              Take Survey
            </motion.button>
            
            <motion.button 
              className="btn bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500 w-full sm:w-auto"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" 
              }}
            >
              <UserPlus className="mr-2" size={20} />
              Sign Up
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;