import React from "react";
import Image from "next/image";

const Video = () => {
  return (
    <div className="mx-[350px] grid grid-cols-2 py-10">
      <div className="flex flex-col gap-3">
        <div className="font-semibold text-description">Learn More About</div>
        <div className="text-4xl text-main-color">Pediatric Care</div>
        <div className="text-description">
          Located in Takoma Park, MD. Pediatric Care specializes in pediatric
          sick visits, wellness visits, immunizations, and newborn care.
          Board-certified physician. Quality care for kids of all ages. Call
          now.
        </div>
        <a
          href="/"
          className="border border-main-color text-main-color hover:text-white hover:bg-main-color rounded-full py-2 text-center max-w-60"
        >
          Watch Video
        </a>
      </div>
      <div className="bg-video-image w-full h-[300px] bg-center bg-cover bg-no-repeat flex items-center justify-center relative">
        <a href="/" className="z-[2]">
          <Image src={"/play.png"} width={120} height={120} alt="" />
        </a>
        <div className="absolute bg-black opacity-25 z-[1] w-full h-full"></div>
      </div>
    </div>
  );
};

export default Video;
