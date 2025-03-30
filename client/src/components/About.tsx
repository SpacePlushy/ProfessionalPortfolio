import { motion } from "framer-motion";
import { aboutMe, personalTraits, education } from "../data/resumeData";

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
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card bg-white p-6 rounded-lg shadow-sm hover:shadow-md"
          >
            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold font-poppins text-navy">{education.school}</h3>
                <h4 className="text-md font-medium text-slate">{education.department}</h4>
              </div>
              <div className="text-slate text-sm">
                <p>{education.graduationDate}</p>
                <p>{education.location}</p>
              </div>
            </div>
            
            <div className="mb-4">
              <span className="inline-block bg-purple bg-opacity-20 text-navy font-medium px-3 py-1 text-sm rounded-full">
                {education.degree}
              </span>
              <span className="inline-block ml-2 text-slate text-sm">Major GPA: {education.gpa}</span>
            </div>
            
            <ul className="space-y-2 text-darkGrey">
              {education.achievements.map((achievement, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  className="flex items-start"
                >
                  <span className="text-purple mr-2">▹</span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
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
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold font-poppins text-navy mb-3">Personal Traits</h3>
              <div className="flex flex-wrap gap-3">
                {personalTraits.map((trait, index) => (
                  <motion.span 
                    key={index} 
                    className="px-4 py-2 bg-purple text-white font-medium rounded-full shadow-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
