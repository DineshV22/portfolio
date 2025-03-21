import React from "react";
import Lottie from "lottie-react";

const Avatar3D = () => {
  const animationUrl = "https://assets2.lottiefiles.com/packages/lf20_j1adxtyb.json"; // Replace with any Lottie URL

  return (
    <div className="w-60 h-60 md:w-80 md:h-80">
      <Lottie animationData={animationUrl} loop={true} />
    </div>
  );
};

export default Avatar3D;
