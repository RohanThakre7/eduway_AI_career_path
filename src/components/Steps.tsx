import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  LogIn,
  ClipboardList,
  Lightbulb,
  BookOpen,
  CheckCircle,
  FileText,
  Award,
  ArrowRight,
} from 'lucide-react';

const Steps: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: <LogIn size={24} />,
      title: "Log in to your account",
      description: "Create an account or log in to access personalized career guidance.",
    },
    {
      icon: <ClipboardList size={24} />,
      title: "Fill out the survey form",
      description: "Complete a comprehensive survey about your skills, interests, and goals.",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Our AI analyzes your information",
      description: "Our AI processes your profile to recommend ideal career paths tailored to you.",
    },
    {
      icon: <BookOpen size={24} />,
      title: "Receive the best career path recommendations",
      description: "Get curated career suggestions based on your survey responses.",
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Complete the learning",
      description: "Access and complete the recommended learning resources to develop necessary skills.",
    },
    {
      icon: <FileText size={24} />,
      title: "Take an assessment test",
      description: "Evaluate your knowledge and skills through our interactive assessment tests.",
    },
    {
      icon: <Award size={24} />,
      title: "Earn exciting badges",
      description: "Unlock achievements and earn badges as you progress through your career journey.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="steps" ref={ref} className="section bg-white">
      <div className="container">
        <motion.h2
          className="section-title text-center text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          How It <span className="text-primary-600">Works</span>
        </motion.h2>

        <motion.p
          className="section-subtitle text-center text-neutral-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Follow these simple steps to discover your ideal career path with EDUWAY
        </motion.p>

        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start mb-12 relative group"
            >
              {/* Step number */}
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-xl z-10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary-700"
              >
                {index + 1}
              </div>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-[calc(100%+12px)] bg-primary-200 -z-0 transition-colors duration-300 group-hover:bg-primary-700"></div>
              )}

              {/* Content */}
              <div className="ml-6">
                <div className="bg-neutral-50 p-6 rounded-xl shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-primary-100 rounded-lg text-primary-600 mr-3 transition-colors duration-300 group-hover:bg-primary-700 group-hover:text-white">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <div className="flex items-center">
                    <p className="text-neutral-600 flex-grow">{step.description}</p>
                    <motion.div
                      className="ml-4 text-primary-600 transition-transform duration-300 group-hover:scale-125 group-hover:text-primary-700"
                      whileHover={{ scale: 1.2 }}
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Steps;