import { motion } from "framer-motion";
import { education } from "../data/resumeData";

const Education = () => {
  return (
    <section id="education" className="section bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          Education
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card bg-white p-8 rounded-lg shadow-sm hover:shadow-md"
        >
          <div className="flex flex-wrap justify-between items-start gap-6 mb-6">
            <div>
              <h3 className="text-xl font-bold font-poppins text-navy">{education.school}</h3>
              <h4 className="text-lg font-medium text-slate">{education.department}</h4>
            </div>
            <div className="text-slate">
              <p>{education.graduationDate}</p>
              <p>{education.location}</p>
            </div>
          </div>
          
          <div className="mb-6">
            <span className="inline-block bg-teal bg-opacity-20 text-navy font-medium px-4 py-1 rounded-full">
              {education.degree}
            </span>
            <span className="inline-block ml-3 text-slate">Major GPA: {education.gpa}</span>
          </div>
          
          <ul className="space-y-3 text-darkGrey">
            {education.achievements.map((achievement, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                className="flex items-start"
              >
                <span className="text-teal mr-2">▹</span>
                <span>{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
