import Link from "next/link";
import React from "react";
import { Constants } from "../constants";

export default function Testimonial() {
  return (
    <section className="">
      <h2 className="text-[32px] font-semibold leading-[56px] mt-20 ml-14">
        Testimonials
      </h2>
      <section className="flex mx-14 mt-14 justify-between ">
        {testimonial.map((testimonial) => (
          <section className="flex flex-col text-black py-14  px-20 border border-lp-gray3 bg-lp-gray3 rounded-2xl  gap-2">
            <div className="flex flex-row gap-4 mb-8">
              <span className="border-2 border-lp-black" />
              <p className=" text-lg font-normal max-w-[465px]">
                {testimonial.text}
              </p>
            </div>
            <div className="flex items-start gap-2 font-semibold mt-auto text-black">
              <img
                src={`/icons/${testimonial.image}.svg`}
                className="rounded-full"
                alt=""
              />
              <div>
                <div>
                  <p>
                    {testimonial.name}
                    <i className="text-xs font-light">{testimonial.school}</i>
                  </p>
                  <span className="font-medium text-xs">
                    {testimonial.profession}{" "}
                  </span>
                </div>

                <div className="flex gap-2 items-center">
                  <a href={Constants.linkedinLink}>
                    <img
                      src={`/icons/${testimonial.icon}.svg`}
                      className="object-contain w-4"
                      alt="linkedin"
                    />
                  </a>
                  <a
                    href={Constants.linkedinLink}
                    className="underline font-medium text-xs"
                  >
                    {testimonial.iconTitle}{" "}
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
}

const testimonial = [
  {
    text: "Lateef is a proficient professional adept at seamlessly merging the realms of arts and technology with precision and dedication. He possesses a keen understanding of user needs and adeptly translatesthem into his designs. Throughout his career, Lateef has spearheaded the development and rollout of numerous innovative user-centric products. Beyond his remarkable design acumen, collaborating with Lateef is an absolute delight.",
    name: "Harish Venkatash",
    school: "(Havard Business School, Ivey Business School)",
    profession: "Group President, CFO Alerzo",
    icon: "linkedin",
    iconTitle: "LinkedIn",
    image: "harish",
  },
  {
    text: "Lateef epitomizes profound expertise. As a product designer, he has accumulated extensive experience, yielding remarkable results. His problem-solving skills are unparalleled, consistently delivering pixel-perfect solutions. Collaborating with Lateef has been incredibly enriching, thanks to his meticulous approach and unwavering commitment to excellence on every project.",
    name: "Kane Kim",
    school: " (University of Oxford, Columbia Law School)",
    profession: "VP, Strategy and Business affaris ",
    icon: "linkedin",
    iconTitle: "LinkedIn",
    image: "kane",
  },
];
