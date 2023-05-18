import React,{useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from'react-icons/ai'
import { FaGithubSquare, FaLinkedin, FaMailBulk } from "react-icons/fa";


const Navbar = () => {
  const[nav,setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav);
  }

  return(
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-white '><span className="text-[#65FBD2]">&lt;/</span>JASON C<span className="text-[#65FBD2]">&gt;</span></h1>
      <ul className='hidden md:flex'>
        <li className='p-4 hover:text-[#65FBD2]'>Home</li>
        <li className='p-4 hover:text-[#65FBD2]'>Projects</li>
        <li className='p-4 hover:text-[#65FBD2]'>Contact</li>
        <li className='p-4 hover:text-[#65FBD2]'>Resume</li>
        <li className='p-4'>|</li>
        <li className='p-4 hover:text-[#65FBD2]'><FaGithubSquare size={25} /></li>
        <li className='p-4 hover:text-[#65FBD2]'><FaLinkedin size={25} /></li>
      </ul>
      <div className='block md:hidden' onClick={handleNav} > 
        {nav?<AiOutlineClose size={20}/>: <AiOutlineMenu size={20}/>}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gary-900 bg-[#000300] ease-out duration-500': 'fixed left-[-100%]' }>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
        <ul className='uppercase p-4'>
        <li className='p-4 birder-b border-gray-600'>Home</li>
        <li className='p-4 birder-b border-gray-600'>Projects</li>
        <li className='p-4 birder-b border-gray-600'>Contact</li>
        <li className='p-4 birder-b border-gray-600'>Resume</li>
        <li className='p-4'><FaGithubSquare size={25} /></li>
        <li className='p-4'><FaLinkedin size={25} /></li>

        </ul>
      </div>
    </div>
  )

}
export default Navbar;