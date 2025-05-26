import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail02Icon } from "@hugeicons/core-free-icons";
import { AddressBookIcon } from "@hugeicons/core-free-icons";
import { CallIcon } from "@hugeicons/core-free-icons";
import DisplayBanner from "@/components/DisplayBanner";
import Footer from "@/components/Footer";
const Contact = () => {
  return (
    <div>
      <DisplayBanner title={"Contact Us"} description={" Ready to bring your commercial vision to life? Contact us today — our experts are here to understand your needs and deliver tailored solutions that drive success."} image={'/contact.jpg'}/>
      <div className="py-20 bg-white px-6 lg:px-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <h1 className="text-6xl font-bold text-gray-900">Contact Us</h1>
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
    <option value="service1">Retail Store designing</option>
    <option value="service2">Customized Display Counters</option>
    <option value="service3">Retail Racks & Wall Racks</option>
    <option value="service4">Interior Job works</option>
    <option value="service5">Commercial Kitchen Equipment</option>
    </select>
</div>
          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-700">
              Message (required)
            </label>
            <textarea
              rows="5"
              
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
    <Footer/>
    </div>
  );
};

export default Contact;