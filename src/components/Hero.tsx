import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 z-0"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-300"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-secondary-300"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Outer div with added margin-top */}
      <div className="container relative z-10 mx-auto mt-16">
        {" "}
        {/* Added mt-16 for top margin */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="w-full max-w-6xl mx-auto mb-12 relative overflow-hidden rounded-3xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              backgroundImage: "url(/public/assets/home.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "600px", // Increased height
            }}
          >
            {/* Inner div for content */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-end p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Button */}
              <motion.button
                className="btn-primary group px-6 py-3 text-lg font-semibold rounded-full shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(12, 142, 231, 0.5)",
                }}
                onClick={() =>
                  window.open(
                    "http://localhost:8501",
                    "_blank"
                  )
                }
              >
                Get Started
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
