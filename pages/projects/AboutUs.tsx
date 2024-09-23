import Image from "next/image";
import fara from "../../public/images/Fara.png";

import Navbar from "../../newComponent/Navbar";
import Footer from "../../newComponent/Footer";
import AboutFaramove from "./faramoveDesign/AboutFaramove";
import FaramoveProcess from "./faramoveDesign/FaramoveProcess";
import BackButton from "../../newComponent/BackButton";
import AboutMe from "./aboutMe/AboutMe";
import OtherFields from "./aboutMe/OtherFields";

const AboutUs = () => {
  return (
    <section className="">
      <Navbar />
      <AboutMe />
      <OtherFields />
      <div className="bg-la-gray4 pt-20">
      <Footer />

      </div>
    </section>
  );
};
export default AboutUs;
