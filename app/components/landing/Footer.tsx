import { Facebook } from "lucide-react";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full">
      <div className="py-10 px-[350px] grid grid-cols-3 gap-20 text-white bg-red-700">
        <div className="flex flex-col">
          <div className="font-semibold text-lg">VISIT US</div>
          <div className="max-w-8 bg-[#ffffff] h-[4px] opacity-30 mb-3"></div>
          <div className="text-base">7505 New Hampshire Avenue</div>
          <div className="text-base">Ste 302</div>
          <div className="text-base">Takoma Park , MD 20912</div>
          <a
            href="/"
            className="mt-3 border border-white rounded-md bg-transparent text-white hover:bg-white hover:text-red-700 py-2 max-w-60 text-center"
          >
            Get Directions
          </a>
        </div>
        <div className="flex flex-col">
          <div className="font-semibold text-lg">Contact Us</div>
          <div className="max-w-8 bg-[#ffffff] h-[4px] opacity-30 mb-3"></div>
          <a href="/" className="text-base font-semibold">
            (301) 434-8800
          </a>
          <div className="text-base">
            <span className="font-semibold">Poison Control:</span>{" "}
            1-800-222-1222
          </div>
          <a
            href="/"
            className="mt-3 border border-white rounded-md bg-transparent text-white hover:bg-white hover:text-red-700 py-2 max-w-60 text-center"
          >
            Send a Message
          </a>
          <a
            href="/"
            className="mt-3 border-white w-fit rounded-full border-[3px] p-1"
          >
            <Facebook />
          </a>
        </div>
        <div className="flex flex-col">
          <div className="font-semibold text-lg">Business Hours</div>
          <div className="max-w-8 bg-[#ffffff] h-[4px] opacity-30 mb-3"></div>
          <div className="text-base flex flex-col gap-3">
            <div className="flex flex-row justify-between">
              <span>Mon, Wed, Thu</span>
              <span>9:00 am - 5:00 pm</span>
            </div>
            <div className="flex flex-row justify-between">
              <span>Tue, Fri</span>
              <span>9:00 am - 4:00 pm</span>
            </div>
            <div className="flex flex-row justify-between">
              <span>Sat - Sun</span>
              <span>Closed</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center justify-center py-5 gap-2">
        <div className="flex flex-row divide-x divide-[#464646] ">
          <a href="/" className="text-xs hover:underline text-description px-2">
            Privacy Policy
          </a>
          <a href="/" className="text-xs hover:underline text-description px-2">
            Do Not Share My Information
          </a>
          <a href="/" className="text-xs hover:underline text-description px-2">
            Conditions of Use
          </a>
          <a href="/" className="text-xs hover:underline text-description px-2">
            Notice and Take Down Policy
          </a>
          <a href="/" className="text-xs hover:underline text-description px-2">
            Website Accessibility Policy
          </a>
        </div>
        <div className="text-xs text-description">
          © {new Date().getFullYear()} The content on this website is owned by
          us and our licensors. Do not copy any content (including images)
          without our consent.
        </div>
      </div>
    </div>
  );
};

export default Footer;
