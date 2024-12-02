import React from "react";

type LearnMoreCardProps = {
  image: string;
  title: string;
  description: string;
  link: string;
  index: number;
};

const LearnMoreCard = ({
  image,
  title,
  description,
  link,
  index,
}: LearnMoreCardProps) => {
  return (
    <div
      className="grid grid-cols-2 gap-10 animate-fadeIn"
      dir={index % 2 == 0 ? "ltr" : "rtl"}
    >
      {/* <Image src={image} alt="" width={600} height={400} /> */}
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundPosition: "center", // Centers the image within the div
        }}
        className="w-full h-[350px]"
        aria-label="Image"
      ></div>
      <div className="flex flex-col gap-3 justify-center">
        <div className="text-3xl text-main-color">{title}</div>
        <div className="text-md text-left">{description}</div>
        <a
          href={link}
          className="text-sm font-semibold border border-main-color text-main-color rounded-full hover:bg-main-color hover:text-white py-2 text-center max-w-60"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default LearnMoreCard;
