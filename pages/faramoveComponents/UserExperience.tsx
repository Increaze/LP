export default function UserExperience() {
  return (
    <section className="mt-16">
      <div>
        <h2 className="text-4xl font-medium mb-8">
          What users are experiencing(challenges)?
        </h2>
        <p className="text-lg text-[#5A5566] mb-8">
          Some of the major challenges uncovered during the course of research
          are:
        </p>
      </div>
      <section className="grid items-start grid-cols-3 mbl:grid-cols-1 gap-14 mbl:gap-8">
        {userExperience.map((item) => (
          <section
            key={item.title}
            className="flex flex-col items-start h-full space-y-4"
          >
            <span className="border-0 bg-[#ECF3FD] px-4 py-1.5 text-center text-[#0166FF]">
              {item.number}
            </span>

            <h6 className="text-lg font-medium text-[#0166FF] mbl:mb-1.5 ">
              {item.title}
            </h6>
            <div className="text-sm text-[#625D6F] leading-[150%] mb-6 mbl:mb-3">
              {item.text}
            </div>
          </section>
        ))}
      </section>
    </section>
  );
}




const userExperience: { number: string; title: string; text: string }[] = [
  {
    number: "1",
    title: "Delayed Shipments",
    text: "Nigeria's road network is often plagued by potholes, congestion, and poor maintenance. This can lead to delays, damage to goods, and increased transportation costs.",
  },
  {
    number: "2",
    title: "Hidden Fees",
    text: "Navigating and paying various taxes and fees associated with logistics within Nigeria can be complex and add unexpected costs.",
  },
  {
    number: "3",
    title: "Lack of Transparency",
    text: "Users might not receive timely updates on the location and status of their shipment. Vague information like 'in transit' or outdated tracking details can leave them wondering about potential delays or issues.",
  },
  {
    number: "4",
    title: "Theft and Insecurity",
    text: "Unfortunately, theft and insecurity along transportation routes are concerns in some areas. This can result in lost or damaged cargo, impacting trust in logistics providers.",
  },
  {
    number: "5",
    title: "Automation",
    text: "Most logistics players have not fully embraced digital solutions for tracking, booking, or managing shipments. This can make the process less user-friendly and transparent for customers.",
  },
  {
    number: "6",
    title: "Lack of Financing/Flexible payment models",
    text: "There is limited or no access to financing and flexible payment models and users believe they should have access to these options based on their shipment value and credit worthiness.",
  },
  {
    number: "7",
    title: "Inability to locate fulfilment centers",
    text: "Users find it frustrating trying to locate fulfilment centres, this can be difficult when there are no proper resources documenting these details.",
  },
  {
    number: "8",
    title: "Bureaucracy and Delays",
    text: "Customs clearance processes can be slow and bureaucratic, causing delays at ports and borders. Unclear or complex regulations can further complicate matters.",
  },
];
