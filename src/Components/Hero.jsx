import React from 'react'

const Hero = () => {
    
  return (
    <>
        <div className='max-w-[1440px] mx-auto sm:flex items-center justify-evenly h-screen'>
            <div className=''>
               <span className=' text-3xl md:text-9xl font-bold'>YOUR FEET </span> <br />
               <span className='text-3xl md:text-9xl font-bold'>
               DESERVE
               </span> <br />
               <span className='text-3xl md:text-9xl font-bold'>
               THE BEST
               </span>

               <p className='mt-8 text-gray-500 font-semibold text-xl'>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO <br /> HELP YOU WITH OUR SHOES YOUR FEET DESERVE <br /> THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES</p>

               <div className=' flex justify-between w-[500px] mt-8'>
                 <button className='text-white font-bold bg-red-500 hover:bg-red-400 hover:duration-500 cursor-pointer text-xl px-4 py-2'>Shop Now</button>
                 <button className='text-gray-600 boreder border-2 cursor-pointer  font-bold bg-white  hover:bg-red-100 hover:duration-500 text-xl  px-4 py-2'>Category</button>
               </div>

               <div className='mt-8'>
                <p className='font-semibold text-gray-500'> Also Also Available On</p>
                <a href="" className='flex items-center justify-items-start gap-4 mt-3'>
                    <img src="flipkart.png" alt="" />
                    <img src="amazon.png" alt="" />
                </a>

               </div>
            </div>

            <img src="hero-image.png" alt="" />
        </div>
    </>
  )
}

export default Hero
