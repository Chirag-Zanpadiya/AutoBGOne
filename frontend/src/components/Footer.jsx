// import React from "react";
// import { Link } from "react-router-dom";
// import { assets } from "../assets/assets";
// import { Link as ScrollLink } from "react-scroll";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0F0F0F] text-gray-400 py-10 px-6 sm:px-12 mt-16">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Company Info */}
//         <div>
//           <h3 className="text-white text-xl font-bold mb-2">
//             <Link to="/">
//               <img
//                 src={assets.logo3}
//                 alt="logo"
//                 height={75}
//                 width={75}
//                 className="rounded-full w-16 sm:w-18"
//               />
//             </Link>
//           </h3>
//           <p className="text-sm leading-relaxed">
//             A sleek and smart image background remover built for creators and
//             businesses.
//           </p>
//         </div>

//         {/* Links */}

//         <div>
//           <h4 className="text-white font-semibold mb-3">Quick Links</h4>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <ScrollLink
//                 to="home"
//                 smooth={true}
//                 duration={500}
//                 offset={-80}
//                 className="cursor-pointer hover:text-white transition"
//               >
//                 Home
//               </ScrollLink>
//             </li>
//             <li>
//               <ScrollLink
//                 to="upload"
//                 smooth={true}
//                 duration={500}
//                 offset={-80}
//                 className="cursor-pointer hover:text-white transition"
//               >
//                 Upload
//               </ScrollLink>
//             </li>
//             <li>
//               <ScrollLink
//                 to="testimonials"
//                 smooth={true}
//                 duration={500}
//                 offset={-80}
//                 className="cursor-pointer hover:text-white transition"
//               >
//                 Testimonials
//               </ScrollLink>
//             </li>
//             <Link
//               to="/contact"
//               smooth={true}
//               duration={500}
//               offset={-120} // Try -120 or adjust based on your header height
//               className="cursor-pointer hover:text-white transition"
//             >
//               Contact
//             </Link>
//           </ul>
//         </div>

//         {/* Social / Contact */}
//         <div>
//           <h4 className="text-white font-semibold mb-3">Connect</h4>
//           <ul className="space-y-2 text-sm">
//             <li>
//               Email:{" "}
//               <a
//                 href="mailto:support@yourdomain.com"
//                 className="hover:text-white transition"
//               >
//                 support@yourdomain.com
//               </a>
//             </li>
//             <li>
//               Twitter:{" "}
//               <a href="#" className="hover:text-white transition">
//                 @yourhandle
//               </a>
//             </li>
//             <li>
//               LinkedIn:{" "}
//               <a href="#" className="hover:text-white transition">
//                 Your Company
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="text-center text-sm mt-10 border-t border-[#1F1F1F] pt-6">
//         © {new Date().getFullYear()} Your Company. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] text-gray-400 py-10 px-6 sm:px-12 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-white text-xl font-bold mb-2">
            <Link to="/">
              <img
                src={assets.logo3}
                alt="logo"
                height={75}
                width={75}
                className="rounded-full w-16 sm:w-18"
              />
            </Link>
          </h3>
          <p className="text-sm leading-relaxed">
            A sleek and smart image background remover built for creators and
            businesses.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-white transition"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="upload"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-white transition"
              >
                Upload
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="testimonials"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-white transition"
              >
                Testimonials
              </ScrollLink>
            </li>
            <li>
              <Link
                to="/contact"
                className="cursor-pointer hover:text-white transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a
                href="mailto:support@yourdomain.com"
                className="hover:text-white transition"
              >
                support@yourdomain.com
              </a>
            </li>
            <li>
              Twitter:{" "}
              <a href="#" className="hover:text-white transition">
                @yourhandle
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a href="#" className="hover:text-white transition">
                Your Company
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm mt-10 border-t border-[#1F1F1F] pt-6">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
