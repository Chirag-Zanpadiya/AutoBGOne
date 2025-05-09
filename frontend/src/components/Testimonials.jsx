import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Mehta",
    feedback:
      "Absolutely mind-blowing! The background removal is pixel-perfect — I use it daily for my e-commerce listings.",
    avatar: "https://avatar.iran.liara.run/public/42", // Optional: Add user avatar image URL here
  },
  {
    name: "Zara Kapoor",
    feedback:
      "Super fast and accurate. This tool saved me hours of editing time. Highly recommended for designers!",
    avatar: "https://avatar.iran.liara.run/public/1", // Optional: Add user avatar image URL here
  },
  {
    name: "Kabir Shah",
    feedback:
      "Sleek UI and unbeatable performance. One of the best online tools I've used this year!",
    avatar: "https://avatar.iran.liara.run/public/73", // Optional: Add user avatar image URL here
  },
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="bg-[#0F0F0F] py-16 px-4 sm:px-10 md:px-20 flex justify-center items-center">
      <div className="w-full max-w-screen-xl">
        <h2 className="text-white text-3xl sm:text-4xl font-bold text-center mb-12">
          What Our Users Are Saying
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center">
          {testimonials.map((testimonial, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              transitionSpeed={2000}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-[#1A1A1A] text-white p-6 rounded-3xl shadow-lg backdrop-blur-sm hover:scale-105 transition-all duration-300 laser-beam-border"
                style={{
                  height: "300px", // Fixed height for all cards
                  width: "300px", // Fixed width for all cards
                }}
              >
                {/* Avatar and Name */}
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="font-semibold text-[#b5b5b5]">{testimonial.name}</div>
                </div>

                {/* Testimonial Feedback */}
                <p className="text-base mb-4 leading-relaxed text-gray-300">
                  “{testimonial.feedback}”
                </p>

                {/* Optional Star Rating */}
                <div className="flex justify-center mt-4">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
