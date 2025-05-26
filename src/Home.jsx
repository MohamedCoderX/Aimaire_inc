import React from 'react'
import Carousel from './components/Carousel'
import ScrollingText from './components/ScrollingText'
import WhoWeAre from './components/WhoWeAre'
import ServiceShowcase from './components/ServiceShowcase'
import Products from '@/components/Products'
import WorkingSteps from '@/components/WorkingSteps'
import Testimonial from '@/components/Testimonial'
import ProjectShowcase from '@/components/ProjectShowcase'
import Contactus from '@/components/Contactus'
import Footer from '@/components/Footer'
import BlogCard from './components/BlogCard'


const Home = () => {
  return (
    <div>
        <Carousel/>
        <ScrollingText/>
        <WhoWeAre/>
        <ServiceShowcase/>
        <Products/>
        <WorkingSteps/>
        <Testimonial/>
        <ProjectShowcase />
        <div className=" text-[#292a62]">
      <div className="max-w-7xl mx-auto mt-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold ">Our Latest Blog Posts</h1>
        <BlogCard/>
      </div>
    </div>
        <Contactus/>
        <Footer/>
    </div>
  )
}

export default Home