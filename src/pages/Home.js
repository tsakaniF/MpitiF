import React, { useState, useEffect, useRef } from 'react';
import './Home.css'; // Make sure to create this CSS file

function Home() {
  const [showButton, setShowButton] = useState(false);
  const [animateHero, setAnimateHero] = useState(false);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const featureRefs = [useRef(null), useRef(null), useRef(null)];

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(animationTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <button
        className={`fixed top-4 right-4 bg-primary-600 text-white p-2 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 z-50 ${showButton ? 'translate-x-0' : 'translate-x-full'
          }`}
        aria-label="Verify Now"
        style={{
          transitionProperty: 'transform, opacity',
          transitionDuration: '300ms',
          opacity: showButton ? 1 : 0,
        }}
      >
        Verify Now
      </button>

      <section
        className="hero bg-cover bg-center text-white text-center min-h-screen flex items-center relative"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/verified.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`hero-content mt-16 transition-all duration-1000 ease-out ${animateHero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
              Your Trusted Partner for{' '}
              <span className="animate-text-color">Secure Verification</span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl mb-8 font-light italic text-gray-200">
              Providing accurate and instant identity verification solutions tailored to your needs.
            </p>
            <button className="bg-white text-primary-700 hover:bg-gray-200 font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="about-us py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="w-8/12 m-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary-700 text-center">Empowering Businesses with Accurate and Instant Identity Verification Solutions</h2>
            <p className="text-lg mb-8 opacity-70 text-center">VerifyNow offers seamless and secure identity verification and background check services tailored to your needs. Whether you're onboarding new employees, verifying tenant information, or conducting thorough background checks, VerifyNow ensures accuracy, reliability, and compliance.</p>
          </div>
          <div ref={missionRef} className="flex flex-col md:flex-row-reverse items-center justify-center opacity-0 transition-opacity duration-1000 ease-out">
            <div className="md:w-5/12 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg mb-4 opacity-70">To provide businesses with the tools they need to verify identities quickly and securely, ensuring trust and reducing fraud across industries.</p>
            </div>
            <div className="md:w-4/12 md:pl-8">
              <img
                src={`${process.env.PUBLIC_URL}/images/mission.png`}
                alt="Our Mission"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div ref={visionRef} className="flex flex-col md:flex-row items-center justify-center mt-16 opacity-0 transition-opacity duration-1000 ease-out">
            <div className="md:w-5/12 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg mb-4 opacity-70">To be the leading provider of verification services, recognized for innovation, reliability, and excellence in customer service.</p>
            </div>
            <div className="md:w-4/12 md:pl-8">
              <img
                src={`${process.env.PUBLIC_URL}/images/vision.png`}
                alt="Our Vision"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="features bg-primary-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              icon: "flash-outline",
              title: "Instant Verification",
              description: "Verify identities in real-time with our advanced technology."
            },
            {
              icon: "shield-checkmark-outline",
              title: "Comprehensive Checks",
              description: "Thorough background checks covering multiple aspects."
            },
            {
              icon: "lock-closed-outline",
              title: "Secure & Compliant",
              description: "Ensuring data security and regulatory compliance."
            }].map((feature, index) => (
              <div 
                key={index}
                ref={featureRefs[index]}
                className="feature-item text-center p-6 bg-white rounded-lg shadow-md opacity-0 translate-y-10 transition-all duration-500 ease-out"
              >
                <ion-icon name={feature.icon} class="text-5xl text-primary-500 mb-4"></ion-icon>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;