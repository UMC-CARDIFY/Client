import spinnerAnimation from "@animations/spinner.json";
import Lottie from "lottie-react";
import React from "react";

interface SpinnerProps {
  size?: number;
  loop?: boolean;
  autoplay?: boolean;
  zIndex?: number;
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 98, loop = true, autoplay = true, zIndex = 9999 }) => (
  <div
    style={{
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex,
    }}
  >
    <Lottie animationData={spinnerAnimation} loop={loop} autoplay={autoplay} style={{ width: size, height: size }} />
  </div>
);
