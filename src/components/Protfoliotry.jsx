"use client"; // if using Next.js app router
import React, { useState } from "react";
import { X } from "lucide-react"; // using lucide-react icon

const Protfoliotry = ({ image, title, description, category }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Card */}
      <div
        className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden">
          <img
            alt={title}
            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
            src={image}
          />
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Text content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <h3 className="text-white font-bold text-lg">{title}</h3>
          <p className="text-gray-200 text-sm">{description}</p>
        </div>

        {/* Category tag */}
        {category && (
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-xs font-medium capitalize">
              {category}
            </span>
          </div>
        )}
      </div>

      {/* Popup modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setOpen(false)} // click outside closes modal
        >
          <div
            className="relative max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <img
              src={image}
              alt={title}
              className="rounded-lg shadow-lg w-full h-auto"
            />

            {/* Close button */}
            <button
              className="absolute cursor-pointer -top-5 -right-5 bg-white hover:bg-gray-200 text-black p-2 rounded-full shadow-md transition"
              onClick={() => setOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Protfoliotry;
