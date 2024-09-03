import iteration from "../../public/images/iteration.png";
import Image from "next/image";
import MobileApp from "./MobileApp";

export default function Design() {
  return (
    <section>
      <div className="my-8">
        <h3 className="text-4xl font-medium mb-4">Designs</h3>
        <p className="text-lg text-[#625D6F] mb-2">
          Leveraging the research, insights, and initial sketches, we
          transitioned to the visual design phase. With a user-centric approach,
          we employed cutting-edge design concepts to create an interface that
          prioritises usability. Following an iterative design process, we
          finalised the design in stages, incorporating user feedback at each
          step. This ensured a gradual and critical refinement, ultimately
          delivering a visually appealing and user-friendly solution.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-medium">Iteration progression</h3>
        <p className="text-lg text-[#625D6F]">
          Following each feature design, we held collaborative review sessions
          with the Project Manager (PM) and stakeholders. This ensured all
          perspectives were considered and the user experience was continuously
          optimized. Through iterative refinements, we achieved a design that
          met our goal of providing an exceptional user experience.
        </p>
      </div>
      <Image className="" src={iteration} alt={""} />
      <MobileApp/>
    </section>
  );
}
