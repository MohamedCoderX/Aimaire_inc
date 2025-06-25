import Image from "next/image";
import React from "react";



const Offers = ({offers,title,description}) => {
  return (
    <section className="relative bg-[#12132d] py-24 px-6 md:px-12 lg:px-20 overflow-hidden text-white text-center">
      {/* Background Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl z-0" />

      {/* Header */}
      <div className="relative z-10 max-w-5xl mx-auto mb-20">
        <h5 className="text-yellow-400 text-base font-semibold tracking-widest uppercase">
          {title}
        </h5>
        <h2 className="text-4xl md:text-4xl font-bold mt-4 leading-tight">
          {description}
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6 rounded-full" />
      </div>

      {/* Cards */}
      <div className={`relative z-10 grid grid-cols-1 sm:grid-cols-2 ${offers.length == 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"} gap-10 max-w-7xl mx-auto `}>
        {offers.map((step, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl text-white transition-transform transform hover:scale-105 hover:shadow-yellow-100/10 duration-300"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={step.image}
                alt={`aimaire inc ${step.title}`}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="text-sm text-white/70 mt-2">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
