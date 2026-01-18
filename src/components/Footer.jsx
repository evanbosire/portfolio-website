import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 md:py-12 px-4 md:px-6 relative">
      {/* Remove container class and use direct styling */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-4 md:px-6">
        {/* ABOUT / CONTACT INFO WITH LOGO */}
        <div className="flex flex-col items-center sm:items-start space-y-4 md:space-y-6">
          {/* Logo and Title Row */}
          <div className="flex items-center gap-3 md:gap-4 h-14 md:h-16">
            {/* Logo */}
            <div className="shrink-0">
              <img
                src="/images/logo.png"
                alt="Interior Design Logo"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-primary/20"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fallback = e.target.parentElement?.querySelector('.logo-fallback');
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              {/* Fallback logo */}
              <div className="logo-fallback hidden w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-base md:text-lg">ID</span>
              </div>
            </div>
            
            {/* Title */}
            <div className="flex items-center">
              <h3 className="text-lg md:text-xl font-bold text-primary">Interior Design</h3>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed text-sm md:text-base text-center sm:text-left max-w-xs md:max-w-sm">
            Turning spaces into works of art. Expert in gypsum ceiling, paint,
            wainscoting, and PVC installation.
          </p>

          <ul className="space-y-2 md:space-y-3 text-muted-foreground w-full max-w-xs md:max-w-sm">
            <li className="flex items-center gap-3 justify-center sm:justify-start">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
              <span className="text-sm md:text-base break-all md:break-normal">nyasimimartin@gmail.com</span>
            </li>
            <li className="flex items-center gap-3 justify-center sm:justify-start">
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
              <span className="text-sm md:text-base">0742 065 047</span>
            </li>
            <li className="flex items-center gap-3 justify-center sm:justify-start">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
              <span className="text-sm md:text-base">Nairobi, Kenya</span>
            </li>
          </ul>
        </div>

        {/* QUICK LINKS - CENTER COLUMN */}
        <div className="flex flex-col items-center space-y-4 md:space-y-6">
          {/* Title Row - Same height as logo row */}
          <div className="flex items-center justify-center h-14 md:h-16 w-full">
            {/* Title */}
            <div className="flex items-center">
              <h3 className="text-lg md:text-xl font-bold text-primary">Quick Links</h3>
            </div>
          </div>

          <ul className="space-y-1 md:space-y-2 text-muted-foreground text-center">
            <li>
              <a
                href="#hero"
                className="hover:text-primary transition-colors block py-1 md:py-2 text-sm md:text-base"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="hover:text-primary transition-colors block py-1 md:py-2 text-sm md:text-base"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-primary transition-colors block py-1 md:py-2 text-sm md:text-base"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-primary transition-colors block py-1 md:py-2 text-sm md:text-base"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-primary transition-colors block py-1 md:py-2 text-sm md:text-base"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="flex flex-col items-center space-y-4 md:space-y-6 sm:col-span-2 lg:col-span-1">
          {/* Title Row - Same height as logo row */}
          <div className="flex items-center justify-center h-14 md:h-16 w-full">
            {/* Title */}
            <div className="flex items-center">
              <h3 className="text-lg md:text-xl font-bold text-primary">Connect With Me</h3>
            </div>
          </div>

          <div className="flex gap-3 md:gap-4 flex-wrap justify-center">
            <a
              href="https://www.instagram.com/mogere90?igsh=anZ4OHVqNDZpYXRl"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 md:p-4 rounded-full border border-border hover:text-primary hover:border-primary transition flex items-center justify-center"
              aria-label="Facebook"
            >
              <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="https://www.tiktok.com/@buramartinmmoja?_r=1&_t=ZM-92ewU5oibbE"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 md:p-4 rounded-full border border-border hover:text-primary hover:border-primary transition flex items-center justify-center"
              aria-label="TikTok"
            >
              <FaTiktok className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 md:p-4 rounded-full border border-border hover:text-primary hover:border-primary transition flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 md:p-4 rounded-full border border-border hover:text-primary hover:border-primary transition flex items-center justify-center"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
          
          <p className="text-muted-foreground text-xs md:text-sm mt-2 md:mt-4 text-center max-w-xs">
            Follow for updates on my latest projects and interior design tips.
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border text-center text-muted-foreground text-xs md:text-sm max-w-6xl mx-auto px-4 md:px-6">
        © {new Date().getFullYear()} Interior Design. All rights reserved.
      </div>
    </footer>
  );
};