import { motion } from "framer-motion";
import { usePortfolioView } from "../hooks/usePortfolioView";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { email, phone, location, contactMessage, socialLinks } = usePortfolioView();

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "linkedin":
        return <FaLinkedinIn className="text-teal" />;
      case "github":
        return <FaGithub className="text-teal" />;
      case "twitter":
        return <FaTwitter className="text-teal" />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="section bg-navy text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold font-poppins mb-12 text-white relative inline-block"
        >
          Contact Me
          <span className="absolute bottom-0 left-0 w-2/3 h-1 bg-teal"></span>
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-slate text-lg mb-8 leading-relaxed">
              {contactMessage}
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-teal bg-opacity-20 flex items-center justify-center mr-4">
                  <Mail className="text-teal" size={20} />
                </div>
                <div>
                  <p className="text-slate text-sm">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-white hover:text-teal transition-colors duration-300"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-teal bg-opacity-20 flex items-center justify-center mr-4">
                  <Phone className="text-teal" size={20} />
                </div>
                <div>
                  <p className="text-slate text-sm">Phone</p>
                  <a
                    href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                    className="text-white hover:text-teal transition-colors duration-300"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-teal bg-opacity-20 flex items-center justify-center mr-4">
                  <MapPin className="text-teal" size={20} />
                </div>
                <div>
                  <p className="text-slate text-sm">Location</p>
                  <p className="text-white">{location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="w-10 h-10 rounded-full bg-slate bg-opacity-20 flex items-center justify-center hover:bg-teal hover:bg-opacity-20 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
