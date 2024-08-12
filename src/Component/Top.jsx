import React from "react";
import { PiStudentBold } from "react-icons/pi";
import { MdWork } from "react-icons/md";


function Top() {
  return (
    <div className="bg-slate-300">
      <div className="text-center p-4">
        <h3 className="font-bold text-3xl">Resume</h3>
      </div>
      
      <div className="p-4 md:p-8 lg:p-16 bg-slate-200 flex flex-col md:flex-row md:justify-between md:flex-wrap">
        

        <div className="flex flex-col md:flex-row md:space-x-8 ">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <PiStudentBold className="text-2xl md:text-3xl" />
              <h1 className="font-bold text-2xl md:text-3xl ml-2">Education</h1>
            </div>
            <div className="bg-pink-400 p-4 rounded-lg">
              <p className="text-sm">
                Education is the transmission of knowledge, skills, and character
                traits and manifests in various forms. Formal education occurs
                within a structured institutional framework, such as public
                schools.
              </p>
            </div>

            <div className="bg-pink-400 p-4 rounded-lg mt-4">
              <p className="text-sm">
                Traits and manifests in various forms. Formal education occurs
                within a structured framework.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-4">
              <MdWork className="text-2xl md:text-3xl" />
              <h1 className="font-bold text-2xl md:text-3xl ml-2">Experience</h1>
            </div>
            <div className="bg-pink-400 p-4 rounded-lg">
              <p className="text-sm">
                Education is the transmission of knowledge, skills, and character
                traits and manifests in various forms. Formal education occurs
                within a structured institutional framework, such as public
                schools.
              </p>
            </div>

            <div className="bg-pink-400 p-4 rounded-lg mt-4">
              <p className="text-sm">
                Traits and manifests in various forms. Formal education occurs
                within a structured framework.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
