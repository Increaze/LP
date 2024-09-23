import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  // Update time on the client side
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(dayjs().format("hh:mm:ss A"));
    };
    updateTime(); // Initial time update
    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <footer className="pb-20 bg-la-gray4">
      <section className="flex flex-col flex-1 justify-center">
        <h5 className="text-5xl text-la-gray3 text-center font-medium container">
          Want to reach out about a project, collaboration or just want to say a
          friendly hello👋🏾?
        </h5>
        <div className="flex gap-3 items-center justify-center mt-5">
          <span className="font-medium text-[80px]">Pixifinger1@gmail.com</span>
        </div>
      </section>
      <div>
        <img src="/images/FooterLogo.png" alt="" />
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
            href="https://drive.google.com/file/d/1V5nftyU-bQy7viv2GlpqI7guhf284DBH/view"
            target="_blank"
            rel="noreferrer noopener"
          >
            CV
          </a>
        </div>
        <a
          href="/
        "
          className="cursor-pointer"
        >
          Back to top☝🏾☝🏾☝🏾︎
        </a>
      </div>
    </footer>
  );
}


