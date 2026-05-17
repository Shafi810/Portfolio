import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", target: "home" },
    { name: "Skills", target: "skills" },
    { name: "Projects", target: "projects" },
    { name: "About", target: "about" },
    { name: "Contact", target: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        {/* --- NEW "S" LOGO --- */}
        <Link
          to="home"
          smooth={true}
          spy={true}
          offset={-80}
          className="group relative flex items-center justify-center w-12 h-12 cursor-pointer transition-transform duration-300 active:scale-90"
        >
          {/* Outer Ring/Shape */}
          <div className="absolute inset-0 border-2 border-accent/20 rounded-xl rotate-45 group-hover:rotate-90 group-hover:border-accent transition-all duration-500"></div>

          {/* The Letter S */}
          <span className="relative text-2xl font-black text-accent tracking-tighter">
            S
          </span>

          {/* Glow Effect on Hover */}
          <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
        </Link>
        {/* ------------------- */}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.target}>
                <Link
                  to={link.target}
                  smooth={true}
                  spy={true}
                  offset={-80}
                  activeClass="text-accent after:scale-x-100"
                  className="relative text-foreground hover:text-accent transition-colors cursor-pointer pb-1 font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 after:transition-transform after:duration-300 after:origin-left"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <a target="_blank"
              rel="noreferrer"
             href="https://www.fiverr.com/s/VYQDNkz"  className="bg-accent text-white px-6 py-2 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20">
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground text-2xl focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu (Absolute positioned to prevent jumping) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="absolute top-full left-0 w-full md:hidden bg-[#0a0a0a] border-b border-white/10 overflow-hidden"
            >
              <ul className="flex flex-col items-center py-8 gap-6">
                {navLinks.map((link) => (
                  <li key={link.target}>
                    <Link
                      to={link.target}
                      smooth={true}
                      spy={true}
                      offset={-80}
                      onClick={() => setIsOpen(false)}
                      activeClass="text-accent"
                      className="text-xl text-foreground hover:text-accent transition-colors cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <button target="_blank"
              rel="noreferrer"
              spy={true}
              smooth={true}  className="mt-4 bg-accent text-white px-10 py-3 rounded-full font-medium shadow-lg shadow-green-500/20" >
                  Hire Me
                </button>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
