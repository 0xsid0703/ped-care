import React from "react";
import Image from "next/image";
type Props = {};

const Video = (props: Props) => {
  return (
    <div className="mx-[350px] grid grid-cols-2 py-10">
      <div className="flex flex-col gap-3">
        <div className="font-semibold text-description">Learn More About</div>
        <div className="text-4xl text-red-700">Pediatric Care</div>
        <div className="text-description">
          Located in Takoma Park, MD. Pediatric Care specializes in pediatric
          sick visits, wellness visits, immunizations, and newborn care.
          Board-certified physician. Quality care for kids of all ages. Call
          now.
        </div>
        <a
          href="/"
          className="border border-red-700 text-red-700 hover:text-white hover:bg-red-700 rounded-full py-2 text-center max-w-60"
        >
          Watch Video
        </a>
      </div>
      <div className="bg-video-image w-full h-[300px] bg-center bg-cover bg-no-repeat flex items-center justify-center relative">
        <Image
          src={"/play.png"}
          width={120}
          height={120}
          alt=""
          className="z-[2]"
        />
        <div className="absolute bg-black opacity-25 z-[1] w-full h-full"></div>
      </div>
    </div>
  );
};

export default Video;
