"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check, Info } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const plans = [
  {
    name: "Free",
    price: "Free Forever",
    description: "For those getting started",
    features: [
      "Unlimited websites",
      "10k Monthly Visits",
      "2 Active widget",
      "Collaboration",
      "Custom CSS & JS",
      "Free installation service",
      "Only bug fixes",
    ],
  },
  {
    name: "Pro",
    price: "$10",
    description: "Best for growing businesses",
    features: [
      "Unlimited websites",
      "50k Monthly Visits",
      "5 Active widget",
      "Collaboration",
      "Custom CSS & JS",
      "Free installation service",
      "Priority support",
    ],
  },
  {
    name: "Premium",
    price: "$25",
    description: "Best for high-traffic websites",
    features: [
      "Unlimited websites",
      "Unlimited Monthly Visits",
      "Unlimited widget",
      "Collaboration",
      "Custom CSS & JS",
      "Free installation service",
      "Priority support & live chat",
    ],
  },
];

export default function PricingPlans() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="container mx-auto px-7 pt-14 md:pt-[172px] md:max-w-[946px]">
      <h2 className="text-[32px] md:text-[42px] leading-[36px] font-semibold text-center mb-3 text-secondaryColor">
        Pick the Plan That's Right for You
      </h2>
      <p className="text-[20px] leading-[28px] font-normal text-center text-secondaryColor">
        Start using for free and decide which plan is right for you later
      </p>

      <div className="flex   justify-center items-center mb-8 text-secondaryColor mt-[30px] md:mt-[38px]">
        <span
          onClick={() => setIsYearly(false)}
          className={`cursor-pointer mr-[18px]  border-secondaryColor pb-1 ${
            !isYearly && "border-b"
          }`}
        >
          Monthly
        </span>

        <span
          onClick={() => setIsYearly(true)}
          className={`cursor-pointer  border-secondaryColor pb-1 ${
            isYearly && "border-b"
          }`}
        >
          Yearly (20% OFF)
        </span>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {plans.map((plan, index) => (
            <SwiperSlide key={index}>
              <PricingCard plan={plan} isYearly={isYearly} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mt-[43px]">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} isYearly={isYearly} />
        ))}
      </div>
    </div>
  );
}

function PricingCard({ plan, isYearly }: any) {
  const price = isYearly
    ? `$${parseFloat(plan.price.replace("$", "")) * 0.8 * 12}`
    : plan.price;

  return (
    <Card className="flex flex-col h-full drop-shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border border-[#ECF0F1]">
      <CardHeader className=" pb-0">
        <CardTitle className="font-semibold leading-[28px] text-[18px] text-[#4CAF50]">
          {plan.name}
        </CardTitle>
        <div className="font-bold leading-[36px] text-[30px] text-secondaryColor mt-[6px] mb-1">
          {price}
          {plan.name !== "Free" && (
            <span className="text-sm font-normal">/mo</span>
          )}
        </div>
        <p className="text-[14px] leading-4 text-secondaryColor">
          {plan.description}
        </p>
      </CardHeader>
      <CardContent className="flex-grow">
        <Button className="w-full bg-primaryDefault mt-5 mb-7 rounded-lg">
          Start for free
        </Button>
        <ul className="space-y-3  ">
          {plan.features.map((feature: any, index: number) => (
            <li
              key={index}
              className="flex items-center justify-between text-secondaryColor text-[14px]"
            >
              <span>{feature}</span>
              <Info className="w-4 h-4 text-secondaryColor mr-2" />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
