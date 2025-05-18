import { useState, useEffect } from 'react';

// const services = [
//   {
//     title: 'Carpentry & Wood Flooring Work',
//     description: 'We offer top-notch carpentry services for wooden flooring, wardrobes, and fittings.',
//     images: [
//       'https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/01/a-photo-of-a-renovation-work-in-progress_OhkFE3MpSYmAE406ku8G4w_EXrSirzwSJCgR0FSdb3F_w.jpeg',
//       'https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/03/a-photo-of-a-carpenter-working-on-a-wood_mTBKnXjIQQiEPDlireelKg_moTqRcc3T7KwCTrQ8EiS1A-768x768.jpeg',
//       'https://images.unsplash.com/photo-1544164560-adac3045edb2?q=80&w=3111&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     ],
//   },
//   {
//     title: 'Tiles Flooring & Cladding Work',
//     description: 'Expert tile and cladding installation for indoor and outdoor areas.',
//     images: [
//       '/images/services/tiles1.jpg',
//       '/images/services/tiles2.jpg',
//       '/images/services/tiles3.jpg',
//     ],
//   },
//   {
//     title: 'Electrical Fitting & Maintenance',
//     description: 'Safe and efficient electrical fitting, repair, and fixture maintenance.',
//     images: [
//       '/images/services/electric1.jpg',
//       '/images/services/electric2.jpg',
//       '/images/services/electric3.jpg',
//     ],
//   },
//   {
//     title: 'Electrical Fitting & Maintenance',
//     description: 'Safe and efficient electrical fitting, repair, and fixture maintenance.',
//     images: [
//       '/images/services/electric1.jpg',
//       '/images/services/electric2.jpg',
//       '/images/services/electric3.jpg',
//     ],
//   },
//   {
//     title: 'Electrical Fitting & Maintenance',
//     description: 'Safe and efficient electrical fitting, repair, and fixture maintenance.',
//     images: [
//       '/images/services/electric1.jpg',
//       '/images/services/electric2.jpg',
//       '/images/services/electric3.jpg',
//     ],
//   },
//   {
//     title: 'Electrical Fitting & Maintenance',
//     description: 'Safe and efficient electrical fitting, repair, and fixture maintenance.',
//     images: [
//       '/images/services/electric1.jpg',
//       '/images/services/electric2.jpg',
//       '/images/services/electric3.jpg',
//     ],
//   },
//   // Add more services as needed
// ];

const services = [
  {
    title: 'Flooring & Cladding Services',
    description: 'Durable and elegant surface treatments for indoor and outdoor spaces.',
    subServices: [
      {
        name: 'Marble Flooring & Cladding',
        detail: 'Luxurious marble surfaces ideal for upscale interiors.',
      },
      {
        name: 'Tiles Flooring & Cladding',
        detail: 'Affordable and versatile tile finishes in various textures and designs.',
      },
      {
        name: 'Interlock & Block Work',
        detail: 'Ideal for pavements, driveways, and outdoor landscaping.',
      },
    ],
    images: [
      'https://www.stoneadd.com/photo/upload/product/volakaswhitetiles80x80withlayout102019118154258.jpg',
      'https://www.rubi.com/us/blog/wp-content/uploads/2022/03/shutterstock_710379148-1.jpg',
      'https://images.jdmagicbox.com/quickquotes/images_main/interlocking-paver-block-2217100834-jujjfnri.jpg',
    ],
  },
  {
    title: 'Carpentry & Woodwork',
    description: 'Custom wood-based interior solutions for utility and aesthetics.',
    subServices: [
      {
        name: 'Carpentry & Wood Services',
        detail: 'Furniture, wardrobes, and custom wooden structures.',
      },
      {
        name: 'False Ceiling & Light Partition Installation',
        detail: 'Create modern space separation and concealed lighting.',
      },
      {
        name: 'Wall Paneling / Wallpaper Fixing',
        detail: 'Decorative enhancements to personalize any room.',
      },
    ],
    images: [
      'https://sultanyahyatechnicalservices.com/wp-content/uploads/2025/01/a-photo-of-a-renovation-work-in-progress_OhkFE3MpSYmAE406ku8G4w_EXrSirzwSJCgR0FSdb3F_w.jpeg',
      'https://nordibuild.com/wp-content/uploads/2019/11/02.jpg',
      'https://theinstallers.in/wp-content/uploads/2019/02/wallpaper-install-2-min.jpg',
    ],
  },
   {
    title: 'Electrical Fitting & Maintenance',
    description: 'Reliable electrical solutions for residential and commercial needs.',
    subServices: [
      {
        name: 'Electrical Fittings & Fixtures',
        detail: 'Installation and repair of lighting, sockets, and switches.',
      },
      {
        name: 'Maintenance & Safety Checks',
        detail: 'Routine checks and fault resolution for uninterrupted performance.',
      },
    ],
    images: [
      'https://arabinternationalts.com/wp-content/uploads/2024/09/DALL%C2%B7E-2024-09-30-00.46.19-A-professional-team-performing-Electrical-Fittings-Fixtures-Repairing-Maintenance-in-a-commercial-building.-The-image-showcases-electricians-repai.webp',
      'https://factoryworkingconditions.com/wp-content/uploads/2023/08/manufactruing-equipment-inspection-scaled.jpg',
      // '/images/services/electric3.jpg',
    ],
  },
  {
    title: 'Masonry & Construction',
    description: 'Strong foundational and aesthetic elements for any build.',
    subServices: [
      {
        name: 'Masonry Work',
        detail: 'Brickwork, block work, and plastering done with precision.',
      },
      {
        name: 'Contracting',
        detail: 'Complete site execution including manpower and material handling.',
      },
      {
        name: 'Painting',
        detail: 'Interior and exterior paint services with modern finishes.',
      },
    ],
    images: [
      'https://www.ny-engineers.com/hs-fs/hubfs/Webp-Images/Brick-Masonry.webp?width=1000&name=Brick-Masonry.webp',
      'https://qgreentech.com/wp-content/uploads/2020/07/brick-masonry.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNH4DQAPOuAzaR4uym7ZZIgSySPDSJDAMXKg&s',
    ],
  },
  {
    title: 'Plumbing & Sanitary',
    description: 'Water flow and waste management systems, installed to last.',
    subServices: [
      {
        name: 'Light Plumbing & Pump Installation',
        detail: 'Minor leak fixes to full pump setups for water supply systems.',
      },
      {
        name: 'Sanitary Installation & Pipe Setup',
        detail: 'Bathroom and utility setups with durable fittings and pipework.',
      },
    ],
    images: [
      'https://pumpkart.wordpress.com/wp-content/uploads/2015/08/how-to-install-a-water-pump.jpg?w=646',
      'https://ikrorwxhlnqolr5p-static.micyjz.com/cloud/loBprKqnlpSRpjmirnorjq/QQjietu20230210143756.jpg',
      // '/images/services/plumbing3.jpg',
    ],
  },
 
];


const ServiceCatalog = ({ limit }) => {
  const limitedServices = limit ? services.slice(0, limit) : services;
  const [activeIndexes, setActiveIndexes] = useState(limitedServices.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndexes((prevIndexes) =>
        prevIndexes.map((index, i) => (index + 1) % limitedServices[i].images.length)
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [limitedServices]);

  return (
    <section className=" px-6 md:px-20 py-[40px] lg:py-16">
      <h2 className="text-3xl font-semibold text-center text-red-600 mb-12">Our Services</h2>
      <div className="space-y-20">
        {limitedServices.map((service, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-10`}
          >
            {/* <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] overflow-hidden rounded shadow-lg">
              {service.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${service.title} ${idx}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${activeIndexes[i] === idx ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}
                />
              ))}
              <div className="absolute inset-0 bg-black opacity-30 z-30" />
            </div> */}
<div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] overflow-hidden rounded shadow-lg">
  {service.images.map((img, idx) => (
    <img
      key={idx}
      src={img}
      alt={`${service.title} ${idx}`}
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
        activeIndexes[i] === idx ? 'opacity-100 z-20' : 'opacity-0 z-10'
      }`}
    />
  ))}

  {/* dark overlay */}
  <div className="absolute inset-0 bg-black opacity-30 z-30" />

  {/* Sub-service name at bottom */}
  {service.subServices?.[activeIndexes[i]]?.name && (
    <div className="absolute bottom-0 left-0 w-full text-center py-2 bg-black bg-opacity-60 text-white font-semibold text-base z-40">
      {service.subServices[activeIndexes[i]].name}
    </div>
  )}
</div>


            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
          <div className="text-gray-600 text-lg max-w-md mx-auto md:mx-0 space-y-2">
  <p>{service.description}</p>
  {service.subServices && (
    <ul className="list-disc list-inside text-sm text-gray-500 mt-2">
      {service.subServices.map((sub, idx) => (
        <li key={idx}>
          <strong>{sub.name}</strong>: {sub.detail}
        </li>
      ))}
    </ul>
  )}
</div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCatalog;

