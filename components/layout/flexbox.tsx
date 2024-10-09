import { cn } from "@/lib/utils";
import React from "react";

interface FlexBetweenProps {
  children: React.ReactNode;
  className?: string;
  gap?: string;
  onClick?: () => {};
}

const FlexBox: React.FC<FlexBetweenProps> = ({ children, className, gap }) => {
  return (
    <div
      className={cn(`flex items-center justify-center  gap-${gap}`, className)}
    >
      {children}
    </div>
  );
};

export default FlexBox;
