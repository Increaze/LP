import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import container from "../../public/images/container.png";
import delivery from "../../public/images/delivery.png";

export default function FaramoveLogistics() {
  return (
    <section id="" className="mt-20">
      <div className="flex justify-between">
        <h4 className="text-5xl mb-8">Faramove - The future of logistics</h4>
        {/* <div className="items-center">
          <Link href={""}>
            <span>Visit Website </span>
          </Link>{" "}
          <Link href={""}>
            <span>Mobile </span>
          </Link>
        </div> */}
      </div>
      <div>
        <h2 className="text-4xl font-semibold mb-4">Project Overview</h2>
        <p className="text-lg text-[#625D6F]">
          Faramove aims to revolutionise the logistics and freight forwarding
          industry by addressing key challenges faced by businesses in
          transporting goods across states, countries, and international
          borders. Leveraging cutting-edge technology, this platform streamlines
          the entire process, ensuring swift and efficient transportation of
          goods. With seamless automation, users experience a user-friendly
          interface, simplifying the logistics experience
        </p>
      </div>
      <div className="my-16">
        <section className="grid items-start grid-cols-3 mbl:grid-cols-1 gap-14 mbl:gap-8">
          {overview.map((work, index) => (
            <section
              key={work.name}
              className="flex flex-col items-start h-full bg-blue-200 p-6"
            >
              <h6 className="text-[#16063E] text-lg">{work.name}</h6>
              <p className="mt-3 max-w-[433px] flex flex-col text-[#625D6F]">
                {work.body?.map((body) => (
                  <span>{body}</span>
                ))}
              </p>
            </section>
          ))}
        </section>
      </div>
      <div className="bg-[#FEF4EC] px-6 py-10">
        <h2 className="text-4xl font-semibold mb-4">Problem Statement</h2>
        <p className="text-lg text-[#5A5566] mb-2">
          In today's global marketplace, the transportation of goods faces
          myriad challenges, including inefficiencies, delays, and financial
          constraints. Despite technological advancements, businesses struggle
          with navigating complex logistics systems and managing payments,
          resulting in frustration and underserved needs.
        </p>
        <p className="text-lg text-[#5A5566]">
          Faramove aims to revolutionise this landscape by offering an
          innovative solution that streamlines transportation while addressing
          financial barriers. However, the lack of a seamless, integrated
          platform poses a significant challenge. There's a pressing need for a
          comprehensive solution that simplifies transportation and offers
          flexible financing options, empowering users to navigate the global
          supply chain with confidence. Faramove seeks to redefine logistics,
          providing a user-friendly experience that transcends traditional
          boundaries.
        </p>
        <div className="flex gap-4 mt-14">
          <Image className="" src={container} alt={""} />
          <Image className="" src={delivery} alt={""} />
        </div>
      </div>
    </section>
  );
}



const overview: Array<{
  name: string;
  body?: React.ReactNode[];
}> = [
  {
    name: "Role",
    body: [
      "Lead Product Designer: I designed the Customer & Driver’s app and also coordinated the design process from start to launch alongside the Project Manager, Developers and 4 other Designers.",
    ],
  },
  {
    name: "Tools",
    body: [
      "Figma",
      "Figjam",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Jira",
      "Google docs",
    ],
  },
  {
    name: "What I did",
    body: [
      "Research",
      "Sketching",
      "Competitive Analysis",
      "Wireframe",
      "Testing",
      "UI Design",
    ],
  },

  {
    name: "Design Team Members",
    body: [
      "Lateef Akinyemi - Lead Designer",
      "Oluwatimilehin Akapo",
      "Moses Jacob",
      "Arafat Bankole",
      "Joel Asemota",
      "Joseph Chimezie",
    ],
  },
  {
    name: "Project Duration",
    body: ["8 months"],
  },
  {
    name: "Deliverables",
    body: [
      "Mobile App (Customers & Drivers)",
      "Web App",
      "Website",
      "Admin dashboard",
    ],
  },
];
