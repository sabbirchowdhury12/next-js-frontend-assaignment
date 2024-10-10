"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Robert Conklin",
    role: "Home Decor Store Owner",
    quote:
      "Rapidler did what they promised - they optimized our site perfectly, and our loading time is now under 2 seconds. They're the best in the business, and we're grateful for their service.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Rosalia Limars",
    role: "Handmade Jewelry Store",
    quote:
      "Rapidler is the real deal. Our site's speed and performance improved beyond what we could have imagined. Their service is incredible, and I recommend it without reservation.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Tiffany Owens",
    role: "Sustainable Fashion Retailer",
    quote:
      "Thank you, Rapidler, for making our site faster than ever. We saw an improvement not only in our site's speed but also in our SEO rankings and organic traffic. Rapidler is simply the best!",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function TestimonialSection() {
  return (
    <div className="container mx-auto px-4  max-w-[1266px] md:mt-[116px] mt-[69px]">
      <h2 className="text-[30px]  leading-10 font-semibold text-center mb-[2px]">
        See what other say
      </h2>
      <p className="text-[18px] leading-6 text-[#434b51] mb-14 text-center">
        See what other say
      </p>

      {/* Mobile Slider */}
      <div className="md:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ name, role, quote, avatar }: any) {
  return (
    <Card className="h-full rounded-lg mx-[43px] md:mx-0 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
      <CardContent className="py-[55px] md:py-[60px] px-[50px]">
        <div className="flex h-[36px]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-[#47465E] text-[18px] leading-[26px] mb-[52px]">
          {quote}
        </p>
        <div className="flex items-center">
          <img
            src={avatar}
            alt={name}
            className="w-16 h-16 rounded-full mr-[10px]"
          />
          <div>
            <h3 className="font-bold text-secondaryColor text-[18px] leading-7">
              {name}
            </h3>
            <p className=" text-[16px] leading-[26px] text-[#47465E]">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
