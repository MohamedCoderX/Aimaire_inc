'use client'
import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-black py-10">
      <div className="max-w-7xl mx-auto px-6 py-10 mt-20 bg-white shadow-xl rounded-2xl font-sans transition-all duration-300 hover:shadow-2xl">

        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#292a62] leading-tight">
          Creating Masterpieces One Room At A Time
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center text-sm space-x-3 text-[#292a62] mb-6">
          <span className="bg-yellow-400 px-3 py-1 rounded-full">🏷️ Windstripe</span>
          <span className="bg-yellow-400 px-3 py-1 rounded-full">🏢 Space Craft Studio</span>
          <span className="bg-yellow-400 px-3 py-1 rounded-full">📅 31 May</span>
          <span className="bg-yellow-400 px-3 py-1 rounded-full">⏱️ 0 minutes read</span>
        </div>

        {/* Introduction Paragraphs */}
        <p className="text-[#292a62] mb-4 leading-relaxed">
          With worldwide annual spending on digital advertising surpassing $600 billion, it’s no surprise that different approaches to online marketing are becoming available. One of these new approaches is performance marketing—a global performance-focused strategy.
        </p>
        <p className="text-[#292a62] mb-6 leading-relaxed">
          Keep reading to learn how performance marketing works, how it compares to global marketing, plus expert insights into the benefits and risks of performance marketing—and how it can affect your company’s long-term success and profitability.
        </p>

        {/* Main Image */}
        <Image
          src="/blog/model-ss.jpg"
          width={800}
        height={600}
          alt="aimaire inc Modern bedroom"
          className="rounded-xl mb-8 w-full object-cover shadow-md"
        />

        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-4 text-[#292a62]">
          Creating Masterpieces One Room At A Time
        </h2>

        {/* Supporting Paragraph */}
        <p className="text-[#292a62] mb-6 leading-relaxed">
          Performance marketing is an approach to digital marketing and advertising where businesses only pay when a specific result is achieved. These results could be new leads, clicks, or other outcomes triggered purely by the advertiser’s paid resources. Performance marketing works better than sales funnels, mass media, or offline advertising.
        </p>

        {/* Pull Quote */}
        <div className="bg-yellow-400 text-center px-6 py-6 text-lg italic font-medium text-[#292a62] rounded-lg mb-8 shadow-inner">
          “Diam luctus nostra dapibus varius et semper semper rutrum ad risus felis eros. Cursus libero viverra tempus netus diam vestibulum”
        </div>

        {/* Extra Paragraph */}
        <p className="text-[#292a62] mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute.
        </p>

        {/* Checklist */}
        <ul className="text-[#292a62] space-y-3 mb-10">
          <li>✔ We track every dollar</li>
          <li>✔ We’re an open book</li>
          <li>✔ 000° goes to the field</li>
          <li>✔ Receives the highest grades</li>
        </ul>

        {/* Second Section */}
        <h2 className="text-2xl font-bold text-[#292a62] mb-4">
          Easy & Most Powerful Server Platform.
        </h2>

        <p className="text-[#292a62] mb-4 leading-relaxed">
          With worldwide annual spending on digital advertising surpassing $600 billion, it’s no surprise that different approaches to online marketing are becoming available. One of these new approaches is performance marketing.
        </p>

        {/* Second Image */}
        <img
          src='/blog/model-ss1.jpg'
          alt="aimaire inc Dining design"
          fill
          className="rounded-xl w-full object-cover shadow-md mt-4"
        />
      </div>
    </div>
  );
}