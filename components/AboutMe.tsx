import Link from "next/link";
import React from "react";
import { Constants } from "../constants";

export default function AboutMe() {
  return (
    <section className="flex mx-14 rounded-[32px] justify-between items-start border border-lp-gray3 bg-lp-gray3">
      <section className="flex flex-col text-black p-10">
        <h1 className="text-5xl leading-[1.36] mt-4 font-extrabold ">
          About Lateef
        </h1>
        <p className="py-8 text-lg font-normal max-w-[655px]">
          I’m a product and computational designer, excels in creating scalable
          design systems and compelling products. My journey spans Alerzo's
          successful Alerzoshop launch, 80% user retention at Alerzo - Jeetar,
          and a 112% revenue increase at Faramove. I’m also an Adplist Design
          Mentor with product design certifications, showcasing his impactful
          product design expertise.
        </p>
        <div className="flex flex-col items-start gap-y-5 font-semibold text-black">
          <Link
            href="/"
            className="text-black p-4 rounded-full border border-lp-gray4 bg-lp-gray4 font-medium"
          >
            <span>Connect with me</span>
          </Link>
          <div className="flex gap-3">
            <a href={Constants.linkedinLink}>
              <img
                src="/icons/linkedin.svg"
                className="object-contain w-5"
                alt="linkedin"
              />
            </a>
            <a href={Constants.linkedinLink} className="underline font-medium">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
      <section className="items-end pt-24">
        <img className="m-6" src="/icons/lateef.svg" alt="" />
      </section>
    </section>
  );
}
