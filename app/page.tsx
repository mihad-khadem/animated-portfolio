import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/Contact";
import AboutPage from "@/components/About";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "#home", icon: <FaHome /> },
            { name: "About", link: "#about" },
            { name: "Projects", link: "#projects" },
            // { name: "Testimonials", link: "#/testimonials" },
            { name: "Contact", link: "#contact" },
          ]}
        />
        <Hero />
        <Grid />
        <AboutPage />
        <RecentProjects />
        <Experience />
        <Approach />
        <Testimonials />
        <ContactForm />
      </div>
    </main>
  );
}
