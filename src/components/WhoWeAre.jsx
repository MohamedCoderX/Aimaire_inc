"use client";
import {
  CurrencyDollarIcon,
  UserGroupIcon,
  SparklesIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import { ArrowUpRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function WhoWeAre() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <p className="text-sm font-semibold text-black uppercase tracking-widest mb-2">- Who We Are</p>
            <h2 className="text-4xl font-extrabold text-[#292a62] leading-tight">
              Aspire to Inspire
            </h2>
            <p className="text-gray-600 mt-4 text-base leading-relaxed">
              At <strong>Aimaire Inc.</strong>, we believe every space can inspire. As a new-generation company in the commercial equipment and retail display industry, we’re driven by innovation, aesthetics, and function.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-[#292a62] font-semibold">We specialize in:</p>
            {[
             
              	"Display Counters: Bakery, sweets, hot & cold, gelato, custom designs",
              "Refrigeration Units: Chillers, freezers, saladettes, undercounter coolers",
              	"Retail Fixtures: Wall racks, impulse racks, supermarket shelves, kiosks",
              "Commercial Kitchen: SS equipment, exhausts, worktables, full setup",
              	"Franchise Setup: Complete outlet design, brand support, POS integration",
              "Custom Fabrication: SS/PVD work, food carts, display props, branding units",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3 group transition-transform hover:translate-x-1 duration-300">
                <div className="w-2 h-2 mt-2 bg-[#292a62] rounded-full" />
                <p className="text-[#292a62] font-medium">{item}</p>
              </div>
            ))}
            <p className="text-gray-600 pt-4">
              Though fresh in the market, our team brings experience, creativity, and an unshakable commitment to quality.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 max-w-md">
            <img
              src="/about.png"
              alt="Design mockup"
              loading="lazy"
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
        </div>

        {/* Right Highlights with Icons */}
        <div className="space-y-2">
          {[
            {
              icon: <CurrencyDollarIcon className="h-6 w-6 text-white" />,
              title: "Transparent Pricing",
              desc: "We offer competitive and affordable rates for all services."
            },
            {
              icon: <UserGroupIcon className="h-6 w-6 text-white" />,
              title: "Professional Team",
              desc: "Our experts ensure every project is precise, on-time, and beautiful."
            },
            {
              icon: <SparklesIcon className="h-6 w-6 text-white" />,
              title: "Tailored Designs",
              desc: "Each project reflects the client’s brand, needs, and vision."
            },
            {
              icon: <BuildingStorefrontIcon className="h-6 w-6 text-white" />,
              title: "Franchise Setup Experts",
              desc: "From design to equipment, we help you launch faster and smarter."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="group flex items-start space-x-4 p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="min-w-[48px] h-12 w-12 rounded-full bg-[#292a62] flex items-center justify-center shadow">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#292a62] mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}

          {/* CTA Button */}
          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-3 bg-[#292a62] text-white px-6 py-3 rounded-full text-md font-medium hover:bg-yellow-300 hover:text-black transition-all duration-300"
            >
              More About Us <HugeiconsIcon icon={ArrowUpRight02Icon} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
