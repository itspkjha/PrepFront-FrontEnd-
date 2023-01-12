import React from "react";
import Lottie from "lottie-react";
import heroGIF from "../assets/heroGIF.json";

function RightHeroSection() {
  
  return (
    <div className="w-[55%] flex justify-end">
      <Lottie animationData={heroGIF} />
    </div>
  );
}

export default RightHeroSection;
