// pages/Home.jsx
import { useState, useEffect ,useCallback} from "react";
import { AnimatePresence, motion } from "framer-motion";
import helmetImage from "../assets/helmet.png"; // Adjust the path as necessary
import helmetImageArch from "../assets/helmet_arch.png"; // Adjust the path as necessary
import RecentShowcase from "../components/RecentShowcase";
import TeamSection from "../components/TeamSection";
import ServiceCatalog from "../components/ServiceCatlog";
import ClientTestimonials from "../components/ClientTestimonials";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import QualityPolicySection from "../components/QualityPolicySection";
import FeaturedProjects from "../components/FeaturedProject";
// import StarRating from "../components/StarRating";
// import ImageShowcase from "../components/ImageShowcase";
// import { Link } from 'react-router-dom'; // or 'next/link' if using Next.js

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slides = [
  {
    image:helmetImageArch,
    title: "City Office Tower",
  },
  // {
  //   image:"https://plus.unsplash.com/premium_photo-1704988993814-a9dac402315b?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   title: "City Office Tower",
  // },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1482731215275-a1f151646268?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   title: "Punchbowl Mosque",
  // },
  {
    image:
      "https://images.unsplash.com/photo-1592809617704-5fae402e9634?q=80&w=3133&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Skyline Pavilion",
  },
  {
    image:
      "https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-9.09.10-PM.jpeg",
    title: "Skyline Pavilion",
  },
];

// const statSlides = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1746764964456-d0a48759500a?q=80&w=2206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     stats: [
//       { number: "33+", label: "Years Experience" },
//       { number: "600+", label: "Projects Built" },
//     ],
//   },
//   {
//     image:
//       "https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/03/a-carpenter-is-working-on-a-wood-floorin_6rAerYJaSKWRkXkNo7nnxA_moTqRcc3T7KwCTrQ8EiS1A.jpeg",
//     stats: [
//       { number: "85%", label: "Repeat Clients" },
//       { number: "24/7", label: "Service Availability" },
//     ],
//   },
//   {
//     image:
//       helmetImage,
//     stats: [
//       { number: "85%", label: "Repeat Clients" },
//       { number: "24/7", label: "Service Availability" },
//     ],
//   },
// ];

const statSlides = [

  {
    image: 'https://plus.unsplash.com/premium_photo-1683120897865-b09acb266810?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
    {
    image: 'https://plus.unsplash.com/premium_photo-1661911021547-b0188f22d548?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1681486466017-2bbbd549e04b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const fixedStats = [
  { number: 25, suffix: '+', label: 'Years of Excellence' },
  { number: 1564, suffix: '+', label: 'Satisfied Clients' },
  { number: 50, suffix: '', label: 'Industry Awards' },
];





const featuredProjects = [
  {
    title: "Skyline Pavilion",
    description: "Modern high-rise pavilion project with premium finishes.",
    image:
      "https://images.unsplash.com/photo-1610264146566-c233419fb1c7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Urban Towers",
    description:
      "Twin tower project in downtown with sustainable architecture.",
    image:
      "https://images.unsplash.com/photo-1610264146566-c233419fb1c7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Bridge Construction",
    description: "Cable-stayed bridge engineering milestone.",
    image:
      "https://images.unsplash.com/photo-1610264146566-c233419fb1c7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Bridge Construction",
    description: "Cable-stayed bridge engineering milestone.",
    image:
      "https://images.unsplash.com/photo-1610264146566-c233419fb1c7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Bridge Construction",
    description: "Cable-stayed bridge engineering milestone.",
    image:
      "https://images.unsplash.com/photo-1610264146566-c233419fb1c7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Bridge Construction",
    description: "Cable-stayed bridge engineering milestone.",
    image:
      "https://images.unsplash.com/photo-1610264146566-c233419fb1c7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Bridge Construction",
    description: "Cable-stayed bridge engineering milestone.",
    image:
      "https://images.unsplash.com/photo-1610264146566-c233419fb1c7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const testimonials = [
  {
    name: 'Al Ghurair Properties',
    projects: [
      {
        project: 'Repairing, Glass/Cladding Re-fixing at Ramada Hotel',
        quote: 'Neat glass and cladding restoration with no disruption to guest services.',
        stars: 4,
      },
      {
        project: 'Civil Maintenance Work – OBK 118-166, Deira',
        quote: 'Professional repair and maintenance with minimal supervision needed.',
        stars: 5,
      },
      {
        project: 'Various Maintenance Works – AG-4, Jabal Ali',
        quote: 'All-around maintenance completed seamlessly with minimal back-and-forth.',
        stars: 4,
      },
      {
        project: 'Reinstatement, Gypsum, Ceiling Tile Replacement',
        quote: 'Finishing was clean and defect-free — highly satisfied.',
        stars: 5,
      },
      {
        project: 'Port Saeed 202 – Rectification Work',
        quote: 'Corrective work was thorough, timely, and professionally closed.',
        stars: 4,
      },
      {
        project: 'Replacement of Damaged Metal Door',
        quote: 'Responsive action on emergency replacement with great results.',
        stars: 4,
      },
      {
        project: 'Replacement of Jacuzzi with Bathtub – Garhoud 365 Villa',
        quote: 'Home upgrade completed cleanly and with premium fittings.',
        stars: 5,
      },
      {
        project: 'Bathtub Replacement – Reffa 340 Flat #207',
        quote: 'Quick unit upgrade handled with care and good finishing.',
        stars: 4,
      },
      {
        project: 'Balcony Tile Refixing – Muteena 4428 Flats',
        quote: 'Careful rework of balconies completed to high standards.',
        stars: 5,
      },
      {
        project: 'Wall Tile Rectification – Muraqqabat 133',
        quote: 'Tiles aligned and corrected with great craftsmanship.',
        stars: 5,
      },
    ],
  },
  {
    name: 'Al Sultan Electromechanical LLC',
    projects: [
      {
        project: 'Juma Masjid Khawaneej – Ceiling & Gypsum Repair',
        quote: 'Handled delicate repairs with speed and cleanliness in a spiritual space.',
        stars: 5,
      },
      {
        project: 'Painting – Moazzin House, Masjid Ayesha',
        quote: 'Respectful and clean paintwork, perfectly aligned with site use.',
        stars: 5,
      },
    ],
  },
  {
    name: 'QAF Technologies',
    projects: [
      {
        project: 'Construction of 2 Rooms, Kitchen, Toilet at DIC – Warehouse N-08',
        quote: 'Flawless multi-room fitout completed with efficiency and precision.',
        stars: 5,
      },
    ],
  },
  {
    name: 'Emirates National Facilities Management',
    projects: [
      {
        project: 'Onyx Tower – Internal Painting & Finishes',
        quote: 'Interior works done on time with superior paint quality and polish.',
        stars: 5,
      },
    ],
  },
  {
    name: 'Al Manal Contracting',
    projects: [
      {
        project: 'ASB Tower – Reinstatement, Painting, and Gypsum Work',
        quote: 'Delivered high-quality reinstatement and ceiling treatments reliably.',
        stars: 5,
      },
      {
        project: 'Various Flats – West Court, Motor City',
        quote: 'Excellent follow-through and attention to finish in residential settings.',
        stars: 5,
      },
    ],
  },
  {
    name: 'Al Futtaim Engineering',
    projects: [
      {
        project: 'Zabeel Mosque – Water Tank Supply & Fixing',
        quote: 'Infrastructure task executed with precision in a religious property.',
        stars: 5,
      },
      {
        project: 'Supply & Fixing of Wooden Doors at IACAD',
        quote: 'Woodwork done professionally and exactly to spec.',
        stars: 4,
      },
    ],
  },
  {
    name: 'Asha Contracting LLC',
    projects: [
      {
        project: 'Fixing of Interlock – Nad Al Sheba',
        quote: 'Smooth execution and excellent outdoor work for driveways.',
        stars: 5,
      },
    ],
  },
];







const partnerLogos = [
  "https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/03/kisspng-telstra-logo-brand-internet-removebg-preview.png",
  "https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/03/DHL-Logo.wine_-2048x1365.png",
  "https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/03/15f59ec5-6cd4-4386-a9d1-0e28f9683031-removebg-preview.png",
  "https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/03/png-transparent-deira-dubai-mall-of-the-emirates-emirates-nbd-bank-financial-services-bank-text-investment-logo-removebg-preview.png",
  "https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/03/hbl-removebg-preview.png",
  "https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/03/atasay-logo-png_seeklogo-307092.png",
  // Repeat if needed for long scroll effect
];

const catalogItems = [
  {
    image: "https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/03/a-carpenter-is-working-on-a-wood-floorin_6rAerYJaSKWRkXkNo7nnxA_moTqRcc3T7KwCTrQ8EiS1A.jpeg",
    title: "High-Rise Exterior Finish",
    description: "Project completed in Jumeirah with sustainable cladding solutions.",
  },
  {
    image: "https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/03/a-carpenter-is-working-on-a-wood-floorin_6rAerYJaSKWRkXkNo7nnxA_moTqRcc3T7KwCTrQ8EiS1A.jpeg",
    title: "Office MEP Upgrade",
    description: "Full mechanical and electrical fitout for Dubai Marina tower.",
  },
  {
    image: "https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/03/a-carpenter-is-working-on-a-wood-floorin_6rAerYJaSKWRkXkNo7nnxA_moTqRcc3T7KwCTrQ8EiS1A.jpeg",
    title: "Villa Renovation",
    description: "Luxury finishes, smart lighting, and custom carpentry in Abu Dhabi.",
  },
];


const catalogCards = [
  {
    title: "Get Credit & Loans",
    content: "We help you find the best credit offers from trusted banks.",
  },
  {
    title: "Automate Payroll",
    content: "Streamline your payroll with our automated system.",
  },
  {
    title: "Tax & Compliance",
    content: "Stay compliant and avoid fines with guided tax workflows.",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [statIndex, setStatIndex] = useState(0);
  const [previousStatIndex, setPreviousStatIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(0); 

  const prevSlide = () => {
    setPreviousIndex(index);
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };



  const prevStat = () => {
    setPreviousStatIndex(statIndex);
    setStatIndex((prev) => (prev - 1 + statSlides.length) % statSlides.length);
  };

const showcaseSlides = [
  {
    image: "https://example.com/img1.jpg",
    title: "Villa Interior Renovation",
    description: "Sultan Yahya delivered a full turnkey interior upgrade in record time for a luxury villa in Dubai.",
  },
  {
    image: "https://example.com/img2.jpg",
    title: "Warehouse Fit-out",
    description: "A complete mechanical and electrical system overhaul for a logistics hub.",
  },
  // more...
];


  const renderStars = (count) => {
    return (
      <div className="flex gap-1 mt-2 text-yellow-500 text-base">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i}>{i < count ? '★' : '☆'}</span>
        ))}
      </div>
    );
  };

    // const [openIndex, setOpenIndex] = useState(-1);
  const [visibleCount, setVisibleCount] = useState(5); // show first 5 clients

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const showMore = () => {
    setVisibleCount(testimonials.length);
  };
  
  //   const [statIndex, setStatIndex] = useState(0);

  // const nextStat = () => {
  //   setStatIndex((prev) => (prev + 1) % statSlides.length);
  // };

  // const prevStat = () => {
  //   setStatIndex((prev) => (prev - 1 + statSlides.length) % statSlides.length);
  // };
const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });


  //   const nextSlide = () => {
  //   setPreviousIndex(index);
  //   setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  // };
  // const nextStat = () => {
  //   setPreviousStatIndex(statIndex);
  //   setStatIndex((prev) => (prev + 1) % statSlides.length);
  // };
  // const nextSlide = useCallback(() => {
  //   setPreviousIndex(index);
  //   setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  // }, [index]);

  // const nextStat = useCallback(() => {
  //   setPreviousStatIndex(statIndex);
  //   setStatIndex((prev) => (prev + 1) % statSlides.length);
  // }, [statIndex]);

  // // Then update the useEffect hooks with consistent timing
  // useEffect(() => {
  //   const timer = setInterval(nextSlide, 2500); // Increased to 5 seconds
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [nextSlide]);

  // useEffect(() => {
  //   const timer = setInterval(nextStat, 2000); // Match the same timing
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [nextStat]);

  // // Keep the InView effect separate
  // useEffect(() => {
  //   if (inView) setStartCount(true);
  // }, [inView]);

// First, keep your useCallback definitions
const nextSlide = useCallback(() => {
  setPreviousIndex(index);
  setIndex((prevIndex) => (prevIndex + 1) % slides.length);
}, [index]);

const nextStat = useCallback(() => {
  setPreviousStatIndex(statIndex);
  setStatIndex((prev) => (prev + 1) % statSlides.length);
}, [statIndex]);

// Then, replace all your useEffect hooks with these two:
useEffect(() => {
  // Hero section slides
  const slideTimer = setInterval(nextSlide, 2300);
  
  // Stats section slides
  const statTimer = setInterval(nextStat, 2300);
  
  // Cleanup both timers
  return () => {
    clearInterval(slideTimer);
    clearInterval(statTimer);
  };
}, [nextSlide, nextStat]);

// Keep only the InView effect for counting animation
useEffect(() => {
  if (inView) setStartCount(true);
}, [inView]);

  return (
    <>
   <section className="relative lg:h-screen h-[80vh] overflow-hidden">
  <div className="absolute inset-0">
    <AnimatePresence mode="popLayout">
      {/* Active Slide */}
      {/* <motion.div
        key={slides[index].image}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full"
      > */}
      <motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // delay between children
      },
    },
  }}
>
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
        />
        {/* Optional dark overlay */}
        <div
          className="absolute inset-0 bg-black opacity-40 z-10"
          // To disable, just comment this line:
          // className="absolute inset-0 bg-black opacity-50 z-10"
        ></div>
      </motion.div>

      {/* Previous Slide (fade out) */}
      <motion.div
        key={`previous-${slides[previousIndex].image}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[previousIndex].image})`,
          }}
        />
        {/* Optional dark overlay */}
        <div
          className="absolute inset-0 bg-black opacity-40 z-10"
          // To disable, just comment this line:
          // className="absolute inset-0 bg-black opacity-50 z-10"
        ></div>
      </motion.div>
    </AnimatePresence>
  </div>

  {/* Content */}
  <motion.div
    className="relative z-20 h-full flex lg:items-center mt-[100px] lg:mt-[0px] md:items-start  justify-center text-white text-left px-6 md:px-20"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    <motion.div className="  sm:w-[100vw]">
   <motion.h1
             className="lg:text-[30px] text-xl font-[400] leading-[40px] lg:leading-[50px]"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3, duration:1 }}
           >
     Sultan Yahya Technical Services Experts in Construction,<br /> Maintenance & Fitout/Renovation Work
     <br />We are known for our premium quality <br /> builds and client-focused project <br /> delivery.
       
           </motion.h1>
    <motion.p
             className="lg:text-[28px] sm:text-4xl  font-[100] sm:leading-tight mb-4 flex flex-row items-center gap-[10px]" 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5, duration: 1.5 }}
           >
        {/* <div className="border border-white w-[50px] h-[0px]"></div> We are known for our premium quality builds and client-focused project delivery. */}
        </motion.p>
    </motion.div>
  </motion.div>

  {/* Pagination Control */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded shadow-lg flex items-center gap-4 text-black text-sm sm:text-base border-t-4 border-red-500 z-30">
    <span className="text-xs opacity-70">
      {index + 1} / {slides.length}
    </span>
    {/* <span className="font-medium">{slides[index].title}</span> */}
    <div className="flex gap-2 ml-4">
      <button
        onClick={prevSlide}
        className="hover:text-blue-600 transition"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="hover:text-blue-600 transition"
      >
        &#8594;
      </button>
    </div>
  </div>
</section>


 <section className="bg-white lg:py-16 py-[20px] ">
  <h2 className="text-center text-[23px] lg:text-3xl sm:text-4xl text-red-600 font-semibold mb-0 lg:mb-10">
    Our Clients
  </h2>

  <div className="overflow-hidden relative">
    <div className="flex gap-10 animate-marquee whitespace-nowrap px-4">
      {[...partnerLogos, ...partnerLogos].map((logo, i) => (
        <img
          key={i}
          src={logo}
          alt={`Partner logo ${i}`}
          className="h-12 sm:h-16 md:h-20 object-contain transition duration-300 ease-in-out  hover:grayscale-0"
        />
      ))}
    </div>
  </div>

<style jsx global>{`
  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-marquee {
    display: flex;
    animation: marquee 10s linear infinite;
  }

  @media (max-width: 768px) {
    .animate-marquee {
      animation-duration: 3s;
    }
  }

  @media (max-width: 480px) {
    .animate-marquee {
      animation-duration: 3s;
    }
  }
`}</style>

</section>

 
<section ref={ref} className="bg-white py-24 px-6 sm:px-10 md:px-20">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
    
    {/* Image Side */}
    <div className="relative overflow-hidden rounded shadow-md h-[60vh] md:h-[80vh] w-full md:w-[60vw] order-2 md:order-1">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={statSlides[statIndex].image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="h-full w-full bg-cover bg-center rounded"
          style={{
            backgroundImage: `url(${statSlides[statIndex].image})`,
          }}
        />
      </AnimatePresence>
    </div>

    {/* Stats Side */}
    <div className="w-full md:w-[35vw] order-1 md:order-2 flex flex-col justify-center gap-10">
      {fixedStats.map((stat, i) => (
        <div key={i} className="text-center md:text-left">
          <div className="lg:text-8xl text-6xl font-bold text-red-600">
            {startCount ? <CountUp end={stat.number} duration={3} /> : '0'}
            {stat.suffix}
          </div>
          <div className="text-xl mt-2 font-medium text-gray-900">{stat.label}</div>
          {i < fixedStats.length - 1 && <hr className="my-8 border-gray-300" />}
        </div>
      ))}
    </div>

  </div>
</section>



      {/* ABOUT US SECTION */}
      {/* <section className="bg-white py-24 px-6 sm:px-10 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start   gap-10">

          <div className="w-full md:w-1/3">
            <h2 className="text-3xl md:text-4xl  text-red-600 tracking-wide uppercase mb-6">
              About Us
            </h2>
          </div>
          <div className="w-full md:w-2/3 text-[28px] leading-relaxed text-gray-900">
            <p className="mb-4">
              We are a multi award winning UAE-based construction company
              actively involved in all sectors of the industry. Sultan Yahya is
              a premier builder that operates across key Emirates with high
              standards.
            </p>
            <p className="italic">
              “We have built our reputation as a quality builder that places
              outstanding customer service at the heart of our business. We are
              motivated by delivering excellence for our clients.”
            </p>
          </div>
        </div>
      </section> */}
 <section className="bg-white  px-6 sm:px-10 md:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
    
    {/* Text Side — appears first on mobile */}
    <div className="w-full order-1 md:order-none">
      <h2 className="text-3xl md:text-4xl text-center text-red-600 font-bold tracking-wide mb-8">
        About Us
      </h2>
      <p className="text-[20px] leading-relaxed text-gray-900 mb-6">
        Sultan Yahya Technical Services is a multi-award-winning UAE-based company offering integrated solutions across construction, technical maintenance, and building services. With decades of industry experience, we serve clients across commercial, industrial, residential, and institutional sectors — delivering results defined by quality, reliability, and professionalism.
      </p>
      <p className="italic text-[20px] text-gray-800">
        “We have built our reputation as a trusted service provider that places client satisfaction and technical excellence at the core of every project. Our team is driven by precision, commitment, and a passion for delivering beyond expectations.”
      </p>
    </div>

    {/* Image Side — comes second on mobile, first on desktop */}
    <div className="w-full order-2 md:order-1">
      <img
        src="https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-9.09.10-PM.jpeg"
        alt="About Sultan Yahya"
        className="w-full h-full object-cover rounded-lg shadow-md"
      />
    </div>

  </div>
</section>



 <section className="relative py-16">
      {/* Our Services */}
      <ServiceCatalog limit={3} />

      {/* More indicator and View More Button */}
      <div className="flex flex-col items-center mt-6 space-y-4">
        <div className="text-4xl font-bold text-gray-400 tracking-widest select-none">. . .</div>
        {/* <Link to="/services">
        
        </Link> */}
        
      <a href="/services" className="hover:text-blue-600">
            <button className="px-6 py-2 text-white bg-red-600 hover:bg-red-700 transition rounded-md shadow-md">
      View All Services
         </button>
      </a>
       
      </div>
    </section>

      {/* OUR PEOPLE SECTION */}
 <section 
//  className="py-16 sm:px-10 md:px-20"
className="px-6 "
> 
  <h2 className=" text-3xl sm:text-4xl font-semibold text-center text-red-600  ">
    Our People
  </h2>
  {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {["/1.jpg", "/2.jpg", "/3.jpg"].map((src, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: i * 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src="https://infinityconstructions.com.au/wp-content/uploads/2024/10/Image-1-1200x1620.jpg"
          alt={`Team member ${i + 1}`}
          className="rounded shadow-md"
        />
      </motion.div>
    ))}
  </div> */}

  <TeamSection/>
</section>


{/* 
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-slide {
          animation: slide 15s linear infinite;
        }
      `}</style> */}

      {/* <section className="bg-white py-20 px-6 sm:px-10 md:px-20"> */}
        {/* <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-red-600">
            Featured Projects
          </h2>
          <a href="#" className="underline text-gray-800 hover:text-red-600">
            View All Projects
          </a>
        </div> */}
        {/* <div className="relative">
          <div className="scrollable-projects flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth">
            {featuredProjects.map((project, i) => (
              <div
                key={i}
                className="group relative min-w-[300px] snap-start shrink-0 w-80 h-80 overflow-hidden rounded shadow-lg bg-black"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out flex flex-col justify-end p-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <button
              className="border px-4 py-1 text-xl"
              onClick={() =>
                document
                  .querySelector(".scrollable-projects")
                  .scrollBy({ left: -300, behavior: "smooth" })
              }
            >
              ←
            </button>
            <button
              className="border px-4 py-1 text-xl"
              onClick={() =>
                document
                  .querySelector(".scrollable-projects")
                  .scrollBy({ left: 300, behavior: "smooth" })
              }
            >
              →
            </button>
          </div>
        </div> */}
        <FeaturedProjects/>
      {/* </section> */}
{/* <section className="">



  <ImageShowcase/>
</section>
     */}
{/* <section id="showcase-section" className="relative h-screen">
  <ImageShowcase 
    onDone={(direction) => {
      const section = document.getElementById('showcase-section');
      if (direction === 'up') {
        section.previousElementSibling?.scrollIntoView({ behavior: 'smooth' });
      } else {
        section.nextElementSibling?.scrollIntoView({ behavior: 'smooth' });
      }
    }} 
  />
</section> */}
 {/* <section className="bg-white py-16 px-6 sm:px-10 md:px-20">
      <h2 className="text-3xl sm:text-4xl font-semibold text-red-600 mb-10 text-center">Client Testimonials</h2>

      {data.slice(0, visibleCount).map((client, i) => (
        <div key={i} className="border-b py-4 transition-all duration-500 ease-in-out">
          <button
            onClick={() => toggle(i)}
            className="flex justify-between items-center w-full text-left text-lg font-medium"
          >
            <span className="font-semibold text-gray-800">{client.name}</span>
            <span className="text-xl">{openIndex === i ? '×' : '+'}</span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === i ? 'max-h-[2000px] mt-4 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="space-y-4 pl-4 mt-2 border-l-4 border-gray-300">
              {client.projects.map((project, idx) => (
                <div key={idx}>
                  <p className="text-sm font-medium text-gray-700">{project.project}</p>
                  <p className="text-gray-600 italic">“{project.quote}”</p>
                  <div className="text-yellow-500 text-base mt-1">
                    {'★'.repeat(project.stars)}{'☆'.repeat(5 - project.stars)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {visibleCount < data.length && (
        <div className="text-center mt-10">
          <button
            onClick={showMore}
            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            View More
          </button>
        </div>
      )}
    </section> */}


{/* <section className="bg-white py-20 px-6 sm:px-10 md:px-20">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
    {[
      { icon: 'https://infinityconstructions.com.au/wp-content/uploads/2023/10/stat-icon-01.svg', value: '600+', label: 'Projects Built' },
      { icon: '/icons/star.svg', value: '4.5-Star', label: 'Gold iCIRT Rating' },
      { icon: '/icons/value.svg', value: '$2.5B', label: 'Combined Value' },
      { icon: '/icons/repeat.svg', value: '90%', label: 'Repeat Clientele' },
      { icon: '/icons/award.svg', value: '33+', label: 'Years of Excellence' },
      { icon: '/icons/staff.svg', value: '130+', label: 'Infinity Staff' },
      { icon: '/icons/location.svg', value: '2', label: 'Office Locations (Sydney & Melbourne)' },
      { icon: '/icons/finance.svg', value: '$0', label: 'No Bank Finance' },
    ].map((item, i) => (
      <div key={i} className="flex items-start gap-6 border-b border-red-300 pb-6">
        <img src={item.icon} alt="" className="w-[30px] sm:w-10" />
        <div>
          <p className="text-5xl font-bold text-red-600">{item.value}</p>
          <p className="text-lg font-medium text-black">{item.label}</p>
        </div>
      </div>
    ))}
  </div>
</section> */}

{/* <ImageShowcase/> */}
{/* <section className="relative h-[80vh] overflow-y-scroll snap-y snap-mandatory space-y-10">
  {catalogItems.map((item, i) => (
    <div
      key={i}
      className="snap-start flex flex-col items-center justify-center min-h-[80vh] px-4 py-10"
    >
      <img src={item.image} alt={item.title} className="max-h-[50vh] object-contain mb-4" />
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h3>
      <p className="text-gray-600 max-w-xl text-center">{item.description}</p>
    </div>
  ))}
</section> */}

{/* <ImageShowcase/> */}
<section>
<QualityPolicySection/>

</section>

<section>
      <ClientTestimonials data={testimonials} />
</section>


    </>
  );
}
