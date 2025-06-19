"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { HugeiconsIcon } from "@hugeicons/react";
import { Download04Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";

const Carousel = () => {
  const slides = [
    {
      title: "Tailored Interior & Equipment Solutions",
      text: "We specialize in custom interior designs and fully-equipped setups for bakeries, restaurants, and commercial spaces.",
      buttonText1: "Contact Us",
      buttonText2: "Download Brochure",
      image: "/banner/restaurnant.jpg",
    },
    {
      title: "Complete Commercial Kitchen & Display Systems",
      text: "Outfit your business with high-quality, fully integrated kitchen systems and display models.",
      buttonText1: "Get Started",
      buttonText2: "Request Brochure",
      image: "/banner/kitchen.jpg",
    },
    {
      title: "Complete Store Setup & Franchise Solutions",
      text: "Start your franchise with confidence. We handle everything from custom designs to essential equipment.",
      buttonText1: "Contact Us",
      buttonText2: "Download Brochure",
      image: "/banner/retail.jpeg",
    },
    {
      title: "Comprehensive Design & Equipment Solutions",
      text: "We offer custom design models and top-tier equipment for all types of foodservice establishments.",
      buttonText1: "Explore Solutions",
      buttonText2: "Download Brochure",
      image: "/banner/design.jpg",
    },
  ];

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="w-full h-[85vh] md:h-screen"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[85vh] md:h-screen">
            {/* Optimized Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0} // eager load only the first slide image
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center text-white px-4 pt-16 md:px-20 md:pt-32">
              <h2 className="text-2xl md:text-5xl lg:text-8xl font-bold mb-2 md:mb-6 max-w-7xl">
                {slide.title}
              </h2>
              <p className="mb-4 md:mb-10 text-sm md:text-lg open">
                {slide.text}
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                <Link href="/contact">
                <button className="flex bg-[#292a62] px-6 py-3 text-md md:text-base rounded-lg text-white hover:bg-white hover:text-black transition">
                  {slide.buttonText1}
                </button>
                </Link>
                <a
  href="/Aimaire-inc-brouchure .pdf"
  download
  className="bg-white px-6 py-3 text-md md:text-base rounded-lg text-black transition flex items-center gap-2 hover:bg-black hover:text-white"
>
  {slide.buttonText2}
  <HugeiconsIcon icon={Download04Icon} />
</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
