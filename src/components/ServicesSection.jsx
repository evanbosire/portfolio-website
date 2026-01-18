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
