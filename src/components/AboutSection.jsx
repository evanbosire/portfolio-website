import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

/* ----------------------------------
   DATA
----------------------------------- */
const aboutItems = [
  {
    text:
      "With over 6 years of experience in interior finishing, I specialize in gypsum ceiling installation, paint work, wainscoting, and PVC installation. I create stylish, modern, and functional spaces that elevate every room.",
    image: "/images/img7.jpeg",
    caption:
      "Modern gypsum ceiling installation with premium finishing and balanced lighting.",
  },
  {
    text:
      "I’m passionate about delivering elegant solutions for each client’s unique vision. I continually refine my techniques to stay ahead in modern interior design trends, ensuring every project is precise, beautiful, and long-lasting.",
    image: "/images/img5.jpeg",
    caption:
      "High-end interior finishing focused on durability, texture, and elegance.",
  },
];

/* ----------------------------------
   WORD-BY-WORD REVEAL
----------------------------------- */
const RevealText = ({ text, isMobile }) => {
  return (
    <p className="text-lg text-muted-foreground leading-relaxed">
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: isMobile ? 6 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * (isMobile ? 0.01 : 0.03),
            duration: isMobile ? 0.2 : 0.35,
          }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};

/* ----------------------------------
   MAIN COMPONENT
----------------------------------- */
export const AboutSection = () => {
  const sectionRef = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  /* Scroll Progress Bar */
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  /* Section Parallax */
  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(sectionProgress, [0, 1], [40, -40]);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <>
      {/* 🎯 SCROLL PROGRESS INDICATOR */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
      />

      <section
        ref={sectionRef}
        id="about"
        className="py-24 px-4 relative overflow-hidden"
      >
        <div className="container mx-auto max-w-5xl">
          {/* HEADINGS */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            About <span className="text-primary">Me</span>
          </h2>

          <h3 className="text-2xl font-bold text-center mb-20">
            Passionate Interior Designer & Finishing Expert
          </h3>

          {/* CONTENT */}
          <div className="space-y-28">
            {aboutItems.map((item, index) => {
              const isReversed = index % 2 !== 0;

              return (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 gap-14 items-stretch"
                >
                  {/* TEXT */}
                  <div
                    className={`flex items-center ${
                      isReversed ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <RevealText text={item.text} isMobile={isMobile} />
                  </div>

                  {/* IMAGE */}
                  <motion.div
                    style={{ y: isMobile ? 0 : parallaxY }}
                    onClick={() => setLightboxIndex(index)}
                    className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl min-h-[260px] md:min-h-[320px] ${
                      isReversed ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <img
                      src={item.image}
                      loading="lazy"
                      alt={item.caption}
                      className="
                        w-full h-full object-cover
                        scale-105
                        blur-[1.5px]
                        brightness-95
                        contrast-95
                        transition-all duration-700
                        group-hover:scale-110
                        group-hover:blur-0
                        group-hover:brightness-105
                        group-hover:contrast-110
                      "
                      onLoad={(e) =>
                        e.currentTarget.classList.remove("blur-[1.5px]")
                      }
                    />

                    {/* GLASS OVERLAY */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* CAPTION */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40 backdrop-blur-sm text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {item.caption}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-20">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* 🖼️ LIGHTBOX */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={aboutItems.map((item) => ({
          src: item.image,
          description: item.caption,
        }))}
      />
    </>
  );
};
