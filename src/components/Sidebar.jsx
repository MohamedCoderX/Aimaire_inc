// components/Sidebar.js
import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaInstagram } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 md:right-4 bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center space-y-6 z-50">
      {/* WhatsApp Icon */}
      <a 
        href="https://wa.me/yourphonenumber" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-green-700 hover:scale-110 transition-transform duration-200">
        <FaWhatsapp className="h-7 w-7" />
      </a>

      {/* Phone Icon */}
      <a 
        href="tel:+1234567890" 
        className="text-blue-600 hover:scale-110 transition-transform duration-200">
        <FaPhoneAlt className="h-7 w-6" />
      </a>

      {/* Instagram Icon */}
      <a 
        href="https://instagram.com/yourprofile" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-red-500 hover:scale-110 transition-transform duration-200">
        <FaInstagram className="h-7 w-7" />
      </a>
    </div>
  );
};

export default Sidebar;
