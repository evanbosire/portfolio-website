
import { useState } from "react";

export const SkillsSection = () => {
  const categories = [
    "All",
    "Ceilings",
    "Painting",
    "Walls",
    "Installation",
    "Design",
    "Professional",
  ];

  const skills = [
    {
      title: "Ceiling & Gypsum Works",
      category: "Ceilings",
      items: [
        "Gypsum Ceiling Installation",
        "POP Designs",
        "Modern Ceiling Layouts",
        "Lighting Integration",
        "Custom Ceiling Finishes",
      ],
    },
    {
      title: "Painting & Finishing",
      category: "Painting",
      items: [
        "Interior & Exterior Painting",
        "Texture & Decorative Paint",
        "Color Matching",
        "Premium Finishes",
        "Protective Coatings",
      ],
    },
    {
      title: "Wall & Decorative Works",
      category: "Walls",
      items: [
        "Wainscoting",
        "Wall Panels",
        "PVC Wall Installation",
        "Feature Walls",
        "Wallpaper Installation",
      ],
    },
    {
      title: "Installation & Fit-Out",
      category: "Installation",
      items: [
        "PVC Ceiling Installation",
        "Cabinet & Fixture Fitting",
        "Trim & Molding Installation",
        "Space Optimization",
        "Site Measurements",
      ],
    },
    {
      title: "Design & Planning",
      category: "Design",
      items: [
        "Interior Space Planning",
        "Modern Design Concepts",
        "Material Selection",
        "Lighting Planning",
        "Client Consultation",
      ],
    },
    {
      title: "Professional Skills",
      category: "Professional",
      items: [
        "Project Management",
        "Attention to Detail",
        "Time Management",
        "Client Communication",
        "Quality Assurance",
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-center mb-10">
          A refined combination of craftsmanship, creativity, and technical
          expertise that transforms spaces into elegant, functional interiors.
        </p>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm font-medium rounded-full border transition-colors duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border hover:text-primary hover:border-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="group relative card-3d">
              {/* Thin rotating neon border */}
              <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100">
                <div
                  className="
                    w-full h-full rounded-2xl border-[1px]
                    border-transparent
                    bg-[conic-gradient(from_0deg_at_50%_50%,#ff00ff,#ff4fff,#00fff7,#ff00ff)]
                    animate-spin-fast pointer-events-none
                  "
                ></div>
              </div>

              {/* Card */}
              <div
                className="
                  relative h-full
                  bg-card border border-border
                  rounded-2xl p-6 text-left
                  transition-all duration-500
                  transform-gpu
                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  group-hover:-translate-y-2
                  group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)]
                  md:group-hover:rotate-x-[6deg]
                  md:group-hover:-rotate-y-[6deg]
                "
              >
                <h3 className="text-xl font-semibold mb-4 text-primary relative z-10">
                  {skill.title}
                </h3>

                <ul className="space-y-2 text-muted-foreground relative z-10">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
