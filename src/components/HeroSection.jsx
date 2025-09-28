"use client";
import { Award } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div id="home" className="w-full">
      <section
        className="relative w-full min-h-screen flex items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url("/Hero.jpg")` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container z-20 mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* ================= Left Section ================= */}
          <div className="space-y-6">
            {/* Heading */}
            <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-bold pt-24 sm:leading-[1.25] sm:pt-">
              <span className="block text-white">Professional</span>
              <span className="block text-[rgb(251_146_60)]">Event</span>
              <span className="block text-[rgb(251_146_60)]">Photography</span>
              <span className="block text-white">& Cinematic</span>
              <span className="block text-white">Videography</span>
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg max-w-lg font-semibold text-gray-200">
              Capturing corporate events, conferences, and special occasions
              with cinematic excellence. From Varanasi to destinations across
              India, we deliver premium visual storytelling.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link
              href="#contact"
                // type="button"
                className="flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap 
                  px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg transform hover:scale-105 shadow-lg hover:shadow-xl
                  bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
              >
                <i className="ri-phone-fill mr-2"></i>
                Book Your Event
              </Link>

              <Link
            // type="button"
            href="#portfolio"
            className="flex justify-center items-center font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap 
             px-8 py-4 text-lg transform hover:scale-105 shadow-lg hover:shadow-xl
             bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white
             bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20"
>
  <i className="ri-image-fill mr-2"></i>
  View Portfolio
</Link>
            </div>

            {/* Stats */}
            <div className="flex justify-center sm:justify-start space-x-6 sm:space-x-10 mt-8">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold">500+</h2>
                <p className="text-sm">Events Captured</p>
              </div>
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold">8+</h2>
                <p className="text-sm">Years Experience</p>
              </div>
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold">98%</h2>
                <p className="text-sm">Happy Clients</p>
              </div>
            </div>
          </div>

         {/* ================= Right Section ================= */}
<div className="relative flex justify-center">
  {/* Motion only on the image */}
  <motion.img
    src="/herotwo.jpg"
    alt="Photography Team"
    className="rounded-2xl shadow-lg object-cover w-full max-w-[500px] h-auto"
    initial={{ rotate: 3 }}
    whileHover={{ rotate: 0 }}
    transition={{ duration: 0.35, ease: "easeInOut" }}
    style={{ transformOrigin: "center center" }}
  />

  {/* ✅ Premium Quality Badge (Top-Left) */}
  {/* <div
    className="absolute flex items-center gap-2 rounded-xl font-semibold text-center
      -top-4 left-[10%] sm:-top-6 sm:left-[10%]
      bg-white/95 backdrop-blur-sm p-3 sm:p-4 shadow-xl border border-white/20"
  >
    <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500">
      <i className="ri-camera-fill text-white text-sm sm:text-lg"></i>
    </div>
    <div>
      <div className="font-bold text-gray-900 text-xs sm:text-sm">
        Premium Quality
      </div>
      <div className="text-[10px] sm:text-xs text-gray-600">
        4K Video + RAW Photos
      </div>
    </div>
  </div> */}


  <div
  className="absolute flex items-center gap-2 rounded-xl font-semibold text-center
    bottom-3 left-0
    bg-white/95 backdrop-blur-sm p-3 sm:p-4 shadow-xl border border-white/20 translate-y-1/2"
>
  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500">
      <i className="ri-camera-fill text-white text-sm sm:text-lg"></i>
    </div>
    <div>
      <div className="font-bold text-gray-900 text-xs sm:text-sm">
        Premium Quality
      </div>
      <div className="text-[10px] sm:text-xs text-gray-600">
        4K Video + RAW Photos
      </div>
    </div>
</div>


  {/* ✅ Award Winning Badge (Bottom-Right) */}
  <div
  className="absolute flex items-center gap-2 rounded-xl font-semibold text-center
    bottom-0 right-0
    bg-white/95 backdrop-blur-sm p-3 sm:p-4 shadow-xl border border-white/20 translate-y-1/2"
>
  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500">
    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
  </div>
  <div>
    <div className="font-bold text-gray-900 text-xs sm:text-sm">
      Award Winning
    </div>
    <div className="text-[10px] sm:text-xs text-gray-600">
      Photography Team
    </div>
  </div>
</div>
</div>
        </div>
      </section>
    </div>
  );
}
