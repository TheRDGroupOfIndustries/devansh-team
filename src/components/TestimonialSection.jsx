"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Amazing experience with Mr. Devesh team for my daughter's 18th birthday party. They were so creative with their shots and made everyone feel comfortable. The final photos were absolutely stunning and captured the joy of the celebration perfectly.",
    name: "Vikram Singh",
    role: "Birthday Client",
    image: "/vikram.png",
  },
  {
    quote:
      "Mr. Devesh team provided excellent coverage for our product launch event. Their drone footage was spectacular and added a unique dimension to our event documentation. Very professional and delivered exactly what we needed for our marketing materials.",
    name: "Rohit Industries",
    role: "Corporate Client",
    image: "/rohit.png",
  },
  {
    quote:
      "Mr. Devesh and his team captured our wedding day perfectly! Every emotion, every moment was beautifully documented. The quality of photography and videography exceeded our expectations. Highly recommended for anyone looking for professional wedding coverage.",
    name: "Priya & Rahul Sharma",
    role: "Wedding Couple",
    image: "/meera.png",
  },
  {
    quote:
      "We hired Mr. Devesh team for our annual corporate conference. Their professionalism and attention to detail was outstanding. They captured all the key moments and delivered high-quality photos within the promised timeline. Excellent service!",
    name: "Anjali Patel",
    role: "Corporate Event Manager",
    image: "/anjali.png",
  },
  {
    quote:
      "We booked a family portrait session and it was wonderful! Mr. Devesh was patient with our kids and captured beautiful natural moments. The quality of photos is exceptional and the pricing was very reasonable. Will definitely book again!",
    name: "Kavitha Reddy",
    role: "Family Portrait Client",
    image: "/kavitha.png",
  },
];

export default function TestimonialSection() {
  const [[current, direction], setCurrent] = useState([0, 0]);

  // Auto-slide every 6 seconds with slight randomness to feel organic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(([prev]) => [(prev + 1) % testimonials.length, 1]);
    }, 6000 + Math.floor(Math.random() * 500)); // small random delay
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => setCurrent(([prev]) => [(prev + 1) % testimonials.length, 1]);
  const prevTestimonial = () =>
    setCurrent(([prev]) => [(prev - 1 + testimonials.length) % testimonials.length, -1]);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-12 md:p-16">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3"
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-black">What Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
              Clients Say
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Don't just take our word for it. <br />
            Here's what our happy clients have to say about their experience with us.
          </motion.p>
          <div className="h-1 w-28 sm:w-32 mx-auto bg-gradient-to-r from-red-500 to-blue-500 rounded-full mt-6"></div>
        </div>

        {/* Testimonial Card */}
        <div className="relative overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="bg-[#f5faff] rounded-2xl shadow-xl p-6 sm:p-10 md:p-12 flex flex-col items-center text-center cursor-grab"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.x < -50 || velocity.x < -500) nextTestimonial();
                else if (offset.x > 50 || velocity.x > 500) prevTestimonial();
              }}
            >
              <motion.img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover shadow-md"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
              <motion.p
                className="text-gray-700 text-lg italic mb-4 px-2 sm:px-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              >
                "{testimonials[current].quote}"
              </motion.p>
              <motion.h4
                className="text-xl font-semibold text-black"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
              >
                – {testimonials[current].name}, {testimonials[current].role}
              </motion.h4>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition hidden sm:flex"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition hidden sm:flex"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <motion.span
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-gradient-to-r from-red-500 to-blue-500"
                  : "bg-gray-300"
              }`}
              animate={{ scale: current === index ? 1.4 : 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
