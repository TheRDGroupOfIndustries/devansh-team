"use client";
import Link from "next/link";
import React from "react";
// import voltsec from ""

const FloatComponent = () => {
  return (
    <>
      {/* Left Badge */}
      <div className="fixed sm:bottom-6 sm:left-6 bottom-20 mb-1 right-6 z-40">
        <div className="relative bg-gradient-to-r w-fit bg-[linear-gradient(to_right,#dc2626,#ef4444,#b91c1c)] text-white px-4 py-2 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-6 px-1 bg-white flex items-center justify-center">
              {/* <i className="ri-award-fill text-sm"></i> */}
        <img 
        src={"/BNI_logo.png"}
        />
            </div>
            <span className="text-sm font-semibold whitespace-nowrap">
              Proud Member of BNI
            </span>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-lg"></div>
        </div>
      </div>

      {/* Right Badge */}
      <Link href={"https://voltsec.io/"} target="_blank" className="fixed bottom-6 right-6 z-40">
        <img 
        src={"/voltsec.svg"}
        />
      </Link>
    </>
  );
};

export default FloatComponent;
