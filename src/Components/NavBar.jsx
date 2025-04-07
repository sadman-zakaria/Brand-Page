// import React, { useState } from 'react';

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="max-w-[1440px] flex items-center justify-between mx-auto p-4 bg-white ">
//       {/* Brand Logo */}
//       <a href="/">
//         <img src="brand_logo.png" alt="Brand Logo" className="h-10" />
//       </a>

//       {/* Desktop Navigation */}
//       <div className="hidden md:flex items-center gap-8">
//         {['MENU', 'LOCATION', 'ABOUT', 'CONTACT'].map((item) => (
//           <a
//             key={item}
//             href={`#${item.toLowerCase()}`}
//             className="font-semibold hover:text-blue-800 transition-all duration-300"
//           >
//             {item}
//           </a>
//         ))}
//       </div>

//       {/* Login Button (Desktop) */}
//       <button className="hidden md:block text-white font-semibold bg-red-500 hover:bg-red-400 transition-all duration-300 px-4 py-2 rounded">
//         Login
//       </button>

//       {/* Hamburger Menu Button (Mobile) */}
//       <button
//         className="md:hidden p-2 focus:outline-none"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
//           />
//         </svg>
//       </button>

//       {/* Mobile Navigation Menu */}
//       <div
//         className={`absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-4 transition-transform duration-300 ${
//           isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
//         }`}
//       >
//         {['MENU', 'LOCATION', 'ABOUT', 'CONTACT'].map((item) => (
//           <a
//             key={item}
//             href={`#${item.toLowerCase()}`}
//             className="py-2 font-semibold text-gray-700 hover:text-blue-800 transition-all duration-300"
//             onClick={() => setIsOpen(false)}
//           >
//             {item}
//           </a>
//         ))}
//         <button className="mt-2 text-white font-semibold bg-red-500 hover:bg-red-400 transition-all duration-300 px-4 py-2 rounded">
//           Login
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;


// Ai builld section of navbar
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        hasScrolled ? "backdrop-blur-lg bg-white/80 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] flex items-center justify-between mx-auto p-4">
        {/* Brand Logo */}
        <a href="/">
          <div className="bg-white p-1 rounded">
            <img 
              src="brand_logo.png" 
              alt="Brand Logo" 
              className="h-10" 
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["MENU", "LOCATION", "ABOUT", "CONTACT"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-semibold hover:text-blue-800 transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Desktop Login */}
        <button className="hidden md:block text-white font-semibold bg-red-500 hover:bg-red-400 transition-all duration-300 px-4 py-2 rounded">
          Login
        </button>

        {/* Hamburger/Close button - stays in navbar */}
        <button
          className="md:hidden p-2 focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown - Full Screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-gray-800 z-40 flex flex-col items-center justify-center space-y-8"
          >
            {["MENU", "LOCATION", "ABOUT", "CONTACT"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-semibold text-gray-300 hover:text-blue-800 transition-all duration-300"
                onClick={() => setIsOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button 
              className="mt-8 text-white font-semibold bg-red-500 hover:bg-red-400 transition-all duration-300 px-6 py-3 rounded text-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setIsOpen(false)}
            >
              Login
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;