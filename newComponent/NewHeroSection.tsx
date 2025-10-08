import Link from "next/link";
import Image from "next/image";

export default function NewHeroSection() {
  return (
    <section className="container">
      <section className="flex justify-between gap-6">
        <div className="flex flex-col text-black p-6 border border-la-gray4 bg-la-gray4 flex-1 rounded-2xl w-[792px]">
          <div className="space-y-6">
            <h1 className="text-[40px] font-semibold  title max-w-[446px]">
              I’m Lateef, a Technical + Product Designer
            </h1>
            <p className="max-w-[702px] text-[#595959]">
             With more 6 years of experience in crafting digital products across Fintech, Ecommerce, Web3, AI, SaaS, and Edtech,
              I have ead product teams dedicated to enhancing product value and user experience.
            </p>
            <div className="flex gap-5 items-start text-xl">
              {skillSet.map((skill) => (
                <p
                  key={skill.text}
                  className="text-black px-3 py-2 mr-6 text-xs rounded-full border border-la-bdgray bg-la-bdgray"
                >
                  {skill.text}
                </p>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-5 mt-auto  mbl:flex-col mbl:gap-2 mbl:mt-14">
            <a
              href="mailto:Pixifinger1@gmail.com"
              rel="noreferrer noopener"
              target="_blank"
              className="text-white px-4 py-2 rounded-full border border-black bg-black font-medium"
            >
              Contact me
            </a>
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
        </div>

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
