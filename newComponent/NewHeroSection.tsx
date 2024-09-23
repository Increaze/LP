import Link from "next/link";
import { Constants } from "../constants";

export default function NewHeroSection() {
  return (
    <section className="container">
      <section className="flex justify-between gap-6">
        <div className="flex flex-col text-black p-6 border border-lp-gray3 bg-lp-gray3 flex-1 rounded-2xl  w-[792px]">
          <div className="space-y-6">
            <h1 className="text-[40px] font-bold ">
              Hey, I’m Lateef a product designer with 7 years of Experience
            </h1>
            <p className="max-w-[630px]">
              I’m a digital product designer who thrives on challenges and is
              driven by the opportunity to create digital experiences that make
              everyday life more human and enjoyable.
            </p>
            <div className="flex gap-5 items-start text-xl">
              {skillSet.map((skill) => (
                <p
                  key={skill.text}
                  className="text-black px-3 py-2 mr-6 text-xs rounded-full border border-la-bdgray"
                >
                  {skill.text}
                </p>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-5 font-semibold text-black mt-auto">
            <Link
              href="/"
              className="text-black p-3 rounded-full border border-lp-gray4 bg-lp-gray4 font-medium"
            >
              <span>Connect with me</span>
            </Link>
            <div className="flex gap-3">
              <a href={Constants.linkedinLink}>
                <img
                  src="/icons/linkedin.svg"
                  className=""
                  alt="linkedin"
                />
              </a>
              <a
                href={Constants.linkedinLink}
                className="underline font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="max-w-[513px]">
          <img src="/images/profile.jpg" alt="Lateef" className="" />
        </div>
      </section>
      <div className="flex flex-col justify-center mt-10">
        <p className="text-sm font-medium text-center">
          Mentoring & Membership
        </p>
        <div className="flex gap-16 justify-center mt-4 ">
          <img src="/icons/adp.svg" alt="adp" />
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
