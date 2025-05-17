// components/Navbar.jsx
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
<header
  className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
    scrolled || isOpen ? 'bg-white/50 backdrop-blur-md shadow-md' : 'bg-transparent'
  }`}
>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className={`text-xl font-bold ${scrolled || isOpen ? 'text-gray-800' : 'text-white'}`}>Sultan Yahya</h1>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex space-x-4 sm:space-x-6 text-sm sm:text-base ${scrolled ? 'text-gray-800' : 'text-white'}`}>
          <a href="/" className="hover:text-blue-600">Home</a>
          {/* <a href="/about" className="hover:text-blue-600">About</a> */}
          <a href="/services" className="hover:text-blue-600">Services</a>
          <a href="/projects" className="hover:text-blue-600">Projects</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} className={`focus:outline-none ${scrolled || isOpen ? 'text-gray-800' : 'text-white'}`}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Smooth Transition */}
     <div
  className={`md:hidden px-6 overflow-hidden transition-all duration-500 ease-in-out transform origin-top ${
    isOpen ? 'max-h-screen opacity-100 bg-white/90 backdrop-blur-md text-gray-800 py-6' : 'max-h-0 opacity-0'
  }`}
>

        <div className="space-y-6">
          <a href="/" className="block hover:text-blue-600 text-lg">Home</a>
          <a href="/about" className="block hover:text-blue-600 text-lg">About</a>
          <a href="/services" className="block hover:text-blue-600 text-lg">Services</a>
          <a href="/projects" className="block hover:text-blue-600 text-lg">Projects</a>
          <a href="/contact" className="block hover:text-blue-600 text-lg">Contact</a>
        </div>
      </div>
    </header>
  );
}
