import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-base mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-red-500">Home</Link></li>
            {/* <li><Link to="/about" className="hover:text-red-500">About</Link></li> */}
            <li><Link to="/services" className="hover:text-red-500">Services</Link></li>
            <li><Link to="/projects" className="hover:text-red-500">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-red-500">Contact</Link></li>
          </ul>
        </div>

        {/* Conditions */}
<div>
  {/* <h3 className="text-white font-semibold text-base mb-4">Company</h3> */}
<div>
  <h3 className="text-white font-semibold text-base mb-4">Follow Us</h3>
  <ul className="space-y-2">
    <li className='flex items-center gap-2'>
      <FaLinkedin />
      <a
        href="https://www.linkedin.com/company/sultan-yahya-technical-services/people/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-500 transition"
      >
        LinkedIn
      </a>
    </li>
  </ul>
</div>

</div>

        {/* Sydney Office */}
        <div>
          <h3 className="text-white font-semibold text-base mb-4">Contact</h3>
          <p className="text-gray-400">
      Mail:syahyatechnicalservices@gmail.com<br />
            {/* Dubai, United Arab Emirates<br /> */}
          T: +971 52 839 6200, 050 613 5170
          </p>
        </div>

        {/* Ajman Office */}
      <div>
  <h3 className="text-white font-semibold text-base mb-4">Dubai Office</h3>
  <p className="text-gray-400">
    Al Nahda Street, Al Sheikha Mehra Building,<br />
    Al Qusais 2, Dubai, United Arab Emirates<br />
    {/* T: +971 52 839 6200, 050 613 5170 */}
  </p>
</div>

      </div>

      {/* Bottom bar */}




      <div className=" text-xs text-gray-500 mt-12 px-4">
        <div className="lg:text-center text-base text-gray-300 mt-2 font-medium">
  Delivering excellence through integrity, innovation, and reliability.
</div>
      <div className="lg:text-center text-sm text-gray-400 mt-2 italic">
  "We build trust through precision, commitment, and quality craftsmanship."
</div>

      <div className="text-center text-xs text-gray-500 mt-2 ">

        &copy; {new Date().getFullYear()} Sultan Yahya Technical Services. All rights reserved.
      </div>
      </div>
    </footer>
  );
}
