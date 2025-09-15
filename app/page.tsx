"use client";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/Contact";

export default function Home() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    // { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <main className="relative bg-black-100 flex flex-col items-center overflow-hidden mx-auto sm:px-10">
      {/* Floating Navigation */}
      <FloatingNav navItems={navItems} />

      {/* Page Sections */}
      <section id="home" className="w-full max-w-7xl">
        <Hero />
      </section>

      <section id="about" className="w-full max-w-7xl mt-20">
        <Grid />
      </section>

      <section id="projects" className="w-full max-w-7xl mt-20">
        <RecentProjects />
      </section>

      <section id="experience" className="w-full max-w-7xl mt-20">
        <Experience />
      </section>

      <section id="approach" className="w-full max-w-7xl mt-20">
        <Approach />
      </section>

      <section id="testimonials" className="w-full max-w-7xl mt-20">
        <Testimonials />
      </section>

      <section id="contact" className="w-full max-w-7xl mt-20 mb-10">
        <ContactForm />
      </section>
    </main>
  );
}
