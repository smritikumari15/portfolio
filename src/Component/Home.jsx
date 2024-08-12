import React from "react";
import { IoMdHome } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { MdSpeakerNotes } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

function Home() {
  return (
    <>
      <div className="flex bg-slate-600 justify-between border-4 p-2 sticky bottom-0 sm:hidden">
        <NavLink className="bg-blue-700  flex flex-col items-center p-2 rounded-md ">
          <IoMdHome className="" />
          <h2>Home</h2>
        </NavLink>

        <NavLink
          to="#"
          className="bg-blue-700  flex flex-col items-center p-2 rounded-md ">
        
          <MdSpeakerNotes />
          <h2>Resume</h2>
        </NavLink>

        <NavLink className="bg-blue-700 flex flex-col items-center p-2 rounded-md">
          <MdWork />
          <h2>Work</h2>
        </NavLink>

        <NavLink className="bg-blue-700  flex flex-col items-center p-2 rounded-md">
          <IoMdContact />
          <h2>Contact</h2>
        </NavLink>
      </div>
    </>
  );
}
export default Home;
