import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function Footer(): JSX.Element {
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
    const scrollTarget = document.getElementById("main");
    if (scrollTarget) {
      scrollTarget.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  console.log("clicked", scrollToTop);

  return (
    <footer className="py-20 bg-la-gray4">
      <section className="flex flex-col flex-1 justify-center">
        <h5 className="text-5xl text-la-gray3 text-start font-medium container title">
          Want to reach out about a project, collaboration or just want to say a
          friendly hello👋🏾?
        </h5>
        <div className="flex gap-3 items-center justify-center mt-5">
          <span className="font-medium text-[80px] title">
            Pixifinger1@gmail.com
          </span>
        </div>
      </section>
      <div>
        <img src="/images/FooterLogo.png" alt="Footer Logo" />
      </div>
      <div className="flex justify-between flex-1 mt-14 container">
        <div className="flex gap-1">
          <span>Lagos, NG</span> | <span>{currentTime}</span>
        </div>
        <div className="flex gap-10">
          <a
            className="underline"
            href="https://www.linkedin.com/in/lateef-akinyemi-432738127/"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
          <a
            className="underline"
            href="https://drive.google.com/file/d/1nE-t_HTGFtPLxGkBtvdw6l5p5P892UTG/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            CV
          </a>
        </div>
        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="cursor-pointer underline bg-transparent border-none text-left p-0"
        >
          Back to top☝🏾☝🏾☝🏾︎
        </button>
      </div>
    </footer>
  );
}
