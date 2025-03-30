import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { technicalSkills, softwareTools, professionalSkills } from "../data/resumeData";

const Skills = () => {
  const controlsRef = useRef(null);
  const isInView = useInView(controlsRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="skills" className="section bg-white" ref={controlsRef}>
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold font-poppins text-navy mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div 
                      className="progress"
                      initial={{ width: "0%" }}
                      animate={controls}
                      variants={{
                        visible: { 
                          width: `${skill.percentage}%`,
                          transition: { duration: 1, delay: index * 0.1 }
                        }
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-4">Software & Tools:</h4>
              <div className="flex flex-wrap gap-3">
                {softwareTools.map((tool, index) => (
                  <motion.span 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={controls}
                    variants={{
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { duration: 0.3, delay: 0.6 + index * 0.05 }
                      }
                    }}
                    className="px-3 py-1 bg-gray-100 text-navy rounded-full"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Professional Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold font-poppins text-navy mb-6">Professional Skills</h3>
            
            <div className="space-y-8">
              {professionalSkills.map((category, catIndex) => (
                <motion.div 
                  key={catIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  variants={{
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.5, delay: catIndex * 0.2 }
                    }
                  }}
                  className="card p-5 bg-gray-50 rounded-lg"
                >
                  <h4 className="font-medium text-lg mb-2">{category.title}</h4>
                  <ul className="space-y-2 text-slate">
                    {category.items.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={controls}
                        variants={{
                          visible: { 
                            opacity: 1, 
                            x: 0,
                            transition: { duration: 0.3, delay: catIndex * 0.2 + itemIndex * 0.1 + 0.2 }
                          }
                        }}
                        className="flex items-start"
                      >
                        <span className="text-teal mr-2">▹</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
