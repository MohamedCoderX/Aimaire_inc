import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail02Icon } from "@hugeicons/core-free-icons";
import { AddressBookIcon } from "@hugeicons/core-free-icons";
import { CallIcon } from "@hugeicons/core-free-icons";
const Contactus = () => {
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
                <p className="text-gray-700">+31 123 456 789 – Office</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="bg-gray-100 p-2 rounded-full"><HugeiconsIcon icon={AddressBookIcon} /></span>
              <div>
                <p className="font-semibold text-lg">OUR ADDRESS</p>
                <p className="text-gray-700">6954 bin broug road, NY</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-lg font-medium text-gray-700">
                Your Name (required)
              </label>
              <input
                type="text"
                placeholder="your name..."
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
                placeholder="Phone"
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
                placeholder="your E-mail..."
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
                placeholder="Phone"
                className="block w-full rounded-md border-none bg-[#fbf4ea] p-2 placeholder-black"
                required
              />
            </div>
          </div>
<div>
<label className="block text-lg font-medium text-gray-700">
                Select Service You Required (required)
              </label>
    <select name="service" id="" className="block w-full rounded-md border-none bg-[#fbf4ea] p-2 placeholder-black">
    <option value="">Select Service</option>
    <option value="service1">Service 1</option>
    <option value="service2">Service 2</option>
    <option value="service3">Service 3</option>
    <option value="service4">Service 4</option>
    </select>
</div>
          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-700">
              Message (required)
            </label>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="block w-full rounded-md border-none bg-[#fbf4ea] p-2 placeholder-black"
              required
            />
          </div>

          
          <button
            type="submit"
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