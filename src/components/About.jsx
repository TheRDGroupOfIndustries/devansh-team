import { Camera, Eye, Star, Heart } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full py-20 bg-white text-black">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-2">
          <span className="text-black">About </span>
          <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
            Mr. Devesh & Team
          </span>
        </h2>

        {/* Bottom line */}
        <h6 className="w-[100px] h-[4px] mx-auto bg-gradient-to-r from-red-500 to-blue-500 rounded"></h6>

        {/* Left and Right Sections */}
        <div className="grid md:grid-cols-2 gap-10 items-start mt-10">

          {/* Left Section */}
          <div className="space-y-8 max-w-lg">
            {/* Our Story Card */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-700 leading-relaxed mb-4">With over 8 years of experience in the photography and videography industry, Mr. Devesh leads a passionate team of creative professionals dedicated to capturing life's most precious moments.</p>
              <p className="text-gray-700 leading-relaxed">Our journey began with a simple belief: every moment tells a story, and every story deserves to be told beautifully. From intimate weddings to grand corporate events, we bring artistry and technical excellence to every project.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <h4 className="font-bold text-gray-900 mb-1">500+</h4>
                  <p className="text-sm text-gray-600">Events Captured</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">

              </div>
            </div>

          </div>

          {/* Right Section */}
          <div className="relative flex justify-center">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20photographer%20team%20behind%20the%20scenes%20wedding%20photography%20equipment%20cinematic%20lighting%20setup%20creative%20team%20working%20together%20modern%20photography%20studio%20atmosphere%20professional%20camera%20gear%20artistic%20composition&width=600&height=700&seq=about-team&orientation=portrait"
              alt="Mr. Devesh & Team"
              className="w-[400px] md:w-[500px] h-[550px] md:h-[650px] object-cover rounded-2xl shadow-lg"
            />

            {/* Badge on Image */}
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-md font-semibold shadow-lg flex items-center space-x-3">
              {/* Camera Icon */}
              <div className="bg-gradient-to-r from-red-500 to-blue-500 p-3 rounded-full flex items-center justify-center">
                <Camera size={28} color="white" />
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span className="text-black font-semibold">Mr. Devesh</span>
                <span className="text-gray-600 text-sm font-normal">Lead Photographer</span>
              </div>
            </div>

          </div>
        </div>


        {/* Additional Info Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {/* Item 1 */}
          <div className="p-6 rounded-xl text-center">
            <div className="bg-red-800 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
              <Eye size={24} color="white" />
            </div>

            <h3 className="text-xl font-semibold mb-2">Creative Vision</h3>
            <p className="text-gray-700 text-base">
              We see beyond the lens, capturing not just images but emotions and stories that last a lifetime.
            </p>
          </div>

          {/* Item 2 */}
          <div className="p-6 rounded-xl text-center">
            <div className="bg-blue-800 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
              <Star size={24} color="white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-700 text-base">
              Every project receives our complete attention to detail and commitment to delivering exceptional results.
            </p>
          </div>

          {/* Item 3 */}
          <div className="p-6 rounded-xl text-center">
            <div className="bg-red-800 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
              <Heart size={24} color="white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Passion</h3>
            <p className="text-gray-700 text-base">
              Our love for photography and videography drives us to constantly innovate and exceed expectations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};