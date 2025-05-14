'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CTABanner = () => {
  return (
    <section className="relative h-[40vh] w-[80%] mx-auto rounded-full mb-6">
      {/* Background Image */}
      <Image
        src="/calltoaction.jpeg" // 🔥 Replace with your CTA background image path
        alt="CTA Banner Background"
        fill
        priority
        className="object-cover object-center rounded-full"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10 rounded-full" />

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Ready to Elevate Your Commercial Space?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-6">
          Partner with us for tailored display models, commercial setups, and turnkey solutions designed to make your brand shine.
        </p>
        <Link href="/contact">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-[#292a62] font-semibold text-lg px-8 py-4 rounded-md transition duration-300">
            Contact Us Today
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CTABanner;
