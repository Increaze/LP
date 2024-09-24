import React, { useState } from "react";
import { motion } from "framer-motion";

// Define the types for the component props
interface MotionSliderProps {
  slides: Array<React.ReactNode>;
  gap?: number;
  width?: number;
  height?: number;
  direction?: "normal" | "reversed";
  duration?: number;
}

export const MotionSlider: React.FC<MotionSliderProps> = ({
  slides,
  gap = 20,
  width = 90,
  height = 90,
  direction = "normal",
  duration = 8,
}) => {
  // Create a state for the slides with unique keys
  const [items] = useState(() =>
    [...slides, ...slides, ...slides, ...slides].map((slide) => ({
      key: Math.random().toString(36),
      slide,
    }))
  );

  const isReversed = direction === "reversed";

  return (
    <div>
      <motion.div
        className="flex"
        style={{
          width: "100%",
        }}
        initial={{ x: 0 }}
        animate={{
          x: isReversed
            ? [-(width + gap) * slides.length, 0]
            : [0, -(width + gap) * slides.length],
        }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item) => (
          <div
            key={item.key}
            style={{
              flexShrink: 0,
              flexGrow: 0,
              justifyContent: "flex-start",
              overflow: "hidden",
              width: `${width + gap}px`,
            }}
            className=""
          >
            <div
              style={{
                width: `${width}px`,
                height: `${height}px`,
                overflow: "hidden",
                marginRight: `${gap}px`,
              }}
              className="flex"
            >
              {item.slide}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
