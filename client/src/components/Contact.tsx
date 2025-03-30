import { useState } from "react";
import { motion } from "framer-motion";
import { contactInfo } from "../data/resumeData";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1000);
  };

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
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-slate text-lg mb-8 leading-relaxed">
              I'm currently looking for new opportunities to apply my expertise in software engineering. 
              Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-teal bg-opacity-20 flex items-center justify-center mr-4">
                  <Mail className="text-teal" size={20} />
                </div>
                <div>
                  <p className="text-slate text-sm">Email</p>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="text-white hover:text-teal transition-colors duration-300"
                  >
                    {contactInfo.email}
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
                    href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`} 
                    className="text-white hover:text-teal transition-colors duration-300"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-teal bg-opacity-20 flex items-center justify-center mr-4">
                  <MapPin className="text-teal" size={20} />
                </div>
                <div>
                  <p className="text-slate text-sm">Location</p>
                  <p className="text-white">{contactInfo.location}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex space-x-4">
              {contactInfo.socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  className="w-10 h-10 rounded-full bg-slate bg-opacity-20 flex items-center justify-center hover:bg-teal hover:bg-opacity-20 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md text-darkGrey">
              <div className="mb-6">
                <label htmlFor="name" className="block text-darkGrey font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-darkGrey font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-darkGrey font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-darkGrey font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3 bg-navy text-white font-medium rounded hover:bg-opacity-90 transition-all duration-300 flex justify-center items-center disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Mail className="ml-2" size={16} />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
