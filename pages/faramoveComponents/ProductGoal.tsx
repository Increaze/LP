export default function ProductGoal() {
  return (
    <section className="mt-16">
      <h2 className="text-4xl font-semibold mb-6">Business & Product Goals</h2>
      <p className="text-lg text-[#5A5566] mb-2">
        It is important to note that both business & product goals are not rigid
        and can change as the market changes, which was the case during the
        cause of building this product.
      </p>

      <div className="mt-8">
        <section className="grid items-start grid-cols-2 mbl:grid-cols-1 gap-14 mbl:gap-8">
          {businessProduct.map((work, index) => (
            <section
              key={work.name}
              className="flex flex-col items-start h-full bg-[#F0F2F5] p-6"
            >
              <h6 className="text-[#16063E] text-lg mb-3 font-bold">{work.name}</h6>
              <div className="flex  flex-row gap-2 items-center">
                {/* {work.icon?.map((icon) => (
                    <img src={`/icons/${icon}.svg`} alt="" />
                  ))} */}

                <p className="space-y-2 max-w-[433px] flex flex-col text-[#625D6F]">
                  {/* <span className="border border-red-500 h-2 w-2"/> */}

                  {work.body?.map((body) => (
                    <span>{body}</span>
                  ))}
                </p>
              </div>
            </section>
          ))}
        </section>
      </div>
    </section>
  );
}

const businessProduct: Array<{
  name: string;
  body?: React.ReactNode[];
  icon?: React.ReactNode[];
}> = [
  {
    name: "Business goals",
    body: [
      "Profitability and Growth",
      "Enhanced Customer Satisfaction",
      "Operational Efficiency",
    ],
    icon: ["/icons/preview.svg", "/icons/preview.svg", "/icons/preview.svg"],
  },
  {
    name: "Product goals",
    body: [
      "Seamless User Experience",
      "Transparency and Visibility",
      "Competitive Service Portfolio",
      "Shipment Credit financing",
      "Nationwide Reach and Expansion",
      "Technological Innovation",
      "API solution",
    ],
    icon: ["/icons/preview.svg", "/icons/preview.svg", "/icons/preview.svg"],
  },
];
