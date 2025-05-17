import { useState, useEffect } from 'react';

const ClientTestimonials = ({ data }) => {
  const [openIndexes, setOpenIndexes] = useState({});
  const [visibleCount, setVisibleCount] = useState(10); // Show first 10

  // Open the first testimonial by default on load
  useEffect(() => {
    setOpenIndexes({ 0: true });
  }, []);

  const toggle = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const showMore = () => setVisibleCount(data.length);

  return (
    <section className="bg-white py-16 px-6 sm:px-10 md:px-20">
      <h2 className="text-3xl sm:text-4xl font-semibold text-red-600 mb-10 text-center">Client Testimonials</h2>

      {data.slice(0, visibleCount).map((client, i) => (
        <div key={i} className="border-b py-4 transition-all duration-500 ease-in-out">
          <button
            onClick={() => toggle(i)}
            className="flex justify-between items-center w-full text-left text-lg font-medium"
          >
            <span className="font-semibold text-gray-800">{client.name}</span>
            <span className="text-xl">{openIndexes[i] ? '×' : '+'}</span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndexes[i] ? 'max-h-[2000px] mt-4 opacity-100' : 'max-h-0 opacity-0'
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
    </section>
  );
};

export default ClientTestimonials;
