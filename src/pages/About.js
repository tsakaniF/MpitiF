import React, { useRef, useEffect } from 'react';

function About() {
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <section className="about-us mb-16">
          <div className="w-full md:w-8/12 mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Empowering Businesses with Accurate and Instant Identity Verification Solutions</h2>
            <p className="text-lg mb-8 text-gray-600 text-center">VerifyNow offers seamless and secure identity verification and background check services tailored to your needs. Whether you're onboarding new employees, verifying tenant information, or conducting thorough background checks, VerifyNow ensures accuracy, reliability, and compliance.</p>
          </div>

          <section className="why-choose-us mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Why Choose VerifyNow?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
                <div className="text-4xl mb-4 text-center">🔒</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">Accuracy</h3>
                <p className="text-gray-600 text-center">Our verification services are powered by the latest technology and comprehensive databases, ensuring accurate results every time.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
                <div className="text-4xl mb-4 text-center">🚀</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">Compliance</h3>
                <p className="text-gray-600 text-center">VerifyNow adheres to all relevant laws and regulations, providing you with peace of mind and reducing legal risks.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
                <div className="text-4xl mb-4 text-center">🤝</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">Flexibility</h3>
                <p className="text-gray-600 text-center">Whether you need a single check or bulk processing, our services are scalable to meet your specific business requirements.</p>
              </div>
            </div>
          </section>

          <div ref={missionRef} className="flex flex-col md:flex-row-reverse items-center justify-center opacity-0 transition-opacity duration-1000 ease-out mb-16">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-lg mb-4 text-gray-600">To provide businesses with the tools they need to verify identities quickly and securely, ensuring trust and reducing fraud across industries.</p>
            </div>
            <div className="md:w-1/2">
              <img
                src={`${process.env.PUBLIC_URL}/images/mission.png`}
                alt="Our Mission"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
          <div ref={visionRef} className="flex flex-col md:flex-row items-center justify-center opacity-0 transition-opacity duration-1000 ease-out">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
              <p className="text-lg mb-4 text-gray-600">To be the leading provider of verification services, recognized for innovation, reliability, and excellence in customer service.</p>
            </div>
            <div className="md:w-1/2">
              <img
                src={`${process.env.PUBLIC_URL}/images/vision.png`}
                alt="Our Vision"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;