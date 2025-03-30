import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="section bg-navy text-white flex items-center pt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-teal font-poppins mb-4"
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
            Software Engineer
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate mb-8 text-lg leading-relaxed"
          >
            Versatile Software Engineer with expertise in aerospace and space applications. 
            Exceptional problem-solving skills, adaptability to new technologies, and a proven 
            track record in managing software obsolescence and delivering high-quality code 
            for mission-critical systems.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#contact" 
              className="px-6 py-3 border-2 border-teal text-teal font-medium rounded hover:bg-teal hover:bg-opacity-10 transition-all duration-300"
            >
              Contact Me
            </a>
            <a 
              href="#experience" 
              className="px-6 py-3 bg-teal text-navy font-medium rounded hover:bg-opacity-90 transition-all duration-300"
            >
              View Experience
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
