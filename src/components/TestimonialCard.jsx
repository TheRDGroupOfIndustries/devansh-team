"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TestimonialCard({ testimonial, keyIndex }) {
  return (
    <motion.div
      key={keyIndex} // re-render & animate when index changes
      initial={{ opacity: 0, y: 30 }}   // start hidden & down
      animate={{ opacity: 1, y: 0 }}    // fade in & slide up
      exit={{ opacity: 0, y: -30 }}     // fade out on leave
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-gray-800 p-6 rounded-2xl shadow-lg"
    >
      {/* ✅ Fixed quotes */}
      <p className="text-lg italic mb-6 text-gray-200">
        {"“"}{testimonial.quote}{"”"}
      </p>

      <div className="flex items-center justify-center gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={64}
            height={64}
            className="object-cover"
          />
        </div>
        <div className="text-left">
          <p className="font-semibold text-white">{testimonial.name}</p>
          <p className="text-sm text-gray-400">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
