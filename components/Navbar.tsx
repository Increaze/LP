import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Constants } from "../constants";

export default function NavBar() {
  return (
    <nav className="flex items-center container py-8 mx-auto">
      <Link href="/">
        <span>Lateef Akinyemi</span>
      </Link>

      <div 
      className="flex justify-between gap-5 ml-auto font-semibold text-black">
        <Link href="/about-me">
          <span>About</span>
        </Link>
        <a href={Constants.resumeLink}>
          <span>Resume</span>
        </a>
      </div>
      <div className="flex justify-between gap-5 ml-auto font-semibold text-black">
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
      </div>
    </nav>
  );
}
