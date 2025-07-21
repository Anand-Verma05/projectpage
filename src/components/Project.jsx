import React from "react";
import myimage from "../assets/photo/i1.png";
import StarsCanvas from "./StarsCanvas";
import Gradient from "./Gradient";
import Gradientwhite from "./Gradientwhite";

const Project = () => {
  return (
    // <div className="relative h-screen w-full overflow-hidden font-mono">
    //   <StarsCanvas />

      
      <div className="bg-black h-screen text-white flex flex-col items-center justify-center gap-6 px-10 relative z-10">
        <StarsCanvas/>
        {/* Top Content Row: OUR PROJECTS + Showcase */}
        <div className="flex w-full h-3/4 gap-1.5 items-center justify-center">
          
          {/* Left Section - OUR PROJECTS */}
          <div className="w-1/3 h-full flex justify-center items-center relative ">
            <Gradient />
            <div className="flex flex-col justify-center items-center z-10 text-6xl">
              <p>OUR</p>
              <p>PROJECTS</p>
            </div>
          </div>

          {/* Right Section - Project Showcase */}
          <div className="bg-gradient-to-t from-[#010400] to-[#5AA302] w-2/3 h-full rounded-4xl relative flex justify-center items-center">
            <div className="flex flex-col w-full h-full justify-center items-center  ">
           
              <div className="text-4xl  mt-5">RUBIKS CUBE SOLVER</div>
             
              <div className="flex
              h-full w-full">
              <div className="w-1/4 flex justify-center items-center flex-col text-2xl">
                <p>description</p>
                {/* <p>SOLVER</p> */}
              </div>

              <div className="w-2/4 flex justify-center items-center relative">
                <img src={myimage} className="w-2/3 z-10 mt-20 ml-10 relative" />
                <Gradientwhite  />
              </div>

              <div className="w-1/4 flex justify-center items-center text-2xl flex-col">
                techstack
              <div>status</div>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Buttons (outside the green showcase) */}
        <div className="flex gap-4 justify-center ml-110 ">
          <button className="bg-linear-to-t from-[#16c027] to-[#0d2101] text-white px-4 py-2 rounded-xl font-semibold hover:bg-gray-200 transition w-30">
            Previous
          </button>
          <button className="bg-linear-to-t from-[#16c027] to-[#0d2101] text-white px-4 py-2 rounded-xl font-semibold hover:bg-gray-200 transition w-30">
            Next
          </button>
        </div>
      </div>
    // </div>
  );
};

export default Project;
