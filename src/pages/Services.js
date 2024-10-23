import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    { name: "Traditional Funeral Services", description: "Comprehensive arrangements respecting cultural traditions" },
    { name: "Memorial Services", description: "Personalized ceremonies to celebrate life" },
    { name: "Cremation Services", description: "Dignified cremation options with memorial possibilities" },
    { name: "Pre-planning Services", description: "Arrange and fund funerals in advance" },
    { name: "Burial Services", description: "Complete burial arrangements and cemetery coordination" },
    { name: "Chapel Services", description: "Peaceful environment for funeral and memorial services" },
    { name: "Grief Counseling", description: "Professional support for coping with loss" },
    { name: "Flower Arrangements", description: "Beautiful floral tributes to honor loved ones" },
    { name: "Transportation Services", description: "Reliable and respectful transportation" },
    { name: "Documentation Assistance", description: "Help with necessary permits and certificates" },
    { name: "Catering Services", description: "Thoughtful catering for post-funeral gatherings" },
    { name: "Obituary Writing", description: "Assistance in crafting meaningful obituaries" }
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-green-600 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link 
            to="/contact" 
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors duration-300 text-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Contact Us for More Information
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
