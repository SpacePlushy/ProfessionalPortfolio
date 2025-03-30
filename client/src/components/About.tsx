import { motion } from "framer-motion";
import { aboutMe, personalTraits } from "../data/resumeData";

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-navy p-1 inline-block rounded-lg rotate-3 transition-transform hover:rotate-0 duration-300">
              <div className="bg-teal p-1 rounded-lg -rotate-3 transition-transform hover:rotate-0 duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1629904853893-c2c8981a3073?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Profile" 
                  className="rounded h-auto w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {aboutMe.map((paragraph, index) => (
              <p key={index} className="text-lg mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            <div className="flex flex-wrap gap-3 mt-8">
              {personalTraits.map((trait, index) => (
                <span key={index} className="px-3 py-1 bg-navy bg-opacity-10 text-navy rounded-full">
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
