// import { cn } from "@/lib/utils";
// import { Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";
// import { ThemeToggle } from "@/components/ThemeToggle";

// const navItems = [
//   { name: "Home", href: "#hero" },
//   { name: "About", href: "#about" },
//   { name: "Services", href: "#services" },
//   { name: "Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
// ];

// export const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={cn(
//         "fixed w-full z-40 transition-all duration-300",
//         isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
//       )}
//     >
//       <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
//         {/* Logo with rounded image */}
//         <a href="#hero" className="flex items-center gap-3">
//           <div className="relative">
//             <img
//               src="/images/logo.png"
//               alt="Brian Portfolio Logo"
//               className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-primary/20"
//               onError={(e) => {
//                 // Fallback if image fails to load
//                 e.target.style.display = 'none';
//                 // Create fallback element
//                 const fallback = document.createElement('div');
//                 fallback.className = 'h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20';
//                 fallback.innerHTML = '<span class="text-primary font-bold text-sm md:text-base">BP</span>';
//                 e.target.parentNode.appendChild(fallback);
//               }}
//             />
//           </div>
//           <span className="text-xl font-bold">
//             <span className="text-glow text-primary">Brian</span>{" "}
//             <span className="text-foreground">Portfolio</span>
//           </span>
//         </a>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-8">
//           {navItems.map((item, index) => (
//             <a
//               key={index}
//               href={item.href}
//               className="text-foreground/80 hover:text-primary transition-colors duration-300 px-3 py-2"
//             >
//               {item.name}
//             </a>
//           ))}
//           <ThemeToggle />
//         </div>

//         {/* Mobile: Right side controls */}
//         <div className="flex md:hidden items-center gap-3">
//           <ThemeToggle />
//           <button
//             className="p-2 text-foreground rounded-md hover:bg-accent transition-colors"
//             onClick={() => setIsMenuOpen((prev) => !prev)}
//             aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu Overlay */}
//         <div
//           className={cn(
//             "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
//             isMenuOpen 
//               ? "opacity-100 translate-y-0" 
//               : "opacity-0 -translate-y-full pointer-events-none"
//           )}
//           onClick={() => setIsMenuOpen(false)}
//         >
//           <div className="flex flex-col items-center space-y-8 text-2xl">
//             {navItems.map((item, index) => (
//               <a
//                 key={index}
//                 href={item.href}
//                 className="text-foreground/80 hover:text-primary transition-colors duration-300 py-2 px-6"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setIsMenuOpen(false);
//                 }}
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };


import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <div className="relative">
            <img
              src="/images/logo.png"
              alt="Brian Portfolio Logo"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-primary/20"
              onError={(e) => {
                e.target.style.display = "none";
                const fallback = document.createElement("div");
                fallback.className =
                  "h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20";
                fallback.innerHTML =
                  '<span class="text-primary font-bold text-sm md:text-base">BP</span>';
                e.target.parentNode.appendChild(fallback);
              }}
            />
          </div>
          <span className="text-xl font-bold">
            <span className="text-glow text-primary">Brian</span>{" "}
            <span className="text-foreground">Portfolio</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 px-3 py-2"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            className="p-2 text-foreground rounded-md hover:bg-accent transition-colors"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden overscroll-contain",
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          )}
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="flex flex-col items-center space-y-8 text-2xl bg-background/90 rounded-2xl p-10 shadow-lg">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 py-2 px-6"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
