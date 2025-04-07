import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const footerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const linkVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.2 } },
  };

  const socialIconVariants = {
    initial: { opacity: 0.8, scale: 1 },
    hover: { opacity: 1, scale: 1.2, transition: { duration: 0.2 } },
  };

  return (
    <motion.footer
      className="bg-gray-800 text-white py-8"
      variants={footerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <motion.h3 className="text-xl font-semibold mb-2" variants={linkVariants} whileHover="hover">
            ShoeStore
          </motion.h3>
          <p className="text-sm text-gray-400">Your ultimate destination for stylish footwear.</p>
        </div>

        <div className="flex space-x-4 mb-4 md:mb-0">
          <motion.a
            href="/about"
            className="text-gray-300 hover:text-white text-sm"
            variants={linkVariants}
            whileHover="hover"
          >
            About Us
          </motion.a>
          <motion.a
            href="/contact"
            className="text-gray-300 hover:text-white text-sm"
            variants={linkVariants}
            whileHover="hover"
          >
            Contact Us
          </motion.a>
          <motion.a
            href="/privacy"
            className="text-gray-300 hover:text-white text-sm"
            variants={linkVariants}
            whileHover="hover"
          >
            Privacy Policy
          </motion.a>
          <motion.a
            href="/terms"
            className="text-gray-300 hover:text-white text-sm"
            variants={linkVariants}
            whileHover="hover"
          >
            Terms of Service
          </motion.a>
        </div>

        <div className="flex space-x-4">
          <motion.a
            href="https://facebook.com" // Replace with your Facebook link
            className="text-gray-300 hover:text-white"
            variants={socialIconVariants}
            whileHover="hover"
          >
            <FaFacebook size={20} />
          </motion.a>
          <motion.a
            href="https://twitter.com" // Replace with your Twitter link
            className="text-gray-300 hover:text-white"
            variants={socialIconVariants}
            whileHover="hover"
          >
            <FaTwitter size={20} />
          </motion.a>
          <motion.a
            href="https://instagram.com" // Replace with your Instagram link
            className="text-gray-300 hover:text-white"
            variants={socialIconVariants}
            whileHover="hover"
          >
            <FaInstagram size={20} />
          </motion.a>
          <motion.a
            href="mailto:info@shoestore.com" // Replace with your email
            className="text-gray-300 hover:text-white"
            variants={socialIconVariants}
            whileHover="hover"
          >
            <FaEnvelope size={20} />
          </motion.a>
        </div>
      </div>
      <div className="mt-6 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} ShoeStore. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;