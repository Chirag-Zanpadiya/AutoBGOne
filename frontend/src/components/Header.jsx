// import React from "react";
// import { assets } from "../assets/assets";

// const Header = () => {
//   return (
//     <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20 mb-4">
//       {/* left side  */}
//       <div>
//         <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight ">
//           Remove the <br className="max-md:hidden" />{" "}
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
//             background{" "}
//           </span>{" "}
//           from <br className="max-md:hidden" /> image for free
//         </h1>
//         <p className="text-sm sm:text-sm text-gray-400 mt-4 max-w-2xl leading-relaxed">
//           Instantly remove backgrounds with our AI-powered tool for flawless
//           cutouts in seconds.
//           <br className="max-sm:hidden" /> Perfect for e-commerce,
//           presentations, or social media—fast, free, and effortless!
//         </p>

//         <div>
//           <input type="file" name="" id="upload1" hidden />
//           <label
//             className="mt-4 inline-flex items-center gap-3 px-4 py-3 rounded-full cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 transition duration-300 ease-in-out"
//             htmlFor="upload1"
//           >
//             <img
//               src={assets.upload_btn_icon}
//               alt="upload_icon"
//               className="w-4 h-4"
//             />
//             <p className="text-white text-lg font-medium">Upload Your Image</p>
//           </label>
//         </div>
//       </div>

//       {/* right side  */}

//       <div className="w-full max-w-md">
//         <img
//           src={assets.herosection}
//           className="rounded-4xl h-[300px]" // or h-[800px], h-[1000px], etc.
//           width={1024}
//           height={1024}
//           alt="herosectionimage"
//         />
//       </div>
//     </div>
//   );
// };

// export default Header;

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaUpload } from "react-icons/fa";
import { assets } from "../assets/assets";

const Header = () => {
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

  return (
    <section id="home" className="py-20 px-4 md:px-16 bg-[#0f0f0f] text-white">
    

      {/* Hover-enabled 3D Effect Card */}
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        style={{
          rotateX,
          rotateY,
          background: `radial-gradient(700px circle at ${latestX}px ${latestY}px, rgba(255,140,0,0.6), transparent 80%)`, // Increased opacity
        }}
        className="relative rounded-3xl px-20 py-24 max-w-screen-xl mx-auto overflow-hidden min-h-[600px] shadow-2xl transition-all duration-300 hover:cursor-pointer hover:scale-105"
      >
        {/* Card Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-20">
          {/* Left Side of the Card */}
          <div className="text-center sm:text-left sm:w-1/2">
            <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-200 leading-tight">
              Remove the <br className="max-md:hidden" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                background{" "}
              </span>{" "}
              from <br className="max-md:hidden" /> image for free
            </h1>
            <p className="text-sm sm:text-sm text-gray-300 mt-4 max-w-2xl leading-relaxed">
              Instantly remove backgrounds with our AI-powered tool for flawless
              cutouts in seconds.
              <br className="max-sm:hidden" /> Perfect for e-commerce,
              presentations, or social media—fast, free, and effortless!
            </p>

            <div>
              <input type="file" name="" id="upload1" hidden />
              <label
                className="mt-4 inline-flex items-center gap-3 px-4 py-3 rounded-full cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 transition duration-300 ease-in-out"
                htmlFor="upload1"
              >
                <FaUpload size={20} className="text-white" />
                <p className="text-white text-lg font-medium">Upload Your Image</p>
              </label>
            </div>
          </div>

          {/* Right Side with Image */}
          <div className="sm:w-1/2 mt-8 sm:mt-0 flex justify-center sm:justify-start">
            <motion.img
              src={assets.herosection}
              className="rounded-4xl h-[300px] hover:scale-105 transition-all duration-300"
              width={1024}
              height={1024}
              alt="herosectionimage"
              style={{
                rotateX,
                rotateY,
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Header;
