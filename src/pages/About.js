import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-container bg-gray-100">
      <div className="hero h-64 relative overflow-hidden">
        <img src="/images/about.jpg" alt="About Us" className="w-full h-full object-cover" />
      </div>
      <div className="content container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/2 pr-8">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-lg mb-4">
              Mpiti's Funeral Home is based in the Winnie-Madikizela Mandela Local Municipality (head office), which is part of the Eastern Cape province of South Africa. This small business initiative prides itself on being an innovative and empowering tool in the region and the province as a whole.
            </p>
            <p className="text-lg mb-4">
              Mpiti's Funeral Home provides its services to the public and private sectors, as well as individuals, at affordable rates. Keeping abreast of changing trends in a highly competitive and volatile industry has enabled our company to strengthen its position as a prominent burial scheme, tent hire, and wedding arrangements business.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img src="/images/about2.jpg" alt="About Mpiti Funeral" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>

        <div className="cta bg-green-600 text-white p-6 rounded-lg mt-12 mb-12">
          <h3 className="text-2xl font-semibold mb-2">Contact Us Today</h3>
          <p className="mb-4">For more information about our services, feel free to reach out!</p>
          <Link to="/contact" className="inline-block bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">Get in Touch</Link>
        </div>
      </div>

      <div className="team-container bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="team-member">
              <img src="/images/person2.jpg" alt="Mrs. B Mpiti" className="w-48 h-48 rounded-full mb-4 object-cover" />
              <h3 className="text-xl font-semibold">MRS. B MPITI</h3>
              <p className="font-medium text-green-600">Director</p>
              <p className="mt-2">With over 20 years of experience, Mrs. Mpiti leads our team with compassion and dedication.</p>
            </div>
            <div className="team-member">
              <img src="/images/person.jpg" alt="Mr. J Smith" className="w-48 h-48 rounded-full mb-4 object-cover" />
              <h3 className="text-xl font-semibold">MR. J SMITH</h3>
              <p className="font-medium text-green-600">Funeral Director</p>
              <p className="mt-2">Mr. Smith provides guidance and support to families during their time of need.</p>
            </div>
            <div className="team-member">
              <img src="/images/person3.jpg" alt="Ms. L Johnson" className="w-48 h-48 rounded-full mb-4 object-cover" />
              <h3 className="text-xl font-semibold">MS. L JOHNSON</h3>
              <p className="font-medium text-green-600">Administrative Assistant</p>
              <p className="mt-2">Ms. Johnson ensures that all operations run smoothly and efficiently.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mission-vision bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-green-700 text-center">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="mission bg-gray-100 rounded-lg p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Mission Statement</h3>
              <p className="text-lg leading-relaxed">
                We strive to be the premier choice for funeral services, catering to businesses of all sizes, organizations, and individuals. Our goal is to contribute significantly to the growth of the South African economy and community development through our compassionate and professional services.
              </p>
            </div>
            <div className="vision bg-gray-100 rounded-lg p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                Mpiti's Funeral Home aspires to be recognized as the leading funeral service provider throughout South Africa. We aim to set the standard for compassionate care, innovative services, and community support in the funeral industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
