export const Experience = () => {
  return (
    <section id="experience" className="my-12 pb-20 container">
      <h2 className="text-[32px] font-semibold leading-[56px] mb-4">
        Experiences
      </h2>
      <section className="grid items-start justify-evenly grid-cols-3 mbl:grid-cols-1 gap-16 mbl:gap-8">
        {experiences.map((exp, expIndex) => (
          <article key={exp.company + expIndex} className="mb-6">
            <h4 className="text-[32px] font-extrabold ">{exp.company}</h4>
            <p className="text-[32px] font-semibold text-la-black2">
              {exp.role}
            </p>
            <p className="text-xl font-semibold text-la-gray2">
              {exp.start} - {exp.end}
            </p>
            <span className="text-xl font-semibold text-la-gray2">
              {exp.contractType}
            </span>
          </article>
        ))}
      </section>
    </section>
  );
};

const experiences: Array<{
  company: string;
  role: string;
  start: string;
  end: string;
  contractType?: string;
}> = [
  {
    company: "Alerzo",
    role: "Senior Product Designer",
    start: "May 2021",
    end: "Till Date",
    contractType: "Full-time",
  },
  {
    company: `Alerzo - "Jeetar"`,
    role: "Lead Product Designer",
    start: "Aug  2021",
    end: "Feb 2023",
    contractType: "Full-time",
  },
  {
    company: "Faramove",
    role: "Product Designer",
    start: "January 2023",
    end: "August 2023",
    contractType: "Contract",
  },
  {
    company: "Rendize",
    role: "UI/UX Designer",
    start: "January 2020",
    end: "June 2021",
  },
  {
    company: "Brindocorp",
    role: "Creative Designer",
    start: "December 2017",
    end: "November 2021",
  },
];
