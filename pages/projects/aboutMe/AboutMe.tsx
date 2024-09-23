import Link from "next/link";
import React from "react";
import { Constants } from "../../../constants";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="flex mx-14 rounded-[32px] px-10 justify-between items-start border border-lp-gray3 bg-lp-gray3 container">
      <section className="flex flex-col text-black pt-10 space-y-5">
        <h1 className="text-[40px] font-extrabold ">Lateef Akinyemi </h1>
        <p className="text-[32px]">Product Designer</p>
        <div className="flex gap-5 items-start text-xl ">
          {skillSet.map((skill) => (
            <p
              key={skill.text}
              className="text-black px-4 py-2 mr-6 text-xs rounded-full border border-la-gray2"
            >
              {skill.text}
            </p>
          ))}
        </div>
        <p className="text-lg font-normal max-w-[620px]">
          I’m a product and computational designer, excels in creating scalable
          design systems and compelling products. My journey spans Alerzo's
          successful Alerzoshop launch, 80% user retention at Alerzo - Jeetar,
          and a 112% revenue increase at Faramove. I’m also an Adplist Design
          Mentor with product design certifications, showcasing his impactful
          product design expertise.
        </p>

        <div className="flex items-center gap-5 mt-auto  mbl:flex-col mbl:gap-2 mbl:mt-14">
          <Link
            href="/"
            className="text-white px-4 py-2 rounded-full border border-black bg-black font-medium"
          >
            <span>Contact me</span>
          </Link>
          <div className="flex items-center gap-5">
            {SocialLinks.map((link) => (
              <a
                key={link.alt}
                href={link.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  quality={100}
                  height={24}
                  width={24}
                  src={link.img}
                  alt={link.alt}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="w-[443px] h-full">
        <img className="" src="/images/profile.png" alt="" />
      </section>
    </section>
  );
}

const skillSet = [
  {
    text: "PRODUCT DESIGN",
  },
  {
    text: "CREATIVE",
  },
  {
    text: "MOTION",
  },
  {
    text: "DEV",
  },
];

const SocialLinks = [
  {
    img: "/icons/dribble.svg",
    alt: "dribble",
    link: "https://dribbble.com/pixifinger",
  },
  {
    img: "/images/linkedin.svg",
    alt: "linkedin",
    link: "https://www.linkedin.com/in/lateef-akinyemi-432738127/",
  },
  {
    img: "/icons/adplist.svg",
    alt: "adplist",
    link: "https://adplist.org/mentors/lateef-akinyemi?impact_swag=https://hcti.io/v1/image/abebeda1-d76b-40ce-9013-8b43b3d12f9d",
  },
];
