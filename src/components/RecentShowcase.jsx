import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const showcaseData = [
  {
    image: "https://images.unsplash.com/photo-1706629503571-c165023a7792?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Civil Work"],
    title: "Robust Civil Work for Residential & Commercial Builds",
    description: "Be it foundation, tiling, or structural renovation — we ensure engineering excellence throughout.",
    author: "Construction Manager",
    date: "Mar 30, 2025",
    readTime: "4 min read",
  },
  {
    image: "https://images.unsplash.com/photo-1608613304899-ea8098577e38?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Civil Work"],
    title: "Robust Civil Work for Residential & Commercial Builds",
    description: "Be it foundation, tiling, or structural renovation — we ensure engineering excellence throughout.",
    author: "Construction Manager",
    date: "Mar 30, 2025",
    readTime: "4 min read",
  },
  {
    image: "https://images.unsplash.com/photo-1615873968403-89b7a0e3c4f6?q=80&w=2940&auto=format&fit=crop",
    tags: ["Interior Work", "Contracting"],
    title: "Complete Interior & Finishing Services",
    description: "From carpentry, flooring, and painting to false ceilings and sanitary fittings — we handle end-to-end interior execution with precision.",
    author: "Project Supervisor",
    date: "Feb 18, 2025",
    readTime: "3 min read",
  },
  {
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a12?q=80&w=2940&auto=format&fit=crop",
    tags: ["All Services"],
    title: "Complete Fit-Out Services Under One Roof",
    description: "We provide a wide range of specialized services including: Carpentry & Wood, Flooring Work, Marble Flooring & Cladding, Tiles Work, Interlock & Block, Masonry Work, Painting, Contracting, Light Plumbing & Pump Installation, False Ceiling & Light Partition, Electrical Fitting & Maintenance, Sanitary Installations, Pipe Setup, and Wallpaper Fixing. Everything you need — delivered with precision.",
    author: "Execution Lead",
    date: "Apr 22, 2025",
    readTime: "3 min read",
  }
];



export default function RecentShowcase() {
  const [startIndex, setStartIndex] = useState(0);


  // Automatically slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) =>
        (prev + 1) % showcaseData.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Decide how many cards to show
  const cardsToShow = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;

  const visibleSlides = showcaseData.slice(
    startIndex,
    startIndex + cardsToShow
  ).concat(
    startIndex + cardsToShow > showcaseData.length
      ? showcaseData.slice(0, (startIndex + cardsToShow) % showcaseData.length)
      : []
  );


  return (
    //    <section className="
    //    bg-[#F2F2F2]
    //     lg:py-16 py-[20px] px-6 sm:px-10 md:px-20 overflow-hidden">
    //   <h2 className="text-red-600 text-[23px] lg:text-3xl sm:text-4xl font-semibold mb-[15px] lg:mb-10 text-center">
    //    Our Services
    //   </h2>
    //   <div className="relative w-full max-w-7xl mx-auto">
    //     <AnimatePresence initial={false} mode="wait">
    //       <motion.div
    //         key={startIndex}
    //         initial={{ x: 100, opacity: 0 }}
    //         animate={{ x: 0, opacity: 1 }}
    //         exit={{ x: -100, opacity: 0 }}
    //         transition={{ duration: 0.8, ease: "easeInOut" }}
    //         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    //       >
    //         {visibleSlides.map((item, i) => (
    //           <div
    //             key={i}
    //             className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col"
    //           >
    //             <div className="relative">
    //               <img
    //                 src={item.image}
    //                 alt={item.title}
    //                 className="w-full h-48 object-cover"
    //               />
    //               <div className="absolute top-2 left-2 flex gap-2">
    //                 {item.tags.map((tag, j) => (
    //                   <span
    //                     key={j}
    //                     className="bg-black text-white text-xs px-2 py-1 rounded-full"
    //                   >
    //                     {tag}
    //                   </span>
    //                 ))}
    //               </div>
    //             </div>
    //             <div className="p-4 flex flex-col flex-grow">
    //               <h3 className="font-bold text-lg mb-2">{item.title}</h3>
    //               <p className="text-sm text-gray-600 mb-4 flex-grow">
    //                 {item.description}
    //               </p>
    //               <div className="text-xs text-gray-500">
    //                 <span>{item.date}</span> &nbsp;|&nbsp;{" "}
    //                 <span>{item.readTime}</span>
    //               </div>
    //               <div className="mt-2 text-sm font-medium text-gray-800">
    //                 {item.author}
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </motion.div>
    //     </AnimatePresence>
    //   </div>
    // </section>
<section className="bg-[#F2F2F2] lg:py-16 py-10 px-6 sm:px-10 md:px-20 overflow-hidden">
  <h2 className="text-red-600 text-[23px] lg:text-3xl sm:text-4xl font-semibold mb-10 text-center">
   Our Services
  </h2>

  <div className="relative w-full max-w-7xl mx-auto">
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={startIndex}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {visibleSlides.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col hover:shadow-xl transition-shadow"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[50vh] object-cover"
              />
              <div className="absolute top-2 left-2 flex gap-2">
                {item.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="bg-black text-white text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Title & Description */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold text-base sm:text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 flex-grow">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  </div>
</section>

  );
}
