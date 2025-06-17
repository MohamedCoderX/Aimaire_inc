import React from 'react'
import Image from 'next/image'
import { HugeiconsIcon } from '@hugeicons/react'
import { BookOpen01Icon } from '@hugeicons/core-free-icons'

const About = () => {
  return (
    <section className='px-6 py-12 md:py-20 md:px-20 flex flex-col justify-around lg:flex-row gap-10 items-center'>
      {/* Image Section */}
      <div className="relative w-full lg:w-1/3">
        <Image src="/about/aboutimg.jpg" alt="about" width={200} height={100} className='rounded-t-full w-full object-cover' />
        <div className="bg-yellow-400 text-white hover:bg-yellow-700 duration-700 p-8 w-[200px] h-[200px] text-center rounded-t-full border-8 absolute -bottom-10 right-1/2 translate-x-1/2 lg:translate-x-0 lg:bottom-16 lg:right-[-5rem] border-white flex flex-col justify-center items-center">
        
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center items-start">
        <h1 className="font-semibold text-[#292a62] uppercase text-sm md:text-base pb-2">ABOUT US</h1>
        <h1 className='text-3xl md:text-4xl font-bold'>
          "About Aimaire Inc. – Commercial Design, Display & Items"
        </h1>
        <p className='text-gray-700 text-base md:text-lg'>
          With over a decade of experience, our company specializes in designing and manufacturing high-quality commercial spaces across diverse industries including retail, restaurants, bakeries, and franchise operations. We take pride in our ability to merge design excellence with practical functionality, delivering tailored solutions that reflect each brand’s identity. What sets us apart is our end-to-end approach—from concept to completion—ensuring consistency, efficiency, and standout results every time.
        </p>

        {/* Mission */}
        <div className="flex flex-col sm:flex-row items-start gap-5">
          {/* <HugeiconsIcon icon={BookOpen01Icon} className="text-blue-400 text-[60px] sm:text-[80px]" /> */}
          <div>
            <h1 className='text-2xl font-semibold'>Our Mission</h1>
            <p className='text-gray-700'>
              We are committed to creating inspiring commercial spaces that blend smart design with precision manufacturing.
              Our goal is to deliver environments that elevate function, style, and brand experience.
              Through innovation and craftsmanship, we bring visions to life.
            </p>
          </div>
        </div>

        <button className='bg-[#292a62] mt-2 text-white px-6 py-3 text-lg rounded-md font-semibold hover:bg-blue-950 duration-700'>
          Contact Now
        </button>
      </div>
    </section>
  )
}

export default About
