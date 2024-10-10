"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";

export default function NimbusHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] border border-b-white">
      <div className="  max-w-[1432px]  mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between py-6">
          <div className="flex md:gap-10 lg:gap-[52px] items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-1 text-[#141513]">
                Nimbus
              </span>
              <span className="text-2xl font-bold text-[#3A7326]">=</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-10">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-menuTextColor text-[16px] font-medium  hover:text-gray-900 ">
                  Widgets <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Widget 1</DropdownMenuItem>
                  <DropdownMenuItem>Widget 2</DropdownMenuItem>
                  <DropdownMenuItem>Widget 3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a
                href="#pricing"
                className="text-menuTextColor text-[16px] font-medium  hover:text-gray-900"
              >
                Pricing
              </a>
              <a
                href="#help-center"
                className="text-menuTextColor text-[16px] font-medium   hover:text-gray-900"
              >
                Help Center
              </a>
              <a
                href="#why-us"
                className="text-menuTextColor text-[16px] font-medium  hover:text-gray-900"
              >
                Why us
              </a>
            </nav>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              className="border-[#A6DC94] font-bold text-[14px] text-[#3A7326] "
              variant="outline"
            >
              Talk to us
            </Button>
            <Button className="bg-[#4caf50] font-bold text-[14px]">
              Start for free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-menuTextColor text-[16px] font-medium  flex items-center">
                  Widgets <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Widget 1</DropdownMenuItem>
                  <DropdownMenuItem>Widget 2</DropdownMenuItem>
                  <DropdownMenuItem>Widget 3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a
                href="#pricing"
                className="text-menuTextColor text-[16px]   font-medium hover:text-gray-900"
              >
                Pricing
              </a>
              <a
                href="#help-center"
                className="text-menuTextColor text-[16px] font-medium  hover:text-gray-900"
              >
                Help Center
              </a>
              <a
                href="#why-us"
                className="text-menuTextColor text-[16px] font-medium  hover:text-gray-900"
              >
                Why us
              </a>
              <Button
                className="border-[#A6DC94] font-bold text-[14px] text-[#3A7326]"
                variant="outline"
              >
                Talk to us
              </Button>
              <Button className="bg-[#4caf50] rounded-md font-bold text-[14px]">
                Start for free
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
