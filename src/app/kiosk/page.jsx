

import Hero from '@/components/services/Hero'
import OverviewSection from '@/components/services/OverviewSection'
import Offers from '@/components/services/Offers'
import SupplyChain from '@/components/services/SupplyChain'
import WorkProcess from '@/components/services/WorkProcess'
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'));
const Call = dynamic(() => import('@/components/services/Call'));
import { FanIcon, LayoutGridIcon, ShieldIcon } from "@hugeicons/core-free-icons";

import React from 'react'

import DisplayBanner from '@/components/DisplayBanner'
import Projects from '@/components/services/Projects'


const page = () => {
    const steps = [
        {
          id: "01",
          title: "Brand & Footprint Briefing",
          description: "Understanding your brand and space requirements to plan the perfect kitchen or kiosk layout.",
        },
        {
          id: "02",
          title: "Concept Sketches + 3D Renders",
          description: "Creating initial design sketches and 3D renderings to visualize the concept before fabrication.",
        },
        {
          id: "03",
          title: "Menu & Throughput Analysis",
          description: "We analyze your menu and operational throughput to design an efficient kitchen workflow.",
        },
        {
          id: "04",
          title: "Fabrication & Quality Testing",
          description: "Fabrication of bespoke equipment or sourcing trusted brands, followed by quality testing.",
        },
        {
          id: "05",
          title: "Logistics, Setup & Operator Training",
          description: "Coordinated logistics, site setup, and operator training to ensure smooth operations.",
        },
      ];
      
      const offers = [
        {
          title: "Food Kiosk Units",
          description: "Fully integrated kiosk units with built-in POS systems and customizable branding panels, designed for maximum customer engagement.",
          image: "/kiosk/food.jpeg",
        },
        {
          title: "Compact Mobile Coffee Carts",
          description: "Mobile coffee carts equipped with sinks, ample storage, and ergonomic design for smooth operations on the go.",
          image: "/kiosk/cofee.jpeg",
        },
        {
          title: "Juice Bar Carts",
          description: "Refrigerated juice bar carts featuring bright lighting and efficient cooling to keep products fresh and appealing.",
          image: "/kiosk/juice.jpeg",
        },
      ];
      
      const overviewFeatures = [
        {
          icon: LayoutGridIcon,
          iconColor: "text-green-600",
          borderColor: "border-green-600",
          title: "Optimized Kiosk Layouts",
          description:
            "We design compact, customer-friendly kiosk layouts that enhance interaction and streamline operations for high-traffic areas.",
        },
        {
          icon: FanIcon,
          iconColor: "text-blue-500",
          borderColor: "border-blue-500",
          title: "Efficient Ventilation & Cooling",
          description:
            "Innovative ventilation and cooling solutions that maintain comfort and equipment safety in small footprint kiosks.",
        },
        {
          icon: ShieldIcon,
          iconColor: "text-yellow-500",
          borderColor: "border-yellow-500",
          title: "Durable & Compliance-Ready Materials",
          description:
            "We use materials and equipment that meet industry standards, ensuring safety, hygiene, and durability for mobile and kiosk setups.",
        },
      ];
      
  
  const retailProjects = [
    {
      
      image: "/kiosk/kiosk-3.jpeg",
      tag: "Bakery",
    },
    {
      
      image: "/kiosk/kiosk-4.jpeg",
      tag: "Retail",
    },
    {
     
      image: "/kiosk/kiosk-5.jpeg",
      tag: "POS Design",
    },
    {
     
      image: "/kiosk/kiosk-7.jpeg",
      tag: "POS Design",
    },
    {
     
      image: "/kiosk/kiosk-8.jpeg",
      tag: "POS Design",
    },
    {
     
      image: "/kiosk/kiosk06.jpeg",
      tag: "POS Design",
    },
  ];
  const features = [
    {
      title: "Built to pass stringent mall/airport specs",
      description: "Lightweight yet durable; quick assembly with hidden cable routing & tamper-proof panels.",
    },
    {
      title: "Nationwide Service & Parts Support",
      description: "Reliable support network ensuring your retail installations stay fully operational everywhere.",
    },
    {
      title: "Single Source Simplicity",
      description: "From design and equipment to maintenance, Aimaire is your end-to-end partner for streamlined execution.",
    },
    {
      title: "Certified & Efficient",
      description: "We use NSF / CE-certified equipment with energy-efficient specs to ensure safety, compliance, and sustainability.",
    },
    {
      title: "Modular, Future-Proof Builds",
      description: "Our systems are designed with modularity in mind — so you can pivot menus without overhauling infrastructure.",
    },
    {
      title: "Urban-Ready Deployment",
      description: "Fast-track launches, even in space-constrained urban locations, with our compact, optimized solutions.",
    },
  ];
  
  return (
    <div>
 <DisplayBanner title={"Eye-Catching Kiosks & Mobile Carts"} description={"Bring your concept to life in any mall, airport, or event with turnkey,regulation-ready builds."} image={"/services/kart.png"}/>
 <Hero
  title={"Kiosks Engineered for Impact"}
  description={
    "Elevate your brand presence with our tailor-made kiosk solutions designed for maximum customer engagement and seamless functionality. We craft eye-catching, compact, and efficient kiosks that drive foot traffic, enhance customer interaction, and boost sales."
  }
  image={"/kiosk/kiosk-1.jpeg"}
  image2={"/kiosk/kiosk-2.jpeg"}
/>
<OverviewSection
  subtitle="Overview"
  title="Complete Kiosk Solutions Tailored for Your Business"
  description="Aimaire Inc. collaborates with retailers, event organizers, and brands to provide fully customized kiosk solutions that combine innovative design with practical functionality for maximum customer engagement."
  features={overviewFeatures}
/>
    <Offers offers={offers} title={"What we offer for custom Kiosks"} description={"Tailored Soutions and service!"}/>
    <WorkProcess steps={steps}/>
    <SupplyChain 
  features={features} 
  title={"Redefining Retail Through Precision, Speed & Strategy"} 
  description={"Not just displays — Aimaire delivers immersive, high-performance environments that sell."} 
/>
      <Projects
      sectionTitle="Custom Kiosk Solution Projects"
      sectionDescription="Explore our diverse range of projects that showcase our expertise in creating functional and stylish commercial kitchen solutions."
      projects={retailProjects}
    />
     
     <Call 
  title={"Ready to Transform Your Retail Space with Custom Kiosks?"} 
  description={"Contact us today to explore how our innovative kiosk solutions can enhance your brand presence, improve customer engagement, and boost sales."} 
/>
     
     <Footer/>
    </div>
  )
}

export default page