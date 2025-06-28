import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail02Icon } from "@hugeicons/core-free-icons";
import { AddressBookIcon } from "@hugeicons/core-free-icons";
import { CallIcon } from "@hugeicons/core-free-icons";
import { useForm, ValidationError } from '@formspree/react';
const Contactus = () => {
  const [state, handleSubmit] = useForm("mqabejlp");

  if (state.succeeded) {
    return (
      <p className="text-green-600 text-xl font-semibold">
        Thanks for your message! We'll be in touch soon.
      </p>
    );
  }
  return (
    <div className=" bg-white px-6 py-20 lg:px-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Contact Info */}
        <div className="space-y-2">
        <p className="text-sm uppercase text-black tracking-wide font-medium">
              Contact
            </p>
          <h1 className="text-6xl font-bold text-[#292a62]">Contact Us</h1>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Get in touch</h2>
            <p className="text-lg text-gray-700">
              Thank you for your interest in our rental venues and spaces! If you
              have any questions or would like to book a space, please don’t
              hesitate to contact us. Our team is dedicated to providing you with
              the highest level of service and support, and we are committed to
              working with you to make your event a success.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <span className="bg-gray-100 p-2 rounded-full"><HugeiconsIcon icon={Mail02Icon} /></span>
              <div>
                <p className="font-semibold text-lg">EMAIL ADDRESS</p>
                <p className="text-gray-700">aimaireinc@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="bg-gray-100 p-2 rounded-full"><HugeiconsIcon icon={CallIcon} /></span>
              <div>
                <p className="font-semibold text-lg">PHONE NUMBER</p>
                <p className="text-gray-700">  +91 9092038636 / 9500721544 </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="bg-gray-100 p-2 rounded-full"><HugeiconsIcon icon={AddressBookIcon} /></span>
              <div>
                <p className="font-semibold text-lg">OUR ADDRESS</p>
                <p className="text-gray-700">1/82/C -Ramasamy street,
Sanniyasi gundu
Salem -636015
</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
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
  );
};

export default Contactus;