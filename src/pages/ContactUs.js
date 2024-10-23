import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container bg-gray-100">
      <div className="hero-section relative h-64 overflow-hidden">
        <img src="/images/phone.jpg" alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center">We are here to assist you with any inquiries.</h1>
        </div>
      </div>

      <div className="contact-content container mx-auto px-4 py-12 flex flex-wrap">
        <div className="contact-info w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <div className="bg-green-600 h-1 w-16 mb-6"></div>
          <h3 className="text-xl font-semibold mb-4 bg-green-600 text-white py-2 px-4 inline-block">Enquiries</h3>
          <p className="flex items-center mb-2">
            <FaPhone className="mr-2 text-green-600" /> 083-488 3908
          </p>
          <p className="flex items-center mb-2">
            <FaEnvelope className="mr-2 text-green-600" /> mpitifunerals@gmail.com
          </p>
          <p className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2 text-green-600" /> <strong>Business Hours:</strong>
          </p>
          <p className="ml-6 mb-1">07H00 - 19H00 Weekdays</p>
          <p className="ml-6 mb-1">08H00 - 14H00 Saturdays</p>
          <p className="ml-6">(Closed on Public Holidays and Sundays)</p>
        </div>

        <form className="contact-form w-full md:w-1/2" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
          <div className="bg-green-600 h-1 w-16 mb-6"></div>
          <h3 className="text-xl font-semibold mb-4 bg-green-600 text-white py-2 px-4 inline-block">Email</h3>
          <input 
            type="text" 
            placeholder="Your Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <textarea 
            placeholder="Your Message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
            className="w-full mb-4 p-2 border border-gray-300 rounded h-32"
          />
          <button type="submit" className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition-colors duration-300">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
