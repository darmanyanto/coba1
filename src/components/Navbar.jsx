import { div, nav } from "framer-motion/client";
import { useState } from "react";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl transition-all duration-300 hover:opacity-100"
      >
        Logo
      </a>
      {/* menu ukuran MD */}
      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
          className="cursor-pointer opacity-700 transition-all duration-300 hover:opacity-100"
        >
          <li>Home</li>
        </a>
        <a
          href="#tech"
          className="cursor-pointer opacity-700 transition-all duration-300 hover:opacity-100"
        >
          <li>Tech</li>
        </a>
        <a
          href="#projects"
          className="cursor-pointer opacity-700 transition-all duration-300 hover:opacity-100"
        >
          <li>Projects</li>
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-700 transition-all duration-300 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>
      <ul className="hidden md:flex gap-10">
        <li className="cursor-pointer text-xl opacity-700 duration-300 transition-all hover:text-red-500 hover:opacity-100">
          <BsYoutube />
        </li>
        <li className="cursor-pointer text-xl opacity-700 duration-300 transition-all hover:text-blue-500 hover:opacity-100">
          <BsFacebook />
        </li>
        <li className="cursor-pointer text-xl opacity-700 duration-300 transition-all hover:text-blue-500 hover:opacity-100">
          <BsTwitter />
        </li>
        <li className="cursor-pointer text-xl opacity-700 duration-300 transition-all hover:text-blue-100 hover:opacity-100">
          <BsTiktok />
        </li>
      </ul>

      {/* Tampilan untuk mobile */}

      {isOpen ? (
        <BiX onClick={menuOpen} className="block md:hidden text-4xl" />
      ) : (
        <BiMenu onClick={menuOpen} className="block md:hidden text-4xl" />
      )}

      {isOpen && (
        <div className="fixed md:hidden right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-l-gray-800 bg-black/90 p-12 ${isOpen} ? 'block' : 'hidden'">
          <ul className="flex flex-col gap-10">
            <a
              href="#home"
              className="cursor-pointer opacity-700 transition-all duration-300 hover:opacity-100"
            >
              <li>Home</li>
            </a>
            <a
              href="#tech"
              className="cursor-pointer opacity-700 transition-all duration-300 hover:opacity-100"
            >
              <li>Tech</li>
            </a>
            <a
              href="#projects"
              className="cursor-pointer opacity-700 transition-all duration-300 hover:opacity-100"
            >
              <li>Projects</li>
            </a>
            <a
              href="#contact"
              className="cursor-pointer opacity-700 transition-all duration-300 hover:opacity-100"
            >
              <li>Contact</li>
            </a>
          </ul>
          <ul className="flex felx-wrap gap-3">
            <li className="cursor-pointer text-xl opacity-700 duration-300 transition-all hover:text-red-500 hover:opacity-100">
              <BsYoutube />
            </li>
            <li className="cursor-pointer text-xl opacity-700 duration-300 transition-all hover:text-blue-500 hover:opacity-100">
              <BsFacebook />
            </li>
            <li className="cursor-pointer text-xl opacity-700 duration-300 transition-all hover:text-blue-500 hover:opacity-100">
              <BsTwitter />
            </li>
            <li className="cursor-pointer text-xl opacity-700 duration-300 transition-all hover:text-blue-100 hover:opacity-100">
              <BsTiktok />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
