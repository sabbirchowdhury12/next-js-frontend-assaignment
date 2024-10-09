"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Search,
  Flag,
  Layout,
  CreditCard,
  Ruler,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function CategorySection() {
  const [activeWidget, setActiveWidget] = useState("pop");

  console.log(activeWidget);
  return (
    <section className="mt-8  px-8 md:px-32">
      <div className="container max-w-[1227px] mx-auto py-8 md:py-[52px] ">
        <div className="text-center max-w-[1211px]  mx-auto pb-6 md:pb-[75px]">
          <p className="text-xl  md:text-[26px] leading-8 tracking-[0.5px]">
            We make it simple to not only create stunning widgets but also to{" "}
            <span className="text-[#FF3B30] font-semibold">
              track their impact
            </span>
            . With our visual editor, you can{" "}
            <span className="text-[#FF3B30] font-semibold">
              easily customize
            </span>{" "}
            your widgets in real-time{" "}
            <span className="text-[#FF3B30] font-semibold">
              no coding required
            </span>
            . Choose from a variety of designs, modify them to suit your brand,
            and instantly see the changes.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-x-20">
          <div className="flex flex-wrap gap-2 mb-9 md:hidden">
            {[
              { icon: <Search className="w-5 h-5" />, label: "POP" },
              { icon: <Flag className="w-5 h-5" />, label: "Top Banner" },
            ]
              .slice(0, 2)
              .map((widget, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={` flex-1 flex justify-around w-full  text-[#0F172A] font-medium text-[20px] leading-6 tracking-[0.5px] ${
                    activeWidget === widget.label.toLocaleLowerCase()
                      ? " shadow-custom2 border-none"
                      : undefined
                  } `}
                  size={"lg"}
                  onClick={() => setActiveWidget(widget.label.toLowerCase())}
                >
                  <span className="text-left"> {widget.icon}</span>
                  <span className="ml-2 ">{widget.label}</span>
                </Button>
              ))}
          </div>
          <div className="w-full md:w-1/4 hidden md:block">
            {[
              { icon: <Search className="w-5 h-5" />, label: "POP" },
              { icon: <Flag className="w-5 h-5" />, label: "Top Banner" },
              { icon: <Layout className="w-5 h-5" />, label: "Hero Banner" },
              {
                icon: <CreditCard className="w-5 h-5" />,
                label: "Plan and pricing",
              },
              { icon: <Ruler className="w-5 h-5" />, label: "Size Chart" },
              { icon: <Clock className="w-5 h-5" />, label: "Timer" },
            ].map((widget, index) => (
              <Button
                key={index}
                variant="secondary"
                className={`group  bg-transparent flex-1 flex justify-start gap-4 w-full  text-[#0F172A] mb-4  font-medium text-[20px] leading-6 tracking-[0.5px] transition-all duration-300 ${
                  activeWidget === widget.label.toLocaleLowerCase()
                    ? " shadow-custom2 border-none bg-white"
                    : undefined
                } `}
                size={"lg"}
                onClick={() => setActiveWidget(widget.label.toLowerCase())}
              >
                <div className="flex justify-between w-full  items-center">
                  <div className="flex gap-4 items-center">
                    <span className=""> {widget.icon}</span>
                    <span className="text-left">{widget.label}</span>
                  </div>
                  <div>
                    <span className="group-hover:block hidden">
                      <ArrowRight className="w-5 h-5" />{" "}
                    </span>
                  </div>
                </div>
              </Button>
            ))}
          </div>

          <div className="w-full md:w-3/4">
            <div className="bg-yellow-400 rounded-t-lg p-4 text-center font-semibold">
              LANDING PAGE TEMPLATE
            </div>
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-center">
                  Our Pricing & Plans
                </CardTitle>
                <p className="text-center text-sm text-gray-500">
                  Choose the plan that suits your needs
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: "Starter", price: "$49.00" },
                    { title: "Professional", price: "$79.00" },
                    { title: "Premium", price: "$99.00" },
                  ].map((plan, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{plan.title}</CardTitle>
                        <p className="text-3xl font-bold">{plan.price}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Feature 1</li>
                          <li>Feature 2</li>
                          <li>Feature 3</li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          {index === 1 ? "Upgrade Plan" : "Choose Plan"}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <Button
key={index}
size={"lg"}
variant="ghost"
className="w-full justify-start text-[#0F172A] font-medium text-[20px] leading-6 tracking-[0.5px]"
>
{item.icon}
<span className="ml-2">{item.label}</span>
</Button> */
}
