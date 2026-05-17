import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Frontend Developer",
    "React Developer",
    "UI Builder",
    "Freelancer",
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen w-full bg-[#0a0a0a] flex items-center pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-[60%] flex flex-col items-start space-y-6"
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0 }}
            className="flex items-center gap-2 px-4 py-1 rounded-full border border-green-500 bg-green-500/10 text-green-400 text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for Freelance
          </motion.div>

          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-accent">Shafi Usmani</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-accent h-[40px]">
            {text}
            <span className="animate-pulse border-r-2 border-accent ml-1"></span>
          </h2>

          <p  className="text-[#9ca3af] text-lg max-w-lg leading-relaxed" >
            Crafting lightning‑fast frontends with flawless design and seamless user experiences.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="projects"
              target="_blank"
              rel="noreferrer"
              spy={true}
              smooth={true}
              className="bg-accent text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg shadow-indigo-500/20"
            >
              View My Work
            </Link>
            <a
              href="/My-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="border border-indigo-500 text-indigo-400 px-8 py-3 rounded-full font-semibold transition-all hover:bg-indigo-500 hover:text-white cursor-pointer"
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 pt-6 text-2xl text-[#9ca3af]">
            {[
              { Icon: FaGithub, link: "https://github.com/Shafi810" },
              {
                Icon: FaLinkedin,
                link: "https://www.linkedin.com/in/shafe-khan",
              },
              { Icon: FaTwitter, link: "https://x.com/shafek790" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, color: "#ffffff" }}
                className="transition-colors cursor-pointer"
              >
                <social.Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Visual Card */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="hidden md:flex relative w-[40%] justify-center items-center"
        >
          {/* Background Glow */}
          <div className="absolute w-72 h-72 bg-indigo-600/30 blur-[100px] rounded-full"></div>

          <div className="relative group p-[2px] rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-2xl">
            <div className="bg-[#0a0a0a] rounded-2xl p-2 overflow-hidden">
              <img
                src="/Shafi_frontend_developer.webp"
                alt="Shafi Usmani"
                loading="lazy"
                width="450"
                height="550"
                className="w-full h-auto rounded-2xl grayscale transition-all duration-500 group-hover:grayscale-0 scale-105 group-hover:scale-100"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
