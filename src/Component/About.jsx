import React, { useEffect, useState } from 'react'
import { SiCodementor } from "react-icons/si";
import { FaCode } from "react-icons/fa6";
import line5 from "../assets/Images/line5.png"
import Aos from "aos"
import "aos/dist/aos.css"
function About() {

    useEffect(()=>
    {
        Aos.init({duration: 2000})
    },[])
  return (
    <>
      <div className='md:justify-between md:flex-wrap bg-gray-400 mt-5 p-5 rounded-md sm:mt-3 '>
        <div>
        <h1 className='font-bold text-3xl '>ABOUT ME </h1>
        <img src={line5} />
        </div>

        <div className='bg-green-300 p-6 rounded-lg mt-8 ' data-aos="fade-left">
        <p>
                Education is the transmission of knowledge, skills, and character
                traits and manifests in various forms. Formal education occurs
                within a structured institutional framework, such as public 
                schools.
        </p>
        </div>

        <div className=' '>
            <h2 className='font-bold text-3xl mt-5  '>What I do!</h2>
        </div>
        


    <div className='bg-gray-600 lg:p-5 lg:flex lg:gap-2'>
        <div className='bg-blue-300 p-9 rounded-lg mt-4 lg:mt-0 shadow-md shadow-black'>
        <div className='flex text-2xl '>
            <FaCode className='mt-2' />
        <h2 className='font-semibold text-2xl mb-2 ml-4 '>Web Development</h2>
        </div>
        <p >
                Education is the transmission of knowledge, skills, and character
                traits and manifests in various forms. Formal education occurs
                within a structured institutional framework, such as public
                schools.
        </p>
        </div>
       
        <div className='bg-pink-400 p-9 rounded-lg mt-7 lg:mt-0 shadow-md shadow-black'>
        <div className='flex text-2xl'>
            <SiCodementor  className='mt-2'  />
            <h2 className='font-semibold text-2xl ml-4 mb-2 '>Mentorship</h2>
            
            </div>

            <p>
                Education is the transmission of knowledge, skills, and character
                traits and manifests in various forms. Formal education occurs
                within a structured institutional framework, such as public
                schools.
            </p>
        </div>
        
      </div>

      </div>
    </>
  )
}

export default About
