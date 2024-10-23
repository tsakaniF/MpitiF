import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      icon: "calendar-outline",
      title: "Funerals Schemes and arrangements",
      description: "Comprehensive funeral planning services to create a meaningful tribute to your loved one.",
      link: "/services/funeral-arrangements"
    },
    {
      icon: "heart-outline",
      title: "Wedding arrangements",
      description: "Professional wedding planning services to make your special day perfect.",
      link: "/services/wedding-arrangements"
    },
    {
      icon: "home-outline",
      title: "Tent hire",
      description: "Quality tents available for various events and occasions.",
      link: "/services/tent-hire"
    },
    {
      icon: "shield-outline",
      title: "Burial scheme",
      description: "Affordable burial schemes to provide peace of mind for you and your family.",
      link: "/services/burial-scheme"
    },
    {
      icon: "megaphone-outline",
      title: "Public Address Systems",
      description: "High-quality sound systems for events of all sizes.",
      link: "/services/pa-systems"
    },
    {
      icon: "git-pull-request-outline",
      title: "Exhumations",
      description: "Professional and respectful exhumation services when needed.",
      link: "/services/exhumations"
    },
    {
      icon: "restaurant-outline",
      title: "Decorations and Catering",
      description: "Beautiful decorations and delicious catering for all types of events.",
      link: "/services/decorations-catering"
    },
    {
      icon: "flower-outline",
      title: "Fresh Flowers",
      description: "Beautiful floral arrangements for all occasions.",
      link: "/services/fresh-flowers"
    },
    {
      icon: "podium-outline",
      title: "Stages",
      description: "Professional stage setups for events and performances.",
      link: "/services/stages"
    },
    {
      icon: "people-outline",
      title: "Chairs and Programmes",
      description: "Seating arrangements and custom programmes for your events.",
      link: "/services/chairs-programmes"
    }
  ];

  return (
    <div className="services bg-gray-100 py-36">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-green-700">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-item bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <ion-icon name={service.icon} class="text-3xl text-green-600"></ion-icon>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link 
                to={service.link}
                className="inline-block text-green-600 font-semibold hover:text-green-700 transition-colors duration-300"
              >
                Learn More 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
