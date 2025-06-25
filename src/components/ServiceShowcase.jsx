"use client";
import { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const services = [
  {
    title: "Retail Display Design",
    image: "/services/retail-1.jpeg",
    description: "Tailor-made shelving and retail presentation to enhance product visibility.",
  },
  {
    title: "Kitchen Equipment Supply",
    image: "/services/kitchen-1.jpg",
    description: "High-performance equipment for efficient commercial kitchen operations.",
  },
  {
    title: "Custom Kiosks & Karts",
    image: "/services/kart.png",
    description: "Mobile and modular solutions for food stalls and custom retail carts.",
  },
  {
    title: "Supermarket Racks",
    image: "/services/supermarket.jpg",
    description: "Impulse racks and optimized shelving for modern supermarkets.",
  },
  // {
  //   title: "Refrigeration Solutions",
  //   image: "/services/refrigerator.jpeg",
  //   description: "Reliable and efficient cold storage & display systems.",
  // },
  {
    title: "Franchise Setup",
    image: "/services/franchise.jpeg",
    description: "Turnkey franchise solutions from interior to installation.",
  },
];

const ServiceShowcase = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // drag sensitivity
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction) => {
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging && scrollRef.current) {
        const container = scrollRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
  
        if (Math.ceil(container.scrollLeft) >= maxScrollLeft) {
          // Scroll back to start smoothly
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Continue scrolling forward
          container.scrollBy({ left: container.clientWidth / 2, behavior: "smooth" });
        }
      }
    }, 2000); // Scroll every 4 seconds
  
    return () => clearInterval(interval);
  }, [isDragging]);

  return (
    <div className="relative py-16 bg-[#292a62] text-black">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-8">
        {/* Left content */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <p className="text-xs uppercase text-[#d2a85a] mb-2">Complete Setup Solutions</p>
          <h2 className="text-5xl font-bold mb-4 text-white">We Offer End-to-End Commercial Services</h2>
          <p className="text-white mb-6">
            From concept to execution, Aimaire provides high-end commercial setups tailored to your business vision.
          </p>
          <div className="flex gap-4">
            <button onClick={() => scroll("left")} className="p-2 bg-white text-[#292a62] rounded-full hover:bg-[#1f1f4c] transition">
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button onClick={() => scroll("right")} className="p-2 text-[#292a62] bg-white rounded-full hover:bg-[#1f1f4c] transition">
              <ChevronRightIcon className="w-5 h-5" />
            </button>

          </div>
          <div className="flex items-start justify-start mt-10">
          <Link
            href="/services"
            className="bg-yellow-400 text-[#292a62] px-6 py-4 rounded-full text-md font-medium flex gap-3 hover:bg-black hover:text-white transition-all duration-300"
          >
            Services <HugeiconsIcon icon={ArrowUpRight02Icon} />
          </Link>
        </div>
        </div>

        {/* Cards section */}
        <div
          className="md:w-2/3 overflow-x-hidden"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className=" flex gap-6 select-none cursor-grab active:cursor-grabbing transition-all ease-in-out duration-300">
            
            {services.map((service, idx) => (
              <div
                key={idx}
                className=" min-w-[250px] md:min-w-[350px] bg-white rounded-xl shadow-md overflow-hidden group transition hover:shadow-xl hover:scale-[1.02]"
              >
               
  
                <div className="relative h-60 w-full">
                  <Image
                    src={service.image}
                    alt={`aimaire inc ${service.title}`}
                    fill
                    loading="lazy"
                    className="object-cover transition group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-[#292a62]">{service.title}</h3>
                  <p className="text-md text-gray-600 mt-2  transition-opacity duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceShowcase;
