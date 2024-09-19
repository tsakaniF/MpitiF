import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">About VerifyNow</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At VerifyNow, our mission is to provide cutting-edge verification solutions that empower businesses and individuals to make informed decisions. We strive to create a safer, more transparent world through innovative technology and unparalleled service.
            </p>
            <p className="text-gray-600">
              Our team of experts is dedicated to delivering accurate, timely, and comprehensive verification services that meet the evolving needs of our clients across various industries.
            </p>
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/images/mission.jpg`} alt="Our Mission" className="rounded-lg shadow-md w-full h-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <img src={`${process.env.PUBLIC_URL}/images/team.jpg`} alt="Our Team" className="rounded-lg shadow-md w-full h-auto" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Team</h2>
            <p className="text-gray-600 mb-4">
              Behind VerifyNow is a diverse team of professionals with extensive experience in technology, data analysis, and customer service. Our collective expertise allows us to tackle complex verification challenges and deliver results that exceed expectations.
            </p>
            <p className="text-gray-600">
              We're committed to ongoing learning and innovation, ensuring that our services remain at the forefront of the verification industry.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Integrity</h3>
              <p className="text-gray-600">We uphold the highest standards of honesty and ethical conduct in all our operations.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Innovation</h3>
              <p className="text-gray-600">We continuously seek new ways to improve our services and stay ahead of industry trends.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Customer Focus</h3>
              <p className="text-gray-600">We prioritize our clients' needs and strive to exceed their expectations in every interaction.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;