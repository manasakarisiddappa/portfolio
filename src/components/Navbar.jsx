import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div class="text-3xl font-bold animate-pulse">
        <span class="inline-block text-transparent bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text shadow-lg animate-gradient-x">
          M
        </span>
        <span class="inline-block text-transparent bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text shadow-lg animate-gradient-x">
          a
        </span>
        <span class="inline-block text-transparent bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text shadow-lg animate-gradient-x">
          n
        </span>
        <span class="inline-block text-transparent bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text shadow-lg animate-gradient-x">
          a
        </span>
        <span class="inline-block text-transparent bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text shadow-lg animate-gradient-x">
          s
        </span>
        <span class="inline-block text-transparent bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text shadow-lg animate-gradient-x">
          a
        </span>
        <span class="inline-block text-transparent bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text shadow-lg animate-gradient-x">
          {"  "}
        </span>
        <span class="inline-block ml-2 text-transparent bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text shadow-lg animate-gradient-x">
          K
        </span>
        <span class="inline-block text-transparent bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text shadow-lg animate-gradient-x">
          a
        </span>
        <span class="inline-block text-transparent bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text shadow-lg animate-gradient-x">
          r
        </span>
        <span class="inline-block text-transparent bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text shadow-lg animate-gradient-x">
          i
        </span>
        <span class="inline-block text-transparent bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text shadow-lg animate-gradient-x">
          s
        </span>
        <span class="inline-block text-transparent bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text shadow-lg animate-gradient-x">
          i
        </span>
        <span class="inline-block text-transparent bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text shadow-lg animate-gradient-x">
          d
        </span>
        <span class="inline-block text-transparent bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text shadow-lg animate-gradient-x">
          d
        </span>
        <span class="inline-block text-transparent bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text shadow-lg animate-gradient-x">
          a
        </span>
        <span class="inline-block text-transparent bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text shadow-lg animate-gradient-x">
          p
        </span>
        <span class="inline-block text-transparent bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text shadow-lg animate-gradient-x">
          p
        </span>
        <span class="inline-block text-transparent bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text shadow-lg animate-gradient-x">
          a
        </span>
      </div>

      <ul className="hidden md:flex md:w-[300px] md:gap-4 md:hover:cursor-pointer">
        <li className="hover:text-pink-500">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-pink-500">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-pink-500">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-pink-500">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:text-pink-500">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="flex fixed md:flex-col md:top-[35%] top-[10%] left-3">
        <ul className="flex md:flex-col gap-2">
          <li className="w-[160px] h-[40px] md:h-[60px] flex justify-between items-center md:ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/manasa-karisiddappa-81526918a/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="hidden w-[160px] h-[60px] md:flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/manasakarisiddappa"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="hidden w-[160px] h-[60px] md:flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:mail2manasak@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[40px] md:h-[60px] flex justify-between items-center md:ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1BbkCCg_wn7KtVf-9k5ml_qaYzKR4_Tbt/view?usp=sharing"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
