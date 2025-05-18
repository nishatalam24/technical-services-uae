// import { motion } from "framer-motion";

// const people = [
//   {
//     src: "https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-03-09-at-4.44.05-PM.jpeg",
//     name: "Sultan Zafar",
//     role: "Founder & CEO",
//     quote: "Precision and planning build strong foundations.",
//   },
//   {
//     src: "https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-9.09.42-PM-1-e1741545445726.jpeg",
//     name: "John Doe",
//     role: "Interior Designer",
//     quote: "Design speaks louder than words.",
//   },
//   {
//     src: "https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-9.09.10-PM.jpeg",
//     name: "Team",
//     // role: "Site Supervisor",
//     // quote: "Safety is the blueprint of success.",
//   },
// ];

// export default function TeamSection() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-16">
//       {people.map((person, i) => (
//         <motion.div
//           key={i}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: i * 0.2 }}
//           viewport={{ once: true }}
//           className="relative group"
//         >
//           <img
//             src={person.src}
//             alt={person.name}
//             className="w-full h-auto rounded shadow-md object-cover"
//           />

//           {/* Overlay for large screens */}
//           <div className="hidden md:flex absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white flex-col justify-end p-6 rounded">
//             <h3 className="text-lg font-semibold">{person.name}</h3>
//             <p className="text-sm mb-2 opacity-80">{person.role}</p>
//             <p className="text-xs">{person.quote}</p>
//           </div>

//           {/* Static text below image for small screens */}
//           <div className="block md:hidden mt-3 text-left">
//             <h3 className="text-lg font-semibold">{person.name}</h3>
//             <p className="text-sm text-gray-600">{person.role}</p>
//             <p className="text-sm text-gray-500 mt-1">{person.quote}</p>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }

import { motion } from "framer-motion";

const people = [
  {
    src: "https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-03-09-at-4.44.05-PM.jpeg",
    name: "Sultan Zafar",
    role: "Founder & CEO",
    quote:
      "SULTAN YAHYA TECHNICAL SERVICES is led by  Sultan Zafar, a visionary professional with over 25 years of experience in the Gulf’s construction, maintenance, and building materials sectors. His mission is clear: to position the company as one of the most reliable and preferred contractors in the UAE by offering comprehensive, one-stop technical solutions. Renowned for his innovation and passion for the industry, Mr. Zafar’s dedication to quality, budget adherence, and transparency has been instrumental in shaping the company’s reputation. Under his leadership, the team continues to set new benchmarks in service excellence.",
  },
  {
    src: "https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-9.09.42-PM-1-e1741545445726.jpeg",
    role: "Engineer",
    quote:
      "Under the leadership , we’ve cultivated a culture rooted in discipline, innovation, and accountability. As engineers, we are empowered to deliver smart, scalable solutions that truly reflect our client's vision. It’s this foundation of trust and excellence that defines our work.",
  },
  {
    src: "https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-9.09.10-PM.jpeg",
    name: "Team",
    role: "Site Supervisor",
    quote: "On every site, safety and precision are the cornerstones of our success.",
  },
];


export default function TeamSection() {
  return (
    <section className="bg-white w-[1000px]  py-[50px] lg:py-[70px] px-6 sm:px-10 md:px-20 w-[90vw]">
      {/* <h2 className="text-red-600 text-3xl sm:text-4xl font-semibold text-center mb-12">
        Our People
      </h2> */}
      <div className="space-y-16 ">
        {people.map((person, i) => (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row justify-between gap-8 max-w-6xl mx-auto ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={person.src}
              alt={person.name}
              className="w-full sm:w-96 rounded shadow-md object-cover  lg:w-[30vw]"
            />
            <div className="text-left max-w-xl">
              <h3 className="text-4xl font-bold text-gray-900 mb-1">{person.name}</h3>
              <p className="text-red-600 font-semibold mb-4 text-4xl">{person.role}</p>
              <p className="text-gray-700  italic text-xl">"{person.quote}"</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}