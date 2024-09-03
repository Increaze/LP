import { ReactNode } from "react";

export default function Solutions() {
  return (
    <section className="mt-20 ">
      <div>
        <h2 className="text-4xl font-medium mb-8 satoshi">Solutions</h2>
        <p className="text-lg text-[#5A5566] mb-8 satoshi-regular">
          Striking a balance between designs goals, business goals and potential
          users goals is very important. These were the factors that guided our
          solutions.
        </p>
      </div>
      <section className="grid items-start grid-cols-3 mbl:grid-cols-1 gap-10 mbl:gap-8">
        {solutions.map((solution, index) => (
          <section
            key={index}
            className="flex flex-col items-start h-full space-y-4 satoshi"
          >
            <h6 className="text-lg font-medium rounded-2xl text-[#EC6632]  py-4 w-[350px] px-4 text-start bg-[#FDF1EC] mbl:mb-1.5 ">
              {solution.title}
            </h6>
            <div key={index}>
              {solution.text.map((textItem, textIndex) => (
                <p
                  key={textIndex}
                  className="italic text-xs mb-2 max-w-[330px]"
                >
                  <span className="font-medium "> {textItem}</span>
                  <span className="">
                    {" "}
                    {solution.subText && solution.subText[textIndex]}
                  </span>
                </p>
              ))}
            </div>
          </section>
        ))}
      </section>
    </section>
  );
}

const solutions: {
  title: string;
  text: ReactNode[];
  subText?: ReactNode[];
}[] = [
  {
    title: "Delayed Shipments",
    text: ["Explore alternative modes of transport,"],
    subText: [
      " such as inland waterways or coastal shipping, to reduce reliance on congested roads.",
    ],
  },
  {
    title: "Hidden Fees",
    text: [
      "Implement a clear and standardised system for taxes and fees associated,",
    ],
    subText: [
      "increasing transparency and reducing unexpected costs for users",
    ],
  },
  {
    title: "Lack of Transparency",
    text: [
      "Real-time Tracking Updates",
      "Implement a system for proactive communication,",
    ],
    subText: [
      " by implementing a robust tracking systems that provide detailed and up-to-date information on shipment location, status, and estimated arrival time.",
      " notifying users of any delays, potential issues, or changes in costs as soon as they arise.",
    ],
  },
  {
    title: "Theft and Insecurity",
    text: [" Logistics companies can invest in GPS tracking systems,"],
    subText: [
      "security escorts for high-value cargo, and secure warehousing facilities to deter theft.",
    ],
  },
  {
    title: "Automation",
    text: [
      "Adopt user-friendly digital platforms for online tracking, booking, and quote requests, ",
    ],
    subText: [" simplifying the process for customers."],
  },
  {
    title: "Lack of Financing/Flexible payment models",
    text: [
      "Implement a payment model that caters to diverse client invoicing needs and billing cycles ",
      "Providing access to quick loans ",
    ],
    subText: [
      "using a subscription or retainer models. This will enhances transparency, fostering trust and clarity.",
      "based on user’s profile to help business.",
    ],
  },
  {
    title: "Inability to locate fulfilment centers",
    text: ["Create resources that has all fulfilment centres listed, "],
    subText: ["with their location and directions on how to navigate there."],
  },
  {
    title: "Bureaucracy and Delays",
    text: ["Implement digital customs clearance systems"],
    subText: [
      " to reduce bureaucracy and expedite the process, minimising delays and unnecessary expenses on the users part.",
    ],
  },
];
