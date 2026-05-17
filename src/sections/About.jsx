import { motion } from "framer-motion";
import { Link } from "react-scroll";

const About = () => {
  const stats = [
    { number: "20+", label: "Projects" },
    { number: "15+", label: "Clients" },
    { number: "2+", label: "Years" },
  ];

  return (
    <section id="about" className="py-24 bg-[#0f0f0f] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Image Side */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[45%] flex justify-center"
          >
            <div className="relative inline-block group">
              {/* Decorative Border Box */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent rounded-2xl -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-500"></div>
              
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/Shafi_frontend_developer.webp"
                  alt="Professional Pront-End Developer"
                  loading="lazy" 
                  width="450" 
                  height="550"
                  className="w-full h-auto max-w-[400px] grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -left-8 bg-[#1a1a1a] border border-gray-800 p-4 md:p-5 rounded-2xl shadow-2xl">
                <span className="block text-3xl font-bold text-accent leading-none">2+</span>
                <span className="text-gray-400 text-sm mt-1 block">Years Experience</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text Side */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-[55%]"
          >
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
              About Me
            </span>
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
              I Build Interfaces That Convert Visitors Into Clients
            </h2>
            <div className="h-[3px] w-[60px] bg-gradient-to-r from-accent to-secondary rounded-full mb-8"></div>

            <p className="text-[#9ca3af] text-lg mb-6 leading-relaxed">
              I am a specialized frontend developer dedicated to crafting high-performance 
              web applications that prioritize pixel-perfect design and user-centric logic. 
              My expertise lies in building scalable architectures using React and Tailwind CSS v4.
            </p>
            <p className="text-[#9ca3af] text-lg mb-10 leading-relaxed">
              My approach focuses on clean code and interactive animations, ensuring that every 
              component is optimized for speed and accessibility while maintaining a modern, 
              sophisticated aesthetic[cite: 1, 2].
            </p>

            {/* Stats Row */}
            <div className="flex items-center gap-6 md:gap-10 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-6 md:gap-10">
                  <div className="flex flex-col">
                    <span className="text-white text-3xl font-bold">{stat.number}</span>
                    <span className="text-gray-500 text-sm uppercase tracking-wide">{stat.label}</span>
                  </div>
                  {index !== stats.length - 1 && (
                    <div className="h-10 w-[1px] bg-gray-800"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Buttons Row */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/My-resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="bg-accent text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-indigo-500/20"
              >
                Download CV
              </a>
              <Link
                to="contact"
                smooth={true}
                className="border border-accent text-accent px-8 py-3 rounded-full font-semibold transition-all hover:bg-accent hover:text-white cursor-pointer"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;