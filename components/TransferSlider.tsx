import React from "react";
import { MotionSlider } from "./MotionSlider";

export const TransferSlider = () => {
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
  "/images/transfer-step-one.png",
  "/images/transfer-step-two.png",
  "/images/transfer-step-three.png",
  "/images/transfer-step-four.png",
  "/images/transfer-step-five.png",
  "/images/transfer-step-six.png",
  "/images/transfer-step-seven.png",
  "/images/transfer-step-eight.png",
  "/images/transfer-step-nine.png",

  //   "/images/tomato.png",
  //   "/images/purple-bag.png",
  //   "/images/brown-bag.png",
  //   "/images/medicine-jar.png",
  //   "/images/blue-basket.png",
  //   "/images/transparent-bottle.png",
  //   "/images/yellow-bag.png",
  //   "/images/pharmacy.png",
  //   "/images/brown-basket.png",
  //   "/images/mik-box.png",
];
const images2 = [
  "/images/transfer-step-six.png",

  "/images/transfer-step-eight.png",
  "/images/transfer-step-seven.png",
  "/images/transfer-step-four.png",
  "/images/transfer-step-one.png",
  "/images/transfer-step-two.png",
  "/images/transfer-step-three.png",
  "/images/transfer-step-five.png",

  //   "/images/brown-bag.png",
  //   "/images/yellow-bag.png",
  //   "/images/pharmacy.png",
  //   "/images/mik-box.png",
  //   "/images/blue-basket.png",
  //   "/images/brown-basket.png",
  //   "/images/purple-bag.png",
  //   "/images/medicine-jar.png",
  //   "/images/tomato.png",
  //   "/images/brown-grocery.png",
  //   "/images/transparent-bottle.png",
];
