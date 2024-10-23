import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

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

  const isHomePage = location.pathname === '/';
  const shouldHaveBackgroundImage = ['/about', '/services', '/contact'].includes(location.pathname);

  const headerStyle = shouldHaveBackgroundImage
    ? {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/verified.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : {};

  return (
    <header 
      className={`fixed top-0 left-0 right-0 ${isHomePage ? 'bg-transparent' : shouldHaveBackgroundImage ? 'bg-opacity-70 bg-black' : 'bg-white'} ${isHomePage || shouldHaveBackgroundImage ? 'text-white' : 'text-blue-500'} py-4 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      style={headerStyle}
    >
      <div className="container mx-auto px-10 flex justify-between items-center">
        <Link to="/" className="flex items-center"> {/* Wrapped in Link component */}
       
          <span className="text-2xl font-bold"></span>
        </Link>
        <nav>
          <ul className="flex space-x-10">
            <li><Link to="/" className={`font-bold hover:text-${isHomePage || shouldHaveBackgroundImage ? 'blue-300' : 'blue-700'} transition-colors duration-200`}>Home</Link></li>
            <li><Link to="/about" className={`font-bold hover:text-${isHomePage || shouldHaveBackgroundImage ? 'blue-300' : 'blue-700'} transition-colors duration-200`}>About Us</Link></li>
            <li><Link to="/services" className={`font-bold hover:text-${isHomePage || shouldHaveBackgroundImage ? 'blue-300' : 'blue-700'} transition-colors duration-200`}>Services</Link></li>
            <li><Link to="/contact" className={`font-bold hover:text-${isHomePage || shouldHaveBackgroundImage ? 'blue-300' : 'blue-700'} transition-colors duration-200`}>Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;