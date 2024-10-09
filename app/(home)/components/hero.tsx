import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import galleryImage from "../../../assets/Screenshot_10.png";

export default function HeroSection() {
  return (
    <section>
      <div className="pl-9 pr-5 md:px-[100px] ">
        <div className="container max-w-[1306px] mx-auto ">
          <div className="flex flex-col gap lg:flex-row items-center justify-between gap-20 mt-10 mb-5 md:py-[75px]">
            <div className="max-w-[745px]">
              <div className="flex items-center gap-1 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="h-3 w-3 md:h-6 md:w-6 ml-[2.5px] flex justify-center items-center"
                    >
                      <Star className="h-2 w-2 md:h-[18px] md:w-[18px] text-yellow-400 fill-current" />
                    </div>
                  ))}
                </div>
                <div className="ml-2 text-[9px] md:text-[12px] text-[#808080] leading-4">
                  Based on 10,000+ reviews
                </div>
              </div>

              <h1 className=" md:text-[65px] text-[34px] font-bold leading-[44.2px] md:leading-[84.5px] text-left">
                Upgrade your website
                <span className="block text-[#4CAF50]">without coding</span>
              </h1>
              <p className=" text-[16px] md:text-[24px] font-normal leading-[25.6px] md:leading-[38.4px] text-left mt-4 text-[#3C403A]">
                Easily create, customize, and track high-converting widgets with
                our visual editor. Start optimizing today and watch your
                conversions soar!
              </p>
              {/* <div className="flex gap-3 mb-5 mt-10 sm:hidden ">
              <Button className="bg-[#4caf50] font-bold text-[16px]">
                Start for free
              </Button>
              <Button
                className="border-[#C1C5BF] font-bold text-[14px] backdrop-blur-lg text-[#282B27] "
                variant="outline"
              >
                Book a demo call
              </Button>
            </div> */}
              <div className="flex gap-3 mb-5 mt-10  ">
                <Button
                  size={"lg"}
                  className="bg-[#4caf50] font-bold text-[16px]"
                >
                  Start for free
                </Button>
                <Button
                  size={"lg"}
                  className="border-[#C1C5BF] font-bold text-[14px] backdrop-blur-lg text-[#282B27] "
                  variant="outline"
                >
                  Book a demo call
                </Button>
              </div>
              <div className="flex md:gap-6 flex-wrap gap-4 text-xs md:text-sm text-[#8193B9] font-[400px]">
                <span className="flex items-center leading-9">
                  <svg
                    className="w-4 h-4 mr-2 text-[#8193B9]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  No credit card required
                </span>
                <span className="flex items-center leading-9">
                  <svg
                    className="w-4 h-4 mr-2 text-[#8193B9]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Try free upto 10000Vistors
                </span>
              </div>
            </div>
            <div className="w-[400px] hidden md:block">
              <Image src={galleryImage} alt="" className="w-full h-full" />
              {/* <div className="grid grid-cols-3 gap-4">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className={`rounded-lg overflow-hidden ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={`/placeholder.svg?height=${
                    i === 0 ? "300" : "150"
                  }&width=${i === 0 ? "300" : "150"}`}
                  alt={`Product screenshot ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="pl-9 pr-5 md:px-[100px] bg-[#ECF0F180] md:bg-transparent">
        <div className="container max-w-[1306px] mx-auto  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-[22px]  md:py-0 ">
            {[
              { value: "99.9%", label: "websites support" },
              { value: "1,000+", label: "hours of development invested" },
              { value: "5 min", label: "to start using the widget" },
              { value: "4.8/5", label: "customer satisfaction rate" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-[28px] md:text-4xl font-bold leading-8 md:leading-[48px] text-[#4CAF50] text-left">
                  {stat.value}
                </div>
                <div className="font-normal text-[14px] md:text-[18px] leading-4 md:leading-7 text-[#434B51BF]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
