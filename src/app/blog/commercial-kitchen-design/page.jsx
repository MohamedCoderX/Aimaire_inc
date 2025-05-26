'use client'
import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-black py-10">
      <div className="max-w-7xl mx-auto px-6 py-10 mt-20 bg-white shadow-xl rounded-2xl font-sans transition-all duration-300 hover:shadow-2xl">

        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#292a62] leading-tight">
          How to Design a Functional Yet Stylish Commercial Kitchen
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center text-sm space-x-3 text-[#292a62] mb-6">
          <span className="bg-yellow-400 px-3 py-1 rounded-full">🏷️ Aimaire Insights</span>
          <span className="bg-yellow-400 px-3 py-1 rounded-full">🍽️ Kitchen Setup</span>
          <span className="bg-yellow-400 px-3 py-1 rounded-full">📅 15 May 2025</span>
          <span className="bg-yellow-400 px-3 py-1 rounded-full">⏱️ 3 minute read</span>
        </div>

        {/* Introduction */}
        <p className="text-[#292a62] mb-6 leading-relaxed">
          Designing a commercial kitchen requires a careful balance between functionality, safety, and visual appeal. At Aimaire, we understand that a well-designed kitchen doesn't just look good—it also improves workflow, reduces errors, and keeps staff motivated.
        </p>

        {/* Hero Image */}
        <Image
          src="/blog/model-kk.jpeg"
          width={800}
          height={600}
          alt="Stylish commercial kitchen"
          className="rounded-xl mb-8 w-full object-cover shadow-md"
        />

        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-4 text-[#292a62]">
          Prioritizing Flow & Functionality
        </h2>

        {/* Paragraph */}
        <p className="text-[#292a62] mb-6 leading-relaxed">
          A key principle in commercial kitchen design is **flow planning**. Dividing the space into clear zones—preparation, cooking, and cleaning—helps minimize movement, reduces cross-contamination, and increases speed. Smart layouts reduce staff collisions and improve communication.
        </p>

        {/* Checklist */}
        <ul className="text-[#292a62] space-y-3 mb-8 pl-5 list-disc">
          <li>Clear workflow zones for prep, cook, clean</li>
          <li>Stainless steel & commercial-grade quartz for hygiene</li>
          <li>Optimized ventilation and layered lighting</li>
          <li>Slip-resistant flooring and ergonomic prep heights</li>
        </ul>

        {/* Pull Quote */}
        <div className="bg-yellow-400 text-center px-6 py-6 text-lg italic font-medium text-[#292a62] rounded-lg mb-8 shadow-inner">
          “Designing a kitchen isn't just about layout—it's about engineering a space for excellence, safety, and speed.”
        </div>

        {/* Style Section */}
        <h2 className="text-2xl font-bold text-[#292a62] mb-4">
          Style Meets Performance
        </h2>
        <p className="text-[#292a62] mb-6 leading-relaxed">
          For open or front-facing kitchens, **aesthetic considerations** are key. Custom display counters, clean lines, and warm finishes turn your kitchen into a branded experience. Sleek surfaces and hidden wiring ensure the kitchen looks as professional as it functions.
        </p>

        {/* Image */}
        <Image
          src="/blog/model-kk1.jpg"
          width={800}
          height={600}
          alt="Kitchen design aesthetic"
          className="rounded-xl mb-8 w-full object-cover shadow-md"
        />

        {/* Final Thoughts */}
        <h2 className="text-2xl font-bold text-[#292a62] mb-4">
          The Aimaire Advantage
        </h2>
        <p className="text-[#292a62] mb-6 leading-relaxed">
          Whether it’s a compact café or a high-volume restaurant, our team designs kitchens that deliver seamless service, top-tier hygiene, and a touch of class. With Aimaire’s expertise, your commercial kitchen becomes a high-performance engine for your business.
        </p>

        <div className="bg-yellow-400 text-center px-6 py-6 text-lg font-semibold text-[#292a62] rounded-lg shadow-md">
          Need help planning your dream kitchen? Contact Aimaire Inc. today for a custom layout consultation.
        </div>

      </div>
    </div>
  );
}
