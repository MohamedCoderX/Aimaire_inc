// components/Sidebar.js
import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaInstagram } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 md:right-4 bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center space-y-6 z-50">
      {/* WhatsApp Icon */}
      <a 
        href="https://wa.me/+919500721544" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-green-700 hover:scale-110 transition-transform duration-200">
        <FaWhatsapp className="md:h-7 md:w-7 h-4 w-4" />
      </a>

      {/* Phone Icon */}
      <a 
        href="tel:+919092038636" 
        className="text-blue-600 hover:scale-110 transition-transform duration-200">
        <FaPhoneAlt className="md:h-7 h-4 w-3 md:w-6" />
      </a>

      {/* Instagram Icon */}
      <a 
        href="https://www.instagram.com/aimaire_inc?igsh=MWZjamoybmRicmJ2bw==" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-red-500 hover:scale-110 transition-transform duration-200">
        <FaInstagram className="md:h-7 md:w-7 h-4 w-4" />
      </a>
    </div>
  );
};

export default Sidebar;
