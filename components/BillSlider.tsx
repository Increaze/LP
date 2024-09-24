import React from "react";
import { MotionSlider } from "./MotionSlider";

export const BillSlider = () => {
  return (
    <div className="p-0 m-0 w-full overflow-hidden">
      <MotionSlider
        height={700}
        width={500}
        gap={0}
        duration={70}
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
  "/images/bill-step-one.png",
  "/images/bill-step-two.png",
  "/images/bill-step-three.png",
  "/images/bill-step-four.png",
  "/images/bill-step-five.png",
  "/images/bill-step-six.png",
  "/images/bill-step-seven.png",
  "/images/bill-step-eight.png",

 
];
