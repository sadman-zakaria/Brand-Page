import React from 'react'

const NavBar = () => {
  return (
    <>
    
       <nav className='max-w-[1440px] flex items-center justify-between mx-auto p-4  '> 
            <a href="">
               <img src="brand_logo.png" alt="" />
            </a>

            <div className=' hidden md:flex items-center justify-between gap-8'>
                {
                    ["MENU","LOCATION","ABOUT","CONTACT"].map((item)=>(
                        <a key={item} href="" className='font-semibold hover:text-blue-800 transition-all duration-300'>
                            {item}
                        </a>
                    ))
                }
            </div>

            <button className= 'md:block hidden text-white font-semibold bg-red-500 hover:bg-red-400 hover:duration-500 px-3 py-1'>Login</button>

            
        {/* Hamburger Menu Button (Mobile) */}
      <button
        className="md:hidden p-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i class="fa-solid fa-bars"></i>
      </button>
       </nav>
    </>
  )
}

export default NavBar
