import Image from "next/image";
import React from "react";

export default function Milestone() {
  return (
    <section className="mt-24 text-nl-black">
      <h2 className="text-5xl font-bold text-center">MileStones</h2>
      <div className="rounded-[22px] py-4 px-4 flex justify-center items-start max-w-[637px] gap-5 mx-auto mt-8 shadow-mile">
        <div className="bg-nl-blue rounded-3xl w-[286px] h-[202px] flex flex-row justify-center flex-shrink-0 items-center gap-2">
          <Image
            className="ml-4"
            src="/images/faramove-logo.svg"
            alt={"fara-logo"}
            width={30}
            height={31}
          />
          <Image
            className=""
            src="/images/faramove.svg"
            alt={"fara-logo"}
            width={166}
            height={27}
          />
        </div>
        <div className="flex flex-col ">
          <h3 className="text-2xl font-semibold">Feb 2023</h3>
          <p className="mt-4 text-base font-normal">
            We offer On-demand delivery, haulage logistics and freight
            forwarding service to individuals, distributors, small and large
            businesses
          </p>
          <Image
            className="flex justify-center self-end mt-6"
            src="/images/light-arrow-icon.svg"
            alt="fara-logo"
            width={30}
            height={31}
          />
        </div>
      </div>
      <section className="flex items-center justify-between max-w-[859px] mx-auto mt-12">
        {products.map((product) => (
          <div
            key={product.name}
            className="flex items-center justify-center py-5 relative flex-1"
          >
            <span className="absolute block top-1/2 left-0 right-0 w-full h-0.5 bg-nl-deep z-[-1] -translate-y-1/2"></span>
            <Image
              className="hover:scale-150 transition-transform"
              src={`/icons/${product.icon}.svg`}
              alt="fara-logo"
              width={30}
              height={31}
            />
          </div>
        ))}
      </section>
    </section>
  );
}

const products = [
  {
    name: "faramove",
    icon: "fara-icon",
  },
  {
    name: "roppi",
    icon: "roppi",
  },
  {
    name: "zepta",
    icon: "zepta-icon",
  },
  {
    name: "klooft",
    icon: "klooft",
  },
  {
    name: "go-mecho",
    icon: "go-mecho",
  },
  {
    name: "eyes",
    icon: "eye",
  },
  {
    name: "bell",
    icon: "bell",
  },
  {
    name: "people",
    icon: "people",
  },
];
