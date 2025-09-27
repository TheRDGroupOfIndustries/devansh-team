import React from "react";

const StatsSection = () => {
  return (
    <div>
      <div className="mt-16 grid md:grid-cols-4 gap-8">
        {/* Happy Clients */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-heart-fill text-white text-2xl"></i>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
          <p className="text-gray-600">Happy Clients</p>
        </div>

        {/* Events Covered */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-camera-fill text-white text-2xl"></i>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">1000+</h3>
          <p className="text-gray-600">Events Covered</p>
        </div>

        {/* Satisfaction Rate */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-award-fill text-white text-2xl"></i>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">98%</h3>
          <p className="text-gray-600">Satisfaction Rate</p>
        </div>

        {/* Years Experience */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-time-fill text-white text-2xl"></i>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">8+</h3>
          <p className="text-gray-600">Years Experience</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
