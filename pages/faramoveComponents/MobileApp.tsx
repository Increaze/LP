import iteration from "../../public/images/iteration.png";
import Image from "next/image";

export default function MobileApp() {
  return (
    <section className="py-10 space-y-4">
      <h2 className="text-[22px] font-medium">Mobile App</h2>
      <section className="space-y-12">
        <div className="flex justify-between">
          <div className="border rounded-[20px] p-6 border-[#F3F4F7]">
            <h3 className="text-lg text-[#16063E] font-bold">
              Authentication - Sign up & Sign in
            </h3>
            <p className="text-lg text-[#625D6F] max-w-[520px]">
              Effortlessly sign up by providing basic information in just 3
              steps. This process reduces time spent signing up, this encourages
              users sign up and retention.{" "}
            </p>
          </div>
          <img
            className="h-[680px] w-[645px]"
            src="/images/signup.png"
            alt={""}
          />
        </div>
        <div className="flex justify-between">
          <div className="border rounded-[20px] p-6 border-[#F3F4F7]">
            <h3 className="text-lg text-[#16063E] font-bold">Homepage </h3>
            <p className="text-lg text-[#625D6F] max-w-[520px]">
              The homepage shows the different services being offered,
              recommendations based on different prompts such as Top picks,
              Newly added, Product brands etc and banners to showcase promotions
              or important informations.
            </p>
          </div>
          <img
            className="h-[680px] w-[645px]"
            src="/images/homepage.png"
            alt={""}
          />
        </div>
        <div className="flex justify-between">
          <div className="border rounded-[20px] p-6 border-[#F3F4F7] space-y-5">
            <h3 className="text-lg text-[#16063E] font-bold">
              Bookings & Shipments Management{" "}
            </h3>
            <p className="text-lg text-[#625D6F] max-w-[520px]">
              The Bookings and Shipments management feature is a solution
              designed to streamline the process of managing bookings and
              shipments for shippers. This feature provides a centralised
              platform for users to manage all aspects of their booking and
              shipment lifecycle, from initial request, to payment, and to final
              delivery while ensuring efficiency and real-time tracking
              throughout the process.
            </p>
            <h4 className="font-bold text-lg">Key components are;</h4>
            <div>
              <h3 className="text-lg font-medium text-[#16063E]">
                Booking Creation
              </h3>
              <p className="text-lg text-[#625D6F] max-w-[520px]">
                Users can easily create new bookings directly within the app,
                providing essential details such as pickup and delivery
                locations, shipment contents, service requirements, and any
                special instructions. Flexible scheduling options that allow
                users to specify preferred pickup and delivery dates and times,
                to enable seamless coordination of operations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#16063]">
                Shipment Tracking
              </h3>
              <p className="text-lg text-[#625D6F] max-w-[520px]">
                Once a booking is created and payment is confirmed, users can
                track the status and progress of their shipments in real-time on
                the app. Users also get text messages, push notifications and
                WhatsApp messages indicating shipping status. The information
                about shipment milestones, includes specific date and time of
                pickup, transit, and delivery - to ensure they are continuously
                at ease and well informed with every transaction.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#16063]">
                Documentations
              </h3>
              <p className="text-lg text-[#625D6F] max-w-[520px]">
                The shipment management feature also facilitates the storage,
                and management of essential documents related to the shipments,
                including invoices, bills of lading, packing lists, and customs
                documentation. Users can securely upload, view, and download
                documents as needed, reducing reliance on manual paperwork and
                streamlining documentation processes.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <img
              className="h-[680px] w-[645px]"
              src="/images/booking.png"
              alt={""}
            />
            <img
              className="h-[680px] w-[645px]"
              src="/images/shipment.png"
              alt={""}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="border rounded-[20px] p-6 border-[#F3F4F7]">
            <h3 className="text-lg text-[#16063E] font-bold">Finance </h3>
            <p className="text-lg text-[#625D6F] max-w-[520px]">
              This feature offers access to loans based on your profile and
              platform activity, while also providing a digital wallet system
              alongside other payment methods. This integrated approach
              simplifies the checkout process, making it faster and more
              convenient for you.
            </p>
          </div>
          <img
            className="h-[680px] w-[645px]"
            src="/images/finance.png"
            alt={""}
          />
        </div>
        <div className="flex justify-between">
          <div className="border rounded-[20px] p-6 border-[#F3F4F7]">
            <h3 className="text-lg text-[#16063E] font-bold">Billings </h3>
            <p className="text-lg text-[#625D6F] max-w-[520px]">
              Say goodbye to rigid payment options! This feature offers a
              flexible payment model such as Ship Now Pay Later (SNPL); this
              offers flexibility to our blue chip and brown chip partners by
              allowing them manage their operations flow more effectively and
              avoid immediate financial burdens associated with the shipping
              expenses. Our system considers factors like transaction volume,
              business type, and shipment details to tailor a plan that works.{" "}
            </p>
          </div>
          <img
            className="h-[680px] w-[645px]"
            src="/images/billing.png"
            alt={""}
          />
        </div>
        <div className="flex justify-between">
          <div className="border rounded-[20px] p-6 border-[#F3F4F7]">
            <h3 className="text-lg text-[#16063E] font-bold">
              Custom Brokeage{" "}
            </h3>
            <p className="text-lg text-[#625D6F] max-w-[520px]">
              Customs brokerage service streamlines the process of importing and
              exporting goods across international countries by managing customs
              clearance requirements on behalf of shippers and consignees.
            </p>{" "}
          </div>
          <img
            className="h-[680px] w-[645px]"
            src="/images/clearance.png"
            alt={""}
          />
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg text-[#16063E] font-bold">Website </h3>
          <img className="" src="/images/website.png" alt={""} />
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-[22px] text-[#16063E] font-medium mb-2">
            Random Screens
          </h2>
          <h3 className="text-lg text-[#16063E] font-bold">User Mobile App </h3>
          <img className="" src="/images/userMobileApp.png" alt={""} />
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg text-[#16063E] font-bold">User Web App </h3>
          <img className="" src="/images/userWebApp.png" alt={""} />
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg text-[#16063E] font-bold">
            Rider Mobile App{" "}
          </h3>
          <img className="" src="/images/riderApp.png" alt={""} />
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-4xl text-[#16063E] font-medium">
            Some brand Assets
          </h3>
          <img className="" src="/images/brandAssets.png" alt={""} />
        </div>
      </section>
    </section>
  );
}
