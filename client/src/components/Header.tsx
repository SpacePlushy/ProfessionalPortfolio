import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#hero", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#experience", text: "Experience" },
    { href: "#skills", text: "Skills" },
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact" }
  ];

  return (
    <header className={`fixed top-0 w-full bg-white dark:bg-background z-50 transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-navy dark:text-foreground font-poppins text-2xl font-bold mr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-md"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span className="logo-text">
            <motion.span 
              className="text-purple"
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >F</motion.span>rank
          </span>
          <span className="block">Palmisano</span>
        </motion.a>
        
        <motion.button 
          className="md:hidden text-navy dark:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-md p-2"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
        
        <nav className="hidden md:flex space-x-12 items-center">
          {navLinks.map((link) => (
            <motion.a 
              key={link.href}
              href={link.href}
              className={`nav-link font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1 ${activeSection === link.href.substring(1) ? 'text-purple' : 'text-navy dark:text-foreground hover:text-purple'}`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {link.text}
            </motion.a>
          ))}
          <div className="ml-6">
            <DarkModeToggle />
          </div>
        </nav>
      </div>
      
      {/* Mobile navigation menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white dark:bg-background border-t dark:border-border overflow-hidden"
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <motion.a 
              key={link.href}
              href={link.href}
              className={`font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1 ${activeSection === link.href.substring(1) ? 'text-purple' : 'text-navy dark:text-foreground hover:text-purple'}`}
              onClick={closeMobileMenu}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {link.text}
            </motion.a>
          ))}
          <div className="mt-4">
            <DarkModeToggle />
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
