"use client"
import { IoMdMail } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";

import { useState } from "react";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav>
      {/* Side Navbar for laptops/desktops */}
      <div className='  hidden fixed top-0 min-h-full bg-green96B684 text-black font-semibold lg:flex flex-col justify-between py-10 px-3'>
        <a href="/locations" className='hover:text-white'>Locations</a>
        <div className='flex flex-col'>
          <a href="" className='hover:text-white'>Tenants +</a>
          <a href="" className='hover:text-white'>Owners +</a>
        </div>
        <a href="/contact" className='hover:text-white flex relative gap-[0.5rem]'>Contact <IoMdMail className="relative top-[0.3rem]" /></a>
      </div>
      {/* hamburger menu for mobile devices */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="z-50">
          {/* Hamburger icon or button */}
          <IoMenu className='w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] text-green96B684'/>
        </button>
        <div
          className={`fixed top-0 left-0 z-50 w-full h-screen bg-green96B684 transition-transform ${showMenu ? 'transform translate-x-0' : 'transform -translate-x-full'
            }`}
        >
          {/* Full-screen menu content */}
          <button onClick={toggleMenu} className="z-50">
          {/*cancel button*/}
          <IoClose className='w-[4rem] h-[4rem] text-white'/>
          <div className="flex flex-col text-5xl space-y-[30%] mt-[5rem] px-[2rem]">
          <a href="/locations" className='active:text-gray-500'>Locations</a>
          <a href="" className='active:text-gray-500'>Tenants +</a>
          <a href="" className='active:text-gray-500'>Owners +</a>
          <a href="/contact" className='active:text-gray-500 flex relative gap-[0.5rem]'>Contact</a>
          </div>
        </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav;