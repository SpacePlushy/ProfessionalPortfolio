import { motion } from "framer-motion";
import { usePortfolioView } from "../hooks/usePortfolioView";

const Skills = () => {
  const { skills } = usePortfolioView();

  if (!skills || skills.length === 0) {
    return null; // Don't render if no skills are available for the current view
  }

  return (
    <section id="skills" className="section bg-white">
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

        <div className="space-y-8">
          {skills.map((skillCategory, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
              className="card p-6 bg-gray-50 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold font-poppins text-navy mb-4">{skillCategory.category}</h3>
              <ul className="space-y-3 text-slate grid md:grid-cols-2 gap-x-8">
                {skillCategory.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-teal mr-3 mt-1">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
