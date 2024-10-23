import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [animateHero, setAnimateHero] = useState(false);
  const [expandedPackage, setExpandedPackage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    '/images/mpitibgimage1.jpg',
    '/images/mpitibgimage2.jpg',
    '/images/mpitibgimage3.jpg'
  ];

  const heroContent = [
    {
      title: "Welcome to Mpiti Funeral",
      subtitle: "A business with a personal touch"
    },
    {
      title: "Compassionate Care",
      subtitle: "Supporting you in difficult times"
    },
    {
      title: "Professional Services",
      subtitle: "Honoring your loved ones with dignity"
    }
  ];

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setAnimateHero(true);
    }, 100);

    const imageRotationInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 10000);

    return () => {
      clearTimeout(animationTimer);
      clearInterval(imageRotationInterval);
    };
  }, []);

  const packages = [
    {
      name: "Standard Package (CA)",
      price: "R2000",
      features: [
        "Collection and Delivery of deceased",
        "Cleaning and preparation of corpes",
        "Administration of Death Certificate",
        "Halfview casket",
        "Storage of deceased",
        "2 Pole Tent or ( R1000 cash)",
        "Back deco",
        "Table",
        "50 Chairs",
        "50 Chair Covers",
        "50 Programmes",
        "Burial Service"
      ],
      pricing: [
        "Single Member * Age 18-59  R85\t* 60-74  R105\t*75 -100  R120",
        "Member + Children *Age 18-59  R95\t*60 – 74  R110\t*75-100  R135"
      ]
    },
    {
      name: "Standard Package (B)",
      price: "R4000",
      features: [
        "Collection and Delivery of deceased",
        "Cleaning and preparation of corpes",
        "Administration of Death Certificate",
        "Flat-Lid Coffin",
        "Storage of deceased",
        "2 Pole Tent or ( R1000 cash)",
        "Back deco",
        "Table",
        "50 Chairs",
        "50 Chair Covers",
        "Burial Service"
      ],
      pricing: [
        "Single Member * Age 18-59  R75\tAbove 60- R95",
        "Member + Children *Age 18-59 R85\tAbove 60 – R105"
      ]
    },
    {
      name: "Package CB",
      price: "R4000",
      features: [
        "Collection and Delivery of deceased",
        "Cleaning and preparation of corpes",
        "Administration of Death Certificate",
        "Half-View Casket",
        "Storage of deceased",
        "2 Pole Tent or ( +-R1000 cash)",
        "Back deco",
        "Table & 50 chairs",
        "50 Chair Covers",
        "50 Programmes",
        "Burial Service"
      ],
      pricing: [
        "Single Member * Age 18-59  R115\t* 60-74  R135\t*75-Upwards R160",
        "Member + Children *Age 18-59 R125\t*60 –105  R145\t*75-Upwards R175"
      ]
    },
    {
      name: "Package D",
      price: "R5000",
      features: [
        "Collection and Delivery of deceased",
        "Cleaning and preparation of corpes",
        "Administration of Death Certificate",
        "Oval line casket",
        "Storage of deceased",
        "2 Pole Tent or ( R1000 cash)",
        "Back deco",
        "Table",
        "100 Chairs",
        "50 Chair Covers",
        "50 Programmes"
      ],
      pricing: [
        "Member * Age 18-59  R180\t* 60-99  R210"
      ]
    },
    {
      name: "Package E",
      price: "R6000",
      features: [
        "Collection and Delivery of deceased",
        "Cleaning and preparation of corpes",
        "Administration of Death Certificate",
        "Oval line casket",
        "Storage of deceased",
        "2 Pole Tent or ( R1000 cash)",
        "Back deco",
        "Table",
        "100 Chairs",
        "50 Chair Covers",
        "50 Programmes"
      ],
      pricing: [
        "Single Member * Age 18-59  R215\t* 60-99  R245"
      ]
    }
  ];

  const togglePackageDetails = (index) => {
    if (expandedPackage === index) {
      setExpandedPackage(null);
    } else {
      setExpandedPackage(index);
    }
  };

  return (
    <main className="relative">
      <section
        className="hero text-center min-h-screen flex items-center relative bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          marginTop: '-80px',
          paddingTop: '80px',
          backgroundImage: `url("${backgroundImages[currentImageIndex]}")`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`hero-content mt-16 transition-all duration-1000 ease-out ${animateHero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-white">
              {heroContent[currentImageIndex].title}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-white">
              {heroContent[currentImageIndex].subtitle}
            </p>
            <Link 
              to="/about"
              className="inline-block bg-white text-green-700 hover:bg-gray-200 font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 mt-8"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="about-us py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Compassionate Funeral Services</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
            <div className="md:w-1/3 px-4">
              <img 
                src="/images/flowers.jpg" 
                alt="Mpiti Funeral Services" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4 text-green-700">Honoring Your Loved Ones with Dignity</h3>
              <p className="text-lg mb-4 text-gray-700 leading-relaxed">
                At Mpiti Funeral, we understand the importance of celebrating a life well-lived. Our comprehensive and personalized funeral services are designed to provide comfort and support during difficult times.
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Professional and compassionate staff</li>
                <li>Customized funeral arrangements</li>
                <li>Traditional and modern service options</li>
                <li>Grief support and counseling</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                From traditional funerals to personalized memorial services, we handle every detail with care and respect, allowing you to focus on honoring your loved one's memory.
              </p>
              <Link 
                to="/services"
                className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-packages py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Premium Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold mb-4">{pkg.name}</h3>
                <p className="text-xl font-bold mb-4 text-green-600">{pkg.price}</p>
                {expandedPackage === index ? (
                  <>
                    <ul className="mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="mb-2 flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t pt-4">
                      <p className="font-semibold mb-2">Pricing:</p>
                      {pkg.pricing.map((price, i) => (
                        <p key={i} className="text-sm">{price}</p>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="text-gray-600 mb-4">Click 'Show Details' to see full package information.</p>
                )}
                <button 
                  onClick={() => togglePackageDetails(index)}
                  className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300"
                >
                  {expandedPackage === index ? 'Hide Details' : 'Show Details'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['gallery2.jpg', 'gallery3.jpg', 'gallery4.jpg'].map((image, index) => (
              <div key={index} className="flex justify-center overflow-hidden rounded-lg shadow-md">
                <img 
                  src={`/images/${image}`} 
                  alt={`Gallery ${index + 2}`} 
                  className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="payment-stores py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Payment Locations</h2>
          <div className="flex justify-center items-center space-x-4">
            <div className="flex-shrink-0">
              <img src="/images/store1.png" alt="Store 1" className="w-24 h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/images/store2.jpg" alt="Store 2" className="w-24 h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/images/store3.jpg" alt="Store 3" className="w-24 h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/images/store4.jpg" alt="Store 4" className="w-24 h-24 object-contain" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
