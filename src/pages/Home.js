import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Make sure to create this CSS file

function Home() {
  const [showButton, setShowButton] = useState(false);
  const [animateHero, setAnimateHero] = useState(false);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const featureRefs = [useRef(null), useRef(null), useRef(null)];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const slidingTexts = [
    "Providing accurate and instant identity verification solutions.",
    "Ensuring trust and security in your business processes.",
    "Streamlining background checks for faster onboarding."
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Trigger hero animation after a short delay
    const animationTimer = setTimeout(() => {
      setAnimateHero(true);
    }, 100);

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(animationTimer);
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

      <section
        className="hero bg-cover bg-center text-white text-center min-h-screen flex items-center relative"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/verified.jpg)`,
          marginTop: '-80px', // Adjust this value to match your navbar height
          paddingTop: '80px', // Add padding to push content down
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
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
            </Link>
          </div>
        </div>
      </section>

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


      <div ref={missionRef} className="flex flex-col md:flex-row-reverse items-center justify-center opacity-0 transition-opacity duration-1000 ease-out mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
          <h3 className="text-2xl font-bold mb-4 text-[#0a4661] text-center">VerifyNow Access</h3>
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
        <div className="md:w-1/2">
          <img
            src={`${process.env.PUBLIC_URL}/images/cation.jpg`}
            alt="Verifynow Access"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
      <div ref={visionRef} className="flex flex-col md:flex-row items-center justify-center opacity-0 transition-opacity duration-1000 ease-out">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h3 className="text-2xl font-bold mb-4 text-[#0a4661] text-center">How it Works</h3>
          <div className="bg-[#0a4661] p-6 rounded-lg shadow-md">
            <ol className="list-decimal list-inside space-y-2 text-white">
              <li>Contact and submit your request – Provide the necessary details.</li>
              <li>We process quickly – Our advanced systems ensure timely and accurate checks.</li>
              <li>Receive results – Verified information delivered securely.</li>
            </ol>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={`${process.env.PUBLIC_URL}/images/ver.jpg`}
            alt="How it Works"
            className="w-full h-auto rounded-lg shadow-md"
          />
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;