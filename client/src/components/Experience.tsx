import { useState } from "react";
import { motion } from "framer-motion";
import { experiences } from "../data/resumeData";

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const handleInView = (index: number) => {
    if (!visibleItems.includes(index)) {
      setVisibleItems([...visibleItems, index]);
    }
  };

  return (
    <section id="experience" className="section bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          Work Experience
        </motion.h2>
        
        <div className="timeline space-y-12">
          {experiences.map((experience, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onViewportEnter={() => handleInView(index)}
            >
              <div className="timeline-dot"></div>
              <div className="card bg-white rounded-lg shadow-sm p-6 hover:shadow-md">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-poppins text-navy">{experience.title}</h3>
                    <h4 className="text-lg font-medium text-slate">{experience.company}</h4>
                  </div>
                  <div className="text-slate">
                    <p>{experience.period}</p>
                    <p>{experience.location}</p>
                  </div>
                </div>
                <p className="text-slate mb-4">{experience.description}</p>
                <ul className="space-y-3 text-darkGrey">
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <motion.li 
                      key={respIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={visibleItems.includes(index) ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: respIndex * 0.1 + 0.3 }}
                      className="flex items-start"
                    >
                      <span className="text-teal mr-2">▹</span>
                      <span>{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
