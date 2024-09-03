export default function OtherFields() {
  return (
    <section className="space-y-14">
      <div className="my-8">
        <h3 className="text-4xl font-medium mb-4">Development</h3>
        <p className="text-lg text-[#625D6F] mb-2">
          The implementation phase prioritised seamless execution through
          continuous collaboration and regular alignment meetings. This ensured
          clear communication, minimised roadblocks, and ultimately fostered an
          efficient development process.
        </p>
        <p className="text-lg text-[#625D6F] mb-2">
          Throughout the implementation phase, I maintained close collaboration
          with the development team. This involved conducting preliminary
          quality assurance (QA) checks individuality and as a team to identify
          any potential issues early in the process. This ongoing communication
          ensured a smooth transition to the dedicated QA specialist, who then
          performed a comprehensive review.
        </p>
      </div>
      <div className="my-8">
        <h3 className="text-4xl font-medium mb-4">Testing</h3>
        <p className="text-lg text-[#625D6F] mb-2">
          To ensure our designs met user needs, we conducted usability testing
          with 40 participants using Maze, a user testing platform. While the
          results confirmed the overall effectiveness of the solution, valuable
          insights emerged that helped us identify areas for minor improvements.
          These refinements have been incorporated into the designs, resulting
          in an even more user-friendly experience.
        </p>
      </div>
      <div className="my-8">
        <h3 className="text-4xl font-medium mb-4">Roadblocks</h3>
        {roadblocks.map((item, index) => (
          <p
            key={index}
            className={`text-lg text-[#625D6F] mb-2 flex items-${
              index === 2 ? "start" : "center"
            } gap-2`}
          >
            <span
              className={`border rounded-full w-2 h-2 flex-shrink-0 bg-[#625D6F] ${
                index === 2 ? "mt-1" : ""
              }`}
            />
            <span>{item.text}</span>
          </p>
        ))}
      </div>
      <div className="my-8">
        <h3 className="text-4xl font-medium mb-4">Launch</h3>
        <p className="text-lg text-[#625D6F] mb-2">
          Faramove's launch revolutionised logistics for businesses. Gone are
          the days of sluggish deliveries and opaque shipping costs. Now,
          businesses enjoy the power of faster turnaround times, reduced
          expenses, and real-time tracking. This newfound efficiency empowers
          them to focus on their core strength: running their businesses with
          confidence.
        </p>
      </div>
      <div className="my-8 space-y-6">
        <h3 className="text-4xl font-medium">Results</h3>
        <p className="text-lg text-[#625D6F] mb-2">
          One month post-launch, we're seeing positive results! The product team
          is collaborating closely with marketing to develop targeted campaigns
          that leverage data insights and raise brand awareness. This may
          include initiatives like billboard advertising.
        </p>
        <img src="/images/userPersona.png" alt="" />
      </div>
      <div className="my-8 space-y-3">
        <h3 className="text-4xl font-medium">Conclusions & Learnings</h3>
        <p className="text-lg text-[#625D6F] mb-4">
          There was a need to consistently go back to the drawing board to
          ensure the goal of the product has not been overlooked.
        </p>
        <p className="font-bold text-lg">Some of the things I learnt</p>
        {numberedTexts.map((text, index) => (
          <p key={index} className="text-lg text-[#625D6F]">
            {index + 1}. {text}
          </p>
        ))}
      </div>
      <div className="my-8 space-y-3">
        <h3 className="text-4xl font-medium">Next Steps</h3>
        <p className="font-bold text-lg">Some of the things I learnt</p>
        {nextSteps.map((text, index) => (
          <p key={index} className="text-lg text-[#625D6F]">
            {index + 1}. {text}
          </p>
        ))}
      </div>
    </section>
  );
}

const numberedTexts = [
  "It is very easy to get caught up in the heat of the moment and shift focus tending to things without significant impacts.",
  "The use of a components really helped to streamline our processes and created consistency.",
  "Working as a designer in a startup requires more than just skill set, it demands flexibility and the ability to adapt to a constantly evolving environment because things might not go as planned all the time.",
];

const nextSteps = [
  "Transition our business model to prioritise B2B logistics solutions, potentially outsourcing or reevaluating individual delivery services.",
  "Transform our processes and experiences based on user feedback to create a more streamlined and user-centric approach.",
];

const roadblocks = [
  {
    text: "The development stage encountered challenges that extended the timeline beyond initial estimates",
  },
  {
    text: "Project scope adjustments included building a hub app, which will be detailed in a separate case study.",
  },
  {
    text: "Maintaining design consistency with the newly created components presented an initial hurdle, but we quickly adapted and ensured a cohesive visual experience.",
  },
];
