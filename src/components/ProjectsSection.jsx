

export const ProjectsSection = () => {
  const projects = [
    { type: "video", src: "/images/video1.mp4" }, 
    { type: "image", src: "/images/img1.jpeg" },
    { type: "image", src: "/images/img16.jpeg" },
    { type: "image", src: "/images/img2.jpeg" },
    { type: "image", src: "/images/img3.jpeg" },
    { type: "image", src: "/images/img4.jpeg" },
    { type: "image", src: "/images/img5.jpeg" },
    { type: "image", src: "/images/img6.jpeg" },
    { type: "image", src: "/images/img7.jpeg" },
    { type: "image", src: "/images/img8.jpeg" },
    { type: "image", src: "/images/img9.jpeg" },
    { type: "image", src: "/images/img10.jpeg" },
    { type: "image", src: "/images/img11.jpeg" },
    { type: "image", src: "/images/img12.jpeg" },
    { type: "image", src: "/images/img13.jpeg" },
    { type: "image", src: "/images/img14.jpeg" },
    { type: "image", src: "/images/img18.jpeg" },
    { type: "image", src: "/images/img17.jpeg" },
    { type: "image", src: "/images/img19.jpeg" },
    { type: "image", src: "/images/img20.jpeg" },
    { type: "video", src: "/images/video2.mp4" }, // Last video
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-center mb-16">
          A selection of our finest works showcasing creativity, craftsmanship, and innovative design.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="
                relative group overflow-hidden rounded-2xl
                bg-card border border-border
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                transition-transform duration-500 transform-gpu
                hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                md:hover:rotate-x-6 md:hover:-rotate-y-6
              "
            >
              {/* IMAGE */}
              {proj.type === "image" && (
                <img
                  src={proj.src}
                  alt={`Project ${index + 1}`}
                  className="
                    w-full h-60 object-cover rounded-2xl
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              )}

              {/* VIDEO */}
              {proj.type === "video" && (
                <video
                  src={proj.src}
                  className="
                    w-full h-60 object-cover rounded-2xl
                    transition-transform duration-500
                    group-hover:scale-95
                  "
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-20">
          <a href="#contact" className="cosmic-button">
            Request a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};


