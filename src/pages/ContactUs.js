import React from 'react';
// Import your image

function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here                    
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full m-auto px-4 py-6 shadow-md rounded-lg bg-white">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-5/12">
            <img src={`${process.env.PUBLIC_URL}/images/contact-us.svg`}
              alt="Contact Us" className="w-full h-auto object-cover" />
          </div>
          <div className="w-full lg:w-6/12">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Get in Touch</h1>
            <p className="mb-6 text-sm md:text-base">Have questions or need support? Our team is here to help. Reach out via email, phone, or our contact form, and we'll get back to you promptly.</p>

            <form onSubmit={handleSubmit} className='w-full'>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label htmlFor="firstName" className="block mb-2 font-bold text-sm">First Name</label>
                  <input type="text" id="firstName" name="firstName" required className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                  <label htmlFor="surname" className="block mb-2 font-bold text-sm">Surname</label>
                  <input type="text" id="surname" name="surname" required className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 font-bold text-sm">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block mb-2 font-bold text-sm">Contact Number</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2 font-bold text-sm">Subject</label>
                <input type="text" id="subject" name="subject" required className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 font-bold text-sm">Your Message</label>
                <textarea id="message" name="message" rows="5" required className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md"></textarea>
              </div>
              <div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-600">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;