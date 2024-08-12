import React from "react";
import photo from "../assets/Images/girl.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { Link } from "react-router-dom";

function First() {
  return (
    <>
    
    <div className="bg-gray-600 p-4 mt-5">
      <div className="bg-yellow-300 p-3 rounded-md">
        <div className="flex flex-col items-center">
          <img className="w-40 h-40 rounded-md" src={photo} alt="Profile" />
          <h3 className="text-xl mt-3">SMRITI</h3>
          <p className="text-gray-500">FRONTEND DEVELOPER</p>
        </div>

        <div className="flex justify-center items-center gap-3 mt-4">
          <div className="bg-gray-500 p-2 rounded-lg text-blue-600">
            <FaFacebookF />
          </div>
          <div className="bg-gray-500 p-2 rounded-lg text-blue-600">
            <FaLinkedinIn />
          </div>
          <div className="bg-gray-500 p-2 rounded-lg text-blue-600">
            <FaTwitter />
          </div>
          <div className="bg-gray-500 p-2 rounded-lg">
            <FaGithub />
          </div>
        </div>

        <div className="border-b-2 border-gray-950 rounded-md p-3 mt-4">
          <div className="flex gap-2">
            <IoIosPhonePortrait />
            <div className="text-gray-700 text-sm">Phone no.</div>
          </div>
          <div className="font-semibold ml-7">7347432329</div>
        </div>

        <div className="border-b-2 border-gray-900 rounded-md p-3 flex items-center gap-3 mt-4">
          <MdEmail />
          <div>
            <div className="text-gray-700 text-sm">Email</div>
            <div className="font-semibold">smriti12@gmail.com</div>
          </div>
        </div>

        <div className="border-b-2 border-gray-900 rounded-md p-3 flex items-center gap-2 mt-4">
          <FaLocationDot />
          <div>
            <div className="text-gray-700 text-sm">Location</div>
            <div className="font-semibold ml-4">Chandigarh</div>
          </div>
        </div>

        <div className="bg-blue-600 flex justify-center items-center gap-2 mt-4 p-2 rounded-md cursor-pointer">
          <MdDownload />
          <button>
            <Link to="#">Download</Link>
          </button>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default First;
