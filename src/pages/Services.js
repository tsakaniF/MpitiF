import React from 'react';

const services = [
  {
    title: "Identity Verification",
    description: "Instantly verify the authenticity of government-issued IDs, passports, and more using our advanced technology that scans over 6,500 documents from 200 countries.",
    icon: "🆔"
  },
  {
    title: "Background Checks",
    description: "Comprehensive background screening for employment, tenant screening, and more, including criminal history, education, and employment verification.",
    icon: "🔍"
  },
  {
    title: "Continuous Monitoring",
    description: "Stay updated with our real-time monitoring services that alert you to any new information, such as arrests or other legal issues.",
    icon: "🔔"
  },
  {
    title: "Document Verification",
    description: "Validate the authenticity of various documents including academic certificates, employment records, and financial statements.",
    icon: "📄"
  },
  {
    title: "Biometric Verification",
    description: "Utilize cutting-edge biometric technology for facial recognition and fingerprint matching to ensure the highest level of identity verification.",
    icon: "👤"
  },
  {
    title: "AML & KYC Compliance",
    description: "Ensure compliance with Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations through our comprehensive verification processes.",
    icon: "⚖️"
  }
];

function Services() {
  return (
    <section className="services py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;