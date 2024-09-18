import React from 'react';
// Import your image

function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here                    
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full m-auto px-5 py-6 shadow-md rounded-lg bg-white flex flex-row items-center justify-between">
        <div className="md:w-5/12">
          <img src={`${process.env.PUBLIC_URL}/images/contact-us.svg`}
            alt="Contact Us" className="w-full h-auto object-cover" />
        </div>
        <div className="md:w-6/12">
          <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
          <p className="mb-6">Have questions or need support? Our team is here to help. Reach out via email, phone, or our contact form, and we'll get back to you promptly.</p>

          <div className="flex flex-col md:flex-row gap-8">


            <form onSubmit={handleSubmit} className='w-full'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label htmlFor="firstName" className="block mb-2 font-bold">First Name</label>
                  <input type="text" id="firstName" name="firstName" required className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                  <label htmlFor="surname" className="block mb-2 font-bold">Surname</label>
                  <input type="text" id="surname" name="surname" required className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 font-bold">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block mb-2 font-bold">Contact Number</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2 font-bold">Subject</label>
                <input type="text" id="subject" name="subject" required className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 font-bold">Your Message</label>
                <textarea id="message" name="message" rows="5" required className="w-full px-3 py-2 border border-gray-300 rounded-md"></textarea>
              </div>
              <div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;