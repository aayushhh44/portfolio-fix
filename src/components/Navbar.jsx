"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaRegMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Corrected toggleDarkMode function
  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <div
        className={` p-6 sm:p-8 flex justify-between ${
          theme === 'dark' ? "bg-[#1a1a1a] text-white" : "bg-white text-[#1a1a1a]"
        }`}
      >
        <div className="font-source-code hidden sm:flex gap-x-6">
          <Link href="/" className="text-sm hover:text-[#d62727]">
            HOME
          </Link>
          <Link href="/blogs" className="text-sm hover:text-[#d62727]">
            BLOGS
          </Link>
          <Link href="/gallery" className="text-sm hover:text-[#d62727]">
            GALLERY
          </Link>
          <Link href="/contacts" className="text-sm hover:text-[#d62727]">
            ABOUT & CONTACTS
          </Link>
        </div>

        {theme === 'dark' ? (
          <CiSun
            className="cursor-pointer hidden sm:block"
            size={20}
            onClick={toggleDarkMode}
          />
        ) : (
          <FaRegMoon
            className="cursor-pointer hidden sm:block"
            size={20}
            onClick={toggleDarkMode}
          />
        )}

        {theme === 'dark' ? (
          <CiSun
            className="cursor-pointer absolute right-4 top-4 sm:hidden"
            size={25}
            onClick={toggleDarkMode}
          />
        ) : (
          <FaRegMoon
            className="cursor-pointer sm:hidden absolute right-4 top-5"
            size={25}
            onClick={toggleDarkMode}
          />
        )}

        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div
        className={`${
          isOpen
            ? "transform relative translate-x-0 opacity-100 visibility-visible transition-all duration-300"
            : "transform -translate-x-full opacity-0 visibility-hidden transition-all duration-300"
        } font-source-code mt-5 flex flex-col gap-4 items-center justify-center h-screen -top-8 left-0 sm:hidden w-3/4 gap-y-6 text-white bg-black z-50 absolute`}
      >
        <Link
          href="/"
          className="text-2xl text-center hover:text-[#d62727]"
          onClick={() => setIsOpen(false)}
        >
          HOME
        </Link>
        <Link
          href="/blogs"
          className="text-2xl text-center hover:text-[#d62727]"
          onClick={() => setIsOpen(false)}
        >
          BLOGS
        </Link>
        <Link
          href="/gallery"
          className="text-2xl text-center hover:text-[#d62727]"
          onClick={() => setIsOpen(false)}
        >
          GALLERY
        </Link>
        <Link
          href='/contacts'
          className="text-2xl text-center hover:text-[#d62727]"
          onClick={() => setIsOpen(false)}
        >
          ABOUT & CONTACTS
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
