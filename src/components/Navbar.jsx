import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { Link } from 'react-scroll';

import Logo from '../assets/logo.png';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


  return (
    <div class='fixed w-full h[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
    <div>
      <img src={Logo} alt="" style={{width: '50px'}} />
    </div>
          {/* menu */}
      <ul className='hidden md:flex'>
      <li> <Link to='home' spy={true} smooth={true} duration={500}>
          Home
        </Link>
        </li>
        <li>
          <Link to='about' spy={true} smooth={true} duration={500}>
          About
          </Link>
          </li>
        <li><Link to='skills'  spy={true} smooth={true} duration={500}>
          Skills
        </Link></li>
        <li><Link to="work" spy={true} smooth={true} duration={500}>
          Work
        </Link></li>
        <li><Link to="contact" spy={true} smooth={true} duration={500}>
          Contact
        </Link></li>
      </ul>
    
      {/* Hamburger menu*/}
      <div onClick={handleClick} className='md:hidden z-10 '> 
    {!nav ? <FaBars /> : <FaTimes />}
    </div>
    {/*Mobile menu*/}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center ' }>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
    </ul>

    {/*shoshiari netwaki*/}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
   
         <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
          <a  className='flex justify-between items-center w-full text-gray-300'
          href='https://github.com/timothymureithi/' target="_blank" rel="noreferrer noopener">
            Github <FaGithub size={30} />
          </a>
          
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
          <a  className='flex justify-between items-center w-full text-gray-300'
          href='https://www.linkedin.com/in/timothy-mureithi-74a440234/' target="_blank" rel="noreferrer noopener" >
            Linkedin <FaLinkedin size={30} />
          </a>
          
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
          <a  className='flex justify-between items-center w-full text-gray-300'
          href='https://www.linkedin.com/in/timothy-mureithi-74a440234/' target="_blank" rel="noreferrer noopener" >
            Email<HiOutlineMail size={30} />
          </a>
          
        </li>

        
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
          <a  className='flex justify-between items-center w-full text-gray-300'
          href='https://www.linkedin.com/in/timothy-mureithi-74a440234/' target="_blank" rel="noreferrer noopener" >
            CV<BsFillPersonLinesFill size={30} />
          </a>
          
        </li>




      </ul>
    

    </div>
    </div>

  )
}

export default Navbar