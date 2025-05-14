"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const CTABanner = () => {
  return (
    <section className="relative w-[90%] max-w-7xl mx-auto rounded-2xl overflow-hidden my-10 min-h-[300px] md:min-h-[400px] lg:min-h-[300px]">
      {/* Background Image */}
      <Image
        src="/calltoaction.jpeg"
        alt="CTA Banner Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 ">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Ready to Elevate Your Commercial Space?
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mb-6">
          Partner with us for tailored display models, commercial setups, and turnkey solutions designed to make your brand shine.
        </p>
        <Link href="/contact">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-[#292a62] font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-md transition duration-300">
            Contact Us Today
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CTABanner;
