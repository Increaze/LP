import Link from "next/link";

export default function TheProcess() {
  return (
    <section className="mt-10 space-y-8">
      <div className="flex flex-col justify-center px-48">
        <h2 className="text-[48px] font-semibold">The process</h2>
        <div className="space-y-3">
          <p className="text-lg text-[#5A5566]">
            We were supposed to adopt <strong>Agile design framework</strong>,
            also known as <strong>Agile UX</strong> or <strong>Lean UX</strong>,
            which integrates design principles into Agile software development
            methodologies. This framework emphasises{" "}
            <strong>
              iterative development, collaboration between cross-functional
              teams
            </strong>
            , and{" "}
            <strong>continuous improvement based on user feedback.</strong>
          </p>
          <p className="text-lg text-[#625D6F]">
            While we adapted the design thinking framework to fit our project
            timeline and resource constraints, prioritising{" "}
            <strong>user research</strong> remained paramount. This ensured we
            addressed the core needs of our users even if the process wasn't
            strictly linear, smart right? I know!
          </p>
          <p className="text-lg text-[#5A5566]">
            We utilised{" "}
            <Link
              href={"https://www.atlassian.com/software/jira"}
              className="text-[#5A5566] underline font-medium"
            >
              Jira
            </Link>
            , a popular Agile tool, to manage our sprints, track user stories,
            and maintain project transparency.{" "}
          </p>
        </div>
      </div>
      <div className="container">
        <img src="/images/our-process.png" alt="" />
      </div>
      <div className="container">
        <img src="/images/information.png" alt="" />
      </div>
      <div className="bg-[#FAFAFA] rounded-3xl container">
        <img src="/images/wireframe.png" alt="" />
      </div>

      <div className="flex flex-col justify-center px-48">
        <h1 className="text-[48px] font-semibold">Final design</h1>
        <p className="text-[#625D6F] text-lg mb-4">
          After so much work on research, insights and creating wireframes, it
          was time for the visual design. Designing this we kept our users in
          mind and made sure we made use of trendy and up-to-date design
          methods.
        </p>
        <p className="text-lg text-[#625D6F]">
          We made sure to do our designs in stages to help us carefully and
          critically work in order of plan.
        </p>
      </div>
      <div className="flex flex-col">
        {designSteps.map((designStep) => (
          <img src={`/images/${designStep.image}.png`} alt="" />
        ))}
      </div>

      <div className="flex flex-col justify-center px-48">
        <h1 className="text-[48px] font-semibold">Result</h1>
        <p className="text-[#625D6F] text-lg">
          As a result of the launch, we gained over 10,000 users who processed
          more than $1 million in transaction volumes, including bank transfers,
          airtime purchases, flights, electricity bills, and more.
        </p>
      </div>
      <div className="container">
        <img src="/images/user-persona.png" alt="" />
      </div>
      <div className="px-4 pt-12 pb-20">
        <h1 className="text-[48px] font-medium ">Next Project</h1>
        <div className="flex gap-4 items-center">
          <span className="text-[84px] p-0 m-0">Faramove</span>
          <div className="mt-5">
            <img className="" src="/icons/arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

const designSteps: { image: string }[] = [
  {
    image: "welcome_screen",
  },
  {
    image: "create",
  },
  {
    image: "transfer",
  },
  {
    image: "billpayment",
  },
  {
    image: "option",
  },
];
