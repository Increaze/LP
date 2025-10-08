import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(dayjs().format("hh:mm:ss A"));
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const scrollToTop = (): void => {
    const scrollTarget = document.querySelector("#__next > main");
    if (scrollTarget) {
      scrollTarget.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="py-[70px] bg-la-gray4">
      <section className="flex flex-col items-start md:items-center justify-center px-4 md:px-10 lg:px-32 text-left md:text-center">
        <h5 className="text-3xl md:text-4xl lg:text-5xl text-la-gray3 font-medium title mb-4 text-start">
          Want to reach out about a project, collaboration or just want <br />{" "}
          to say a friendly hello👋🏾?
        </h5>
        <div className="flex flex-col md:flex-row gap-2 md:gap-3 items-start md:items-center justify-center mt-10">
          <a
            href="mailto:Pixifinger1@gmail.com"
            className="font-medium text-2xl md:text-4xl lg:text-[80px] title hover:underline"
                target="_blank"
            rel="noreferrer noopener"
          >
            Get in Touch 
          </a>
        </div>
      </section>

      <div className="mt-10 md:mt-12 flex flex-1 justify-center">
        <img
          src="/images/FooterLogo.png"
          alt="Footer Logo"
          className="md:max-w-full lg:max-w-full"
        />
      </div>

      <div className="flex flex-col md:flex-row  w-full justify-between items-center mt-14 container px-4 md:px-10 lg:px-32 text-sm md:text-base lg:text-lg">
        <div className="flex gap-2 md:gap-3">
          <span>Lagos, NG</span> |<span>{currentTime}</span>
        </div>
        <div className="flex gap-4 md:gap-10 mt-4 md:mt-0">
          <a
            className="underline"
            href="https://www.linkedin.com/in/abdullateef-akinyemi"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
          <a
            className="underline"
            href="https://drive.google.com/file/d/12hmt5BxyBVE1PNwQadmTcLZAxJDmq_Pe/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            CV
          </a>
        </div>
        <button
          onClick={scrollToTop}
          className="mt-4 md:mt-0 cursor-pointer bg-transparent border-none text-left p-0"
        >
          Back to top☝🏾☝🏾☝🏾︎
        </button>
      </div>
    </footer>
  );
}
