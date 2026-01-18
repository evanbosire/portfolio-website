// export const ServicesSection = () => {
//   const services = [
//     {
//       title: "Gypsum Ceiling Installation",
//       description:
//         "Professional gypsum ceiling installation including modern designs, lighting integration, and clean finishing for residential and commercial spaces.",
//     },
//     {
//       title: "Paint Work & Finishing",
//       description:
//         "High-quality interior and exterior paint work with smooth finishes, precise color application, and long-lasting results.",
//     },
//     {
//       title: "Wainscoting & Wall Panels",
//       description:
//         "Elegant wainscoting and decorative wall panel installations that add depth, style, and character to any interior space.",
//     },
//     {
//       title: "PVC Installation",
//       description:
//         "PVC ceiling and wall installations that are durable, moisture-resistant, and ideal for modern interior designs.",
//     },
//     {
//       title: "Interior Design Consultation",
//       description:
//         "Personalized interior design guidance, space planning, and material selection to help bring your vision to life.",
//     },
//     {
//       title: "Interior Fit-Out & Finishing",
//       description:
//         "Complete interior fit-out services with attention to detail, ensuring a polished, functional, and aesthetically pleasing result.",
//     },
//   ];

//   return (
//     <section id="services" className="py-24 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* SECTION HEADER */}
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
//           Services <span className="text-primary">I Offer</span>
//         </h2>

//         <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
//           I specialize in modern interior design and finishing solutions, delivering
//           high-quality craftsmanship and elegant results tailored to your space.
//         </p>

//         {/* SERVICES GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="relative bg-card border border-border rounded-2xl p-6 
//                          shadow-[0_8px_25px_rgba(0,0,0,0.08)]
//                          transition-all duration-500 transform-gpu
//                          hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
//             >
//               <h3 className="text-xl font-semibold mb-3 text-primary">
//                 {service.title}
//               </h3>

//               <p className="text-muted-foreground leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


export const ServicesSection = () => {
  const services = [
    {
      title: "Gypsum Ceiling Installation",
      desc: "Modern gypsum ceiling designs with clean finishing and lighting integration.",
      image: "/images/img1.jpeg",
    },
    {
      title: "Paint Work & Finishing",
      desc: "Professional interior and exterior paint work with smooth, durable finishes.",
      image: "/images/img2.jpeg",
    },
    {
      title: "Wainscoting & Wall Panels",
      desc: "Elegant wall panel installations that add depth and timeless style.",
      image: "/images/img3.jpeg",
    },
    {
      title: "PVC Installation",
      desc: "Durable PVC ceiling and wall installations ideal for modern interiors.",
      image: "/images/img4.jpeg",
    },
    {
      title: "Custom Ceiling Designs",
      desc: "Unique ceiling layouts tailored to complement lighting and room aesthetics.",
      image: "/images/img5.jpeg",
    },
    {
      title: "Interior Finishing Touches",
      desc: "Detailed finishing work that enhances the overall look and feel of spaces.",
      image: "/images/img6.jpeg",
    },
  ];

  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Services <span className="text-primary">I Offer</span>
        </h2>

        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
          I provide personalized interior design and finishing services,
          delivering craftsmanship, elegance, and attention to detail.
        </p>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group relative rounded-2xl overflow-hidden
                bg-card border border-border
                transform-gpu transition-all duration-700
                hover:-translate-y-2
                md:hover:rotate-x-[6deg] md:hover:-rotate-y-[6deg]
                opacity-0 animate-fadeInUp
              "
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* NEON BORDER */}
              <div
                className="
                  absolute inset-0 rounded-2xl pointer-events-none
                  opacity-0 group-hover:opacity-100
                  transition duration-300
                "
                style={{
                  boxShadow:
                    "0 0 0.6px #ff4ecd, 0 0 6px #ff4ecd, inset 0 0 6px #00ffd5",
                }}
              />

              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* CONTENT */}
              <div className="relative p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-20">
          <a
            href="#contact"
            className="
              px-8 py-4 rounded-full font-semibold
              bg-primary text-primary-foreground
              transition-all duration-300
              hover:scale-105 hover:shadow-[0_0_25px_rgba(255,78,205,0.5)]
            "
          >
            Request a Quote
          </a>
        </div>
      </div>

      {/* SCROLL ANIMATION STYLES */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.9s ease forwards;
        }
      `}</style>
    </section>
  );
};
