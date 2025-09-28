import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from 'lucide-react';
import { Pacifico } from "next/font/google";

// Use Next.js font optimization
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
  return (
    <div className="bg-blue-600 w-full h-full"> 


<footer className="bg-[#111827] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + About */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-13 h-13 rounded-full overflow-hidden">
                <Image
                  src="/MainLogo/cameraLogo.png"
                  alt="Main Logo"
                  width={70}
                  height={70}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${pacifico.className}`}>
                  Mr. Devesh &amp; Team
                </h3>
                <p className="text-[#7d8491] text-sm">
                  Photography &amp; Videography
                </p>
              </div>
            </div>

            <p className="text-[#cbd0d6] mb-7 max-w-md leading-relaxed">
              Capturing life's most precious moments with artistic vision and
              professional excellence. Your memories, our passion - creating
              timeless stories through the lens.
            </p>

            {/* Social Media Icons Part */}
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/mrdeveshteam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gray-700 hover:bg-gradient-to-r hover:from-[#f01066] hover:to-[#5b54a1] rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <i className="ri-instagram-fill text-lg"></i>
              </a>
              <a
                href="https://youtube.com/mrdeveshteam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gray-700 hover:bg-[#fe0034] rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <i className="ri-youtube-fill text-lg"></i>
              </a>
              <a
                href="https://facebook.com/mrdeveshteam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gray-700 hover:bg-[#0766fe] rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a
                href="https://linkedin.com/company/mrdeveshteam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gray-700 hover:bg-[#0766fe] rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Link Part */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 hover:text-white"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#service"
                  className="text-gray-400 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-gray-400 hover:text-white"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Sction in right */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Wedding Photography</li>
              <li className="text-gray-400">Corporate Events</li>
              <li className="text-gray-400">Videography</li>
              <li className="text-gray-400">Drone Coverage</li>
              <li className="text-gray-400">Portrait Sessions</li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#dc2626] rounded-lg flex items-center justify-center">
                <i className="ri-phone-fill text-white text-sm"></i>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Call Us</p>
                <p className="text-white">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#2563eb] rounded-lg flex items-center justify-center">
                <i className="ri-mail-fill text-white text-sm"></i>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email Us</p>
                <p className="text-white">info@mrdeveshteam.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#16a34a] rounded-lg flex items-center justify-center">
                <i className="ri-map-pin-fill text-white text-sm"></i>
              </div>
              <div>
                <p className="text-[#7c8390] text-sm">Location</p>
                <p className="text-[#7c8390]">Varanasi, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <p className="text-gray-400 text-sm">
              &copy; 2025 All Copyrights are reserved by
            <a
              href="https://www.therdgroupofindustries.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-lg transition-colors"
            >
              {" "}The RD GROUP OF INDUSTRIES
            </a>
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="#"
              className="text-gray-300 hover:text-white text-lg transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white text-lg transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>

    </div>
  );
};

export default Footer;
