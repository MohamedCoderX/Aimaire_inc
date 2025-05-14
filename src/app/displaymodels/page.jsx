'use client';
import DisplayBanner from '@/components/DisplayBanner';
import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';

const page = () => {
  const models = [
    {
      name: 'Basic Plus',
      tagline: 'Simple, efficient, and budget-friendly',
      description:
        'Ideal for startups or small-scale stores. Basic Plus delivers reliable performance with straightforward usability and minimal cost.',
      image: '/products/basicplus.jpeg',
    },
    {
      name: 'Aimaire Show',
      tagline: 'Sleek visibility for impactful merchandising',
      description:
        'Designed for visual impact, this model maximizes product visibility and draws attention to highlight key offerings.',
      image: '/products/aimaire.png',
    },
    {
      name: 'Elegant Pro',
      tagline: 'A blend of aesthetics and performance',
      description:
        'Combines premium finishes with high-function features, perfect for modern retail spaces seeking sophistication.',
      image: '/products/elegantpro.jpeg',
    },
    {
      name: 'Prime Max',
      tagline: 'Premium design with smart functionality',
      description:
        'Loaded with intelligent design features like modular shelving and lighting — tailored for high-end setups.',
      image: '/products/prime-max.jpeg',
    },
    {
      name: 'Aspiro Top',
      tagline: 'Rugged, heavy-duty solutions for retail',
      description:
        'Built for durability and heavy use in demanding environments. Ideal for warehouse retail or rugged display needs.',
      image: '/products/aspirotop.jpeg',
    },
    {
      name: 'Geloto Chief',
      tagline: 'Specialized for gelato ice cream display',
      description:
        'Optimized for temperature control and product appeal, this unit is crafted for artisan gelato and dessert shops.',
      image: '/products/galetto.png',
    },
  ];

  return (
    <div>
      <DisplayBanner
        title={'Explore Our Signature Display Systems'}
        description={
          'Crafted to elevate your business presentation — each model designed for visual appeal, durability, and optimal functionality.'
        }
        image={'/displaybanner.jpeg'}
      />

      <section className="bg-white text-[#292a62] py-24 px-6 md:px-16 ">
        <div className="text-center mb-16 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            Our <span className="">Signature Display Systems</span>
          </h2>
          <p className="text-md text-[#292a62] max-w-2xl mx-auto">
            Engineered with purpose — to elevate your presentation and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {models.map((model, i) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-200 hover:border-yellow-400 transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  loading='lazy'
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-yellow-400 bg-[#292a62] max-w-fit px-4 py-2  rounded-full mb-3">
                  <SparklesIcon className="w-5 h-5" />
                  <p className="uppercase text-sm font-semibold tracking-wider">{model.name}</p>
                </div>
                <p className="text-xl font-semibold text-[#292a62] mb-1">{model.tagline}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{model.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
<CTABanner/>
      <Footer />
    </div>
  );
};

export default page;
