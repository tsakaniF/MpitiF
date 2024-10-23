import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
<<<<<<< HEAD
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
=======
      icon: "flash-outline",
      title: "Identity Verification",
      description: "Instantly verify the authenticity of government-issued IDs, passports, and more using our advanced technology that scans over 6,500 documents from 200 countries.",
      link: "/services/identity-verification"
    },
    {
      icon: "shield-checkmark-outline",
      title: "Background Checks",
      description: "Comprehensive background screening for employment, tenant screening, and more, including criminal history, education, and employment verification.",
      link: "/services/background-checks"
    },
    {
      icon: "lock-closed-outline",
      title: "Continuous Monitoring",
      description: "Stay updated with our real-time monitoring services that alert you to any new information, such as arrests or other legal issues.",
      link: "/services/continuous-monitoring"
    },
    {
      icon: "people-outline",
      title: "Criminal History Check ",
      description: "Interpol list, UN/world Sanctions and SA PEP (politically exposed person), World Wide Consolidate AML (anti-money laundering) Database.",
      link: "/services/Criminal History Check"
    },
    {
      icon: "business-outline",
      title: "Credit Score/Consumer Profile",
      description: "Transunion, XDS (Express credit score),	Experian.",
      link: "/services/Credit Score or Consumer Profile"
    },
    {
      icon: "globe-outline",
      title: "Bank Confirmation ",
      description: "Realtime Bank Account Verifications, 13 banks (ABSA, FNB, Standard Bank, Nedbank, African Bank, Capitec, Investec, Mercantile Bank, Sasfin Bank, Discovery Bank, Finbond Mutual Bank, Grindrod Bank, Tyme Bank).",
      link: "/services/bank-confirmation"
>>>>>>> 092d6124b5b664ca60acbf7b5dc835ff2b15663b
    }
  ];

  return (
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black inline-block">Our Services</h1>
          <div className="h-1 w-20 bg-orange-500 mx-auto mt-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-tr from-[#0a4661] to-[#235469] rounded-lg shadow-md p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
              <div>
                <ion-icon name={service.icon} class="text-5xl text-blue-300 mb-4"></ion-icon>
                <h2 className="text-2xl font-semibold mb-2 text-white">{service.title}</h2>
                <p className="text-blue-100 mb-4">{service.description}</p>
              </div>
              <Link 
                to={service.link}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 text-center"
              >
                Read More
>>>>>>> 092d6124b5b664ca60acbf7b5dc835ff2b15663b
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
