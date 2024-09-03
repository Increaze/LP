import Navbar from "../../components/Navbar";
import Image from "next/image";
import heroImage from "../../public/images/heroImage.png";
import FaramoveLogistics from "../faramoveComponents/FaramoveLogistics";
import ProductGoal from "../faramoveComponents/ProductGoal";
import UserExperience from "../faramoveComponents/UserExperience";
import Solutions from "../faramoveComponents/Solutions";
import Process from "../faramoveComponents/Process";
import Research from "../faramoveComponents/Research";
import Definition from "../faramoveComponents/Definition";
import Ideate from "../faramoveComponents/Ideate";
import Design from "../faramoveComponents/Design";
import OtherFields from "../faramoveComponents/OtherFields";
import { Footer } from "../../components/Footer";

const Faramove = () => {
  return (
    <section className="container">
      <Navbar />
      <Image className="" src={heroImage} alt={""} />
      <FaramoveLogistics />
      <ProductGoal />
      <UserExperience />
      <Solutions />
      <Process />
      <Research />
      <Definition />
      <Ideate />
      <Design />
      <OtherFields />
      <Footer/>
    </section>
  );
};
export default Faramove;
