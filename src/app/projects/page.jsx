'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import DisplayBanner from '@/components/DisplayBanner';
import Footer from '@/components/Footer';

const categories = ['All', 'Retail', 'Interior', 'Display', 'Kitchen', 'Franchise'];

const projects = [
  {
    id: 1,
    title: 'Retail Store Concept',
    category: 'Retail',
    image: '/retail/re-3.jpg',
  },
  {
    id: 2,
    title: 'Modern Kitchen Setup',
    category: 'Kitchen',
    image: '/kitchen/kit-11.webp',
  },
  {
    id: 3,
    title: 'Franchise ',
    category: 'Franchise',
    image: '/kiosk/kiosk-7.jpeg',
  },
  {
    id: 4,
    title: 'Luxury Interior Design',
    category: 'Interior',
    image: '/interior/interior-3.jpg',
  },
  {
    id: 5,
    title: 'Display Model A',
    category: 'Display',
    image: '/products/elegantpro.jpeg',
  },
  {
    id: 6,
    title: 'Minimal Kitchen Unit',
    category: 'Kitchen',
    image: '/kitchen/kit-6.jpg',
  },
];

const Page = () => {
  const [selected, setSelected] = useState('All');

  const filtered = selected === 'All' ? projects : projects.filter(p => p.category === selected);

  return (
   <>
 <DisplayBanner title={'Our Projects'} description='Explore our diverse range of projects across various categories, showcasing our expertise in retail, interior design, kitchen setups, and more.' image={"/products/aimaire.png"}/>
    <section className="py-16 px-4 sm:px-8 md:px-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
        <div className="flex justify-center flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                selected === cat
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filtered.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <div className="relative w-full h-72">
              <Image
                src={project.image}
                alt={`aimaire inc ${project.title}`}
                fill
                loading='lazy'
                className="object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
              <p className="text-sm text-gray-500">{project.category}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
    <Footer/>
    </>
  );
}

export default Page;