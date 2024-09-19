import React from "react";

import Navbar from "../newComponent/Navbar";
import NewHeroSection from "../newComponent/NewHeroSection";
import Projects from "../newComponent/Projects";
import Footer from "../newComponent/Footer";
import { Experience } from "../components/Experience";

export default function index() {
  return (
    <section>
      <Navbar />
      <NewHeroSection />
      <Projects />
      <Experience />
      <Footer />
    </section>
  );
}
