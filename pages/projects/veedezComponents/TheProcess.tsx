import Link from "next/link";
import { CategorySlider } from "../../../components/CategorySlider";
import { TransferSlider } from "../../../components/TransferSlider";
import { BillSlider } from "../../../components/BillSlider";
import { OptionSlider } from "../../../components/OptionSlider";

export default function TheProcess() {
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
        <div className="space-y-3">
          <p className="text-lg text-[#5A5566]"></p>
          <p className="text-lg text-[#625D6F]"></p>
          <p className="text-lg text-[#5A5566]">
            {" "}
            <Link
              href={"https://www.atlassian.com/software/jira"}
              className="text-[#5A5566] underline font-medium"
            ></Link>{" "}
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
        <Title
          text="Final design"
          subText="After so much work on research, insights and creating wireframes, it
          was time for the visual design. Designing this we kept our users in
          mind and made sure we made use of trendy and up-to-date design
          methods. We made sure to do our designs in stages to help us carefully and
          critically work in order of plan."
        />
      </div>
      <div className="flex flex-col space-y-12">
        <img className="" src="/images/welcome_screen.png" alt="" />
        <div className="space-y-12">
          <p className="text-center font-bold text-[28px]">2. Create Account</p>
          <CategorySlider />
        </div>
        <div className="space-y-12">
          <p className="text-center font-bold text-[28px]">3. Transfer</p>
          <TransferSlider />
        </div>
        <div className="space-y-12">
          <p className="text-center font-bold text-[28px]">
            4. Bill Payment/Airtime
          </p>
          <BillSlider />
        </div>
        <div className="space-y-12">
          <p className="text-center font-bold text-[28px]">5. More Options</p>
          <OptionSlider />
        </div>
      </div>

      <div className="flex flex-col justify-center px-48">
        <Title
          text="Result"
          subText="As a result of the launch, we gained over 10,000 users who processed
          more than $1 million in transaction volumes, including bank transfers,
          airtime purchases, flights, electricity bills, and more."
        />
      </div>
      <div className="container">
        <img src="/images/user-persona.png" alt="" />
      </div>

      <div className="px-4 pt-12 pb-20 relative">
        <h1 className="text-[48px] font-medium">Next Project</h1>
        <div className="relative group">
          <img className="" src="/icons/fara.svg" alt="" />
          <div className="absolute top-1/2 left-0 w-full h-[26px] bg-la-blue/90 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 ease-in-out origin-left -translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
}

const Title = ({ text, subText }: { text?: string; subText: string }) => {
  return (
    <div>
      <h1 className="text-[48px] title font-extrabold mb-3">{text}</h1>
      <p className="text-lg">{subText}</p>
    </div>
  );
};
