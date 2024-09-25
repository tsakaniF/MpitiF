import React, { useState } from 'react';
// Import your image

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Your message has been sent successfully!');
        setFormData({
          firstName: '',
          surname: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4 h-full">
        <div className="w-full h-full m-auto px-4 py-6 shadow-md rounded-lg bg-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 h-full">
            <div className="w-full lg:w-5/12">
              <img src={`${process.env.PUBLIC_URL}/images/contact-us.svg`}
                alt="Contact Us" className="w-full h-auto object-cover" />
            </div>
            <div className="w-full lg:w-6/12 p-6 rounded-lg">
              <div className="text-center mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-black inline-block">Get in Touch</h1>
                <div className="h-1 w-20 bg-orange-500 mx-auto mt-2"></div>
              </div>
              <p className="font-bold mb-6 text-sm md:text-base text-gray-700">Have questions or need support? Our team is here to help. Reach out via email, phone, or our contact form, and we'll get back to you promptly.</p>

              <form onSubmit={handleSubmit} className='w-full'>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label htmlFor="firstName" className="block mb-2 font-bold text-sm text-gray-700">First Name</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-3 py-2 text-sm border border-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="surname" className="block mb-2 font-bold text-sm text-gray-700">Surname</label>
                    <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange} required className="w-full px-3 py-2 text-sm border border-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 font-bold text-sm text-gray-700">Email Address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 text-sm border border-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block mb-2 font-bold text-sm text-gray-700">Contact Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-3 py-2 text-sm border border-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-2 font-bold text-sm text-gray-700">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-3 py-2 text-sm border border-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2 font-bold text-sm text-gray-700">Your Message</label>
                  <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required className="w-full px-3 py-2 text-sm border border-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                </div>
                <div>
                  <button type="submit" className="bg-orange-500 text-white px-4 py-2 text-sm rounded-md hover:bg-orange-600 transition-colors duration-300">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;