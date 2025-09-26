import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white mt-16">
      {/* Background Image */}
      <Image
        src='/hero-bg.jpg'
        alt="Hero Background"
        fill
        priority
        className="object-cover -z-10"
      />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="space-y-6">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="block text-white text-5xl md:text-6xl font-bold">Professional</span>
            <span className="block text-yellow-400 text-5xl md:text-6xl font-bold">Event</span>
            <span className="block text-yellow-400 text-5xl md:text-6xl font-bold">Photography</span>
            <span className="block text-white text-5xl md:text-6xl font-bold">& Cinematic</span>
            <span className="block text-white text-5xl md:text-6xl font-bold">Videography</span>
          </h1>

          {/* Paragraph */}
          <p className="text-lg max-w-lg font-semibold">
            Capturing corporate events, conferences, and special occasions with
            cinematic excellence. From Varanasi to destinations across India, we
            deliver premium visual storytelling.
          </p>

          {/* Buttons */}
          <div className="flex space-x-6">
            <button className="bg-red-600 text-white px-8 py-4 rounded-md text-lg font-semibold transition hover:scale-110 hover:bg-red-700 cursor-pointer">
              Book Your Event
            </button>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold transition hover:scale-110 hover:bg-blue-700 cursor-pointer">
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
        <div className="relative flex justify-center">
          <Image
            src='/hero-side.jpg'
            alt="Photography Team"
            className="rounded-2xl shadow-lg object-cover"
            width={500}
            height={800}
          />
          {/* Award Badge */}
          <div className="absolute bottom-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold shadow-lg">
            Award Winning <br /> Photography Team
          </div>
        </div>

      </div>
    </section>
  );
};