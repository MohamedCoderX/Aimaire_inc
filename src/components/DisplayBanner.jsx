'use client';
import Image from 'next/image';

const DisplayBanner = ({ title, description, image }) => {
  return (
    <section className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] py-40 md:py-0">
      {/* Background Image */}
      <Image
        src={image}
        alt="Display Models Banner"
        fill
        priority
        loading='lazy'
        className="object-cover object-center"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-2xl sm:text-4xl md:text-6xl lg:text-6xl font-bold mb-2 sm:mb-4">
          {title}
        </h1>
        <p className="text-gray-300 max-w-md sm:max-w-lg md:max-w-2xl text-sm sm:text-base md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
};

export default DisplayBanner;
