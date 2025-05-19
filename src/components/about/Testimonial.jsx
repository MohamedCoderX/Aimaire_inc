"use client"
import React, { useRef } from 'react';

const testimonials = [
  {
    name: 'David Lee',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    review:
      'Exceptional quality and outstanding service! The team guided us through every step, and our new windows look amazing.',
  },
  {
    name: 'Tom Marsh',
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
    review:
      'Outstanding communication and craftsmanship. The results exceeded our expectations.',
  },
  {
    name: 'Nai Jex',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    review:
      'Reliable, professional, and highly skilled. Every step was well-executed with great attention to detail.',
  },
  {
    name: 'Lara Kent',
    image: 'https://randomuser.me/api/portraits/women/46.jpg',
    review:
      'Could not be happier with the results! Timely and courteous service all the way.',
  },
  {
    name: 'John Smith',
    image: 'https://randomuser.me/api/portraits/men/47.jpg',
    review:
      'A seamless experience. The team was thorough, responsive, and incredibly helpful.',
  },
  {
    name: 'Tom Marsh',
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
    review:
      'Outstanding communication and craftsmanship. The results exceeded our expectations.',
  },
  {
    name: 'Nai Jex',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    review:
      'Reliable, professional, and highly skilled. Every step was well-executed with great attention to detail.',
  },
  {
    name: 'Lara Kent',
    image: 'https://randomuser.me/api/portraits/women/46.jpg',
    review:
      'Could not be happier with the results! Timely and courteous service all the way.',
  },
  {
    name: 'John Smith',
    image: 'https://randomuser.me/api/portraits/men/47.jpg',
    review:
      'A seamless experience. The team was thorough, responsive, and incredibly helpful.',
  },
];
const Testimonial = () => {
  const carouselRef = useRef(null);
  const cardsPerPage = 2; // Number of cards visible per group/scroll
  const totalPages = 4;

  const scrollTo = (pageIndex) => {
    if (carouselRef.current) {
      const cardWidth = 400 + 24; // 400px card + ~24px gap
      const scrollX = pageIndex * cardWidth * cardsPerPage;
      carouselRef.current.scrollTo({
        left: scrollX,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="font-semibold text-[#292a62] uppercase text-sm md:text-base pb-2">Client Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Client testimonials: your satisfaction matters
        </h2>
        <p className="text-gray-600 mb-8 max-w-3xl">
          We strive for excellence in every project. Our clients share their satisfaction and experiences,
          showcasing our commitment to quality and service.
        </p>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="w-full md:w-[400px] h-auto mb-10 md:h-[300px] snap-center bg-white shadow-xl border border-gray-100 rounded-xl p-6 flex-shrink-0 flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl text-gray-300 mb-4">“</div>
                <div className="flex mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6">{t.review}</p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <p className="font-semibold text-gray-900 text-lg">{t.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {[...Array(totalPages)].map((_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => scrollTo(pageIndex)}
              className="w-3 h-3 rounded-full bg-gray-300 hover:bg-yellow-400 transition"
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;