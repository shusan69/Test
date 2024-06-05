import React, { useState } from 'react';
import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const openMenu = () => {
    setToggle(true);
  }

  const closeMenu = () => {
    setToggle(false);
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/src/assets/heroMain.png" alt="" className="w-12 h-12" />
          <Link to="/" className="ml-2 text-xl font-bold text-indigo-600 flex items-center">
            <CgNametag className="mr-1" />
            SHUSAN
          </Link>
        </div>
        <div className="hidden lg:flex space-x-4">
          <Link to="/" className="hover:bg-gray-200 rounded-full px-5 py-2 text-lg">Home Page</Link>
          <Link to="/projects" className="hover:bg-gray-200 rounded-full px-5 py-2 text-lg">Projects</Link>
                    <Link to="/services" className="hover:bg-gray-200 rounded-full px-5 py-2 text-lg">Services</Link>
                    <Link to="/contact" className="hover:bg-gray-200 rounded-full px-5 py-2 text-lg">Contact</Link>
          <Link to="/about" className="hover:bg-gray-200 rounded-full px-5 py-2 text-lg">About Me</Link>
        </div>
        <div className="lg:hidden flex items-center">
          {toggle ? (
            <AiOutlineClose onClick={closeMenu} size={24} className='text-red-600 cursor-pointer' />
          ) : (
            <HiMenuAlt1 onClick={openMenu} size={24} className='text-green-600 cursor-pointer' />
          )}
        </div>
      </div>
      {toggle && (
        <div className="lg:hidden px-4 py-2">
          <ul>
            <li className="text-lg text-black hover:bg-gray-200 py-2 cursor-pointer">Home Page</li>
            <li className="text-lg text-black hover:bg-gray-200 py-2 cursor-pointer">Projects</li>
            <li><Link to="/about" className="text-lg text-black hover:bg-gray-200 py-2 cursor-pointer">About Me</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
