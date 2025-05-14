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
        <ProjectShowcase/>
        <Contactus/>
        <Footer/>
    </div>
  )
}

export default Home