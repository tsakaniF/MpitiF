<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
=======
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Make sure to create this CSS file
>>>>>>> 092d6124b5b664ca60acbf7b5dc835ff2b15663b

function Home() {
  const [animateHero, setAnimateHero] = useState(false);
  const [expandedPackage, setExpandedPackage] = useState(null);

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const slidingTexts = [
    "Providing accurate and instant identity verification solutions.",
    "Ensuring trust and security in your business processes.",
    "Streamlining background checks for faster onboarding."
  ];

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setAnimateHero(true);
    }, 100);

<<<<<<< HEAD
=======
    // Set up Intersection Observer for mission, vision, and features
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the element is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Delay the animation for each feature
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }, index * 300); // 300ms delay between each feature
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);
    featureRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    // Add this new interval for text sliding
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % slidingTexts.length);
    }, 5000); // Change text every 5 seconds

>>>>>>> 092d6124b5b664ca60acbf7b5dc835ff2b15663b
    return () => {
      clearTimeout(animationTimer);
<<<<<<< HEAD
    };
  }, []);

  const packages = [
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
=======
      observer.disconnect();
      clearInterval(textInterval);
    };
  }, []);

  return (
    <main className="relative"> {/* Remove pt-20 class */}
      <Link
        to="/services"
        className={`fixed top-24 right-4 bg-primary-600 text-white p-2 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 z-50 ${showButton ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{
          transitionProperty: 'transform, opacity',
          transitionDuration: '300ms',
          opacity: showButton ? 1 : 0,
        }}
      >       
        Verify Now
      </Link>
>>>>>>> 092d6124b5b664ca60acbf7b5dc835ff2b15663b

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
        className="hero text-center min-h-screen flex items-center relative bg-green-700"
        style={{
<<<<<<< HEAD
          marginTop: '-80px',
          paddingTop: '80px',
=======
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/verified.jpg)`,
          marginTop: '-80px', // Adjust this value to match your navbar height
          paddingTop: '80px', // Add padding to push content down
>>>>>>> 092d6124b5b664ca60acbf7b5dc835ff2b15663b
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
<<<<<<< HEAD
          <div className={`hero-content mt-16 transition-all duration-1000 ease-out ${animateHero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-white">
              Welcome to Mpiti Funeral
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-white">
              A business with a personal touch
            </p>
            <Link 
              to="/about"
              className="inline-block bg-white text-green-700 hover:bg-gray-200 font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 mt-8"
            >
              Learn More
=======
          <div className={`hero-content mt-16 transition-all duration-1000 ease-out ${animateHero ? 'opacity-100                             translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Your Trusted Partner for{' '}
              <span className="text-blue-300">Secure Verification</span>
            </h1>
            <div className="h-20 overflow-hidden"> {/* Container for sliding text */}
              {slidingTexts.map((text, index) => (
                <p
                  key={index}
                  className={`text-xl md:text-2xl lg:text-3xl font-bold italic text-gray-200 sliding-text ${
                    index === currentTextIndex ? 'active' : ''
                  }`}
                >
                  {text}
                </p>
              ))}
            </div>
            <Link 
              to="/about"
              className="inline-block bg-white text-primary-700 hover:bg-gray-200 font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 mt-8"
            >
              Get Started
>>>>>>> 092d6124b5b664ca60acbf7b5dc835ff2b15663b
            </Link>
          </div>
        </div>
      </section>

<<<<<<< HEAD
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

      <section className="premium-packages bg-gray-100 py-16">
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
=======
      <section className="about-us py-16">
        <div className="container mx-auto px-4">
          <div className="w-full md:w-10/12 mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-black-700 text-center rounded-lg shadow-md">Empowering Businesses with Accurate and Instant Identity Verification Solutions</h2>
            <div className="bg-[#0a4661] p-8 rounded-lg shadow-md">
              <p className="text-lg mb-4 text-white">
                VerifyNow offers seamless and secure identity verification and background check services tailored to your needs. Our cutting-edge solutions provide businesses with the confidence they need to make informed decisions quickly and securely.
              </p>
              <p className="text-lg text-white">
                Whether you're onboarding new employees, verifying tenant information, or conducting thorough background checks, VerifyNow ensures accuracy, reliability, and compliance with evolving regulatory requirements.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      <section className="key-features py-16 bg-white-100 ">
        <div className="container mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {[{ icon: "flash-outline", text: "Fast, accurate verification processes" },
            { icon: "git-branch-outline", text: "Seamless integration with existing systems" },
            { icon: "cash-outline", text: "Cost-effective and scalable solutions" },
            { icon: "business-outline", text: "Support across multiple industries" },
            { icon: "laptop-outline", text: "Easy-to-use platform with real-time results" }].map((feature, index) => (
              <div key={index} className="flex items-center bg-[#0a4661] p-4 rounded-lg shadow-md">
                <ion-icon name={feature.icon} class="text-4xl text-white mr-4"></ion-icon>
                <p className="text-lg text-white">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div ref={missionRef} className="flex flex-col md:flex-row-reverse items-left justify-left opacity-0 transition-opacity duration-1000 ease-out mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
          <h3 className="text-2xl font-bold mb-4 text-black text-left">VerifyNow Access</h3>
          <div className="bg-[#0a4661] p-6 rounded-lg shadow-md">
            <ul className="list-disc list-inside space-y-2 text-white">
              <li>Access to all major credit bureaus</li>
              <li>CIPC</li>
              <li>SARS</li>
              <li>Department of Home Affairs</li>
              <li>ID Verifications (Fraud Prevention)</li>
              <li>Contact Details</li>
              <li>UN Sanctions and SA PEP (politically exposed person)</li>
              <li>World Wide Consolidate AML Database (AML - anti-money laundering) check</li>
              <li>Interpol list</li>
              <li>Deeds Offices</li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 ">
          
        </div>
      </div>


      <div ref={visionRef} className="flex flex-col items-center justify-center opacity-0 transition-opacity duration-1000 ease-out my-16">
        <h3 className="text-2xl font-bold mb-20 text-blacktext-center">How it Works</h3>
        <div className="w-full max-w-4xl">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-center relative">
              {[
                { icon: "document-text-outline", title: "Submit Request", description: "Provide necessary details" },
                { icon: "cog-outline", title: "We Process", description: "Quick and accurate checks" },
                { icon: "checkmark-circle-outline", title: "Receive Results", description: "Secure delivery of verified info" }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center mb-8 md:mb-0 w-full md:w-1/3 relative z-10">
                  <div className="bg-[#0a4661] rounded-full p-6 mb-4 w-24 h-24 flex items-center justify-center shadow-lg">
                    <ion-icon name={step.icon} class="text-4xl text-white"></ion-icon>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-black-600">{step.description}</p>
                </div>
              ))}
              <div className="hidden md:block absolute top-1/6  left-0 right-0 h-1 bg-[#0a4661] -mt-12 z-0"></div>
            </div>
          </div>
        </div>
      </div>

      <section className="features py-16 bg-gradient-to-tr from-[#0a4661] to-[#235469]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
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
            }].map((feature, index) => (
              <div 
                key={index}
                ref={featureRefs[index]}
                className="feature-item text-center p-6 bg-white rounded-lg shadow-md opacity-0 translate-y-10 transition-all duration-500 ease-out flex flex-col justify-between"
              >
                <div>
                  <ion-icon name={feature.icon} class="text-5xl text-primary-500 mb-4"></ion-icon>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                </div>
                <Link 
                  to={feature.link}
                  className="inline-block bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors duration-300 mt-4"
                >
                  Read More
                </Link>
>>>>>>> 092d6124b5b664ca60acbf7b5dc835ff2b15663b
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
