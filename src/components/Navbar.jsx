"use client";

import React, { useState } from "react";
import { Camera } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Service", "Portfolio", "Testimonials", "Contact"];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Left Section */}
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-red-500 to-blue-500 p-3 rounded-full flex items-center justify-center">
            <Camera size={28} color="white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-black text-lg" style={{fontFamily:'pacifico '}}>Mr. Devesh & Team</span>
            <span className="text-sm text-gray-500">Photography & Videography</span>
          </div>
        </div>


        {/* Right Section */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-black hover:text-red-600 font-medium"
            >
              {link}
            </a>
          ))}
          <Link href="#contact" className="bg-[linear-gradient(to_right,#DC2626,#B91C1C)] hover:bg-[linear-gradient(to_right,#B91C1C,#991B1B)] text-white px-4 py-2 rounded">
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md px-4 pb-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-black hover:text-orange-500 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;