"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import ClientShowcase from "./ClientShowcase";

const testimonials = [
  {
    text: `Aimaire transformed our bakery into the most popular spot in town. The design, equipment, and service exceeded our expectations.`,
    name: "John Doe",
    role: "Bakery Owner",
  },
  {
    text: `Thanks to Aimaire, our restaurant setup was flawless, and we’re operating at full capacity in just weeks!`,
    name: "Jane Smith",
    role: "Restaurant Owner",
  },
  {
    text: `We loved the custom display counters – they added style and boosted our sales experience. Excellent work!`,
    name: "Michael Lee",
    role: "Retail Manager",
  },
  {
    text: `From kitchen layout to final equipment, Aimaire made everything seamless. True professionals!`,
    name: "Emily Clark",
    role: "Franchise Owner",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <section className="w-full bg-[#fdf9f6] py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <div className="space-y-10">
            <div>
              <span className="text-sm uppercase tracking-wide font-semibold text-yellow-500">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#292a62] mt-2">
                What Our Clients Say
              </h2>
            </div>

            <div className="relative h-[100px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 rounded-xl "
                >
                  {/* Animated quote */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute -top-11 -left-7 text-[100px] text-black pointer-events-none select-none"
                  >
                    “
                  </motion.div>

                  <p className="text-gray-700 text-lg leading-relaxed relative z-10">
                    {testimonial.text}
                  </p>
                  <div className="mt-6 relative z-10">
                    <p className="font-semibold text-[#292a62]">{testimonial.name}</p>
                    <p className="text-sm text-orange-500">{testimonial.role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-4">
              {/* Avatars + counter */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-[#f3d8c0]"></div>
                  <div className="w-10 h-10 rounded-full bg-[#d6e1ff]"></div>
                  <div className="w-10 h-10 rounded-full bg-[#ffdcdb]"></div>
                </div>
                <div>
                  <p className="text-xl font-bold text-[#292a62]">8545+</p>
                  <p className="text-sm text-gray-500">Satisfied Customers</p>
                </div>
              </div>

              {/* Prev/Next */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <ChevronLeftIcon className="w-5 h-5 text-[#292a62]" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <ChevronRightIcon className="w-5 h-5 text-[#292a62]" />
                </button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-3">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[#292a62] scale-110"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-md relative">
          <Image
            src="/testimonial.jpeg"
            alt="Interior Setup"
            layout="fill"
            objectFit="cover"
            className="rounded-xl relative"
            priority
          />
        </div>
 
      </div>
      {/* <img src="/quote.png" width={400} alt=""  className="absolute right-0"/> */}
      <ClientShowcase/>
    </section>
  );
};

export default Testimonial;
