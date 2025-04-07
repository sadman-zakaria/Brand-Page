// import React from 'react'

// const Hero = () => {
    
//   return (
//     <>
//         <div className='max-w-[1440px] mx-auto sm:flex items-center justify-evenly h-screen'>
//             <div className=''>
//                <span className=' text-3xl md:text-9xl font-bold'>YOUR FEET </span> <br />
//                <span className='text-3xl md:text-9xl font-bold'>
//                DESERVE
//                </span> <br />
//                <span className='text-3xl md:text-9xl font-bold'>
//                THE BEST
//                </span>

//                <p className='mt-8 text-gray-500 font-semibold text-xl'>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO <br /> HELP YOU WITH OUR SHOES YOUR FEET DESERVE <br /> THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES</p>

//                <div className=' flex justify-between w-[500px] mt-8'>
//                  <button className='text-white font-bold bg-red-500 hover:bg-red-400 hover:duration-500 cursor-pointer text-xl px-4 py-2'>Shop Now</button>
//                  <button className='text-gray-600 boreder border-2 cursor-pointer  font-bold bg-white  hover:bg-red-100 hover:duration-500 text-xl  px-4 py-2'>Category</button>
//                </div>

//                <div className='mt-8'>
//                 <p className='font-semibold text-gray-500'> Also Also Available On</p>
//                 <a href="" className='flex items-center justify-items-start gap-4 mt-3'>
//                     <img src="flipkart.png" alt="" />
//                     <img src="amazon.png" alt="" />
//                 </a>

//                </div>
//             </div>

//             <img src="hero-image.png" alt="" />
//         </div>
//     </>
//   )
// }

// export default Hero


import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen px-6 py-10 gap-10">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 text-center lg:text-left"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#fb2c36]">
          YOUR FEET <br /> DESERVE <br /> THE BEST
        </h1>

        <p className="mt-6 text-gray-400 font-medium text-lg sm:text-xl">
          YOUR FEET DESERVE THE BEST, AND WE'RE HERE TO <br className="hidden sm:block" />
          HELP YOU WITH OUR SHOES.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-red-500 text-white font-bold text-lg px-6 py-3 rounded-lg hover:bg-red-400 transition"
          >
            Shop Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="border border-gray-400 text-gray-200 font-bold text-lg px-6 py-3 rounded-lg bg-transparent hover:bg-white hover:text-black transition"
          >
            Category
          </motion.button>
        </div>

        {/* Available On */}
        <div className="mt-8">
          <p className="font-semibold text-gray-400">Also Available On</p>
          <div className="flex justify-center lg:justify-start items-center gap-4 mt-3">
            <div className="bg-white p-2 rounded-md">
              <img src="flipkart.png" alt="Flipkart" className="h-8 w-auto" />
            </div>
            <div className="bg-white p-2 rounded-md">
              <img src="amazon.png" alt="Amazon" className="h-8 w-auto" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hero Image */}
      <motion.img
        src="hero-image.png"
        alt="Hero"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-[500px] object-contain"
      />
    </div>
  );
};

export default Hero;

