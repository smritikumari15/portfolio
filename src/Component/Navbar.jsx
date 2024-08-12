import React from 'react'
// import {Link,Navlink}from 'react-router-dom'

import { FaRegUser } from "react-icons/fa";

function Navbar()  {
  return (
    <>
      <div className=' text-white bg-[#063970] p-3 '>
      <div className='bg-[#abdbe3] flex justify-between p-3  items-center rounded-md '>
        
          <h1 className='text-3xl  font-semibold'>SMRITI</h1>
          <FaRegUser className='text-2xl' />
      </div>
      </div>
      
    </>
  )
}

export default Navbar
