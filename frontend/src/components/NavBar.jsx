// // import React from "react";
// // import { assets } from "../assets/assets.js";
// // import { Link } from "react-router-dom";
// // import { motion } from "framer-motion";

// // const NavBar = () => {
// //   return (
// //     <div className="   relative z-50">
// //       {/* Navbar Box */}
// //       <div className="flex items-center justify-between mx-4 px-4 py-1 lg:mx-44 bg-[#121212] rounded-4xl relative z-10">
// //         <Link to="/">
// //           <img
// //             src={assets.logo3}
// //             alt="logo"
// //             height={75}
// //             width={75}
// //             className="rounded-full w-16 sm:w-18"
// //           />
// //         </Link>

// //         <button className="text-white bg-[#353535] hover:bg-zinc-800 flex items-center justify-center gap-2 px-4 py-2 sm:px-3 sm:py-2 text-sm rounded-full">
// //           Get Started
// //           <img src={assets.arrow_icon} className="w-3 sm:w-4" alt="arrow" />
// //         </button>
// //       </div>

// //       {/* ===== Neon Laser Beam Outside Box ===== */}
// //       <div className="absolute top-full left-0 w-full h-[3px] overflow-hidden z-0">
// //         <motion.div
// //           initial={{ x: "-100%" }}
// //           animate={{ x: "100%" }}
// //           transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
// //           className="w-[200%] h-full bg-gradient-to-r from-[#050505] via-[#0a0a0a] to-[#050505] blur-[1px] opacity-30"
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default NavBar;

// import React, { useContext, useEffect } from "react";
// import { assets } from "../assets/assets.js";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
// import { AppContext } from "../context/AppContext.jsx";

// const NavBar = () => {
//   const { openSignIn } = useClerk();
//   const { isSignedIn, user } = useUser();
//   const { credit, loadCreditsData } = useContext(AppContext);

//   console.log("user");

//   console.log(user);

//   // TODO: agar user signin hai tohi loadCreditsData ko call karuga
//   useEffect(() => {
//     if (isSignedIn) {
//       loadCreditsData();
//     }
//   }, [isSignedIn]);
//   return (
//     <div className="relative z-50 bg-[#0F0F0F] py-4">
//       {/* Navbar Container */}
//       <div className="flex items-center justify-between mx-4 px-4 py-2 lg:mx-44 bg-[#1A1A1A] rounded-4xl shadow-md backdrop-blur-md relative z-10">
//         <Link to="/">
//           <img
//             src={assets.logo3}
//             alt="logo"
//             height={75}
//             width={75}
//             className="rounded-full w-16 sm:w-18"
//           />
//         </Link>

//         {isSignedIn ? (
//           <div className="flex items-center gap-2 sm:gap-3">
//             <button className="flex items-center gap-2 bg-gray-800 px-4 sm:px-7 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-300 shadow-md border border-gray-600">
//               <img className="w-5" src={assets.credit_icon} alt="credit_icon" />
//               <p className="text-white text-xs sm:text-sm font-medium">
//                 Credits: {credit}
//               </p>
//             </button>
//             <p className="text-white text-sm sm:text-base font-medium tracking-wide px-3 py-1 bg-gray-700 rounded-full shadow-sm border border-gray-600">
//               Hi, {user?.username || user?.fullName || "User"}
//             </p>
//             <UserButton />
//           </div>
//         ) : (
//           <button
//             onClick={() => openSignIn({})}
//             className="text-white bg-[#353535] hover:bg-zinc-700 transition-all duration-300 flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2 text-sm rounded-full shadow-inner"
//           >
//             Get Started
//             <img src={assets.arrow_icon} className="w-3 sm:w-4" alt="arrow" />
//           </button>
//         )}
//       </div>

//       {/* Neon Beam Line */}
//       <div className="absolute top-full left-0 w-full h-[3px] overflow-hidden z-0">
//         <motion.div
//           initial={{ x: "-100%" }}
//           animate={{ x: "100%" }}
//           transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
//           className="w-[200%] h-full bg-gradient-to-r from-white via-gray-100 to-white blur-sm opacity-40"
//         />
//       </div>
//     </div>
//   );
// };

// export default NavBar;

import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../context/AppContext.jsx";
import { Menu } from "lucide-react";

const NavBar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  const { credit, loadCreditsData } = useContext(AppContext);
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData();
    }
  }, [isSignedIn]);

  return (
    <div className="relative z-50 bg-[#0F0F0F] py-4">
      {/* Navbar Container */}
      <div className="flex items-center justify-between mx-4 px-4 py-2 lg:mx-44 bg-[#1A1A1A] rounded-4xl shadow-md backdrop-blur-md relative z-10">
        {/* Logo */}
        <Link to="/">
          <img
            src={assets.logo3}
            alt="logo"
            height={75}
            width={75}
            className="rounded-full w-16 sm:w-18"
          />
        </Link>

        {/* Desktop View - full nav info */}
        <div className="hidden sm:flex items-center gap-3">
          {isSignedIn ? (
            <>
              <button onClick={()=>navigate("/buy")} className="flex cursor-pointer items-center gap-2 bg-gray-800 px-4 sm:px-6 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-300 shadow-md border border-gray-600">
                <img
                  className="w-5"
                  src={assets.credit_icon}
                  alt="credit_icon"
                />
                <p className="text-white text-sm font-medium">
                  Credits: {credit}
                </p>
              </button>
              <p className="text-white text-sm sm:text-base font-medium tracking-wide px-3 py-1 bg-gray-700 rounded-full shadow-sm border border-gray-600">
                Hi, {user?.username || user?.fullName || "User"}
              </p>
              <UserButton />
            </>
          ) : null}

          {/* Get Started always visible */}
          {/* TODO: agar use login nahi hai toh to ye btn dikhao */}
          {!isSignedIn && (
            <button
              onClick={() => openSignIn({})}
              className="text-white bg-[#353535] hover:bg-zinc-700 transition-all duration-300 flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2 text-sm rounded-full shadow-inner"
            >
              Get Started
              <img src={assets.arrow_icon} className="w-3 sm:w-4" alt="arrow" />
            </button>
          )}
        </div>

        {/* Mobile View - Hamburger + Get Started */}
        {/*  small screen size ke liye bhi get stared button chayiye is liye manually handle kiya*/}
        <div className="sm:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="text-white p-2 rounded-full hover:bg-gray-700"
          >
            <Menu size={24} />
          </button>

          {!isSignedIn && (
            <button
              onClick={() => openSignIn({})}
              className="text-white bg-[#353535] hover:bg-zinc-700 transition-all duration-300 flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-full shadow-inner"
            >
              Get Started
              <img src={assets.arrow_icon} className="w-3" alt="arrow" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && isSignedIn && (
        <div className="sm:hidden mt-2 mx-4 px-4 py-3 lg:mx-44 bg-[#1A1A1A] rounded-2xl flex flex-col gap-3 shadow-md border border-gray-700">
          <button onClick={()=>navigate("/buy")} className="flex cursor-pointer items-center gap-2 bg-gray-800 px-4 py-2 rounded-full shadow-md border border-gray-600">
            <img className="w-5" src={assets.credit_icon} alt="credit_icon" />
            <p className="text-white text-sm font-medium">Credits: {credit}</p>
          </button>
          <p className="text-white text-sm font-medium tracking-wide px-3 py-1 bg-gray-700 rounded-full shadow-sm border border-gray-600">
            Hi, {user?.username || user?.fullName || "User"}
          </p>
          <UserButton />
        </div>
      )}

      {/* Neon Beam Line */}
      <div className="absolute top-full left-0 w-full h-[5px] overflow-hidden z-0">
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
