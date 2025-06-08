

import Hero from '@/components/services/Hero'
import OverviewSection from '@/components/services/OverviewSection'
import Offers from '@/components/services/Offers'
import SupplyChain from '@/components/services/SupplyChain'
import WorkProcess from '@/components/services/WorkProcess'
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'));
const Call = dynamic(() => import('@/components/services/Call'));
import { ArtboardToolIcon, BrandfetchIcon, DashboardSpeed01Icon } from "@hugeicons/core-free-icons";
import React from 'react'
import CTABanner from '@/components/CTABanner'
import DisplayBanner from '@/components/DisplayBanner'
import Projects from '@/components/services/Projects'


const page = () => {
  const steps = [
    {
      id: "01",
      title: "Consultation",
      description: "Understanding your vision, needs, and layout possibilities.",
    },
    {
      id: "02",
      title: "3D Layout & Mockups",
      description: "Visualizing your store with custom 3D designs and mockups.",
    },
    {
      id: "03",
      title: "Display Manufacturing",
      description: "Precision-crafted display units tailored to your brand.",
    },
    {
      id: "04",
      title: "Delivery & Installation",
      description: "Timely setup by our expert team with professional care.",
    },
    {
      id: "05",
      title: "Ongoing Support",
      description: "Continued service to ensure optimal retail performance.",
    },
  ];
  const offers = [
    {
      title: "Custom Cash Counters",
      description: "Smartly designed billing stations that enhance workflow and customer interaction.",
      image: "/cash.jpeg",
    },
    {
      title: "Product Shelving",
      description: "Flexible shelving systems that suit every product type and store format.",
      image: "/shelves.jpeg",
    },
    {
      title: "Branding Display Systems",
      description: "Showcase your identity with custom branding displays and signage.",
      image: "/brand.jpeg",
    },
    {
      title: "Lighting & Layout Optimization",
      description: "Strategically planned lighting and layouts for better product visibility and flow.",
      image: "/light.jpeg",
    },
  ];
  const overviewFeatures = [
    {
      icon: ArtboardToolIcon,
      iconColor: "text-blue-500",
      borderColor: "border-blue-500",
      title: "Modular Design",
      description: "Flexible systems that adapt to different store sizes and layouts with ease.",
    },
    {
      icon: BrandfetchIcon,
      iconColor: "text-yellow-400",
      borderColor: "border-yellow-400",
      title: "Brand-Consistent Displays",
      description: "Visually aligned displays that amplify your brand identity and messaging.",
    },
    {
      icon: DashboardSpeed01Icon,
      iconColor: "text-red-500",
      borderColor: "border-red-500",
      title: "Performance-Driven Fixtures",
      description: "Durable, efficient, and functional fixtures engineered for daily retail use.",
    },
  ];
  const retailProjects = [
    {
     
      image: "/retail/re-5.jpg",
    
    },
    {
      
      image: "/retail/re-7.jpg",
     
    },
    {
      
      image: "/retail/re-9.jpeg",
      
    },
    {
        image:"/retail/re-11.jpg"
    },
    {
      image:"/retail/re-10.jpg"
  },
  {
    image:"/retail/re-2.jpg"
},
  ];
  const features = [
    {
      title: "Tailored Design",
      description: "We don't do cookie-cutter. Every Aimaire setup is engineered to fit your brand, space, and audience.",
    },
    {
      title: "360° Integration",
      description: "Lighting, branding, cooling — all seamlessly unified under one creative and technical roof.",
    },
    {
      title: "Faster to Market",
      description: "Our in-house fabrication ensures full control and faster delivery, so you never miss a moment.",
    },
    {
      title: "Built for Impact",
      description: "Every design maximizes visibility, flow, and conversion — it’s more than display, it’s strategy.",
    },
  ];
  return (
    <div>
 <DisplayBanner title={"Retail Store and Designs"} description={"We provide end-to-end retail store design services tailored to help brands stand out, increase footfall, and drive sales."} image={"/banner.jpeg"}/>
       <Hero title={"Custom Retail Store Design & Display Solutions"} description={"Transform your retail space into a powerful brand experience with our fully customized store design and display solutions. We specialize in creating smart, functional, and visually stunning interiors that maximize product visibility, customer flow, and sales."} image={"/4.jpeg"} image2={"/shelves.jpeg"}/>
       <OverviewSection subtitle="Overview"
      title="End-to-End Retail Store Setup"
      description="Aimaire Inc. delivers complete retail solutions from layout planning to manufacturing and equipment installation. Our services ensure seamless execution, functional space design, and a consistent branded experience for every retail environment."
      features={overviewFeatures}/>
    <Offers offers={offers} title={"What We Offer for Retail Stores"} description={"Tailored Retail Fixtures and Solutions"}/>
    <WorkProcess steps={steps}/>
      <SupplyChain features={features} title={" Redefining Retail Through Precision, Speed & Strategy"} description={"Not just displays — Aimaire delivers immersive, high-performance environments that sell."}/>
      <Projects
      sectionTitle="Explore Retail Store Projects"
      sectionDescription="Explore our recent store setups, retail environments, and custom interior builds."
      projects={retailProjects}
    />
     
     <Call title={"Ready to elevate the retail store ? "} description={"Get in touch with us today to discuss your project and discover how we can help you create a retail space that captivates customers and drives sales."}/>
     
     <Footer/>
    </div>
  )
}

export default page