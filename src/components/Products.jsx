"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const displaySystems = [
  {
    name: "Prime Max",
    desc: "A premium design with smart functionality for high-end visibility.",
    image: "/products/prime-max.jpeg",
  },
  {
    name: "Geloto Chief",
    desc: "Specialized for gelato and ice cream display.",
    image: "/products/Galetto.png",
  },
  {
    name: "Aimaire Show",
    desc: "Sleek and modern displays for effective merchandising.",
    image: "/products/aimaire.png",
  },
];

const kitchenEquipments = [
  { name: "Cooking Ranges & Ovens", image: "/products/cooking.jpeg" },
  { name: "Refrigeration Systems", image: "/products/refrigertaor.jpeg" },
  { name: "Prep Tables & Countertops", image: "/products/perp.jpeg" },
];

const Products = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging && scrollRef.current) {
        const container = scrollRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (Math.ceil(container.scrollLeft) >= maxScrollLeft) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: container.clientWidth / 2, behavior: "smooth" });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isDragging]);

  return (
    <section className="bg-white py-20 px-6 md:px-16 text-[#292a62]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Featured Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Showcasing our premier display systems and kitchen essentials
          </motion.p>
        </div>

        {/* Display Systems Carousel */}
        <motion.div
        //  initial={{ opacity: 0, y: 40 }} 
        //  whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <h3 className="text-2xl font-semibold mb-4">Featured Display Systems</h3>
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-1"
              onMouseEnter={() => setIsDragging(true)}
              onMouseLeave={() => setIsDragging(false)}
            >
              {displaySystems.map((item, idx) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  key={idx}
                  className="min-w-[280px] md:min-w-[340px] bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
                >
                  <div className="relative w-full h-56 overflow-hidden rounded-t-xl">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-t-xl hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-xl mb-2">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Kitchen Equipment Grid */}
        <motion.div
          // initial={{ opacity: 0, y: 40 }}
          // whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold mb-6">Commercial Kitchen Equipment</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {kitchenEquipments.map((equip, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl shadow-md hover:shadow-lg transition duration-300 group overflow-hidden relative"
              >
                <div className="relative w-full h-60">
                  <Image
                    src={equip.image}
                    alt={equip.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-xl z-10 group-hover:bg-black/60 transition-all"></div>
                 
                  <h4 className="text-2xl absolute z-20 text-white bottom-4 left-4 font-bold">
          {equip.name}
        </h4>

                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <div className="flex items-center justify-center mt-10">
          <Link
            href="/displaymodels"
            className="bg-[#292a62] text-white px-6 py-4 rounded-full text-md font-medium flex gap-3 hover:bg-yellow-300 hover:text-black transition-all duration-300"
          >
            More Products <HugeiconsIcon icon={ArrowUpRight02Icon} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
