import Navbar from "../../newComponent/Navbar";
import Footer from "../../newComponent/Footer";
import OtherFields from "./aboutMe/OtherFields";
import AboutMe from "./aboutMe/AboutMe";

const AboutUs = () => {
  return (
    <section className="">
      <Navbar />
      <AboutMe/>
      <OtherFields />
      <Footer />
    </section>
  );
};
export default AboutUs;
