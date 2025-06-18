import React from 'react'
import Hero from '@/components/services/Hero'
import OverviewSection from '@/components/services/OverviewSection'
import Offers from '@/components/services/Offers'
import WorkProcess from '@/components/services/WorkProcess'
import SupplyChain from '@/components/services/SupplyChain'
import Projects from '@/components/services/Projects'
import Call from '@/components/services/Call'
import CTABanner from '@/components/CTABanner'
import DisplayBanner from '@/components/DisplayBanner'
import dynamic from 'next/dynamic'
import { ArtboardToolIcon, BrandfetchIcon, DashboardSpeed01Icon } from "@hugeicons/core-free-icons"

const Footer = dynamic(() => import('@/components/Footer'))

const SupermarketRacksPage = () => {
  const overviewFeatures = [
    {
      icon: ArtboardToolIcon,
      iconColor: "text-blue-500",
      borderColor: "border-blue-500",
      title: "Modular Systems",
      description: "Adaptable rack structures tailored for any floor layout or category placement.",
    },
    {
      icon: BrandfetchIcon,
      iconColor: "text-yellow-400",
      borderColor: "border-yellow-400",
      title: "Smart Adjacency Planning",
      description: "Strategically placed categories to maximize visibility and customer convenience.",
    },
    {
      icon: DashboardSpeed01Icon,
      iconColor: "text-red-500",
      borderColor: "border-red-500",
      title: "Engineered for Turnover",
      description: "Optimized designs to support rapid restocking and sales movement.",
    },
  ]

  const offers = [
    {
      title: "Gondola Racks",
      description: "Ideal for small supermarkets and kirana stores, built for compact layouts.",
      image: "/racks/gondola-1.jpeg",
    },
    {
      title: "End-Cap Displays",
      description: "Perfect for impulse and high-margin items placed at aisle ends.",
      image: "/racks/endcap-1.jpeg",
    },
    {
      title: "Pegboard Shelving",
      description: "Highly adjustable racks for kitchenware, cosmetics, and utility items.",
      image: "/racks/pegboard.jpeg",
    },
    {
      title: "LED-Lit Racks with Tag Holders",
      description: "Premium shelving for FMCG with built-in lighting and pricing displays.",
      image: "/racks/ledrack.jpeg",
    },
    {
      title: "SS PVD Racks",
      description: "Elegant racks for sweets and bakery display, crafted with durability and shine.",
      image: "/racks/sspvd-1.jpeg",
    },
  ]

  const processSteps = [
    {
      id: "01",
      title: "Sales Data & Layout Review",
      description: "We analyze your footfall data and current store layout to plan rack placement.",
    },
    {
      id: "02",
      title: "Planogram-Driven Design",
      description: "Custom designs based on SKU performance and product categories.",
    },
    {
      id: "03",
      title: "Prototype & Load Testing",
      description: "Durability and usability tests ensure fit for high-traffic environments.",
    },
    {
      id: "04",
      title: "Finish & Material Selection",
      description: "Choose powder-coated, SS, or PVD finishes to suit your brand and durability needs.",
    },
    {
      id: "05",
      title: "Delivery & Merchandising Setup",
      description: "Final delivery with setup guide, merchandising tips, and after-sales support.",
    },
  ]

  const features = [
    {
      title: "Faster Planogram Resets",
      description: "Switch or update layouts up to 30% faster thanks to modular design.",
    },
    {
      title: "ISO-Tested Capacity",
      description: "All racks undergo certified load testing to ensure strength and safety.",
    },
    {
      title: "Brand-Matched Finishes",
      description: "Color and texture options to seamlessly integrate with your retail identity.",
    },
    {
      title: "Promotional Scalability",
      description: "Effortlessly scale displays for festive or seasonal promotions.",
    },
  ]

  const projects = [
    {
     

      image: "/racks/retail-1.jpg",
     
    },
    {

      image: "/racks/retail-2.jpeg",
      
    },
    {
     
      image: "/racks/retail-3.jpg",

    },
    {
      image: "/racks/retail-4.jpg",
    },
    {
      image: "/racks/retail-5.jpg",
    },  
    {
      image: "/racks/retail-6.jpeg",
    },
  ]

  return (
    <div>
      <DisplayBanner
        title="Impulse Racks & Display Systems"
        description="Custom modular shelving engineered to increase visibility, optimize layout, and accelerate sales."
        image="/banner/supermarket.jpeg"
      />
      <Hero
        title="Shelving Systems that Sell More"
        description="Unlock higher sales per square foot with our modular retail shelving systems, engineered to enhance customer traffic flow, maximize SKU visibility, and simplify restocking. From gondolas to LED-lit impulse displays, every fixture is built to support faster planogram resets, seamless inventory rotation, and smarter merchandising — so your retail space works harder, every day."
        image="/racks/gondola.jpeg"
        image2="/racks/gondola.jpeg"
      />
      <OverviewSection
        subtitle="Overview"
        title="Retail Shelving, Reimagined"
        description="From hypermarkets to kiranas, Aimaire designs smart, scalable racks that align categories, support digital tags, and streamline restocking."
        features={overviewFeatures}
      />
      <Offers
        offers={offers}
        title="Supermarket Rack Types We Offer"
        description="A wide range of modular, aesthetic, and functional shelving systems built for modern retail."
      />
      <WorkProcess
        steps={processSteps}
      />
      <SupplyChain
        features={features}
        title="Why Choose Aimaire for Your Supermarket Fixtures"
        description="Our racks do more than hold products — they drive performance, simplify operations, and support your brand."
      />
      <Projects
        sectionTitle="Explore Racks for all usages"
        sectionDescription="Explore some of our tailored supermarket setups — from compact grocers to dynamic FMCG zones."
        projects={projects}
      />
      <Call
        title="Want to Revamp Your Racks?"
        description="Let us help you design, build, and deliver fixtures that improve product flow, shopper experience, and sales."
      />
      <Footer />
    </div>
  )
}

export default SupermarketRacksPage
