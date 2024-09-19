import React from "react";

import Navbar from "../newComponent/Navbar";
import AboutMe from "../components/AboutMe";
import { Experience } from "../components/Experience";

import NewHeroSection from "../newComponent/NewHeroSection";
import Projects from "../newComponent/Projects";
import Footer from "../newComponent/Footer";

export default function index() {
  return (
    <section>
      <Navbar />
      <NewHeroSection />
      <Projects />
      {/* <HeroSection />
      <RecentWorks /> */}
      <Experience />
      {/* <AboutMe /> */}
      {/* <Testimonial /> */}
      {/* <OurCulture />
      <LifeStyle />
      <Milestone /> */}
      {/* <Contact /> */}
      <Footer />
    </section>
  );
}
