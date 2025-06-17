'use client';
import React from "react";
import Head from "next/head";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail02Icon, AddressBookIcon, CallIcon } from "@hugeicons/core-free-icons";
import DisplayBanner from "@/components/DisplayBanner";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Aimaire Inc</title>
        <meta
          name="description"
          content="Reach out to Aimaire Inc for tailored commercial setup solutions including kitchen planning, kiosks, retail displays, and more."
        />
      </Head>

      <DisplayBanner
        title="Contact Us"
        description="Ready to bring your commercial vision to life? Contact us today — our experts are here to understand your needs and deliver tailored solutions that drive success."
        image="/contact.jpg"
      />

      <div className="py-20 bg-white px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT – CONTACT INFO */}
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-gray-900">Let’s Get in Touch</h1>
            <p className="text-lg text-gray-700">
              We’re happy to assist with your project inquiries, equipment needs, or franchise setups.
              Reach out via call, email, or the form, and we’ll get back to you shortly.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="bg-gray-100 p-3 rounded-full">
                  <HugeiconsIcon icon={Mail02Icon} />
                </span>
                <div>
                  <p className="font-semibold text-lg">Email</p>
                  <p className="text-gray-700">aimaireinc@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="bg-gray-100 p-3 rounded-full">
                  <HugeiconsIcon icon={CallIcon} />
                </span>
                <div>
                  <p className="font-semibold text-lg">Phone</p>
                  <p className="text-gray-700">+31 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="bg-gray-100 p-3 rounded-full">
                  <HugeiconsIcon icon={AddressBookIcon} />
                </span>
                <div>
                  <p className="font-semibold text-lg">Address</p>
                  <p className="text-gray-700">6954 Bin Broug Road, NY</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – CONTACT FORM */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-lg font-medium text-gray-700" htmlFor="name">
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-md bg-[#fbf4ea] p-3 placeholder-black"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700" htmlFor="phone">
                  Your Phone *
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full rounded-md bg-[#fbf4ea] p-3 placeholder-black"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700" htmlFor="email">
                Your Email *
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-md bg-[#fbf4ea] p-3 placeholder-black"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700" htmlFor="service">
                Select Service Required *
              </label>
              <select
                id="service"
                name="service"
                className="w-full rounded-md bg-[#fbf4ea] p-3 text-black"
                required
              >
                <option value="">Select Service</option>
                <option value="retail">Retail Store Designing</option>
                <option value="display">Customized Display Counters</option>
                <option value="racks">Retail & Wall Racks</option>
                <option value="interior">Interior Job Works</option>
                <option value="kitchen">Commercial Kitchen Equipment</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700" htmlFor="message">
                Your Message *
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full rounded-md bg-[#fbf4ea] p-3 placeholder-black"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#16403f] text-white text-xl px-6 py-3 rounded-md hover:bg-[#133734] transition-all"
            >
              Get in Touch
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
