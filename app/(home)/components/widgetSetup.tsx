import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import cardImage from "../../../assets/card2.png";

export default function WidgetSetup() {
  return (
    <div className="mt-[66px]  max-w-[1567px] mx-auto md:pr-[116px] md:mt-16 relative">
      <div className="overflow-hidden  mx-11 md:mx-0">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-20 w-full  space-y-8">
          <div className="flex-1 hidden md:block"></div>
          <div className=" md:hidden w-full md:w-1/2 max-w-[835px] max-h-[493px]  md:absolute  -right-20 md:max-w-full md:max-h-full  rounded-[20px]">
            <Image
              src={cardImage}
              alt=""
              className="shadow-custom3 rounded-3xl h-full w-full"
            />
          </div>

          <div className="w-full flex-1 md:max-w-[450px] text-[#061621] ">
            <h2 className="font-bold text-[20px] leading-[20px] m-[5px] tracking-[3px]  md:mb-4">
              POWERFUL
            </h2>
            <h1 className="font-extrabold mt-4 text-[32px] leading-[35px] md:text-[56px] md:leading-[61.6px] mb-4 md:mb-8">
              Set It Up & Adjust Without Coding
            </h1>
            <p className="font-normal text-[18px] leading-[28.8px]">
              Easily customize the widget through our visual editor. With just a
              few clicks, tailor it to your needs and embed it directly onto
              your site, no development required.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-full md:w-1/2  max-w-[500px] max-h-[300px]  md:absolute top-1/2 -translate-y-1/2  -left-20   rounded-[20px]">
        <Image
          src={cardImage}
          alt=""
          className="shadow-custom3 rounded-3xl h-full w-full"
        />
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
