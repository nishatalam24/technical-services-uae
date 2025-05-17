import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { AnimatePresence, motion } from 'framer-motion';

const images = [
 'https://sultanyahyatechnicalservices.com/wp-content/themes/ona/assets/img/architecture/cta_promo_1.webp',
  'https://sultanyahyatechnicalservices.com/wp-content/themes/ona/assets/img/architecture/cta_promo_2.webp',
  'https://sultanyahyatechnicalservices.com/wp-content/themes/ona/assets/img/architecture/cta_promo_3.webp',
];

const QualityPolicySection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Text Side */}
        <div className="space-y-6">
          <h2 className="inline-block bg-black text-white px-6 py-2 rounded text-2xl font-semibold tracking-wide">
            QUALITY POLICY
          </h2>
    <p className="text-gray-700 text-lg font-semibold">
  <span className="font-bold">SULTAN YAHYA TECHNICAL SERVICES</span> is a trusted and established organization renowned for its commitment to client satisfaction. Our reputation is built on delivering high-quality services and the timely execution of contractual obligations with precision and professionalism.
</p>

<ul className="list-disc ml-5 text-gray-700 text-base space-y-2 mt-4">
  <li>Gaining a deep understanding of our clients’ expectations and project objectives</li>
  <li>Delivering solutions that meet requirements efficiently and within agreed timelines</li>
  <li>Driving continuous improvement through proactive evaluations and internal audits</li>
  <li>Setting new benchmarks for excellence across all areas of contracting and technical services</li>
</ul>
<a
  href="/contact"
  className="inline-block mt-6 bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition"
>
  Contact Us
</a>

        </div>

        {/* Image Side */}
        <div className="relative h-[60vh] w-full overflow-hidden rounded shadow-md">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={images[index]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${images[index]})` }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div>
          <div className="text-5xl font-bold text-red-600">
            <CountUp end={25} duration={2} />+
          </div>
          <p className="text-gray-800 mt-2 text-base font-medium">Years of Excellence</p>
        </div>
        <div>
          <div className="text-5xl font-bold text-red-600">
            <CountUp end={1564} duration={2} />+
          </div>
          <p className="text-gray-800 mt-2 text-base font-medium">Satisfied Clients</p>
        </div>
        <div>
          <div className="text-5xl font-bold text-red-600">
            <CountUp end={50} duration={2} />
          </div>
          <p className="text-gray-800 mt-2 text-base font-medium">Industry Awards</p>
        </div>
      </div>

      {/* Objective Box */}
      <div className="max-w-4xl mx-auto mt-12 bg-gray-800 text-white text-center px-6 py-6 rounded-xl text-lg">
        The objective of our Quality Policy is the continual expansion of our business through a trusted reputation
        and attention to evolving client requirements and market needs.
      </div>
      
    </section>
  );
};

export default QualityPolicySection;
