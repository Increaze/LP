import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Constants } from "../constants";

export default function NavBar() {
  return (
    <nav className="px-20 py-6 m-auto sticky top-0 bg-white z-50">
      <div className="flex items-center border p-2 border-la-gray px-6 py-4 rounded-full ">
        <div className="flex items-center gap-2">
          <img className="h-8 w-8" src="/icons/b-logo.svg" alt="" />{" "}
          <Link href="/">
            <span className="text-[20px] font-medium">LA</span>
          </Link>
        </div>

        <div className="flex justify-between gap-5 ml-auto font-semibold text-black">
          <Link href="/" >
            <span>Home</span>
          </Link>
          <a href={Constants.resumeLink} className="" rel="noreferrer noopener" target="_blank">
            <span>Resume</span>
          </a>
          <Link href="/projects/AboutUs">
            <span>About</span>
          </Link>{" "}
          <a href="">
            <span>Works</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
