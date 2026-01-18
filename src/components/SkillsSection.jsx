// export const SkillsSection = () => {
//   const skills = [
//     {
//       title: "Ceiling & Gypsum Works",
//       items: [
//         "Gypsum Ceiling Installation",
//         "POP Designs",
//         "Modern Ceiling Layouts",
//         "Lighting Integration",
//         "Custom Ceiling Finishes",
//       ],
//     },
//     {
//       title: "Painting & Finishing",
//       items: [
//         "Interior & Exterior Painting",
//         "Texture & Decorative Paint",
//         "Color Matching",
//         "Premium Finishes",
//         "Protective Coatings",
//       ],
//     },
//     {
//       title: "Wall & Decorative Works",
//       items: [
//         "Wainscoting",
//         "Wall Panels",
//         "PVC Wall Installation",
//         "Feature Walls",
//         "Wallpaper Installation",
//       ],
//     },
//     {
//       title: "Installation & Fit-Out",
//       items: [
//         "PVC Ceiling Installation",
//         "Cabinet & Fixture Fitting",
//         "Trim & Molding Installation",
//         "Space Optimization",
//         "Site Measurements",
//       ],
//     },
//     {
//       title: "Design & Planning",
//       items: [
//         "Interior Space Planning",
//         "Modern Design Concepts",
//         "Material Selection",
//         "Lighting Planning",
//         "Client Design Consultation",
//       ],
//     },
//     {
//       title: "Professional Skills",
//       items: [
//         "Project Management",
//         "Attention to Detail",
//         "Time Management",
//         "Client Communication",
//         "Quality Assurance",
//       ],
//     },
//   ];

//   return (
//     <section id="skills" className="py-24 px-4 relative">
//       <div className="container mx-auto max-w-6xl">
//         {/* SECTION HEADER */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
//           My <span className="text-primary">Skills</span>
//         </h2>

//         <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-center mb-16">
//           A refined set of interior design and finishing skills developed through
//           years of hands-on experience, precision craftsmanship, and a passion
//           for modern, elegant spaces.
//         </p>

//         {/* SKILLS GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-card rounded-xl p-6 card-hover border border-border text-left"
//             >
//               <h3 className="text-xl font-semibold mb-4 text-primary">
//                 {skill.title}
//               </h3>

//               <ul className="space-y-2 text-muted-foreground">
//                 {skill.items.map((item, i) => (
//                   <li key={i} className="flex items-start gap-2">
//                     <span className="text-primary mt-1">•</span>
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="flex justify-center pt-20">
//           <a href="#contact" className="cosmic-button">
//             Request a Consultation
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };


// export const SkillsSection = () => {
//   const skills = [
//     {
//       title: "Ceiling & Gypsum Works",
//       items: [
//         "Gypsum Ceiling Installation",
//         "POP Designs",
//         "Modern Ceiling Layouts",
//         "Lighting Integration",
//         "Custom Ceiling Finishes",
//       ],
//     },
//     {
//       title: "Painting & Finishing",
//       items: [
//         "Interior & Exterior Painting",
//         "Texture & Decorative Paint",
//         "Color Matching",
//         "Premium Finishes",
//         "Protective Coatings",
//       ],
//     },
//     {
//       title: "Wall & Decorative Works",
//       items: [
//         "Wainscoting",
//         "Wall Panels",
//         "PVC Wall Installation",
//         "Feature Walls",
//         "Wallpaper Installation",
//       ],
//     },
//     {
//       title: "Installation & Fit-Out",
//       items: [
//         "PVC Ceiling Installation",
//         "Cabinet & Fixture Fitting",
//         "Trim & Molding Installation",
//         "Space Optimization",
//         "Site Measurements",
//       ],
//     },
//     {
//       title: "Design & Planning",
//       items: [
//         "Interior Space Planning",
//         "Modern Design Concepts",
//         "Material Selection",
//         "Lighting Planning",
//         "Client Consultation",
//       ],
//     },
//     {
//       title: "Professional Skills",
//       items: [
//         "Project Management",
//         "Attention to Detail",
//         "Time Management",
//         "Client Communication",
//         "Quality Assurance",
//       ],
//     },
//   ];

//   return (
//     <section id="skills" className="py-24 px-4 relative">
//       <div className="container mx-auto max-w-6xl">
//         {/* HEADER */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
//           My <span className="text-primary">Skills</span>
//         </h2>

//         <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-center mb-20">
//           A refined combination of craftsmanship, creativity, and technical
//           expertise that transforms spaces into elegant, functional interiors.
//         </p>

//         {/* GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//           {skills.map((skill, index) => (
//             <div key={index} className="card-3d group">
//               <div
//                 className="
//                   relative h-full
//                   bg-card border border-border
//                   rounded-2xl p-6 text-left
//                   transition-all duration-500
//                   transform-gpu
//                   shadow-[0_10px_30px_rgba(0,0,0,0.08)]
//                   group-hover:-translate-y-2
//                   group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)]
//                   md:group-hover:rotate-x-[6deg]
//                   md:group-hover:-rotate-y-[6deg]
//                 "
//               >
//                 {/* GLOW LAYER */}
//                 <div
//                   className="
//                     pointer-events-none absolute inset-0 rounded-2xl
//                     bg-gradient-to-br from-primary/20 via-transparent to-transparent
//                     opacity-0 group-hover:opacity-100
//                     transition-opacity duration-500
//                   "
//                 />

//                 {/* CONTENT */}
//                 <h3 className="text-xl font-semibold mb-4 text-primary relative z-10">
//                   {skill.title}
//                 </h3>

//                 <ul className="space-y-2 text-muted-foreground relative z-10">
//                   {skill.items.map((item, i) => (
//                     <li key={i} className="flex gap-2">
//                       <span className="text-primary">•</span>
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="flex justify-center pt-20">
//           <a href="#contact" className="cosmic-button">
//             Request a Consultation
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };


// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaPaintRoller, FaTools, FaCouch, FaDraftingCompass, FaLightbulb, FaCheckCircle } from "react-icons/fa";

// export const SkillsSection = () => {
//   const categories = [
//     "All",
//     "Ceilings",
//     "Painting",
//     "Walls",
//     "Installation",
//     "Design",
//     "Professional",
//   ];

//   const skills = [
//     {
//       title: "Ceiling & Gypsum Works",
//       category: "Ceilings",
//       icon: <FaTools size={28} className="text-primary" />,
//       items: [
//         "Gypsum Ceiling Installation",
//         "POP Designs",
//         "Modern Ceiling Layouts",
//         "Lighting Integration",
//         "Custom Ceiling Finishes",
//       ],
//       description: "Expert craftsmanship in gypsum and ceiling installations, combining style and durability.",
//     },
//     {
//       title: "Painting & Finishing",
//       category: "Painting",
//       icon: <FaPaintRoller size={28} className="text-primary" />,
//       items: [
//         "Interior & Exterior Painting",
//         "Texture & Decorative Paint",
//         "Color Matching",
//         "Premium Finishes",
//         "Protective Coatings",
//       ],
//       description: "Precision painting and finishing services that elevate interiors with color and texture.",
//     },
//     {
//       title: "Wall & Decorative Works",
//       category: "Walls",
//       icon: <FaCouch size={28} className="text-primary" />,
//       items: [
//         "Wainscoting",
//         "Wall Panels",
//         "PVC Wall Installation",
//         "Feature Walls",
//         "Wallpaper Installation",
//       ],
//       description: "Creating stunning walls with modern materials and decorative techniques.",
//     },
//     {
//       title: "Installation & Fit-Out",
//       category: "Installation",
//       icon: <FaTools size={28} className="text-primary" />,
//       items: [
//         "PVC Ceiling Installation",
//         "Cabinet & Fixture Fitting",
//         "Trim & Molding Installation",
//         "Space Optimization",
//         "Site Measurements",
//       ],
//       description: "Professional installation and fit-out services ensuring functionality and aesthetic appeal.",
//     },
//     {
//       title: "Design & Planning",
//       category: "Design",
//       icon: <FaDraftingCompass size={28} className="text-primary" />,
//       items: [
//         "Interior Space Planning",
//         "Modern Design Concepts",
//         "Material Selection",
//         "Lighting Planning",
//         "Client Consultation",
//       ],
//       description: "Transforming spaces with thoughtful design, planning, and material selection.",
//     },
//     {
//       title: "Professional Skills",
//       category: "Professional",
//       icon: <FaLightbulb size={28} className="text-primary" />,
//       items: [
//         "Project Management",
//         "Attention to Detail",
//         "Time Management",
//         "Client Communication",
//         "Quality Assurance",
//       ],
//       description: "Ensuring project success with strong professional skills and client communication.",
//     },
//   ];

//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredSkills =
//     activeCategory === "All"
//       ? skills
//       : skills.filter((skill) => skill.category === activeCategory);

//   return (
//     <section id="skills" className="py-24 px-4 relative">
//       <div className="container mx-auto max-w-6xl">
//         {/* HEADER */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
//           My <span className="text-primary">Skills</span>
//         </h2>

//         <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-center mb-10">
//           A refined combination of craftsmanship, creativity, and technical
//           expertise that transforms spaces into elegant, functional interiors.
//         </p>

//         {/* FILTER CATEGORIES */}
//         <div className="flex flex-wrap justify-center gap-3 mb-16 relative">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className="relative px-5 py-2 text-sm font-medium transition-colors duration-300 border rounded-full bg-background/50 text-muted-foreground hover:text-primary hover:border-primary"
//             >
//               {cat}
//               {activeCategory === cat && (
//                 <motion.div
//                   layoutId="underline"
//                   className="absolute bottom-0 left-0 right-0 h-1 bg-pink-500 rounded-full"
//                   transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                 />
//               )}
//             </button>
//           ))}
//         </div>

//         {/* GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//           {filteredSkills.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="group perspective-1000 cursor-pointer"
//             >
//               <motion.div
//                 whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03 }}
//                 className="
//                   relative h-full rounded-2xl p-6
//                   bg-card/80 backdrop-blur-xl
//                   border border-white/10
//                   transition-all duration-500 transform-gpu
//                   shadow-[0_15px_40px_rgba(0,0,0,0.15)]
//                 "
//               >
//                 {/* NEON EDGE GLOW */}
//                 <div className="
//                   pointer-events-none absolute inset-0 rounded-2xl
//                   bg-gradient-to-br from-pink-500/40 via-cyan-400/20 to-transparent
//                   opacity-0 group-hover:opacity-100
//                   transition-opacity duration-500 blur-xl
//                 " />

//                 {/* ICON */}
//                 <div className="relative z-10 mb-4">{skill.icon}</div>

//                 {/* TITLE */}
//                 <h3 className="text-xl font-semibold mb-2 text-primary relative z-10">
//                   {skill.title}
//                 </h3>

//                 {/* AI DESCRIPTION */}
//                 <p className="text-sm text-muted-foreground mb-4 relative z-10">
//                   {skill.description}
//                 </p>

//                 {/* ITEMS */}
//                 <ul className="space-y-2 text-muted-foreground relative z-10">
//                   {skill.items.map((item, i) => (
//                     <li key={i} className="flex gap-2 items-center">
//                       <FaCheckCircle className="text-pink-400 shrink-0" />
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="flex justify-center pt-20">
//           <a href="#contact" className="cosmic-button">
//             Request a Consultation
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };


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
