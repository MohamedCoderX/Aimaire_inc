'use client';
import Head from 'next/head';
import About from '@/components/about/About';
import Faq from '@/components/about/Faq';
import OurApproach from '@/components/about/OurApproach';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import DisplayBanner from '@/components/DisplayBanner';
import Footer from '@/components/Footer';
import Testimonial from '@/components/Testimonial';
import React from 'react';

const Page = () => {
  return (
    <>
      <Head>
        <title>About Us | Aimaire Inc - Commercial Design Experts</title>
        <meta
          name="description"
          content="Learn about Aimaire Inc – Experts in commercial kitchen design, kiosk fabrication, retail display solutions, and complete franchise setups across India."
        />
      </Head>

      <DisplayBanner
        title="About Us"
        description="Aimaire Inc. specializes in solutions for commercial kitchens, kiosks, retail displays, refrigeration, and franchise setups. We design, build, and deliver high-performance environments tailored for restaurants, bakeries, supermarkets, and food brands."
        image="/about.png"
      />

      <main className="space-y-24 md:space-y-32">
        <About />
        <OurApproach />
        <WhyChooseUs />
        <Faq />
        <Testimonial />
      </main>

      <Footer />
    </>
  );
};

export default Page;
