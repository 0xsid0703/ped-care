import { Star } from "lucide-react";
import React from "react";

const Review = () => {
  return (
    <div className="w-full bg-review-image bg-center bg-cover bg-no-repeat h-[600px] flex items-center justify-center py-20">
      <div className="mx-[350px] bg-white w-full h-full rounded-tl-3xl rounded-br-3xl p-7 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              id="1302959988"
              className="w-[100px] -ml-4 -mt-4"
              data-icon-name="li-message"
            >
              {" "}
              <g id="1869507098">
                {" "}
                <path
                  d="M75.4,23.9H24.6c-2.7,0-4.9,2.2-4.9,4.9v31.3c0,2.7,2.2,4.9,4.9,4.9h34.8l11.2,11.2V65h4.9c2.7,0,4.9-2.2,4.9-4.9V28.8
		C80.3,26.1,78.1,23.9,75.4,23.9z M78.4,60.1c0,1.6-1.3,2.9-2.9,2.9h-6.8v8.4L60.2,63H24.6c-1.6,0-2.9-1.3-2.9-2.9V28.8
		c0-1.6,1.3-2.9,2.9-2.9h50.9c1.6,0,2.9,1.3,2.9,2.9V60.1z"
                  id="1832397418"
                ></path>
                <rect
                  x="35.3"
                  y="43.4"
                  width="29.3"
                  height="2"
                  id="1314791979"
                ></rect>
                <rect
                  x="35.3"
                  y="33.7"
                  width="29.3"
                  height="2"
                  id="1987116135"
                ></rect>
                <rect
                  x="35.3"
                  y="53.2"
                  width="19.6"
                  height="2"
                  id="1109692056"
                ></rect>
              </g>
            </svg>
            <div className="text-4xl text-main-color">
              Here&apos;s what our satisfied patients are saying...
            </div>
            <div className="mt-2 text-description">
              At Pediatric Care, we take pride in providing exceptional
              pediatric medical care to our patients. We would be grateful if
              you could share your thoughts about our clinic with others. Your
              feedback helps us improve and helps others make informed
              decisions. Please take a moment to leave a review of Pediatric
              Care and let others know what you think.
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-1 border-b py-4 border-gray-200">
              <div className="font-bold">Sabrina A</div>
              <div className="flex flex-row">
                <Star className="text-yellow-500" fill="currentColor" />
                <Star className="text-yellow-500" fill="currentColor" />
                <Star className="text-yellow-500" fill="currentColor" />
                <Star className="text-yellow-500" fill="currentColor" />
                <Star className="text-yellow-500" fill="currentColor" />
              </div>
              <div className="font-extralight text-[15px] text-description">
                Excelente 👌 pediatra atiende muy bien 👍 revisa a los bebés
              </div>
              <div className="text-[15px] text-description">9/24/2024</div>
            </div>
            <div className="flex flex-col gap-1 border-b py-4 border-gray-200">
              <div className="font-bold">José De L</div>
              <div className="flex flex-row">
                <Star className="text-yellow-500" fill="currentColor" />
                <Star className="text-yellow-500" fill="currentColor" />
                <Star className="text-yellow-500" fill="currentColor" />
                <Star className="text-yellow-500" fill="currentColor" />
                <Star className="text-yellow-500" fill="currentColor" />
              </div>
              <div className="font-extralight text-[15px] text-description">
                Simplemente es la mejor pediatra que haya encontrado..
              </div>
              <div className="text-[15px] text-description">5/18/2023</div>
            </div>
            <div className="border border-main-color rounded-full bg-white text-main-color hover:text-white hover:bg-main-color py-2 max-w-60 text-center">
              Read More Reviews
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
