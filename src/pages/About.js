import React from 'react';

function About() {
  return (
    <section className="about-us py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
        <p className="text-lg mb-8">VerifyNow offers seamless and secure identity verification and background check services tailored to your needs. Whether you're onboarding new employees, verifying tenant information, or conducting thorough background checks, VerifyNow ensures accuracy, reliability, and compliance.</p>
        
        <h2 className="text-2xl font-bold mb-4">Our Mission:</h2>
        <p className="text-lg mb-8">To provide businesses with the tools they need to verify identities quickly and securely, ensuring trust and reducing fraud across industries.</p>
        
        <h3 className="text-2xl font-bold mb-4">Our Vision:</h3>
        <p className="text-lg">To be the leading provider of verification services, recognized for innovation, reliability, and excellence in customer service.</p>
      </div>
    </section>
  );
}

export default About;