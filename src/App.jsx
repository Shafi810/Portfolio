import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";




const App = () => {
  const [loading, setLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();

    // Loader timer
    const timer = setTimeout(() => setLoading(false), 1500);

    const handleScroll = () => setShowScroll(window.scrollY > 300);

    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", checkMobile);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  return (
    <div className="bg-[#0a0a0a] text-white selection:bg-accent selection:text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          /* --- PREMIUM ARCHITECTURAL LOADER --- */
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center"
          >
            <div className="relative flex items-center justify-center">
              {/* Outer Rotating Square */}
              <motion.div
                animate={{ 
                  rotate: [45, 225, 405],
                  borderRadius: ["20%", "50%", "20%"] 
                }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute w-24 h-24 border-2 border-accent/30 shadow-[0_0_20px_rgba(34,197,94,0.2)]"
              />

              {/* Inner Reverse Rotating Square */}
              <motion.div
                animate={{ rotate: [-45, -225, -405] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute w-16 h-16 border border-accent/50"
              />

              {/* Central Letter S */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="relative z-10"
              >
                <span className="text-5xl font-black text-accent drop-shadow-[0_0_15px_rgba(34,197,94,0.6)] select-none">
                  S
                </span>
              </motion.div>

              {/* Background Glow */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute w-40 h-40 bg-accent rounded-full blur-[60px] -z-10"
              />
            </div>
          </motion.div>
        ) : (
          /* --- MAIN CONTENT --- */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Cursor Glow - Desktop Only */}
            {!isMobile && (
              <div
                className="fixed pointer-events-none z-0 w-[300px] h-[300px] bg-accent/10 blur-[100px] rounded-full transition-all duration-100 ease-out"
                style={{
                  left: mousePos.x - 150,
                  top: mousePos.y - 150,
                }}
              />
            )}

            <Navbar />
            
            <main>
              <Hero />
              <Skills />
              <Projects />
              <About />
              <Contact />
            </main>

            <Footer />
            


            {/* Floating Action Buttons */}
            <WhatsAppButton />

            <AnimatePresence>
              {showScroll && (
                <motion.button
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="fixed bottom-24 left-8 md:left-auto md:right-24 z-50 p-4 bg-accent text-white rounded-full shadow-lg shadow-accent/20 hover:scale-110 active:scale-95 transition-transform"
                >
                  <FaArrowUp />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;