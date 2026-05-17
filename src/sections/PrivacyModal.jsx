import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const PrivacyModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-[#111] border border-gray-800 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl p-8 shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes size={20} />
            </button>

            <h2 className="text-2xl font-bold text-white mb-4">Privacy Policy</h2>
            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <p>Last Updated: May 2026</p>
              <p>
                <strong>Analytics:</strong> We use Google Analytics 4 (GA4) to collect anonymized data, but it only activates if you click "Accept".
              </p>
              <p>
                <strong>Contact:</strong> Data sent via EmailJS goes directly to our inbox and is not stored anywhere else.
              </p>
              <p>
                <strong>WhatsApp:</strong> The WhatsApp link redirects you to Meta's privacy terms.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyModal;
