export default function Research() {
  return (
    <section className="my-16 space-y-8">
      <h2 className="text-[40px] text-[#090A0B] mb-4">Research</h2>
      <p className="text-lg text-[#625D6F]">
        In today's world, efficient and reliable logistics, freight forwarding,
        supply chain financing, and customs brokerage services play a pivotal
        role in facilitating the movement of goods across states, national and
        international borders. However, like any complex industry, there are
        several challenges and problems that existing solutions in this industry
        face.
      </p>
      <div className="space-y-4 text-lg">
        <h3 className="font-bold">Uncovering and comprehending the problem</h3>
        <p className="text-[#625D6F]">
          Prior to delving into this project, I recognised the need to establish
          a strong foundation in logistics and freight forwarding services. To
          achieve this, I actively researched the industry, focusing on gaining
          crucial insights into the courier service market and understanding the
          perspectives of the end users.
        </p>
        <p className="text-[#625D6F]">
          To gain a comprehensive understanding of the market and its current
          challenges, I began with thorough desk research. After all, solving a
          problem requires a deep dive into the relevant dynamics. This research
          laid the groundwork for achieving my goal.
        </p>
      </div>
      <div className="space-y-4 text-lg mb-8">
        <h3 className="font-bold">How did the problem arise?</h3>
        <p className="font-normal text-[#625D6F]">
          The challenges in logistics and freight have emerged from a
          combination of historical, economic, technological, and geopolitical
          factors. Some key factors that have contributed to the development of
          logistics and freight problems are:{" "}
        </p>
        <img src="/images/problemcause.png" alt="" />
      </div>
      <div className="space-y-4 text-lg mb-8">
        <h3 className="font-bold">Why is this problem significant?</h3>
        <p className="text-[#625D6F]">
          These problems are significant because they have broad implications on
          businesses, economies, and global trade.
        </p>
      </div>
      <div className="space-y-4 text-lg m">
        <h3 className="font-bold">Recruiting participants</h3>
        <p className="text-[#625D6F]">
          We recruited participants who met our specific screening criteria.
          This targeted approach ensured we gathered valuable insights from the
          right audience, laying the groundwork for a product that resonates
          deeply with our target users and delivers significant impact.{" "}
        </p>
        <h3 className="font-medium text-lg mb-4">These participants included</h3>
        {recruits.map((item, index) => (
          <p
            key={index}
            className={`text-lg text-[#625D6F] font-medium mb-2 flex items-${
              index === 2 ? "start" : "center"
            } gap-2`}
          >
            <img src="/icons/case-icon.svg" alt="" />

            <span className="">{item.text}</span>
          </p>
        ))}
        
      </div>

      <p className="sortMill text-[26px] text-[#3D3552] italic">
          During the research phase a few key points stood out such as users
          finding it difficult to navigate products, but one resonated so well
          with me and it was the lack of a robust tracking update system.
          Although there are ways to track shipments users still tend to be in
          the dark regarding a shipment movement.
        </p>
    </section>
  );
}

const recruits = [
  {
    text: "Small and Medium Enterprises (SMEs)",
  },
  {
    text: "Large Enterprises",
  },
  {
    text: "E-commerce Businesses",
  },
  {
    text: "Frequent Shippers",
  },
  {
    text: "Frequent Shippers",
  },
  { text: "Importers and Exporters" },
];
