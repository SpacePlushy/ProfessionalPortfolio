import { motion } from "framer-motion";
import { usePortfolioView } from "../hooks/usePortfolioView";

const About = () => {
  const { professionalSummary, personalTraits } = usePortfolioView();

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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center">
            {professionalSummary.map((paragraph, index) => (
              <p key={index} className="text-lg mb-6 leading-relaxed text-darkGrey">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold font-poppins text-navy mb-6 text-center">Personal Traits</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {personalTraits.map((trait, index) => (
                <motion.span
                  key={index}
                  className="px-5 py-2 bg-purple text-white font-medium rounded-full shadow-md text-base"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                >
                  {trait}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;