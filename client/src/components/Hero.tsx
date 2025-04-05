import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import headshotImage from "../assets/headshot.png";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Short delay to ensure content is ready before animations start
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="hero" className="section bg-navy text-white flex items-center pt-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-3xl order-2 md:order-1">
            <AnimatePresence>
              {isLoaded && (
                <>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-purple font-poppins mb-4"
                  >
                    Hi, my name is
                  </motion.div>
                  
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold font-poppins mb-4"
                  >
                    Frank Palmisano
                  </motion.h1>
                  
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl md:text-4xl font-semibold font-poppins text-slate mb-6"
                  >
                    Embedded Software Engineer
                  </motion.h2>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-slate mb-8 text-lg leading-relaxed"
                  >
                    Innovative Embedded Software Engineer with 6+ years spearheading virtualization 
                    and automated testing solutions for NASA and ISS projects, consistently delivering 
                    multimillion-dollar savings. Specialized in designing robust, reliable software 
                    for mission-critical aerospace applications with a proven record of optimizing 
                    performance, efficiency, and system reliability.
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap gap-4"
                  >
                    <a 
                      href="#contact" 
                      className="px-6 py-3 border-2 border-purple text-purple font-medium rounded hover:bg-purple hover:bg-opacity-10 transition-all duration-300"
                    >
                      Contact Me
                    </a>
                    <a 
                      href="#experience" 
                      className="px-6 py-3 bg-purple text-white font-medium rounded hover:bg-opacity-90 transition-all duration-300"
                    >
                      View Experience
                    </a>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <AnimatePresence>
              {isLoaded && (
                <motion.div 
                  className="w-64 h-64 md:w-80 md:h-80"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img 
                    src={headshotImage} 
                    alt="Frank Palmisano Headshot" 
                    className="rounded-full w-full h-full object-cover border-2 border-purple shadow-md"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;