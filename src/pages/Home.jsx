import { StarBackground } from "@/components/StarBackground"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ServicesSection } from "@/components/ServicesSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Background effect */}
        <StarBackground />
        
        {/* Navbar with ThemeToggle inside */}
        <Navbar />
        
        {/* main content */}
        <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </main>

        {/* footer */}
        <Footer />
    </div>
}