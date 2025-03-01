import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BookOpen, 
  BrainCircuit, 
  Compass, 
  LineChart, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: <BrainCircuit size={32} />,
      title: "Personalized Learning",
      description: "Access curated learning resources tailored to your specific career goals and current skill level.",
      link: "https://example.com/personalized-learning" // Replace with your actual link
    },
    {
      icon: <Compass size={32} />,
      title: "Career Path Mapping",
      description: "Visualize your career journey with detailed roadmaps showing milestones and required skills.",
      link: "https://example.com/career-path-mapping" // Replace with your actual link
    },
    {
      icon: <BookOpen size={32} />,
      title: "Test & Gamification",
      description: "Engage with interactive quizzes and challenges to reinforce learning and track your performance.",
      link: "https://sparkly-paprenjak-ca960c.netlify.app/" // Replace with your actual link
    },
    {
      icon: <LineChart size={32} />,
      title: "Progress Analytics",
      description: "Monitor your learning progress with insights and visual data to optimize your career growth.",
      link: "https://example.com/progress-analytics" // Replace with your actual link
    },
    {
      icon: <Compass size={32} />, // Reusing Compass icon for visualization
      title: "Visualization of Career Path for Early Birds",
      description: "Explore potential career paths and opportunities designed for early birds or 12th standard users.",
      link: "https://rainbow-halva-f5c3ee.netlify.app/" // Replace with your actual link
    }
  ];

  return (
    <section id="features" ref={ref} className="section bg-neutral-50">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Powerful <span className="text-primary-600">Features</span>
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover how EDUWAY can transform your career journey with these innovative features
        </motion.p>
        
        <div className="relative mt-12">
          <motion.div 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white shadow-md text-primary-600 hover:bg-[#E45CAB] hover:text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
          </motion.div>
          
          <motion.div 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white shadow-md text-primary-600 hover:bg-[#E45CAB] hover:text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
          
          <motion.div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-8 hide-scrollbar"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex space-x-6 px-4 md:px-8 min-w-max">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="card w-[280px] md:w-[320px] p-6 flex flex-col items-center text-center group cursor-pointer"
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => window.open(feature.link, '_blank')} // Open link in a new tab
                >
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-5 text-primary-600 group-hover:bg-[#E45CAB] group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-neutral-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <style jsx>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Features;