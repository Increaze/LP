import Link from "next/link";

export default function FaramoveProcess() {
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
        <img src="/images/wireframesketch.png" alt="" />
      </div>

      <div className="flex flex-col justify-center px-48">
        <h1 className="text-[48px] font-semibold">Final Design</h1>
        <p className="text-[#625D6F] text-lg mb-4">
          Leveraging the research, insights, and initial sketches, we
          transitioned to the visual design phase. With a user-centric approach,
          we employed cutting-edge design concepts to create an interface that
          prioritises usability. Following an iterative design process, we
          finalised the design in stages, incorporating user feedback at each
          step. This ensured a gradual and critical refinement, ultimately
          delivering a visually appealing and user-friendly solution.
        </p>
      </div>
      <div className="container">
        <img src="/images/iteration.png" alt="" />
      </div>
      <div className="grid grid-cols-2 gap-6 pb-10 container">
        {designSteps.map((step, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={`/images/${step.image}.png`}
              alt={step.image}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 space-y-8 container">
        {appDetails.map((app, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <h3 className="text-3xl text-[#16063E] font-bold text-center mb-4">{app.title}</h3>
            <img className="" src={app.image} alt={app.alt} />
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center px-48 pt-10">
        <h1 className="text-[48px] font-semibold">Result</h1>
        <p className="text-[#625D6F] text-lg">
          One month post-launch, we're seeing positive results! The product team
          is collaborating closely with marketing to develop targeted campaigns
          that leverage data insights and raise brand awareness. This may
          include initiatives like billboard advertising.
        </p>
      </div>
      <div className="container">
        <img src="/images/farapersona.png" alt="" />
      </div>
      <div className="px-4 pt-12 pb-20">
        <h1 className="text-[48px] font-medium ">Next Project</h1>
        <div className="flex gap-20 items-center">
          <span className="text-[84px] p-0 m-0">Jeetar</span>
          <div className="mt-5">
            <img className="w-full" src="/icons/arrow.svg" alt="" />
          </div>
        </div>
      </div>

     
    </section>
  );
}

const designSteps: { image: string }[] = [
  {
    image: "authentication",
  },
  {
    image: "homepage-app",
  },
  {
    image: "bookings",
  },
  {
    image: "financeapp",
  },
  {
    image: "billing-app",
  },
  {
    image: "brokerage",
  },
];

const appDetails = [
    {
        title: "Website",
        image: "/images/website.png",
        alt: "Web Image",
      },
      {
        title: "User Mobile App",
        image: "/images/userMobileApp.png",
        alt: "User Mobile App Image",
      },
    {
      title: "User Web App",
      image: "/images/userWebApp.png",
      alt: "User Web App Image",
    },
    {
      title: "Rider Mobile App",
      image: "/images/riderApp.png",
      alt: "Rider Mobile App Image",
    },
  ];
  
