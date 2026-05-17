import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "03091183431"; // Apna number yahan change karein
  const message = "Hi Shafi, I saw your portfolio and I'd like to discuss a project.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex items-center">
      {/* Animated Tooltip */}
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        animate={{ 
          opacity: [0, 1, 1, 0], // Pehle hide, phir show, phir stay, phir hide
          x: [10, 0, 0, 10] 
        }}
        transition={{
          duration: 4, // Pura cycle 4 second ka
          repeat: Infinity, // Hamesha chalta rahega
          repeatDelay: 2, // Har cycle ke beech 2 second ka gap
          times: [0, 0.1, 0.9, 1] // Timing controls: kab show hona hai aur kab hide
        }}
        className="absolute right-20 bg-[#1a1a1a] text-white text-xs py-2 px-4 rounded-lg border border-white/10 shadow-xl whitespace-nowrap pointer-events-none"
      >
        Chat with me!
        {/* Chota arrow (Optional) */}
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#1a1a1a] border-t border-r border-white/10 rotate-45"></div>
      </motion.span>

      {/* Main WhatsApp Icon */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center"
      >
        <FaWhatsapp className="text-3xl" />
        
        {/* Pinging effect for attention */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;