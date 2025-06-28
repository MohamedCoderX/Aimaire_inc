'use client';
import React from "react";
import Head from "next/head";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail02Icon, AddressBookIcon, CallIcon } from "@hugeicons/core-free-icons";
import DisplayBanner from "@/components/DisplayBanner";
import Footer from "@/components/Footer";import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mqabejlp");

  if (state.succeeded) {
    return (
      <p className="text-green-600 text-xl font-semibold">
        Thanks for your message! We'll be in touch soon.
      </p>
    );
  }
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
                  <p className="text-gray-700">+91 9092038636 / 9500721544 </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="bg-gray-100 p-3 rounded-full">
                  <HugeiconsIcon icon={AddressBookIcon} />
                </span>
                <div>
                  <p className="font-semibold text-lg">Address</p>
                  <p className="text-gray-700">1/82/C -Ramasamy street, Sanniyasi gundu Salem -636015</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – CONTACT FORM */}
          <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">
            Your Name (required)
          </label>
          <input
            type="text"
            name="name"
            className="block w-full rounded-md border-none bg-[#fbf4ea] p-2 placeholder-black"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">
            Your Phone (required)
          </label>
          <input
            type="tel"
            name="phone"
            className="block w-full rounded-md border-none bg-[#fbf4ea] p-2 placeholder-black"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">
            Your E-mail (required)
          </label>
          <input
            type="email"
            name="email"
            className="block w-full rounded-md border-none bg-[#fbf4ea] p-2 placeholder-black"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">
            Alternate Phone (required)
          </label>
          <input
            type="tel"
            name="alt_phone"
            className="block w-full rounded-md border-none bg-[#fbf4ea] p-2 placeholder-black"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-lg font-medium text-gray-700">
          Select Service You Require (required)
        </label>
        <select
          name="service"
          className="block w-full rounded-md border-none bg-[#fbf4ea] p-2 placeholder-black"
          required
        >
          <option value="">Select Service</option>
          <option value="Retail Store designing">Retail Store designing</option>
          <option value="Customized Display Counters">
            Customized Display Counters
          </option>
          <option value="Retail Racks & Wall Racks">
            Retail Racks & Wall Racks
          </option>
          <option value="Interior Job works">Interior Job works</option>
          <option value="Commercial Kitchen Equipment">
            Commercial Kitchen Equipment
          </option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-lg font-medium text-gray-700">
          Message (required)
        </label>
        <textarea
          rows="5"
          name="message"
          className="block w-full rounded-md border-none bg-[#fbf4ea] p-2 placeholder-black"
          required
        />
      </div>

      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
        className="text-red-600"
      />

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-[#16403f] text-white text-xl px-6 py-3 rounded-md hover:bg-[#133734]"
      >
        Get in touch
      </button>
    </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
