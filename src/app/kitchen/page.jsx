

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
          title: "Menu & Throughput Analysis",
          description: "We analyze your menu and operational throughput to design an efficient kitchen workflow.",
        },
        {
          id: "02",
          title: "3D Kitchen Layout & Utility Planning",
          description: "Custom 3D kitchen designs with detailed utility and equipment placement drawings.",
        },
        {
          id: "03",
          title: "Equipment Fabrication & Sourcing",
          description: "Fabrication of bespoke equipment or sourcing trusted brands that suit your kitchen needs.",
        },
        {
          id: "04",
          title: "Site Installation & Commissioning",
          description: "Expert on-site setup and testing to ensure everything runs smoothly from day one.",
        },
        {
          id: "05",
          title: "Staff Training & Lifecycle Support",
          description: "Comprehensive training and ongoing servicing for peak operational performance.",
        },
      ];
      
      const offers = [
        {
          title: "Bakery Refrigeration",
          description: "Pastry chillers, dough retarders, and undercounter units — built for professional bakery setups.",
          image: "/kitchen/kit-11.webp",
        },
        {
          title: "Restaurant Kitchens",
          description: "Upright freezers, prep counters, and blast chillers for high-performance kitchens.",
          image: "/kitchen/kit-8.webp",
        },
        {
          title: "Canteen Cooling",
          description: "Bulk milk chillers and cold storage for high-volume institutional kitchens.",
          image: "/kitchen/kit-3.jpg",
        },
        {
          title: "Retail Displays",
          description: "Glass-door coolers, deep freezers, and countertop chillers for modern retail.",
          image: "/kitchen/kit-1.jpeg",
        },
      ];
      
      
  const overviewFeatures = [
    {
      icon: LayoutGridIcon,
      iconColor: "text-green-600",
      borderColor: "border-green-600",
      title: "Seamless Kitchen Layouts",
      description: "We design prep lines and work zones that streamline service and boost efficiency from day one.",
    },
    {
      icon: FanIcon,
      iconColor: "text-blue-500",
      borderColor: "border-blue-500",
      title: "Smart Ventilation Planning",
      description: "Integrated systems that prioritize safety, compliance, and air quality in demanding environments.",
    },
    {
      icon: ShieldIcon,
      iconColor: "text-yellow-500",
      borderColor: "border-yellow-500",
      title: "HACCP-Ready Equipment",
      description: "All equipment is selected or fabricated to meet health codes and ensure hygienic operations.",
    },
  ];
  
  const retailProjects = [
    {
      
      image: "/kitchen/kit-4.webp",
      
    },
    {
      
      image: "/kitchen/kit-5.jpg",
 
    },
    {
     
      image: "/kitchen/kit-8.webp",
     
    },
    {
     
      image: "/kitchen/kit-10.jpg",
     
    },
    {
     
      image: "/kitchen/kit-7.jpg",
     
    },
    {
     
      image: "/kitchen/kit-6.jpg",
     
    },
  ];
  const features = [
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
 <DisplayBanner title={"Commercial Kitchen Solutions"} description={"From precision workflow design to NSF-certified equipment, we build kitchens that boost speed, safety, and ROI."} image={"/services/kitchen-1.jpg"}/>
       <Hero title={"Commercial Kitchens Engineered for Performance"} description={"Transform your retail space into a powerful brand experience with our fully customized store design and display solutions. We specialize in creating smart, functional, and visually stunning interiors that maximize product visibility, customer flow, and sales."} image={"/products/cooking.jpeg"} image2={"/products/perp.jpeg"}/>
       <OverviewSection subtitle="Overview"
      title="End-to-End Commercial kitchen Solutions"
      description="Aimaire Inc. partners with restaurateurs, hotels, and cloud kitchens to deliver seamless back-of-house solutions."
      features={overviewFeatures}/>
    <Offers offers={offers} title={"What we offer for commercial Kitchen"} description={"Tailored kitchen Fixtures and Solutions"}/>
    <WorkProcess steps={steps}/>
      <SupplyChain features={features} title={" Redefining Retail Through Precision, Speed & Strategy"} description={"Not just displays — Aimaire delivers immersive, high-performance environments that sell."}/>
      <Projects
      sectionTitle="Commercial Kitchen Solution Products"
      sectionDescription="Explore our diverse range of products that showcase our expertise in creating functional and stylish commercial kitchen solutions."
      projects={retailProjects}
    />
     
     <Call title={"Ready to elevate Commercial Kitchen ? "} description={"Get in touch with us today to discuss your project and discover how we can help you that captivates customers and drives sales."}/>
     
     <Footer/>
    </div>
  )
}

export default page