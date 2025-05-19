import About from '@/components/about/About'
import Faq from '@/components/about/Faq'
import OurApproach from '@/components/about/OurApproach'
import WhyChooseUs from '@/components/about/WhyChooseUs'
import DisplayBanner from '@/components/DisplayBanner'
import Footer from '@/components/Footer'
import Testimonial from '@/components/Testimonial'
import React from 'react'

const page = () => {
  return (
    <>
    <DisplayBanner title={"About Us"} description={"Aimaire Inc. specializes in solutions for commercial kitchens, kiosks, retail displays, refrigeration, and franchise setups.We design, build, and deliver high-performance environments tailored for restaurants, bakeries, supermarkets, and food brands."} image={"/about.png"}/>
    <About/>
    <OurApproach/>
    <WhyChooseUs/>
    <Faq/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default page