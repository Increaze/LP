import userPersonaOne from "../../public/images/userPersonaOne.png";
import userPersonaTwo from "../../public/images/userPersonaTwo.png";
import swotAnalysis from "../../public/images/swotAnalysis.png";
import userFlow from "../../public/images/userFlow.png";

import Image from "next/image";

export default function Definition() {
  return (
    <section>
      <h1 className="text-[40px] mb-2">Definition</h1>
      <p className="text-[#625D6F] text-lg mb-2">
        The focus was on understanding the core challenges and laying the
        groundwork for a user-centric solution
      </p>
      <div className="space-y-6 ">
        <h3 className="text-lg font-bold">User persona</h3>
        <div className="space-y-6">
          <p className="text-lg font-medium">User persona 1</p>
          <Image className="" src={userPersonaOne} alt={""} />
        </div>
        <div className="space-y-6">
          <p className="text-lg font-medium">User persona 2</p>
          <Image className="" src={userPersonaTwo} alt={""} />
        </div>
      </div>

      <div className="mt-8 ">
        <h3 className="text-lg font-bold mb-2">
          Competitors - comparing existing competitors
        </h3>
        <p className="text-lg text-[#625D6F]">
          In collaboration with the Project Manager, competitive analysis of
          similar platforms was conducted. This research confirmed Faramove's
          strong potential to offer a unique value proposition in the market.
        </p>

        <div className="flex justify-between mt-8">
          <img className="w-[282px] h-[124px]" src="/images/gig.png" alt="" />
          <img
            className="w-[282px] h-[124px]"
            src="/images/flexport.png"
            alt=""
          />
          <img
            className="w-[282px] h-[124px]"
            src="/images/gokada.png"
            alt=""
          />
          <img
            className="w-[282px] h-[124px]"
            src="/images/speedaf.png"
            alt=""
          />
        </div>
        <p className="text-center mt-6 italic text-[#625D6F]">
          Popular competitors
        </p>

        <div className="space-y-4 mb-10">
          <div>
            <h3 className="text-lg font-medium">GIG</h3>
            <p className="text-lg text-[#625D6F]">
              Is a leading courier and logistics services company in Nigeria,
              they offer convenience and express delivery services but these
              service are not very affordable.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">FLEXPORT </h3>
            <p className="text-lg text-[#625D6F]">
              Specialises in supply chain management and logistics. They handle
              everything from ordering and delivery goods to trade financing,
              insurance and customs brokerage
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Gokada</h3>
            <p className="text-lg text-[#625D6F]">
              Is a Nigerian tech startup based in Lagos, they started as a ride
              hailing service for passengers and motorcycles but had to adapt
              due to a government ban now they offer delivery service that is
              limited to Lagos state.
            </p>
          </div>
          <div className="pb-6">
            <h3 className="text-lg font-medium">Speedaf</h3>
            <p className="text-lg text-[#625D6F]">
              Is a logistics company focused on cross-border, one-stop shipping
              solutions, particularly between China and Africa but not very
              appealing interface and experience
            </p>
          </div>
          <Image className="" src={swotAnalysis} alt={""} />
        </div>
        <div className="my-8">
          <h3 className="text-lg font-medium">User Flow</h3>
          <p className="text-lg text-[#625D6F]">
            To ensure a smooth user experience and identify potential
            roadblocks, user flow with alternative branches were created for
            every feature to visualises the steps users will take to achieve
            their goals. This helps us anticipate and address any edge cases
            that might arise during implementation.
          </p>
        </div>
        <Image className="pb-8" src={userFlow} alt={""} />
      </div>
    </section>
  );
}
