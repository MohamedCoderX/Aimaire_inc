"use client";
import { useState } from "react";
import Image from "next/image";

const OurApproach = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const tabData = {
    mission: {
      title: "Our Mission",
      text: `Our mission is to transform the factory and industry sectors through sustainable practices, innovation, and advanced technology, fostering growth that benefits both business and the environment.`,
      points: [
        "Sustainable Manufacturing Practices",
        "Advanced Technology Integration",
        "Community Environmental Responsibility",
        "Innovation-Driven Growth",
      ],
      image: "/about/mission.png",
    },
    vision: {
      title: "Our Vision",
      text: `We envision a future where our smart solutions shape efficient, stylish, and sustainable environments for every commercial space.`,
      points: ["Smart Design for Efficiency", "Custom-Built Solutions", "Future-Proof Innovations"],
      image: "/about/vision.png",
    },
    value: {
      title: "Our Value",
      text: `We’re built on values of integrity, precision, and creativity—ensuring lasting satisfaction for every client.`,
      points: ["Client-Centric Approach", "High-Quality Materials", "Reliable Delivery"],
      image: "/about/value.png",
    },
  };

  return (
    <div className="bg-[#12132d] relative">
      {/* Background glow effects */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="md:w-1/2">
            <p className="font-semibold text-white uppercase text-sm md:text-base pb-2">Our Approach</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 leading-tight">
              Seamless and reliable solutions
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-white text-base sm:text-lg">
              We deliver tailored window and door solutions, ensuring style, functionality, and expert installation for satisfaction.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="overflow-x-auto mb-8">
          <div className="inline-flex gap-4 min-w-full">
            {Object.entries(tabData).map(([key, tab]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium whitespace-nowrap text-sm sm:text-base md:text-lg transition-all duration-300 ${
                  activeTab === key
                    ? "bg-yellow-400 text-[#12132d]"
                    : "text-white hover:bg-yellow-400/10"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="lg:w-1/2 space-y-4">
            <p className="text-white text-base sm:text-lg">{tabData[activeTab].text}</p>
            <ul className="space-y-2">
              {tabData[activeTab].points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-400 font-medium text-base sm:text-lg">
                  • {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 w-full">
            <Image
              src={tabData[activeTab].image}
              alt={tabData[activeTab].title}
              width={500}
              height={500}
              className="rounded-md shadow-md object-cover w-full h-auto max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
