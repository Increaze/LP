import Link from "next/link";

export default function FaramoveProcess() {
  return (
    <section className="mt-10 space-y-8">
      <div className="flex flex-col justify-center px-48">
        <Title
          text="The Process"
          subText="We were supposed to adopt Agile design framework,
            also known as Agile UX or Lean UX,
            which integrates design principles into Agile software development
            methodologies. This framework emphasises iterative development, collaboration between cross-functional teams, and
            continuous improvement based on user feedback. We were supposed to adopt Agile design framework, also known as
            Agile UX or Lean UX, which integrates design principles into Agile
            software development methodologies. This framework emphasises
            iterative development, collaboration between cross-functional teams
            , and continuous improvement based on user feedback.
            While we adapted the design thinking framework to fit our project
            timeline and resource constraints, prioritising user research
            remained paramount. This ensured we addressed the core needs of our
            users even if the process wasn't strictly linear, smart right? I
            know!
               We utilised Jira , a popular Agile tool, to manage our sprints, track user stories,
            and maintain project transparency."
        />
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
        <Title
          text="Final Design"
          subText="Leveraging the research, insights, and initial sketches, we
          transitioned to the visual design phase. With a user-centric approach,
          we employed cutting-edge design concepts to create an interface that
          prioritises usability. Following an iterative design process, we
          finalised the design in stages, incorporating user feedback at each
          step. This ensured a gradual and critical refinement, ultimately
          delivering a visually appealing and user-friendly solution."
        />
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
            <h3 className="text-3xl text-[#16063E] font-bold text-center mb-4">
              {app.title}
            </h3>
            <img className="" src={app.image} alt={app.alt} />
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center px-48 pt-10">
        <Title
          text="Result"
          subText="One month post-launch, we're seeing positive results! The product team
          is collaborating closely with marketing to develop targeted campaigns
          that leverage data insights and raise brand awareness. This may
          include initiatives like billboard advertising."
        />
      </div>
      <div className="container">
        <img src="/images/farapersona.png" alt="" />
      </div>
      <div className="px-4 pt-12 pb-20 relative">
        <h1 className="text-[48px] font-medium">Next Project</h1>
        <div className="relative group">
          <Link href={"/projects/jeetar"} className="cursor-pointer">
            <img className="" src="/images/jeet.png" alt="" />
          </Link>
          <div className="absolute top-1/2 left-0 w-full h-[26px] bg-la-blue/90 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 ease-in-out origin-left -translate-y-1/2"></div>
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

const Title = ({ text, subText }: { text?: string; subText: string }) => {
  return (
    <div>
      <h1 className="text-[48px] title font-extrabold mb-3">{text}</h1>
      <p className="text-lg">{subText}</p>
    </div>
  );
};
