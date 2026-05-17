import { useState } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import PrivacyModal from "./PrivacyModal";// Modal import karein

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false); // Modal state

  const navLinks = [
    { name: "Home", target: "home" },
    { name: "Skills", target: "skills" },
    { name: "Projects", target: "projects" },
    { name: "About", target: "about" },
    { name: "Contact", target: "contact" },
  ];

  const services = [
    "Frontend Development",
    "React Apps",
    "Responsive Design",
    "UI Implementation",
    "Freelance Projects",
  ];

  return (
    <footer className="bg-[#080808] border-t border-[#1f1f1f] py-10 w-full">
      <div className="container mx-auto px-6">
        
        {/* Row 1: Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-white font-bold text-xl">Shafi Usmani</h3>
              <p className="text-gray-500 text-sm mt-1">
                Crafting high-performance digital experiences.
              </p>
            </div>
            <div className="flex gap-5 text-gray-500">
              <a href="https://github.com/Shafi810" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors text-[1.2rem]">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shafe-khan" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors text-[1.2rem]">
                <FaLinkedin />
              </a>
              <a href="https://x.com/shafek790" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors text-[1.2rem]">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.target}>
                  <Link
                    to={link.target}
                    smooth={true}
                    className="text-gray-500 hover:text-white text-sm transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold">Services</h4>
            <ul className="flex flex-col gap-2">
              {services.map((service, idx) => (
                <li key={idx} className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Row 2: Divider */}
        <div className="h-[1px] w-full bg-[#1f1f1f] mb-8"></div>

        {/* Row 3: Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <p className="text-gray-600 text-[12px]">
              Built with React + Tailwind CSS v4
            </p>
            <p className="text-gray-500 text-sm">
              © {currentYear} Shafi Usmani. All rights reserved.
            </p>
          </div>
          
          {/* Legal Links */}
          <div className="flex gap-6">
            <button 
              onClick={() => setIsPrivacyOpen(true)}
              className="text-gray-600 hover:text-accent text-sm transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <p className="text-gray-600 text-sm">
              Designed & Developed by Shafi Usmani
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Modal Component */}
      <PrivacyModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      />
    </footer>
  );
};

export default Footer;