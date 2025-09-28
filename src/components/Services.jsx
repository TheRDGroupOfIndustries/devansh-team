"use client";

import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

// Services data
const services = [
  {
    icon: (
      <motion.span
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-pink-400 text-white text-2xl"
      >
        ♥
      </motion.span>
    ),
    title: "Wedding Photography",
    description:
      "Capturing your special day with artistic flair and emotional depth, from intimate moments to grand celebrations.",
    features: ["Pre-wedding shoots", "Ceremony coverage", "Reception highlights", "Couple portraits"],
  },
  {
    icon: (
      <motion.span
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.2, repeat: Infinity }}
        className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-600 text-white text-2xl"
      >
        🏢
      </motion.span>
    ),
    title: "Corporate Events",
    description:
      "Professional documentation of business events, conferences, and corporate milestones with precision.",
    features: ["Conference coverage", "Team events", "Product launches", "Award ceremonies"],
  },
  {
    icon: (
      <motion.span
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.4, repeat: Infinity }}
        className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500 text-white text-2xl"
      >
        ▶
      </motion.span>
    ),
    title: "Cinematic Videography",
    description:
      "Creating stunning video stories that capture the essence and emotion of your special moments.",
    features: ["Wedding films", "Event highlights", "Promotional videos", "Documentary style"],
  },
  {
    icon: (
      <motion.span
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.6, repeat: Infinity }}
        className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-500 text-white text-2xl"
      >
        ✈
      </motion.span>
    ),
    title: "Drone Coverage",
    description:
      "Aerial photography and videography adding a unique perspective to your events and venues.",
    features: ["Aerial photography", "Venue overviews", "Landscape shots", "Dynamic sequences"],
  },
  {
    icon: (
      <motion.span
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.8, repeat: Infinity }}
        className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-500 text-white text-2xl"
      >
        📷
      </motion.span>
    ),
    title: "Event Photography",
    description:
      "Comprehensive coverage of birthdays, anniversaries, parties, and special celebrations.",
    features: ["Birthday parties", "Anniversaries", "Family gatherings", "Cultural events"],
  },
  {
    icon: (
      <motion.span
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-teal-500 text-white text-2xl"
      >
        👤
      </motion.span>
    ),
    title: "Portrait Sessions",
    description:
      "Professional individual and family portraits that showcase personality and create lasting memories.",
    features: ["Individual portraits", "Family sessions", "Professional headshots", "Maternity shoots"],
  },
];

export default function Services() {
  return (
    <section id="service" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Outer Light Bluish Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#f5faff] rounded-3xl p-8 sm:p-12 lg:p-16 max-w-7xl mx-auto shadow-lg"
      >
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="text-black">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
              Services
            </span>
          </h2>

          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-3 mb-8 h-1 w-32 mx-auto bg-gradient-to-r from-red-500 to-blue-500 rounded-full"
          ></motion.div>

          {/* Enhanced Description */}
          <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-6 mb-10">
            From intimate ceremonies to grand celebrations, we offer comprehensive photography and videography services tailored to your unique needs.
          </p>
        </motion.div>

        {/* Service Cards Grid with staggered animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="hover:shadow-2xl rounded-2xl"
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-Action Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 max-w-3xl mx-auto mt-16 text-center"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl font-extrabold text-black mb-3"
          >
            Ready to Create Something Beautiful?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto"
          >
            Let's discuss your vision and create a customized package that perfectly fits your needs and budget.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition"
            >
              Get Quote
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
            >
              View Work
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
