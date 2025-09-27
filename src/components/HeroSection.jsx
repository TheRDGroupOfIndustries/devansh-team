"use client"
import { Phone, Image, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white mt-18 bg-cover bg-center"
      style={{
        backgroundImage: `url("https://readdy.ai/api/search-image?query=professional%20cinematic%20corporate%20event%20photography%20elegant%20business%20conference%20Varanasi%20modern%20venue%20dramatic%20lighting%20high-end%20videography%20setup%20sophisticated%20atmosphere%20luxury%20event%20professional%20team%20capturing%20moments%20corporate%20celebration%20business%20gathering&width=1920&height=1080&seq=hero-corporate-varanasi&orientation=landscape")`
      }}
    >

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="space-y-6">
          {/* Heading */}
          <h1 className="text-[5rem] md:text-[4rem] font-bold leading-[1.25]">
            <span className="block text-white text-6xl md:text-7xl ">Professional</span>
            <span className="block text-[rgb(251_146_60)] text-6xl md:text-7xl">Event</span>
            <span className="block text-[rgb(251_146_60)] text-6xl md:text-7xl">Photography</span>
            <span className="block text-white text-6xl md:text-7xl">& Cinematic</span>
            <span className="block text-white text-6xl md:text-7xl">Videography</span>
          </h1>

          {/* Paragraph */}
          <p className="text-lg max-w-lg font-semibold text-gray-200">
            Capturing corporate events, conferences, and special occasions with
            cinematic excellence. From Varanasi to destinations across India, we
            deliver premium visual storytelling.
          </p>

          {/* Buttons */}
          <div className="flex space-x-6">
            <button className="flex items-center bg-red-600 text-white px-8 py-4 rounded-md text-lg font-semibold transition hover:scale-110 hover:bg-red-700 cursor-pointer">
              <Phone className="mr-2 w-5 h-4 text-white" fill='white' />
              Book Your Event
            </button>

            <button className="flex items-center bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold transition hover:scale-110 hover:bg-blue-700 cursor-pointer">
              <Image className="mr-2 w-5 h-5 text-white" />
              View Portfolio
            </button>
          </div>

          {/* Stats */}
          <div className="flex space-x-10 mt-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">500+</h2>
              <p className="text-sm">Events Captured</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold">8+</h2>
              <p className="text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold">98%</h2>
              <p className="text-sm">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <motion.div 
          initial={{ rotate: 3 }}
          animate={{ rotate: 3 }} 
          whileHover={{ rotate: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative flex justify-center"
        >
          <img
            src="https://readdy.ai/api/search-image?query=professional%20corporate%20event%20photographer%20capturing%20cinematic%20business%20conference%20elegant%20venue%20professional%20videography%20equipment%20modern%20corporate%20celebration%20sophisticated%20atmosphere%20high-end%20event%20photography%20Varanasi%20business%20gathering%20luxury%20setting&width=500&height=600&seq=hero-corporate-event&orientation=portrait"
            alt="Photography Team"
            className="rounded-2xl shadow-lg object-cover w-[500px] h-[600px]"
          />

          {/* Award Badge */}
          <div className="absolute flex items-center gap-2 px-4 py-2 rounded font-semibold text-center bottom-6 right-6 bg-white/95 backdrop-blur-sm p-4 shadow-xl border border-white/20">
            {/* Award Icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500">
              <Award className="w-5 h-5 text-white" />
            </div>

            {/* Text Content */}
            <div>
              <div className="font-bold text-gray-900 text-sm">Award Winning</div>
              <div className="text-xs text-gray-600">Photography Team</div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};