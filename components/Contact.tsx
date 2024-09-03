import React from "react";
import { Footer } from "./Footer";

export default function Contact() {
  return (
    <section>
      <section className="container mb-36 mt-40 text-nl-black">
        <h2 className="text-5xl font-bold leading-[56px]">Contact</h2>
        <section className="grid grid-cols-2 row-span-4">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col flex-1 mt-14  ">
              <h2 className="text-[22px] font-bold ">{item.name}</h2>
              <span className="text-lg text-nl-blue mb-4">{item.desc}</span>
            </div>
          ))}
        </section>
      </section>
      <Footer />
    </section>
  );
}

const items = [
  {
    title: "Media Inquiries",
    name: "Media Inquiries",
    desc: "press@nextlyte.com",
  },
  {
    title: "Careers",
    name: "Careers",
    desc: "hr@nextlyte.com",
  },
  {
    title: "Business Development",
    name: "Business Development",
    desc: "bd@nextlyte.com",
  },
  {
    title: "Advertising",
    name: "Advertising",
    desc: "hr@nextlyte.com",
  },
];
