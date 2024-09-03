import Image from "next/image";
import { AnimatedLink } from "./AnimatedLink";
import Link from "next/link";

export default function RecentWorks() {
  return (
    <section id="works" className="custom-container mt-[121px]">
      <h4 className="section-title">Recent Works</h4>
      <div className="mt-8 recent-works">
        {recent_works.map((work, index) => (
          <article
            className="work-card group"
            key={work.name}
          >
            <h6 className="text-3xl font-semibold title">{work.name}</h6>
            <p className="mt-3 text-lg font-medium max-w-[433px]">
              {work.short}
            </p>
            <div className="absolute z-40 bottom-5 left-5">
              <Link href={work.link}>
                <span>{work.name} </span>
              </Link>{" "}
            </div>
            <img
              className={"workImage " + work.imageClass || ""}
              alt={work.name}
              src={`/images/${work.image}`}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
const recent_works: Array<{
  name: string;
  short: string;
  link: string;
  image: string;
  imageClass?: string;
}> = [
  {
    name: "Faramove",
    short: "Saas, Logistic",
    image: "faramove.png",
    link: "/projects/faramove",
  },
  {
    name: "Veedez",
    short: "Saas, Payment",
    image: "veedezpng.png",
    link: "https://veedez.com/",
  },
  {
    name: "Jeetar",
    short: "Super App",
    image: "jeetar.png",
    link: "/projects/jeetar",
  },

  {
    name: "Alerzopay",
    short: "Fintech",
    image: "alerzopay.png",
    link: "https://staging.alerzo.com/products",
  },
  {
    name: "Alerzopay Terminal",
    short: "Payment",
    image: "alerzopay-terminal.png",
    link: "https://alerzoshop.com/",
  },
  {
    name: "Alerzoshop",
    short: "Ecommerce",
    image: "alerzoshop.png",
    link: "https://alerzoshop.com/",
  },
  {
    name: "Roppi",
    short: "Super App",
    image: "roppi.png",
    link: "https://roppi.co",
    imageClass: "!-bottom-[9%] !-right-[25%] !w-[95%]",
  },
  {
    name: "Tools",
    short: "",
    image: "tools.png",
    link: "",
    // imageClass: "!-bottom-[9%] !-left-[5%] !w-[95%]",
  },
];
