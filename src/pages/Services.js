import React from 'react';

function Services() {
  return (
    <section className="services py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="service">
            <h3 className="text-2xl font-bold mb-4">Identity Verification</h3>
            <p className="text-lg">Instantly verify the authenticity of government-issued IDs, passports, and more using our advanced technology that scans over 6,500 documents from 200 countries.</p>
          </div>
          <div className="service">
            <h3 className="text-2xl font-bold mb-4">Background Checks</h3>
            <p className="text-lg">Comprehensive background screening for employment, tenant screening, and more, including criminal history, education, and employment verification.</p>
          </div>
          <div className="service">
            <h3 className="text-2xl font-bold mb-4">Continuous Monitoring</h3>
            <p className="text-lg">Stay updated with our real-time monitoring services that alert you to any new information, such as arrests or other legal issues.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;