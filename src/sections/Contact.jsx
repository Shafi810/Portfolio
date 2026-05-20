import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaPaperPlane, 
  FaCheckCircle, 
  FaTimesCircle, 
  FaCircle, 
  FaSpinner 
} from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ success: false, error: false });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ success: false, error: false });

    // Fetching keys safely from your Vite .env config
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const adminTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    // Add your client auto-responder template ID from EmailJS here
    const clientTemplateId = "your_client_autoresponder_template_id"; 

    // Configuration check
    if (!serviceId || !adminTemplateId || !publicKey) {
      console.error("EmailJS environment variables are missing!");
      alert("Configuration Error: Environment variables missing.");
      setLoading(false);
      return;
    }

    try {
      // 1. Automate Admin Notification Email to You
      await emailjs.send(
        serviceId,
        adminTemplateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(), // Injects exact timestamp for your admin view
        },
        publicKey
      );

      // 2. Automate Confirmation Email to Your Client
      if (clientTemplateId && clientTemplateId !== "your_client_autoresponder_template_id") {
        await emailjs.send(
          serviceId,
          clientTemplateId,
          {
            name: formData.name,
            email: formData.email,
          },
          publicKey
        );
      }

      // Clear layout state and show visual success feedback
      setLoading(false);
      setStatus({ success: true, error: false });
      setFormData({ name: "", email: "", subject: "", message: "" });

      // 3. Automate Client Booking Redirect
      // Delaying 1.5 seconds lets the user experience your smooth success animation before leaving
      setTimeout(() => {
        window.location.href = "https://tidycal.com/shafi-react-dev"; // Replace with your link
      }, 1500);

    } catch (err) {
      console.error("EmailJS Automation Error:", err);
      setLoading(false);
      setStatus({ success: false, error: true });
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-white text-4xl font-bold mb-2">Get In Touch</h2>
          <div className="h-[3px] w-[60px] bg-gradient-to-r from-accent to-secondary rounded-full mb-4"></div>
          <p className="text-[#9ca3af] text-lg">Have a project? Let's talk.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-[40%] flex flex-col gap-6"
          >
            {/* Info Cards */}
            {[
              { icon: <FaEnvelope />, label: "Email", value: "shafek790@gmail.com" },
              { icon: <FaMapMarkerAlt />, label: "Location", value: "Karachi, Pakistan" },
              { icon: <FaCircle className="animate-pulse text-green-500 text-[10px]" />, label: "Status", value: "Available for work", isStatus: true }
            ].map((info, idx) => (
              <div key={idx} className="bg-[#111] border border-gray-800 rounded-xl p-5 flex items-center gap-4">
                <div className={`p-3 rounded-lg ${info.isStatus ? 'bg-green-500/10' : 'bg-accent/10 text-accent'}`}>
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider font-bold">{info.label}</p>
                  <p className={`font-medium ${info.isStatus ? 'text-green-400' : 'text-white'}`}>{info.value}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              {[
                { icon: <FaGithub />, link: "https://github.com" },
                { icon: <FaLinkedin />, link: "https://linkedin.com" },
                { icon: <FaTwitter />, link: "https://x.com" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#1a1a1a] p-4 rounded-lg text-gray-400 hover:bg-accent hover:text-white transition-all duration-300 shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="w-full lg:w-[60%]"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#111] border border-gray-800 rounded-2xl p-8 flex flex-col gap-5"
            >
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-3 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-3 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-3 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-3 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-accent to-secondary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-indigo-500/20 disabled:opacity-50"
              >
                {loading ? (
                  <><FaSpinner className="animate-spin" /> Sending...</>
                ) : (
                  <><FaPaperPlane /> Send Message</>
                )}
              </button>

              {/* Status Messages */}
              {status.success && (
                <div className="flex items-center gap-2 text-green-400 font-medium justify-center mt-2">
                  <FaCheckCircle /> Message sent successfully!
                </div>
              )}

              {status.error && (
                <div className="flex items-center gap-2 text-red-400 font-medium justify-center mt-2">
                  <FaTimesCircle /> Something went wrong. Please try again.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
