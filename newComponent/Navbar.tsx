import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Constants } from "../constants";

export default function NavBar() {
  return (
    <nav className="container py-8 m-auto ">
      <div className="flex items-center  border-la-lightblue border-gray-200 px-6 py-4 rounded-full ">
        <div className="flex items-center gap-2">
          <img className="h-4 w-4" src="/icons/b-logo.svg" alt="" />{" "}
          <Link href="/">
            <span className="text-[20px] font-medium">LA</span>
          </Link>
        </div>

        <div className="flex justify-between gap-5 ml-auto font-semibold text-black">
          <Link href="/">
            <span>Home</span>
          </Link>
          <a href={Constants.resumeLink} className="underline">
            <span>Resume</span>
          </a>
          <Link href="/">
            <span>About</span>
          </Link>
          <a href={Constants.resumeLink}>
            <span>Works</span>
          </a>
        </div>

        {/* <div className="flex justify-between gap-5 ml-auto font-semibold text-black">
        <a href={Constants.dribbleLink} className="ml-14">
          <img
            src="/icons/dribbble.svg"
            className="object-contain w-5"
            alt="dribble"
          />
        </a>
        <a href={Constants.linkedinLink}>
          <img
            src="/icons/linkedin.svg"
            className="object-contain w-5"
            alt="linkedin"
          />
        </a>
      </div> */}
      </div>
    </nav>
  );
}
