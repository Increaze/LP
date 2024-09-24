import React from "react";
import { MotionSlider } from "./MotionSlider";

export const OptionSlider = () => {
  return (
    <div className="p-0 m-0 w-full overflow-hidden">
      <MotionSlider
        height={700}
        width={500}
        gap={0}
        duration={40}
        slides={images.map((image, index) => (
          <div key={image}>
            <img src={image} className="h-full w-full" />
          </div>
        ))}
      />
    </div>
  );
};
const images = [
  "/images/option-step-one.png",
  "/images/option-step-two.png",
  "/images/option-step-three.png",
  "/images/option-step-four.png",
];
