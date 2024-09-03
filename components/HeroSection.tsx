import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-10 gap-y-3">
      <div className="flex items-center justify-center">
        <img className="w-48 h-48" src="/images/profile wix.png" alt="" />
      </div>
      <div className="text-center text-[80px] text-lp-black font-semibold">
        <h1 className="">Lateef Akinyemi</h1>
      </div>

      <div className="flex gap-4 justify-center mt-2.5 mb-6 text-xl max-w-lg mx-auto">
        {skillSet.map((skill) => (
          <p
            key={skill.text}
            className="text-black bg-lp-grey px-3 py-2 text-xs rounded-full "
          >
            {skill.text}
          </p>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-center text-xl font-medium leading-7 mb-10">
          Building <span className="text-[#A3390B]">beautiful</span> and {" "}
          <span className="text-[#C482EB]">reliable</span> product that reflect
          your brand and deliver for your business.
        </p>
        <Link
          href="/about-me"
          className="text-black bg-lp-gray px-5 py-2 rounded-lg font-medium mb-16 "
        >
          <span>About Me</span>
        </Link>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-2xl font-semibold text-center">Mentoring & Membership</p>
        <div className="flex gap-16 justify-center mt-6 ">
          <img src="/icons/adplist.svg" alt="adp" />
          <img src="/icons/foundation.svg" alt="foundation" />

        </div>
      </div>
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
