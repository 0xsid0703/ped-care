import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[550px] bg-hero-image relative bg-center">
      <div className="absolute bottom-10 z-[5] text-white w-full text-center">
        <div className="text-5xl font-semibold">Pediatric Medical Services</div>
        <div className="text-lg">
          Over 20 Years Of ExperienceBoard-Certified PhysicianQuality Care for
          Kids of All Ages
        </div>
        <div className="text-3xl">(301) 434-8800</div>
        <div className="text-lg">
          Hours: <span className="text-main-color">Closed</span> • Opens 09:00
          am
        </div>
      </div>
      <div className="absolute bg-black opacity-25 h-full w-full z-0"></div>
    </div>
  );
};

export default Hero;
