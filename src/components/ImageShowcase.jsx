import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const catalogData = [
  {
    image: "https://images.unsplash.com/photo-1482731215275-a1f151646268?q=80",
    title: "Luxury Development",
    description: "Premium residential project in Dubai Marina"
  },
  {
    image: "https://images.unsplash.com/photo-1600585153310-80aa1f5d9c3a?q=80",
    title: "Commercial Complex",
    description: "Modern office space in Business Bay"
  },
  {
    image: "https://images.unsplash.com/photo-1610264146566-c233419fb1c7?q=80",
    title: "Hotel Renovation",
    description: "Complete interior transformation"
  }
];

export default function ImageShowcase({ onDone }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);
  const isAnimating = useRef(false);

  // Handle scroll and section activation
  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.body.style.overflow = 'hidden';
          containerRef.current?.focus();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      document.body.style.overflow = '';
    };
  }, []);

  const handleWheel = (e) => {
    e.preventDefault();
    if (isAnimating.current) return;

    const delta = e.deltaY;
    
    if (delta > 0 && index < catalogData.length - 1) {
      setDirection(1);
      changeSlide(index + 1);
    } else if (delta < 0 && index > 0) {
      setDirection(-1);
      changeSlide(index - 1);
    } else if (delta > 0 && index === catalogData.length - 1) {
      handleComplete('down');
    } else if (delta < 0 && index === 0) {
      handleComplete('up');
    }
  };

  const changeSlide = (newIndex) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setIndex(newIndex);
    
    setTimeout(() => {
      isAnimating.current = false;
    }, 800);
  };

  const handleComplete = (direction) => {
    document.body.style.overflow = '';
    onDone?.(direction);
  };

  useEffect(() => {
    const element = containerRef.current;
    if (element) {
      element.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (element) {
        element.removeEventListener('wheel', handleWheel);
      }
    };
  }, [index]);

  return (
    <motion.div 
      ref={containerRef}
      tabIndex={0}
      className="fixed inset-0 w-full h-screen bg-black z-50 focus:outline-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={index}
          initial={{ y: direction >= 0 ? "100%" : "-100%" }}
          animate={{ y: "0%" }}
          exit={{ y: direction >= 0 ? "-100%" : "100%" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <motion.img
              src={catalogData[index].image}
              alt={catalogData[index].title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl md:text-6xl font-bold mb-4"
              >
                {catalogData[index].title}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-xl max-w-2xl text-center"
              >
                {catalogData[index].description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        {catalogData.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              changeSlide(i);
            }}
            className={`w-2 transition-all duration-300 rounded-full cursor-pointer
              ${i === index ? 'h-8 bg-white' : 'h-2 bg-white/50 hover:bg-white/70'}`}
          />
        ))}
      </div>

      {/* Scroll indicators */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white text-center z-50"
      >
        <p className="text-sm uppercase tracking-wider mb-2">
          {index === 0 ? 'Scroll Up to Previous Section' : 
           index === catalogData.length - 1 ? 'Scroll Down to Continue' : 
           'Scroll to Navigate'}
        </p>
      </motion.div>
    </motion.div>
  );
}