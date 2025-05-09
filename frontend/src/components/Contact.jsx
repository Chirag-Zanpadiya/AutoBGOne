import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="contact" className="pt-24">
      <div
        className="bg-[#1A1A1A] 
                   rounded-2xl 
                   max-w-2xl 
                   h-[700px] 
                   mx-auto 
                   p-10 
                   border-2 border-[#2a2a2a] 
                   shadow-xl 
                   transition-all duration-300 
                   hover:shadow-[0_20px_30px_rgba(255,140,0,0.5)] 
                   overflow-hidden"
      >
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          Get in Touch
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block text-white mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-[#2A2A2A] text-white 
                         focus:outline-none focus:ring-2 focus:ring-orange-400 
                         transition duration-300"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-[#2A2A2A] text-white 
                         focus:outline-none focus:ring-2 focus:ring-orange-400 
                         transition duration-300"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Message</label>
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full p-4 rounded-lg bg-[#2A2A2A] text-white 
                         focus:outline-none focus:ring-2 focus:ring-orange-400 
                         transition duration-300"
            />
          </div>
          <button
            type="submit"
            className="mt-8 w-full py-4 bg-[#133B54] text-white font-semibold 
                       rounded-lg hover:bg-[#4d6f87] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
