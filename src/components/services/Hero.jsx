"use client";
import React from "react";
import Image from "next/image";

export default function Hero({ title, description ,image , image2}) {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 w-full">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center">

        {/* Left: Text Content */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          {/* Main Rounded Image */}
          <div className="relative w-[85%] max-w-md rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <Image
              src={image}
              alt="Retail Display"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Floating Circular Image */}
          <div className="absolute -bottom-8 -left-8 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
            <Image
              src={image2}
              alt="Shelving Detail"
              fill
              className="object-cover"
            />
          </div>
        </div>
     

        {/* Right: Image Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold  text-[#292a62] mb-6">
            {title}
          </h1>
          <p className="text-gray-600 text-lg mb-8">{description}</p>
        
        </div>
      </div>
    </section>
  );
}
