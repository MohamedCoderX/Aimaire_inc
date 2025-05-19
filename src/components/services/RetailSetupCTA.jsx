import React from 'react';

export default function RetailSetupCTA() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg  mt-10 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Need a custom retail setup?
      </h2>
      <p className="mt-2 text-gray-600">
        We're here to help. Choose how you'd like to get started.
      </p>

      <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
        <button className="bg-[#292a62] hover:bg-yellow-400 text-white hover:text-black px-6 py-3 rounded-xl text-sm font-semibold transition duration-200">
          Book a Free Consultation
        </button>
       
      </div>
     
    </div>
    
  );
}
