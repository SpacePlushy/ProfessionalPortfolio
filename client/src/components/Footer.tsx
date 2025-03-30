const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy py-8 text-center text-slate">
      <div className="container mx-auto px-6">
        <p className="mb-4">Designed & Built by Frank Palmisano</p>
        <p>&copy; {currentYear} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
