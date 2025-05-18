import React from 'react';
import Herosection from '../components/Herosection';
import helmetImage from '../assets/helmet.png';

const ContactSection = () => {
  return (
    <>

    <section>
        <Herosection image={helmetImage}/>
    </section>

  


        {/* <section className="px-6 py-20 md:px-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-red-600 mb-6 border-b pb-2 border-red-500 inline-block">
            OUR LOCATIONS
          </h2>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-red-500 mb-2">SYDNEY</h3>
            <p className="text-lg font-medium text-black mb-1">
              Level 10, 1-5 Chalmers Crescent, Mascot, NSW 2020
            </p>
            <p className="mb-4">T: (02) 9332 4722</p>

            <p className="mt-10 mb-1">ABN: 95 111 941 792</p>
            <p>Lic No. 173 639 C</p>
          </div>
        </div>


        <div>
          <iframe
            title="Google Map Sydney"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.643486649826!2d151.19086717550663!3d-33.92707402031867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ba2cb2cb169b%3A0x7b6c9a7c9dd7c64c!2s1-5%20Chalmers%20Cres%2C%20Mascot%20NSW%202020%2C%20Australia!5e0!3m2!1sen!2sin!4v1715683970016!5m2!1sen!2sin"
            width="100%"
            height="450"
            className="rounded-md border"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section> */}
    <section className="px-6 py-20 md:px-20 bg-white">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
    
    {/* Contact Details */}
    <div>
      <h2 className="text-3xl sm:text-4xl font-semibold text-red-600 mb-6 border-b pb-2 border-red-500 inline-block">
        OUR LOCATIONS
      </h2>

      {/* Dubai Office */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-red-500 mb-2">Dubai Office</h3>
        <p className="text-lg font-medium text-black mb-1">
          Al Nahda Street, Al Sheikha Mehra Building,<br />
          Al Qusais 2, Dubai, United Arab Emirates
        </p>
        <p className="mb-6">T: +971 52 839 6200, 050 613 5170</p>
      </div>


      {/* Email */}
      <div className="mt-6">
        <p className="text-gray-700">
          Email: <a href="mailto:syahyatechnicalservices@gmail.com" className="text-blue-600 underline">syahyatechnicalservices@gmail.com</a>
        </p>
      </div>
    </div>

    {/* Google Map (Dubai Office as sample) */}
    <div>
      <iframe
        title="Google Map - Dubai Office"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7541676598095!2d55.36659887538564!3d25.284265927605107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cc37d7a71cb%3A0xa70c2c8f65e14445!2sAl%20Qusais%20Industrial%20Area%204%20-%20Dubai!5e0!3m2!1sen!2sae!4v1715786901234!5m2!1sen!2sae"
        width="100%"
        height="450"
        className="rounded-md border"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>

{/*  
    <section className="bg-white py-20 px-6 sm:px-10 md:px-20">
      <h2 className="text-3xl sm:text-4xl font-semibold text-red-600 mb-10 border-b border-red-500 pb-4">
        CONTACT FORM
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-xl font-medium mb-6">
            We'd love to hear from you! Please reach out to us through our contact form and let us know how we can assist you.
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name *</label>
            <input
              type="text"
              className="w-full border-b border-black focus:outline-none py-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input
              type="email"
              className="w-full border-b border-black focus:outline-none py-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone *</label>
            <input
              type="tel"
              className="w-full border-b border-black focus:outline-none py-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message *</label>
            <textarea
              className="w-full border-b border-black focus:outline-none py-1 resize-none"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 text-black font-medium underline hover:text-red-600"
          >
            Submit
          </button>
        </form>
      </div>
    </section> */}

       </>
  );
};

export default ContactSection;