
import { IoMdMail } from "react-icons/io";

const Nav = () => {

    return (
        <nav className='fixed top-0 h-[100vh] w-[9vw] bg-green96B684 text-black font-semibold flex flex-col justify-between py-10 pl-3'>
          <a href="/locations" className='hover:text-white'>Locations</a>
        <div className='flex flex-col'>
          <a href="" className='hover:text-white'>Tenants +</a>
          <a href="" className='hover:text-white'>Owners +</a>
        </div>
        <a href="/contact" className='hover:text-white flex relative gap-[0.5rem]'>Contact <IoMdMail className="relative top-[0.3rem]" /></a>
      </nav>
    )
}

export default Nav;