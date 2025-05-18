import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    // title: 'Atura Hotel – Sydney',
    // description: 'Luxury boutique hotel with poolside amenities.',
    image: 'https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-9.09.02-PM-1.jpeg'
  },
  {
    // title: 'Scape Victoria Street – Melbourne',
    // description: 'Student accommodation and commercial spaces.',
    image: 'https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/01/a-photo-of-a-false-ceiling-being-install_jZhadnsjR5W80vrGXnznyQ_EuMq2YSNT0CUUy2GnVwocg-768x768.jpeg'
  },

  {
    // title: 'One Chalmers – Sydney',
    // description: 'Modern workspace with premium lounge interiors.',
    image: 'https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-9.09.02-PM-768x432.jpeg'
  },
  {
    // title: 'Mayflower – Melbourne',
    // description: 'Senior living redevelopment with dementia care.',
    image: 'https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-9.09.04-PM-768x432.jpeg'
  },
  {
    // title: 'Scape Kensington – Sydney',
    // description: 'Vertical student housing tower.',
    image: 'https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/03/a-photo-of-a-worker-preparing-to-install_GP0UohHRRKq18RD0yVlhnA_NzVkDf4XSh-8hYXwkT0T1Q-768x768.jpeg'
  },
  {
    // title: 'Scape Kensington – Sydney',
    // description: 'Vertical student housing tower.',
    image: 'https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-9.09.04-PM-1-768x576.jpeg'
  },
  {
    // title: 'Scape Kensington – Sydney',
    // description: 'Vertical student housing tower.',
    image: 'https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/03/a-photo-of-light-plumbing-work-and-pump-_TboxP8yyTGa2KbvwUkQNPg_04cTEIKoTBayY-RUSHntLw-768x768.jpeg'
  },
  {
    // title: 'Scape Kensington – Sydney',
    // description: 'Vertical student housing tower.',
    image: 'https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-9.09.11-PM-576x1024.jpeg'
  },
  {

    // title: 'Scape Kensington – Sydney',
    // description: 'Vertical student housing tower.',
    image: 'https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-9.09.12-PM-576x1024.jpeg'
  },
  {
    // title: 'Scape Kensington – Sydney',
    // description: 'Vertical student housing tower.',
    image: 'https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-9.09.41-PM-576x1024.jpeg'
  },
    {
    // title: 'Scape Victoria Street – Melbourne',
    // description: 'Student accommodation and commercial spaces.',
    image: 'https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-9.09.01-PM-768x432.jpeg'
  },
];



const FeaturedProjects = () => {
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const scrollByAmount = () => {
    const width = window.innerWidth;
    if (width >= 1024) return 320; // 1 card at a time for auto-scroll even on desktop
    if (width >= 768) return 320;
    return 320;
  };

  const handleScrollLeft = () => {
    containerRef.current?.scrollBy({ left: -scrollByAmount(), behavior: 'smooth' });
  };

  const handleScrollRight = () => {
    containerRef.current?.scrollBy({ left: scrollByAmount(), behavior: 'smooth' });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollInterval = setInterval(() => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const scrollAmount = scrollByAmount();
      if (container.scrollLeft + scrollAmount >= maxScrollLeft) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 2000);

    intervalRef.current = scrollInterval;
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="bg-white py-[40px] lg:py-[80px]  px-6 sm:px-10 md:px-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-red-600">
          Featured Projects
        </h2>
        <a href="/projects" className="underline text-gray-800 hover:text-red-600">
          View All Projects
        </a>
      </div>
      <div className="relative">
        <div
          ref={containerRef}
          className="scrollable-projects flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative min-w-[300px] lg:min-w-[300px] snap-start shrink-0 w-80 h-80 overflow-hidden rounded shadow-lg bg-black"
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
            className="border px-4 py-1 text-xl hover:bg-red-500 hover:text-white transition"
            onClick={handleScrollLeft}
          >
            ←
          </button>
          <button
            className="border px-4 py-1 text-xl hover:bg-red-500 hover:text-white transition"
            onClick={handleScrollRight}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
