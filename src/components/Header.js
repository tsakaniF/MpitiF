import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const showGreenLine = ['/', '/about', '/services', '/contact'].includes(location.pathname);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 bg-purple ${isVisible ? 'top-0' : '-top-full'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img src="/images/logo2.png" alt="Mpiti Funeral Logo" className="h-10 w-auto" />
          </Link>
          <div className="flex items-center">
            <nav className="hidden md:flex space-x-16 text-center mr-8">
              <Link to="/" className="text-white hover:text-purple-200">Home</Link>
              <Link to="/about" className="text-white hover:text-purple-200">About</Link>
              <Link to="/services" className="text-white hover:text-purple-200">Services</Link>
              <Link to="/contact" className="text-white hover:text-purple-200">Contact</Link>
            </nav>
            <Link 
              to="/contact" 
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300"
            >
              Get a Quote
            </Link>
          </div>
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-purple">
          <div className="container mx-auto px-4 py-2">
            <Link to="/" className="block py-2 text-white hover:text-purple-200" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="block py-2 text-white hover:text-purple-200" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/services" className="block py-2 text-white hover:text-purple-200" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/contact" className="block py-2 text-white hover:text-purple-200" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
      {showGreenLine && <div className="h-1 bg-green-500"></div>}
    </header>
  );
}

export default Header;
