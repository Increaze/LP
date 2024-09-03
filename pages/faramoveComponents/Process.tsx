import Link from "next/link";

export default function Process() {
  return (
    <section className="mt-20 bg-[#F1F9F6] p-6 ">
      <h2 className="text-4xl font-medium mb-8">Our process</h2>
      <div className="space-y-6 mb-8">
        <p className="text-lg text-[#5A5566]">
          We were supposed to adopt <strong>Agile design framework</strong>,
          also known as <strong>Agile UX</strong> or <strong>Lean UX</strong>,
          which integrates design principles into Agile software development
          methodologies. This framework emphasises{" "}
          <strong>
            iterative development, collaboration between cross-functional teams
          </strong>
          , and <strong>continuous improvement based on user feedback.</strong>
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
          , a popular Agile tool, to manage our sprints, track user stories, and
          maintain project transparency.{" "}
        </p>
      </div>
      <img src="/images/process.png" alt="" />
    </section>
  );
}
