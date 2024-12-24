import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={navigate(-1)}
        className="bg-[#d62727] uppercase text-white p-1 px-6 text-xs font-bold"
      >
        back
      </button>
      <div className="p-4 mt-6 flex items-center justify-center">
        <div className="w-1/2">
          <p className="text-[#d62727] font-poppins hover:underline underline-offset-2">
            AWS Student Community Day Nepal CTF Writeup
          </p>
          <div className="flex items-center font-source-code my-3 italic gap-2">
            <FaRegCalendarAlt />
            <p className="font-poppins text-gray-500">Oct 5, 2024 | 12:00 AM</p>
          </div>
          <p className="font-poppins  text-justify">
            AWS Student Community Day Nepal was a remarkable event that brought
            together cloud-enthusiasts students and professionals across Nepal
            from all regions. Once again kudos to AWS Cloud Club Nepal for this
            event that empowered students by offering good exposure on AWS
            including travel scholarships. It was an honor to be part of this
            event, contributing in shades of shadow by creating challenges for
            the Capture The Flag(CTF) competition.
          </p>
        </div>
        {/* <p>AWS Student Community Day Nepal was a remarkable event that brought together cloud-enthusiasts students and professionals across Nepal from all regions. Once again kudos to AWS Cloud Club Nepal for this event that empowered students by offering good exposure on AWS including travel scholarships. It was an honor to be part of this event, contributing in shades of shadow by creating challenges for the Capture The Flag(CTF) competition.</p> */}
      </div>
    </div>
  );
};

export default BlogPage;
