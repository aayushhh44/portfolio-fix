import Link from "next/link";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="p-8 dark:bg-[#1a1a1a] ">
      <div className="">
        <div>
          <p className="text-3xl mb-4">Home</p>
          <p className="font-source-code italic mb-4">Recent Posts</p>
        </div>

        <div className=" w-full sm:w-2/3 flex flex-col gap-6">
          <div className="hover:cursor-pointer">
            <p className="text-[#d62727] font-poppins hover:underline underline-offset-2">
              AWS Student Community Day Nepal CTF Writeup
            </p>
            <div className="flex items-center font-source-code italic gap-2">
              <FaRegCalendarAlt />
              <p className="font-poppins text-gray-500">
                Oct 5, 2024 | 12:00 AM
              </p>
            </div>
            <p className="font-poppins text-justify">
              Explore the highlights and insights from AWS Student Community Day
              Nepal's Capture The Flag (CTF) competition, focusing on
              AWS-centric challenges and cloud security strategies
            </p>
          </div>

          <div className="hover:cursor-pointer">
            <Link
              href="/blog-page"
              className="text-[#d62727] font-poppins hover:underline underline-offset-2"
            >
              AWS Student Community Day Nepal CTF Writeup
            </Link>
            <div className="flex items-center font-source-code italic gap-2">
              <FaRegCalendarAlt />
              <p className="font-poppins text-gray-500">
                Oct 5, 2024 | 12:00 AM
              </p>
            </div>
            <p className="font-poppins text-justify">
              Explore the highlights and insights from AWS Student Community Day
              Nepal's Capture The Flag (CTF) competition, focusing on
              AWS-centric challenges and cloud security strategies
            </p>
          </div>

          <div className="hover:cursor-pointer">
            <p className="text-[#d62727] font-poppins hover:underline underline-offset-2">
              AWS Student Community Day Nepal CTF Writeup
            </p>
            <div className="flex items-center font-source-code italic gap-2">
              <FaRegCalendarAlt />
              <p className="font-poppins text-gray-500">
                Oct 5, 2024 | 12:00 AM
              </p>
            </div>
            <p className="font-poppins text-justify">
              Explore the highlights and insights from AWS Student Community Day
              Nepal's Capture The Flag (CTF) competition, focusing on
              AWS-centric challenges and cloud security strategies
            </p>
          </div>

          <div className="hover:cursor-pointer">
            <p className="text-[#d62727] font-poppins hover:underline underline-offset-2">
              AWS Student Community Day Nepal CTF Writeup
            </p>
            <div className="flex items-center font-source-code italic gap-2">
              <FaRegCalendarAlt />
              <p className="font-poppins text-gray-500">
                Oct 5, 2024 | 12:00 AM
              </p>
            </div>
            <p className="font-poppins text-justify">
              Explore the highlights and insights from AWS Student Community Day
              Nepal's Capture The Flag (CTF) competition, focusing on
              AWS-centric challenges and cloud security strategies
            </p>
          </div>
        </div>
      </div>

      <Link href='/blogs' className="flex items-center gap-2 mt-4 cursor-pointer font-bold">
        <h2>View All Posts</h2>
        <FaArrowRightLong className="font-bold" />
      </Link>
    </div>
  );
};

export default Hero;
