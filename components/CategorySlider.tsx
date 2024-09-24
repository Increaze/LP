import React from "react";
import { MotionSlider } from "./MotionSlider";

export const CategorySlider = () => {
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
  "/images/ca-step-one.png",
  "/images/ca-step-two.png",
  "/images/ca-step-three.png",
  "/images/ca-step-four.png",
  "/images/ca-step-five.png",
  "/images/ca-step-six.png",
  "/images/ca-step-seven.png",
  "/images/ca-step-eight.png",
];
