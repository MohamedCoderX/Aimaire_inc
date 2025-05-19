'use client';
import Image from 'next/image';
import {
  LightBulbIcon,
  Cog6ToothIcon,
  TruckIcon,
  ShoppingCartIcon,
  CubeIcon,
  BuildingStorefrontIcon
} from '@heroicons/react/24/outline';
import DisplayBanner from '@/components/DisplayBanner';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import Link from 'next/link';

const services = [
  {
    title: "Retail Display",
    subtitle: "Design & Fabrication",
    image: "/services/retail-1.jpeg",
    link:'/retail',
    icon: LightBulbIcon,
  },
  {
    title: "Commercial Kitchen",
    subtitle: "Planning & Equipment Supply",
    image: "/services/kitchen-1.jpg",
    link:'/kitchen',
    icon: Cog6ToothIcon,
  },
  {
    title: "Custom Kiosks",
    subtitle: "& Karts",
    image: "/services/kart.png",
    link:'/kiosk',
    icon: TruckIcon,
  },
  {
    title: "Supermarket Racks",
    subtitle: "& Impulse Racks",
    image: "/services/supermarket.jpg",
    link:'/supermarket',
    icon: ShoppingCartIcon,
  },
  {
    title: "Refrigeration",
    subtitle: "Solutions",
    image: "/services/refrigerator.jpeg",
    link:'/refrigeration',
    icon: CubeIcon,
  },
  {
    title: "Full Franchise Setup",
    subtitle: "(Franchise Plus)",
    image: "/services/franchise.jpeg",
    link:'/franchise',
    icon: BuildingStorefrontIcon,
  },
];

const Page = () => {
  return (
   <div>
    <DisplayBanner title={"Services We Offer"} description="Comprehensive solutions for your commercial needs." image="/banner/design.jpg" />
     <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#292a62] leading-tight">
          We Offer Complete Commercial Setup Solutions
        </h2>
        <p className="mt-4 text-gray-500  md:text-lg text-md">
  From designing captivating retail displays to supplying top-grade commercial kitchen equipment,
  we deliver tailored solutions for every commercial need — ensuring functionality, style, and success.
</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <Link href={service.link}>
          <div
            key={index}
            className="relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Background Image */}
            <div className="relative w-full h-60">
              <Image
                src={service.image}
                alt={service.title}
                fill
                loading='lazy'
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Icon */}
            <div className="absolute top-4 right-4 bg-yellow-400 p-3 rounded-xl shadow-md">
              <service.icon className="h-8 w-8 text-[#292a62]" />
            </div>

            {/* Content */}
            <div className="p-6 bg-white">
              <p className="text-gray-500 text-sm">{service.title}</p>
              <h3 className="text-xl font-semibold text-[#292a62] mt-1">
                {service.subtitle}
              </h3>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </section>
    <CTABanner/>
    <Footer/>
   </div>
  );
};

export default Page;
