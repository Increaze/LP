import React from "react";
import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import LifeStyle from "../components/LifeStyle";
import Milestone from "../components/Milestone";
import OurCulture from "../components/OurCulture";
import Navbar from "../components/Navbar";
import RecentWorks from "../components/RecentWorks";
import { Experience } from "../components/Experience";
import AboutMe from "../components/AboutMe";
import Testimonial from "../components/Testimonial";
import { Footer } from "../components/Footer";

export default function index() {
  return (
    <section>
      <Navbar />
      <HeroSection />
      <RecentWorks />
      <Experience />
      <AboutMe />
      <Testimonial/>
      {/* <OurCulture />
      <LifeStyle />
      <Milestone /> */}
      {/* <Contact /> */}
      <Footer/>
    </section>
  );
}
