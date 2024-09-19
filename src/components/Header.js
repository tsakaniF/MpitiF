import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setIsVisible(false);
      } else { // if scroll up show the navbar
        setIsVisible(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 bg-blue-900 text-white py-4 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={`${process.env.PUBLIC_URL}/images/logo.jpeg`} 
            alt="VerifyNow Logo" 
            className="w-12 h-12 mr-3 object-contain"
          />
          <span className="text-2xl font-bold">VerifyNow</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="font-bold hover:text-blue-300 transition-colors duration-200">Home</Link></li>
            <li><Link to="/about" className="font-bold hover:text-blue-300 transition-colors duration-200">About Us</Link></li>
            <li><Link to="/services" className="font-bold hover:text-blue-300 transition-colors duration-200">Services</Link></li>
            <li><Link to="/contact" className="font-bold hover:text-blue-300 transition-colors duration-200">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;