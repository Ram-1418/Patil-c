import React from "react";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm hover:shadow-xl duration-300">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Contact <span className="text-yellow-400">Us</span>
        </h1>
        <p className="mt-4 text-gray-700 text-base md:text-lg font-medium">
          Let’s discuss your dream home. Reach out to us today!
        </p>
        <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-4 text-gray-800 font-medium">
          <a href="tel:+917020196561" className="flex items-center gap-2 hover:text-yellow-500">
            <FaPhoneAlt /> 7020196561
          </a>
          <span className="hidden md:inline">|</span>
          <span className="text-center">Home Builders in Udgir</span>
          <span className="hidden md:inline">|</span>
          <a href="mailto:Hello@Patil.Com" className="flex items-center gap-2 hover:text-yellow-500">
            <FaEnvelope /> Hello@Patil.Com
          </a>
        </div>
      </div>

      {/* Branch Offices */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-gray-700">
        <div className="flex gap-3 items-start">
          <FaMapMarkerAlt className="text-yellow-500 mt-1" />
          <p>
            <span className="font-bold">Corporate Office:</span> <br />
          Patil.Com| Home Construction <br />
              Caption chowk Jalkot Road Udgir -413517
          </p>
        </div>
        <div className="flex gap-3 items-start">
          <FaMapMarkerAlt className="text-yellow-500 mt-1" />
          <p>
            <span className="font-bold">Latur Branch:</span> <br />
            Patil.Com | Home Construction <br />
            310, 3rd Floor, Udgir-LAtur Road 
          </p>
        </div>
        <div className="flex gap-3 items-start">
          <FaMapMarkerAlt className="text-yellow-500 mt-1" />
          <p>
            <span className="font-bold">Pune Branch:</span> <br />
          Patil.Com| Home Construction <br />
            4th Floor, SPM Tower, Circular Road, Pimpri Pune-555844     
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
