import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/eins.png" alt="Eins Cybertech" className="h-16 w-auto" />
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-700 hover:text-blue-700 transition-colors px-3 py-2 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-blue-700 transition-colors px-3 py-2 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-700 hover:text-blue-700 transition-colors px-3 py-2 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('team')} 
              className="text-gray-700 hover:text-blue-700 transition-colors px-3 py-2 font-medium"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-blue-700 hover:bg-blue-800 text-white transition-colors px-4 py-2 rounded-md font-medium"
            >
              Contact Us
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-700 focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6\" fill="none\" viewBox="0 0 24 24\" stroke="currentColor">
                  <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
          <button 
            onClick={() => scrollToSection('home')} 
            className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-700 font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-700 font-medium"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-700 font-medium"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('team')} 
            className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-700 font-medium"
          >
            Team
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="block w-full text-left px-3 py-2 bg-blue-700 text-white hover:bg-blue-800 transition-colors rounded-md font-medium mt-2"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;