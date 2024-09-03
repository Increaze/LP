import { NextPage } from "next";
import { AnimatedLink } from "../../components/AnimatedLink";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const Jeetar: NextPage = () => {
  return (
    <main className="container">
      <Navbar/>
      <section>
        <img
          src="/images/jeetar-project.png"
          className="block w-full"
          alt="jeetar artboard"
        />
      </section>
      <section className="mt-14">
        <section className="relative flex gap-2 mb-6 group">
          <h4 className="text-5xl font-bold">Jeetar</h4>
          <div className="ml-4">
            <AnimatedLink link={"/projects/jeetar"} text="Web" />
          </div>
        </section>
        <h6 className="text-[22px] font-semibold mb-6">Overview</h6>
        <p className="mb-6">
          A super app that provides on-demand delivery services for groceries,
          with very fast delivery time frame between 20 minutes or less. When
          you need groceries or snacks, Jeetar makes it simple and convenient to
          obtain what you need, when you need it.
        </p>
        <p>
          Jeetar&apos;s user-friendly design and streamlined ordering process
          make it simple to explore a large range of products, place your
          orders, and monitor your delivery in real-time.
        </p>
      </section>
      <section className="grid grid-cols-3 mt-10 mb-16">
        {[
          {
            title: "Roles",
            details: ["Head Product and Design", "Art Director", "Branding"],
          },
          {
            title: "Tools",
            details: [
              "Figma",
              "Figjam",
              "Adobe Illustrator",
              "Adobe Photoshop",
            ],
          },
          {
            title: "Project Duration",
            details: ["November 2021 - January 2021", "3 months"],
          },
        ].map(({ title, details }) => (
          <div key={title}>
            <h6 className="text-[29px] font-semibold mb-4">{title}</h6>
            <ul>
              {details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section>
        <Title text="Understanding the problem" />

        <article className="flex flex-col gap-8">
          <p>
            We can all agree that homes/colleges, and so on, are a never-ending
            cycle of desperately needing something but not having the means to
            obtain it. Whether it&apos;s too late to go shopping, you&apos;re a
            freshman without a car, or you&apos;re just too lazy to get out of
            bed, Jeetar will bring you whatever you need in 20 minutes or less.
          </p>
          <p>It would also be beneficial to mention briefly: </p>
          <p>
            <strong className="block mb-2">How did the problem arise?</strong>
            Shopping is quite not an easy to do in this part of the world
            considering the traffic you have to face, insecurities, fake
            products
          </p>
          <p>
            <strong className="block mb-2">
              What users are experiencing or challenged? (Pain Points)
            </strong>
            <ul className="list-[lower-alpha] list-inside flex flex-col gap-1.5">
              <li>Delay in delivery </li>
              <li> Expensive products</li>
              <li>Fake products </li>
              <li>Real time tracking</li>
            </ul>
          </p>
          <p>
            <strong className="block mb-2">
              Why is this problem significant?
            </strong>{" "}
            Giving the market size of B2C market size of ecommerce there is
            chance
          </p>
        </article>

        <img
          src="/images/jeetar-problem.png"
          className="block w-full mt-8"
          alt="the problem jeetar solves"
        />
      </section>
      <section className="mt-10">
        <Title text="Goals" />
        <section>
          <ul className="list-decimal list-inside flex flex-col gap-[27px]">
            {Goals.map((goal) => (
              <li key={goal.title}>
                <strong>{goal.title}</strong>: <span>{goal.text}</span>
              </li>
            ))}
          </ul>
        </section>
      </section>
      <section className="mt-10">
        <Title text="Ideating Solutions" />
        <p>
          To make sure that the elements that made it to the final digital
          wireframes would be well-detailed to address user pain points, we
          first created iterations of each screen of the app on paper.
        </p>
        <h6 className="my-6 text-lg font-bold">Sketching</h6>
        <img src="/images/jeetar-sketching.png" alt="" />
        <h6 className="my-6 text-lg font-bold">Low Fidelity</h6>
        <img src="/images/jeetar-low-fidelity.png" alt="" />
      </section>
      <section className="mt-10">
        <Title text="Final Designs" />
        <p>
          After all of the research, insights, and wireframes, it was time for
          the visual design: when building this, we kept our users in mind and
          applied cutting-edge design principles. We made sure to finalize our
          design in stages so that we could work progressively and critically as
          planned.
        </p>
        <img
          src="/images/jeetar-final-designs.png"
          alt=""
          className="block w-full mt-5"
        />
      </section>
      <section className="mt-10">
        <Title text="Customer Feedbacks" />
        <p>
          Check out this awesome feedback from one of our satisfied customers on
          Twitter. They love how our app has made their life easier and more
          convenient.
        </p>
        <img
          src="/images/jeetar-feedback.png"
          alt=""
          className="block w-full mt-5"
        />
      </section>
      <section className="mt-10">
        <Title text="Illustration" />
        <img
          src="/images/jeetar-illustrations.png"
          alt=""
          className="block w-full mt-8"
        />
      </section>
      <section className="mt-10">
        <Title text="Brand Identity" />
        <img
          src="/images/jeetar-brand-identity.png"
          alt=""
          className="block w-full mt-8"
        />
      </section>
      <section className="mt-10">
        <Title text="Images" />
        <img
          src="/images/jeetar-images.png"
          alt=""
          className="block w-full mt-8"
        />
      </section>
      <Footer/>
    </main>
  );
};

export default Jeetar;

const Title = ({ text }: { text: string }) => {
  return <h5 className="mb-5 text-4xl font-extrabold">{text}</h5>;
};

const Goals = [
  {
    title: "User - Friendly Interface and Convenience",
    text: `Many shoppers find it challenging to navigate through complicated grocery shopping apps or websites.A 20-minute delivery grocery shopping app should prioritize a user-friendly interface and convenience to ensure a smooth and hassle - free shopping experience for customers.`,
  },
  {
    title: "Efficient Delivery Time",
    text: `
    One of the common problems faced by grocery shoppers is the time-consuming process of shopping at a physical grocery store. A 20-minute delivery grocery shopping app should aim to solve this problem by providing an efficient delivery time. The goal would be to enable users to place an order and have their groceries delivered to their doorsteps within 20 minutes, thus saving them the time and effort of going to a physical store.
  `,
  },
  {
    title: "Wide Product Range and Freshness",
    text: `Another common problem faced by grocery shoppers is limited availability of products or concerns about the freshness of perishable items. Customers are interested in a wide range of products, including fresh produce, dairy, and meat, and ensuring their freshness when delivered to customers.`,
  },
];
