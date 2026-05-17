import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import skillsData from "../data/skills.json";

// Sirf zaroori icons ko individual import kiya gaya hai performance ke liye
import { 
  FaHtml5, 
  FaJs, 
  FaReact, 
  FaBootstrap, 
  FaGitAlt, 
  FaGithub, 
  FaFigma 
} from "react-icons/fa";
import { SiVite, SiTailwindcss } from "react-icons/si";
import { MdDevices } from "react-icons/md";
import { TbBrandVscode, TbApi } from "react-icons/tb";

// Aapke JSON file ke standard keys ke mutabiq mapping object
const iconMap = {
  FaHtml5: <FaHtml5 size="2rem" className="text-accent" />,
  FaJs: <FaJs size="2rem" className="text-accent" />,
  FaReact: <FaReact size="2rem" className="text-accent" />,
  SiVite: <SiVite size="2rem" className="text-accent" />,
  SiTailwindcss: <SiTailwindcss size="2rem" className="text-accent" />,
  FaBootstrap: <FaBootstrap size="2rem" className="text-accent" />,
  FaGitAlt: <FaGitAlt size="2rem" className="text-accent" />,
  FaGithub: <FaGithub size="2rem" className="text-accent" />,
  TbBrandVscode: <TbBrandVscode size="2rem" className="text-accent" />,
  MdDevices: <MdDevices size="2rem" className="text-accent" />,
  TbApi: <TbApi size="2rem" className="text-accent" />,
  FaFigma: <FaFigma size="2rem" className="text-accent" />,
};

const Skills = () => {
  const [filter, setFilter] = useState("All");

  // Direct object lookup lookup time ko fast karta hai (O(1) complexity)
  const renderIcon = (iconName) => {
    return iconMap[iconName] || null;
  };

  const filteredSkills = filter === "All" ? skillsData : skillsData.filter(skill => skill.category === filter);
  const categories = ["All", "Core", "Framework", "Tools"];

  return (
    <section id="skills" className="py-20 bg-[#0f0f0f] min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-white text-4xl font-bold mb-2">My Skills</h2>
          <div className="h-[3px] w-[60px] bg-gradient-to-r from-accent to-secondary rounded-full mb-4"></div>
          <p className="text-[#9ca3af] text-lg">Technologies I work with every day</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setFilter(cat)} 
              className={`px-6 py-2 rounded-full transition-all duration-300 font-medium border ${
                filter === cat ? "bg-accent border-accent text-white shadow-lg shadow-indigo-500/20" : "bg-transparent border-gray-700 text-gray-400 hover:border-gray-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div 
                key={skill.id} 
                layout
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, scale: 0.9 }} 
                transition={{ duration: 0.4, delay: index * 0.05, layout: { duration: 0.3 } }}
                viewport={{ once: true }}
                className="group bg-[#1a1a1a] border border-[#2a2a2a] p-6 rounded-xl flex flex-col items-center gap-4 transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:bg-[#222]"
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {renderIcon(skill.icon)}
                </div>
                <span className="text-white font-medium text-center">{skill.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
