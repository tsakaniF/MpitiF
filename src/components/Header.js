import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-primary-500 bg-opacity-90 text-white py-4 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="nav-logo">
          <span className="text-2xl font-bold">VerifyNow</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="font-bold hover:underline">Home</Link></li>
            <li><Link to="/about" className="font-bold hover:underline">About Us</Link></li>
            <li><Link to="/services" className="font-bold hover:underline">Services</Link></li>
            <li><Link to="/contact" className="font-bold hover:underline">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;