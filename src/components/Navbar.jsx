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
  <a href="/" className="flex items-center space-x-2">
    <img
      src="https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/01/LOGo-285x300.png"
      alt="Sultan Yahya Logo"
      className="h-10 w-auto object-contain"
    />
    {/* <span className={`text-xl font-bold ${scrolled || isOpen ? 'text-gray-800' : 'text-white'}`}>
      Sultan Yahya
    </span> */}
  </a>


        {/* Desktop Nav */}
        <nav className={`hidden md:flex space-x-4 sm:space-x-6 text-sm sm:text-base ${scrolled ? 'text-gray-800' : 'text-white'}`}>
       <a href="/" className="hover:text-red-600 transition-colors">Home</a>
  <a href="/services" className="hover:text-red-600 transition-colors">Services</a>
  <a href="/projects" className="hover:text-red-600 transition-colors">Projects</a>
  <a href="/contact" className="hover:text-red-600 transition-colors">Contact</a>
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
  className={`md:hidden z-50 w-full transition-all duration-500 ease-in-out transform origin-top ${
    isOpen
      ? 'max-h-screen opacity-[1] py-6 backdrop-blur-md bg-white/100'
      : 'max-h-0 opacity-0'
  }`}
>
  <div className="flex flex-col items-start space-y-6 px-6 py-6">
    <a href="/" className="text-lg hover:text-red-600 transition-colors">Home</a>
  <a href="/services" className="text-lg hover:text-red-600 transition-colors">Services</a>
  <a href="/projects" className="text-lg hover:text-red-600 transition-colors">Projects</a>
  <a href="/contact" className="text-lg hover:text-red-600 transition-colors">Contact</a>
  </div>
</div>



    </header>
  );
}
