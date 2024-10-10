import React from "react";
import { Button } from "@/components/ui/button"; // Assuming you're using ShadCN's button component

const ReadySection = () => {
  return (
    <section className="flex w-full justify-center items-center pt-[35px] md:pt-[91px] px-[43px] md:px-[161px]   max-w-[1,169px]">
      <div className="text-center  bg-white drop-shadow-[0px_10px_22px_rgba(243,130,73,0.1)] rounded-lg p-5 md:px-20 md:py-10">
        <h2 className="text-[32px] leading-[35px] md:text-[56px] md:leading-[61.5px] font-extrabold text-secondaryColor mb-6">
          Ready for your next project?
        </h2>
        <p className="text-[16px] leading-[25px] md:text-[18px] md:leading-[28px] font-normal text-[#434B51BF] mb-5">
          Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque
          pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis
          ac turpis at amet. Purus malesuada placerat arcu at enim elit in
          accumsan.
        </p>
        <div className="mt-8">
          <Button
            size={"lg"}
            className="bg-primaryDefault text-white  rounded-lg w-full md:w-auto"
          >
            Talk to us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReadySection;
