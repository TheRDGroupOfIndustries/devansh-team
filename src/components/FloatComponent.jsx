"use client";
import React from "react";

const FloatComponent = () => {
  return (
    <>
      {/* Left Badge */}
      <div className="fixed bottom-6 left-6 z-40">
        <div className="relative bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white px-4 py-2 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <i className="ri-award-fill text-sm"></i>
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
      <div className="fixed bottom-6 right-6 z-40">
        <div className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <i className="ri-shield-check-fill text-sm"></i>
            </div>
            <span className="text-sm font-semibold whitespace-nowrap">
              Secured by VoltSec.io
            </span>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-lg"></div>
        </div>
      </div>
    </>
  );
};

export default FloatComponent;
