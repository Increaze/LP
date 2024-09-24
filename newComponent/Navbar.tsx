import Link from "next/link";
import React from "react";
import { Constants } from "../constants";

export default function NavBar() {
  return (
    <nav className="px-20 py-6 m-auto sticky top-0 bg-white z-50">
      <div className="flex items-center border p-2 border-la-gray px-6 py-4 rounded-full ">
        <Link href="/">
          <div className="flex items-center gap-2">
            <img className="h-8 w-8" src="/icons/b-logo.svg" alt="" />{" "}
            <span className="text-[20px] font-medium">LA</span>
          </div>
        </Link>

        <div className="flex justify-between gap-5 ml-auto font-semibold text-black">
          <Link href="/">
            <span>Home</span>
          </Link>
          <a
            href={Constants.resumeLink}
            className=""
            rel="noreferrer noopener"
            target="_blank"
          >
            <span>Resume</span>
          </a>
          <Link href="/projects/about-me">
            <span>About</span>
          </Link>{" "}
          <a href="/">
            <span>Works</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
