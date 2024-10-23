import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="services-page container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Services</h1>
      
      <section className="funeral-services mb-12">
        <h2 className="text-2xl font-semibold mb-4">Funeral Services</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Traditional Funeral Services</li>
          <li>Memorial Services</li>
          <li>Cremation Services</li>
          <li>Pre-planning Services</li>
          <li>Burial Services</li>
          <li>Chapel Services</li>
        </ul>
      </section>
      
      <section className="additional-services mb-12">
        <h2 className="text-2xl font-semibold mb-4">Additional Services</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Grief Counseling</li>
          <li>Flower Arrangements</li>
          <li>Transportation Services</li>
          <li>Documentation Assistance</li>
          <li>Catering Services</li>
          <li>Obituary Writing</li>
        </ul>
      </section>
      
      <Link to="/contact" className="contact-button bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-300">
        Contact Us for More Information
      </Link>
    </div>
  );
}

export default Services;
