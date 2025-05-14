'use client';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const projects = [
  { title: 'Interior work', tag: 'Interior', image: '/banner/restaurnant.jpg' },
  { title: 'Luxury Kitchen', tag: 'Kitchen', image: '/banner/kitchen.jpg' },
  { title: 'Display Model', tag: 'Display', image: '/products/aimaire.png' },
  { title: 'Retail Display', tag: 'Retail', image: '/banner/retail.jpeg' },
];

const ProjectShowcase = () => {
  return (
    <section className="bg-[#292a62] py-20 px-4 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <p className="text-sm uppercase text-yellow-400 tracking-wide font-medium">
              Our Projects
            </p>
            <h2 className="md:text-5xl text-3xl font-bold mt-2 leading-tight text-white">
  Projects We Have <span className="outlined-text font-bold">Done</span>
</h2>
          </div>
          <p className="mt-4 md:mt-0 text-gray-200 max-w-xl">
            Creating beautiful, functional spaces that reflect personality and meet business needs — Aimaire's approach combines design with precision.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((proj, i) => (
            <SwiperSlide key={i}>
              <motion.div
                // initial={{ opacity: 0, y: 30 }}
                // whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    loading='lazy'
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay only on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                 

                  {/* Text visible on hover */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition duration-500">
                    <p className="text-sm uppercase font-medium text-yellow-400">
                      {proj.tag}
                    </p>
                    <h3 className="text-lg font-semibold">{proj.title}</h3>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectShowcase;
