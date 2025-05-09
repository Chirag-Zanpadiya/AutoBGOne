import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaUpload, FaMagic, FaDownload } from "react-icons/fa";

const steps = [
  {
    icon: <FaUpload size={20} />,
    title: "Upload Image",
    desc: "Select your image to begin background removal.",
  },
  {
    icon: <FaMagic size={20} />,
    title: "Remove Background",
    desc: "Our AI instantly removes the background with precision.",
  },
  {
    icon: <FaDownload size={20} />,
    title: "Download Image",
    desc: "Save the processed image with transparent background.",
  },
];

const Step = () => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(smoothY, [0, 1], [10, -10]);
  const rotateY = useTransform(smoothX, [0, 1], [-10, 10]);

  const [latestX, setLatestX] = useState(0);
  const [latestY, setLatestY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    mouseX.set(x);
    mouseY.set(y);
    setLatestX(e.clientX - rect.left);
    setLatestY(e.clientY - rect.top);
  };

  const dotVariant = {
    hidden: { scale: 0.3, rotate: 90, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 10 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.4, type: "spring", stiffness: 80 },
    }),
  };

  const lineVariant = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1, delay: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <section className="py-20 px-4 md:px-16 bg-[#0f0f0f] text-white">
      <h2 className="text-4xl font-bold text-center mb-20">
        Remove Background in 3 Magical Steps
      </h2>

      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        style={{
          rotateX,
          rotateY,
          background: `radial-gradient(700px circle at ${latestX}px ${latestY}px, rgba(255,140,0,0.6), transparent 80%)`, // Increased opacity
        }}
        className="relative rounded-3xl px-20 py-24 max-w-[90rem] mx-auto overflow-hidden min-h-[600px] shadow-2xl transition-all duration-300 hover:cursor-pointer" // Added hover for parent div
      >
        {/* Animated progress line */}
        <motion.div
          className="hidden md:block absolute top-[55px] left-[10%] w-4/5 h-1 bg-orange-300 origin-left z-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={lineVariant}
        />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-20">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="z-10 flex flex-col items-center text-center max-w-xs bg-[#1a1a1a] p-6 rounded-xl shadow-lg transition-all hover:scale-105"
            >
              <motion.div
                variants={dotVariant}
                initial="hidden"
                whileInView="visible"
                className="w-8 h-8 rounded-full border-[6px] border-orange-400 flex items-center justify-center bg-orange-500 text-white shadow-md mb-4" // Decreased circle size
              >
                {step.icon}
              </motion.div>

              <h3 className="text-xl font-semibold text-white">
                Step {i + 1}: {step.title}
              </h3>
              <p className="text-gray-300 mt-2 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Step;
