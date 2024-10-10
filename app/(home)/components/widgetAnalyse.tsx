import React from "react";
import { Card } from "@/components/ui/card";
import cardImage from "../../../assets/card2.png";
import Image from "next/image";

export default function WidgetTask() {
  return (
    <div className=" px-4 max-w-[1567px] mx-auto md:pl-[116px] mt-[66px] md:mt-16">
      <div className="overflow-hidden  mx-11 md:mx-0">
        <div className="flex flex-col md:flex-row items-center relative space-y-8">
          <div className="w-full md:max-w-[450px] text-[#061621]">
            <h2 className="font-bold  text-[20px] leading-[20px] m-[5px] tracking-[3px]  md:mb-4">
              POWERFUL
            </h2>
            <h1 className="font-extrabold mt-4 text-[32px] leading-[35px] md:text-[56px] md:leading-[61.6px] mb-4 md:mb-8">
              Analyze the Widget's Perfomance
            </h1>
            <p className="font-normal text-[18px] leading-[28.8px]">
              Track key metrics that matter. Monitor how the widget impacts your
              conversions, engagement, and other vital stats to ensure it
              delivers the results you need.
            </p>
          </div>
          <div className="w-full md:w-1/2 max-w-[835px] max-h-[493px]  md:absolute  -right-20 md:max-w-full md:max-h-full  rounded-[20px]">
            <Image
              src={cardImage}
              alt=""
              className="shadow-custom3 rounded-3xl h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
