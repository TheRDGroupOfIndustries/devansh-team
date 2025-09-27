import React from "react";

export default function AboutSection() {
  return (
    <div>

<section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Mr. Devesh &amp; Team
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto mb-8"></div>
          </div>

          {/* Story + Stats */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Story
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With over 8 years of experience in the photography and
                  videography industry, Mr. Devesh leads a passionate team of
                  creative professionals dedicated to capturing life's most
                  precious moments.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our journey began with a simple belief: every moment tells a
                  story, and every story deserves to be told beautifully. From
                  intimate weddings to grand corporate events, we bring artistry
                  and technical excellence to every project.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-award-fill text-white text-xl"></i>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">500+</h4>
                  <p className="text-sm text-gray-600">Events Captured</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-heart-fill text-white text-xl"></i>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">98%</h4>
                  <p className="text-sm text-gray-600">Client Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Right (Image + Card) */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  alt="Mr. Devesh & Team"
                  className="w-full h-full object-cover object-top"
                  src="/About.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-blue-600 rounded-full flex items-center justify-center">
                    <i className="ri-camera-fill text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Mr. Devesh</h4>
                    <p className="text-sm text-gray-600">Lead Photographer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Features */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-eye-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Creative Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We see beyond the lens, capturing not just images but emotions
                and stories that last a lifetime.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-star-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every project receives our complete attention to detail and
                commitment to delivering exceptional results.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-heart-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Passion</h3>
              <p className="text-gray-600 leading-relaxed">
                Our love for photography and videography drives us to constantly
                innovate and exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  );
};