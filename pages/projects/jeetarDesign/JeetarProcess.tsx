import Link from "next/link";

export default function JeetarProcess() {
  return (
    <section className="mt-10 space-y-8">
      <div className="flex flex-col justify-center px-48">
        <h2 className="text-[48px] font-semibold">The process</h2>
        <div className="space-y-3">
          <p className="text-lg text-[#5A5566]">
            This project followed an agile design and software development
            process, where we applied the two-pizza rule by keeping the team
            small to enable faster progress. The approach emphasized iterative
            development, cross-functional collaboration, and continuous
            improvement. Given the tight 3-month launch timeline, we focused on
            what was achievable, using rapid user feedback to prioritize the
            most critical needs at each phase of development.{" "}
          </p>
        </div>
      </div>
      <div className="container">
        <img src="/images/our-process.png" alt="" />
      </div>
      <div className="container">
        <img src="/images/jeetar-wireframe.png" alt="" />
      </div>
      <div className="bg-[#FAFAFA] rounded-3xl container">
        <img src="/images/jeetar-fidelity.png" alt="" />
      </div>

      <div className="flex flex-col justify-center px-48">
        <h1 className="text-[48px] font-semibold">Final Design</h1>
        <p className="text-[#625D6F] text-lg mb-4">
          Leveraging the research, insights, and initial sketches, we
          transitioned to the visual design phase. With a user-centric approach,
          we employed cutting-edge design concepts to create an interface that
          prioritises usability. Following an iterative design process, we
          finalised the design in stages, incorporating user feedback at each
          step. This ensured a gradual and critical refinement, ultimately
          delivering a visually appealing and user-friendly solution.
        </p>
      </div>
      <div className="grid grid-cols-1 space-y-12 container">
        {appDetails.map((app, index) => (
          <div key={index} className="flex flex-col space-y-8">
            <h3 className="text-3xl text-[#16063E] font-bold text-center mb-4">
              {app.title}
            </h3>
            <img className="" src={app.image} alt={app.alt} />
          </div>
        ))}
      </div>
      {/* <div className="flex flex-col justify-center px-48 pt-10 debug-css m-0"> */}
        <div className="mt-10 px-48">
          <Title text="Result" />
          <p className="text-[#625D6F] text-lg">
            Check out this awesome feedback from one of our satisfied customers
            on Twitter. They love how our app has made their life easier and
            more convenient.
          </p>
        </div>
      {/* </div> */}
      <div className="m-0 p-0">
        <img src="/images/jeetar-feedback.png" alt="" />
      </div>

      <section className="mt-10">
      <div className="mt-10 px-48">
          <Title text="Delivery Photos" />
          <p className="text-[#625D6F] text-lg">
          These are shots from different customers , how we were able to deliver what we promise in minutes
          </p>
        </div>
        <img
          src="/images/jeetar-images.png"
          alt=""
          className="block w-full mt-8 container"
        />
      </section>
      <div className="px-4 pt-12 pb-20">
        <h1 className="text-[48px] font-medium ">Next Project</h1>
        <div className="flex gap-20 items-center">
          <span className="text-[84px] p-0 m-0">Veedez</span>
          <div className="mt-5">
            <img className="w-full" src="/icons/arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

const appDetails = [
  {
    title: "Onboarding",
    image: "/images/jeetar-onboarding.png",
    alt: "Onboarding",
  },
  {
    title: "Checkout Process",
    image: "/images/jeetar-checkout.png",
    alt: "Checkout Process",
  },
  {
    title: "Wallet & Rewards",
    image: "/images/jeetar-wallet.png",
    alt: "Wallet & Rewards",
  },
  {
    title: "Website",
    image: "/images/jeetar-webapp.png",
    alt: "Website",
  },
];

const Title = ({ text }: { text: string }) => {
  return <h5 className="mb-5 text-4xl font-extrabold">{text}</h5>;
};
