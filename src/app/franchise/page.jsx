import React from 'react'
import Hero from '@/components/services/Hero'
import OverviewSection from '@/components/services/OverviewSection'
import Offers from '@/components/services/Offers'
import WorkProcess from '@/components/services/WorkProcess'
import SupplyChain from '@/components/services/SupplyChain'
import Projects from '@/components/services/Projects'
import Call from '@/components/services/Call'
import DisplayBanner from '@/components/DisplayBanner'
import dynamic from 'next/dynamic'
import { ArtboardToolIcon, BrandfetchIcon, DashboardSpeed01Icon } from "@hugeicons/core-free-icons"

const Footer = dynamic(() => import('@/components/Footer'))

const FranchisePlusPage = () => {
  const overviewFeatures = [
    {
      icon: ArtboardToolIcon,
      iconColor: "text-green-500",
      borderColor: "border-green-500",
      title: "Turnkey Execution",
      description: "Design, equipment, branding, and manuals—all packed in one ready-to-deploy kit.",
    },
    {
      icon: BrandfetchIcon,
      iconColor: "text-blue-500",
      borderColor: "border-blue-500",
      title: "Standardized Experience",
      description: "Deliver the same brand feel, layout, and CX across every outlet.",
    },
    {
      icon: DashboardSpeed01Icon,
      iconColor: "text-yellow-400",
      borderColor: "border-yellow-400",
      title: "Accelerated Rollouts",
      description: "From prototype to multi-location deployment—fast, consistent, and cost-effective.",
    },
  ]

  const offers = [
    {
      title: "Standardized Store Layouts",
      description: "Architectural layouts designed for optimal flow and consistent brand expression.",
      image: "/franchise/layouts.jpeg",
    },
    {
      title: "Fixture & Equipment Kits",
      description: "Pre-approved modular units that simplify procurement and setup.",
      image: "/franchise/equipment.jpeg",
    },
    {
      title: "Training & SOP Modules",
      description: "Operations manuals and digital training content for faster onboarding.",
      image: "/franchise/training.jpeg",
    },
    {
      title: "Supplier Coordination",
      description: "Centralized sourcing and supply chain for timely and cost-effective rollout.",
      image: "/franchise/supply.jpeg",
    },
   
  ]

  const processSteps = [
    {
      id: "01",
      title: "Brand DNA & Unit Economics",
      description: "We begin by understanding your brand ethos and financial model to ensure scalable success.",
    },
    {
      id: "02",
      title: "Prototype & Pilot Store",
      description: "Develop a flagship store to test the experience, design, and operations.",
    },
    {
      id: "03",
      title: "Franchise Manual Creation",
      description: "We create detailed SOPs, brand books, training modules, and design guides.",
    },
    {
      id: "04",
      title: "Centralized Manufacturing",
      description: "All fixtures and visual assets are produced centrally to ensure consistency and lower costs.",
    },
    {
      id: "05",
      title: "Multi-Site Rollouts & Audits",
      description: "From city to city, we deliver, install, and audit for ongoing performance and alignment.",
    },
  ]

  const features = [
    {
      title: "Consistent Customer Experience",
      description: "Ensure the same look, feel, and service across every franchise outlet.",
    },
    {
      title: "Lower CapEx",
      description: "Bulk procurement and in-house production reduce startup costs per unit.",
    },
    {
      title: "Integrated Brand + Ops",
      description: "Every rollout includes both branding assets and operational infrastructure.",
    },
    {
      title: "Scalable to Any Market",
      description: "From Tier 1 to Tier 3 cities, our systems are built to scale with your brand.",
    },
  ]

  const projects = [
    {
      title: "Multi-City Café Franchise",
      description: "Identical café designs and SOP implementation across 12+ locations.",
      image: "/projects/franchise1.jpeg",
      tag: "Café Rollout",
    },
    {
      title: "QSR Franchise Setup",
      description: "Quick-service restaurant prototype and franchise kit deployment.",
      image: "/projects/franchise2.jpeg",
      tag: "QSR Format",
    },
    {
      title: "Retail Chain Expansion",
      description: "Apparel franchise deployed in 8 cities with full branding and ops support.",
      image: "/projects/franchise3.jpeg",
      tag: "Retail",
    },
  ]

  return (
    <div>
      <DisplayBanner
        title="Franchise Setup Solutions"
        description="Aimaire delivers franchise-ready environments with plug-and-play rollout kits that replicate brand success across markets."
        image="/services/franchise.jpeg"
      />
      <Hero
        title="Scale Your Brand with Franchise Plus"
        description="From store design to operations manuals, Aimaire provides turnkey franchise packages that replicate brand success across cities. We integrate architectural planning, equipment, training modules, and audit-ready branding—so every franchisee can launch with confidence and consistency."
        image="/franchise/layouts.jpeg"
        image2="/franchise/training.jpeg"
      />
      <OverviewSection
        subtitle="Overview"
        title="One Partner, Endless Rollouts"
        description="Aimaire bundles every piece of the franchise puzzle—from layouts and interiors to staff SOPs and training. With us, franchisors get consistency and scale, and franchisees get simplicity and speed."
        features={overviewFeatures}
      />
      <Offers
        offers={offers}
        title="What We Offer in Franchise Plus"
        description="End-to-end design, branding, and operational assets to launch and manage successful franchise outlets."
      />
      <WorkProcess
        steps={processSteps}
      />
      <SupplyChain
        features={features}
        title="Why Choose Aimaire for Franchise Setup"
        description="We don’t just build outlets—we build systems. Systems that grow with you, perform consistently, and scale fast."
      />
      <Projects
        sectionTitle="Franchise Rollouts by Aimaire"
        sectionDescription="Explore sample franchise setups we’ve delivered across regions. Placeholder images available where confidentiality applies."
        projects={projects}
      />
      <Call
        title="Planning a Franchise Rollout?"
        description="Let’s co-create your next franchise success story. From prototype to pan-India expansion, Aimaire is your launch partner."
      />
      <Footer />
    </div>
  )
}

export default FranchisePlusPage
