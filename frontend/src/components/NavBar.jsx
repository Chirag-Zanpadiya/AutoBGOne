// import React from "react";
// import { assets } from "../assets/assets.js";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const NavBar = () => {
//   return (
//     <div className="   relative z-50">
//       {/* Navbar Box */}
//       <div className="flex items-center justify-between mx-4 px-4 py-1 lg:mx-44 bg-[#121212] rounded-4xl relative z-10">
//         <Link to="/">
//           <img
//             src={assets.logo3}
//             alt="logo"
//             height={75}
//             width={75}
//             className="rounded-full w-16 sm:w-18"
//           />
//         </Link>

//         <button className="text-white bg-[#353535] hover:bg-zinc-800 flex items-center justify-center gap-2 px-4 py-2 sm:px-3 sm:py-2 text-sm rounded-full">
//           Get Started
//           <img src={assets.arrow_icon} className="w-3 sm:w-4" alt="arrow" />
//         </button>
//       </div>

//       {/* ===== Neon Laser Beam Outside Box ===== */}
//       <div className="absolute top-full left-0 w-full h-[3px] overflow-hidden z-0">
//         <motion.div
//           initial={{ x: "-100%" }}
//           animate={{ x: "100%" }}
//           transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
//           className="w-[200%] h-full bg-gradient-to-r from-[#050505] via-[#0a0a0a] to-[#050505] blur-[1px] opacity-30"
//         />
//       </div>
//     </div>
//   );
// };

// export default NavBar;

import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../context/AppContext.jsx";

const NavBar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  const { credit, loadCreditsData } = useContext(AppContext);

  // TODO: agar user signin hai tohi loadCreditsData ko call karuga
  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData();
    }
  }, [isSignedIn]);
  return (
    <div className="relative z-50 bg-[#0F0F0F] py-4">
      {/* Navbar Container */}
      <div className="flex items-center justify-between mx-4 px-4 py-2 lg:mx-44 bg-[#1A1A1A] rounded-4xl shadow-md backdrop-blur-md relative z-10">
        <Link to="/">
          <img
            src={assets.logo3}
            alt="logo"
            height={75}
            width={75}
            className="rounded-full w-16 sm:w-18"
          />
        </Link>

        {isSignedIn ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="flex items-center gap-2 bg-blue-100 px-4 sm:px-7 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-700 ">
              <img className="w-5" src={assets.credit_icon} alt="credit_icon" />
              <p className="text-blue-500 text-xs sm:text-sm font-medium ">Credits : {credit}</p>
            </button>
            <UserButton />
          </div>
        ) : (
          <button
            onClick={() => openSignIn({})}
            className="text-white bg-[#353535] hover:bg-zinc-700 transition-all duration-300 flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2 text-sm rounded-full shadow-inner"
          >
            Get Started
            <img src={assets.arrow_icon} className="w-3 sm:w-4" alt="arrow" />
          </button>
        )}
      </div>

      {/* Neon Beam Line */}
      <div className="absolute top-full left-0 w-full h-[3px] overflow-hidden z-0">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-[200%] h-full bg-gradient-to-r from-white via-gray-100 to-white blur-sm opacity-40"
        />
      </div>
    </div>
  );
};

export default NavBar;
