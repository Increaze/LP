import sketch from "../../public/images/sketch.png";
import component from "../../public/images/component.png";
import Image from "next/image";

export default function Ideate() {
  return (
    <section>
      <div className="my-8">
        <h3 className="text-4xl font-medium mb-4">Ideating Solution</h3>
        <p className="text-lg text-[#625D6F] mb-2">
          Our collaborative brainstorming sessions yielded a wealth of
          innovative solutions that directly addressed our users' challenges.
          This user-centred approach fostered deeper empathy for their needs,
          preferences, and frustrations. It also ensured our solutions aligned
          perfectly with our business objectives.
        </p>
        <p className="text-lg text-[#625D6F]">
          Through an iterative design process, we refined our initial ideas,
          prioritising the most impactful strategies. Tight deadlines
          necessitated a focus on high-fidelity prototypes, allowing us to move
          swiftly from concept to testable solution.
        </p>
      </div>
      <div className="space-y-6 mb-8">
        <h3 className="text-lg font-medium">Sketching</h3>
        <Image className="" src={sketch} alt={""} />
      </div>
      <div className="space-y-6">
        <h3 className="text-lg font-medium">Components</h3>
        <Image className="" src={component} alt={""} />
      </div>
    </section>
  );
}
