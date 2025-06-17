"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-12 mt-20">
      <div className="flex flex-col lg:flex-row justify-around items-center gap-10">
        {/* Image collage section */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-center mb-10">
          <div className="relative w-[90%] max-w-[500px] h-[500px]">
            {/* Background shape */}
            <div className="absolute -top-6 -left-4 w-full h-full bg-[#292a62] rounded-br-[80px] rounded-tl-[80px] z-0" />

            {/* Top image - visible on all screen sizes */}
            <div
              className="absolute top-0 right-0 w-[65%] sm:w-[70%] h-[300px] sm:h-[400px] z-10"
              style={{ transform: "translate(25%, -25%)" }}
            >
              <Image
                src="/about/img6.png"
                alt="Worker"
                fill
                className="object-cover rounded-t-full border-4 border-white shadow-lg"
              />
            </div>

            {/* Bottom image - hidden on mobile */}
            <div
              className="absolute bottom-0 left-0 w-[65%] sm:w-[70%] h-[300px] sm:h-[400px] hidden sm:block"
              style={{ transform: "translate(-25%, 25%)" }}
            >
              <Image
                src="/about/img2.png"
                alt="Manager"
                fill
                className="object-cover rounded-t-full border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Text content section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="font-semibold text-[#292a62] uppercase text-sm md:text-base pb-2">
            Why work with us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Why we’re the right choice <br className="hidden sm:block" /> for your Shop
          </h2>
          <p className="text-gray-600 mb-6 text-base sm:text-lg">
            Partner with a company dedicated to excellence in window and door installations,
            ensuring each project is handled with precision and care.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              "Unmatched Quality",
              "Expert Craftsmanship",
              "Customized Solutions",
              "Energy Efficiency",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 justify-center sm:justify-start text-gray-800"
              >
                <CheckCircle className="text-yellow-400 w-5 h-5 mt-1" />
                <span className="text-base sm:text-lg">{item}</span>
              </div>
            ))}
          </div>

          <div className="mb-10 flex justify-center lg:justify-start">
            <button className="bg-[#292a62] mt-2 text-white px-6 py-3 text-lg rounded-md font-semibold hover:bg-blue-950 duration-700">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center lg:text-left">
            <div>
             
            </div>
            <div>
              <p className="text-3xl font-bold text-[#292a62]">1,000+</p>
              <p className="text-sm text-gray-600">Solutions Delivered</p>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};


export default WhyChooseUs;