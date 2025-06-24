import { motion } from "framer-motion";
import { usePortfolioView } from "../hooks/usePortfolioView";

const Education = () => {
  const { education } = usePortfolioView();

  if (!education || education.length === 0) {
    return null;
  }

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

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card bg-white p-6 rounded-lg shadow-sm hover:shadow-md"
            >
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div>
                  <h3 className="text-lg font-bold font-poppins text-navy">{edu.degree}</h3>
                  <p className="text-slate">{edu.university}</p>
                </div>
                <p className="text-slate font-medium bg-gray-100 px-3 py-1 rounded-full text-sm">{edu.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
