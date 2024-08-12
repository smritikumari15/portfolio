import React from 'react'

import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { MdSpeakerNotes } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
function LaptopBtn() {
  return (
    <>
      
      <div className='hidden sm:block sm:w-[80%] lg:w-[50%]'  >
       <div className="flex justify-between  p-2 sticky bottom-0 sm:W-[80%] ">
        <NavLink className="bg-blue-700 flex flex-col items-center p-2 rounded-md hover:bg-red-600">
          <IoMdHome />
          <h2>Home</h2>
        </NavLink>

        <NavLink
          to="#"
          className="bg-blue-700 flex flex-col items-center p-2 rounded-md"
        >
          <MdSpeakerNotes />
          <h2>Resume</h2>
        </NavLink>

        <NavLink className="bg-blue-700 flex flex-col items-center p-2 rounded-md">
          <MdWork />
          <h2>Work</h2>
        </NavLink>

        <NavLink className="bg-blue-700 flex flex-col items-center p-2 rounded-md">
          <IoMdContact />
          <h2>Contact</h2>
        </NavLink>
      </div>
      </div>
    </>
  )
}

export default LaptopBtn
