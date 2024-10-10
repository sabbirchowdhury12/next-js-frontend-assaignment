import React from "react";
import { Card } from "@/components/ui/card";
import cardImage from "../../../assets/card2.png";
import Image from "next/image";

export default function WidgetTask() {
  return (
    <div className=" px-4 max-w-[1567px] mx-auto md:pl-[116px] mt-6 md:mt-16">
      <div className="overflow-hidden  mx-11 md:mx-0">
        <div className="flex flex-col gap-5 md:flex-row items-center relative space-y-8">
          <div className="w-full md:max-w-[450px] text-[#061621]">
            <h2 className="font-bold  text-[20px] leading-[20px] m-[5px] tracking-[3px]  md:mb-4">
              POWERFUL
            </h2>
            <h1 className="font-extrabold mt-4 text-[32px] leading-[35px] md:text-[56px] md:leading-[61.6px] mb-4 md:mb-8">
              Select the Widget for Your Task
            </h1>
            <p className="font-normal text-[18px] leading-[28.8px]">
              Pick a widget that aligns with your website goals—whether it's
              increasing engagement, conversions, or generating leads. Choose
              from a variety of options optimized for CRO.
            </p>
          </div>
          <div className="w-full md:w-1/2 max-w-[835px] max-h-[493px]  md:absolute  -right-20 md:max-w-full md:max-h-full  rounded-[20px]">
            <Image
              src={cardImage}
              alt=""
              className="shadow-custom3 rounded-3xl h-full w-full"
            />
            {/* <div className="relative aspect-[4/3]  rounded-lg shadow-lg overflow-hidden">
              <div className="absolute top-2 left-2 flex space-x-1 border">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="absolute inset-4 flex flex-wrap gap-4 content-start">
                <WidgetShape className="w-1/4 aspect-square bg-gray-200 rounded-lg" />
                <WidgetShape className="w-1/4 aspect-square bg-yellow-200 rounded-full" />
                <WidgetShape className="w-1/3 aspect-video bg-blue-200 rounded-lg" />
                <WidgetShape className="w-1/3 aspect-square bg-green-200 rounded-lg" />
                <WidgetShape className="w-1/4 aspect-square bg-red-200 rounded-full" />
                <WidgetShape className="w-1/3 aspect-video bg-purple-200 rounded-lg" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function WidgetShape({ className }: { className: string }) {
  return (
    <div className={className}>
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-1/2 h-1/2 bg-white/50 rounded"></div>
      </div>
    </div>
  );
}
