import swotAnalysis from "../../public/images/swotAnalysis.png";
import userFlow from "../../public/images/userFlow.png";
import Image from "next/image";

export default function AboutFaramove() {
  return (
    <section className="mt-12 space-y-8">
      <section className="flex flex-col justify-center it px-48">
        <h1 className="text-[40px]">Faramove</h1>
        <p className="text-[#625D6F] text-lg">
          Faramove aims to revolutionise the logistics and freight forwarding
          industry by addressing key challenges faced by businesses in
          transporting goods across states, countries, and international
          borders. Leveraging cutting-edge technology, this platform streamlines
          the entire process, ensuring swift and efficient transportation of
          goods. With seamless automation, users experience a user-friendly
          interface, simplifying the logistics experience
        </p>
        <div className=" space-y-6">
          <div>
            <h3 className="text-lg font-bold">My Role</h3>
            <p className="text-lg">
              I was the lead designer for this project, I designed the Customer
              & Driver’s app and also coordinated the design process from start
              to launch alongside the Project Manager, Developers and 4 other
              Designers.
            </p>
          </div>
          <div className="">
            <h3 className="text-lg font-bold">Team</h3>
            <p className="text-lg">
              Lateef Akinyemi (Me), Oluwatimilehin, Arafat, Moses, Tolani
              (Animator), Olawole (3D designer){" "}
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <img src="/images/faracomponent.png" alt="" />
      </div>
      <div className="flex flex-col space-y-4 ">
        <div className="px-48">
          <h3 className="text-5xl text-[#16063E] font-semibold ">
            Brand Assets
          </h3>
          <p className="text-lg">
            These are few brand asset i led the creative on and added my
            contributions to.
          </p>
        </div>

        <img className="container" src="/images/brandAssets.png" alt={""} />
      </div>

      <section>
        <div className=" mt-10 px-48">
          <h3 className="text-5xl font-bold mb-2">The Problem</h3>
          <p className="text-lg text-[#625D6F]">
            In today's global marketplace, the transportation of goods faces
            myriad challenges, including inefficiencies, delays, and financial
            constraints. Despite technological advancements, businesses struggle
            with navigating complex logistics systems and managing payments,
            resulting in frustration and underserved needs. Faramove aims to
            revolutionise this landscape by offering an innovative solution that
            streamlines transportation while addressing financial barriers.
            However, the lack of a seamless, integrated platform poses a
            significant challenge. There's a pressing need for a comprehensive
            solution that simplifies transportation and offers flexible
            financing options, empowering users to navigate the global supply
            chain with confidence. Faramove seeks to redefine logistics,
            providing a user-friendly experience that transcends traditional
            boundaries.
          </p>
        </div>
      </section>
      <section>
        <div className="px-48 mt-10">
          <h3 className="text-5xl font-bold mb-2">The Solution</h3>
          <p className="text-lg text-[#625D6F]">
            Our collaborative brainstorming sessions yielded a wealth of
            innovative solutions that directly addressed our users' challenges.
            This user-centred approach fostered deeper empathy for their needs,
            preferences, and frustrations. It also ensured our solutions aligned
            perfectly with our business objectives. Through an iterative design
            process, we refined our initial ideas, prioritising the most
            impactful strategies. Tight deadlines necessitated a focus on
            high-fidelity prototypes, allowing us to move swiftly from concept
            to testable solution.
          </p>
        </div>
      </section>
      <section>
        <div className="px-48 mt-10">
          <h3 className="text-5xl font-bold mb-2">Research & Insight</h3>
          <p className="text-lg text-[#625D6F]">
            Efficient logistics, freight forwarding, supply chain financing, and
            customs brokerage are crucial for moving goods across borders, yet
            they face significant challenges due to historical, economic,
            technological, and geopolitical factors. Before embarking on this
            project, I recognized the importance of establishing a solid
            foundation in logistics, so I conducted thorough research into the
            courier service market, focusing on understanding user perspectives
            and the industry's current issues. This groundwork helped me uncover
            the key dynamics contributing to these logistics and freight
            problems.
          </p>
        </div>
      </section>
      <section>
        <div className="px-48 mt-10">
          <h3 className="text-5xl font-bold mb-2  text-center">
            {" "}
            Competitors - Comparing Existing Competitors
          </h3>
          <p className="text-lg text-[#625D6F]">
            In collaboration with the Project Manager, competitive analysis of
            similar platforms was conducted. This research confirmed Faramove's
            strong potential to offer a unique value proposition in the market.
          </p>
        </div>
      </section>

      <div className="mt-8 ">
        <div className="flex justify-between mt-8 container">
          <img className="w-[282px] h-[124px]" src="/images/gig.png" alt="" />
          <img
            className="w-[282px] h-[124px]"
            src="/images/flexport.png"
            alt=""
          />
          <img
            className="w-[282px] h-[124px]"
            src="/images/gokada.png"
            alt=""
          />
          <img
            className="w-[282px] h-[124px]"
            src="/images/speedaf.png"
            alt=""
          />
        </div>
        <p className="text-center mt-6 italic text-[#625D6F]">
          Popular competitors
        </p>
      </div>
      <div className="container">
        <img src="/images/swotAnalysis.png" alt="" />
      </div>
    </section>
  );
}

const faraProduct: Array<{
  title: string;
  icon?: string;
  text?: string;
  link?: string;
}> = [
  {
    title: "Timeline",
    icon: "",
    text: "May 2023 - Ongoing",
  },
  {
    title: "Website",
    icon: "link",
    text: "https://Faramove.com",
    link: "https://faramove.com",
  },
  {
    title: "Appstore",
    icon: "link",
    text: "IOS",
    link: "https://veedezpay.com",
  },
  {
    title: "Playstore",
    icon: "link",
    text: "Android",
    link: "https://apps.apple.com/ng/app/veedez/id1600437976",
  },
  {
    title: "Instagram",
    icon: "link",
    text: "https://www.instagram.com/faramovehq/",
    link: "https://apps.apple.com/ng/https://www.instagram.com/faramovehq",
  },
  {
    title: "Twitter(X)",
    icon: "link",
    text: "https://x.com/FaramoveHq",
    link: "https://x.com/FaramoveHq",
  },
];
