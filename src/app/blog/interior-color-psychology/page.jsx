'use client'
import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-black py-10">
      <div className="max-w-7xl mx-auto px-6 py-10 mt-20 bg-white shadow-xl rounded-2xl font-sans transition-all duration-300 hover:shadow-2xl">

        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#292a62] leading-tight">
          Interior Color Psychology: How to Choose the Right Shades for Your Business
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center text-sm space-x-3 text-[#292a62] mb-6">
          <span className="bg-yellow-400 px-3 py-1 rounded-full">🎨 Aimaire Insights</span>
          <span className="bg-yellow-400 px-3 py-1 rounded-full">🏢 Interior & Retail Design</span>
          <span className="bg-yellow-400 px-3 py-1 rounded-full">📅 15 May 2025</span>
          <span className="bg-yellow-400 px-3 py-1 rounded-full">⏱️ 4 minutes read</span>
        </div>

        {/* Introduction */}
        <p className="text-[#292a62] mb-4 leading-relaxed">
          Color is more than just decoration—it’s silent communication. It tells your customers who you are, what you value, and how you want them to feel when they enter your space. In commercial and retail environments, the strategic use of color can drive emotion, influence decision-making, and even boost business performance.
        </p>
        <p className="text-[#292a62] mb-6 leading-relaxed">
          Whether it’s a bold red restaurant or a serene green wellness studio, the right colors can make a world of difference in perception, mood, and buying behavior.
        </p>

        {/* Image */}
        <Image
          src="/blog/model-cc.jpg"
          width={800}
          height={600}
          alt="Colorful interior"
          className="rounded-xl mb-8 w-full object-cover shadow-md"
        />

        {/* Section 1: Color Psychology */}
        <h2 className="text-3xl font-bold mb-4 text-[#292a62]">
          🎯 The Science Behind Color in Business Interiors
        </h2>
        <p className="text-[#292a62] mb-4 leading-relaxed">
          Every color evokes a psychological and emotional response. By understanding these associations, businesses can create environments that align with their brand values and customer expectations:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-[#292a62] mb-6">
          <li><strong>Blue</strong>: Trust, stability, calm — ideal for clinics, law firms, and banks.</li>
          <li><strong>Yellow</strong>: Optimism, energy, creativity — perfect for cafes, coworking spaces, and retail.</li>
          <li><strong>Green</strong>: Wellness, renewal, balance — great for spas, yoga studios, and eco brands.</li>
          <li><strong>Red</strong>: Appetite, urgency, excitement — works well in restaurants and fast-paced stores.</li>
          <li><strong>Neutrals</strong>: Simplicity, flexibility, professionalism — ideal for modern offices and showrooms.</li>
        </ul>

        {/* Pull Quote */}
        <div className="bg-yellow-400 text-center px-6 py-6 text-lg italic font-medium text-[#292a62] rounded-lg mb-8 shadow-inner">
          “Color doesn’t just influence feelings—it silently directs behavior. The right shade can increase trust, trigger appetite, or calm nerves.”
        </div>

        {/* Section 2: Strategy */}
        <h2 className="text-2xl font-bold text-[#292a62] mb-4">
          🛠️ Designing With Purpose
        </h2>
        <p className="text-[#292a62] mb-6 leading-relaxed">
          At Aimaire, we don’t just pick colors for aesthetics—we design with strategy and purpose. We consider lighting, materials, and layout to ensure the selected palette aligns with your goals and space functionality.
        </p>

        <ul className="text-[#292a62] space-y-3 mb-10">
          <li>✔️ Lighting — how natural and artificial light impact color tones.</li>
          <li>✔️ Material texture — matte vs gloss changes perception and tone.</li>
          <li>✔️ Zoning — using color to differentiate work areas, walkways, or focal zones.</li>
        </ul>

        {/* Second Image */}
        <img
          src='/blog/model-cc1.png'
          alt="Business color layout"
          className="rounded-xl w-full object-cover shadow-md mt-4 mb-10"
        />

        {/* Section 3: Branding */}
        <h2 className="text-2xl font-bold text-[#292a62] mb-4">
          🔑 Brand-Driven Color Strategy
        </h2>
        <p className="text-[#292a62] mb-6 leading-relaxed">
          Your color palette should speak your brand language. A vibrant, youthful brand may benefit from bold contrasts, while a luxury service might lean into subdued tones with metallics or texture-rich finishes. Our team helps tailor your interior’s color choices to enhance branding, user engagement, and business goals.
        </p>

        {/* Final Thoughts */}
        <h2 className="text-2xl font-bold text-[#292a62] mb-4">
          💡 Final Thought
        </h2>
        <p className="text-[#292a62] mb-6 leading-relaxed">
          The right color doesn’t just make a space beautiful—it makes it memorable and effective. When you walk into a space that feels right, chances are the colors are doing their job. At Aimaire, we help businesses transform blank walls into brand statements and customer experiences.
        </p>
      </div>
    </div>
  );
}
