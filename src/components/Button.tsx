import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-blue-500",
        "text-white",
        "border-transparent",
        "hover:bg-blue-600",

      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      sm: ["text-sm", "py-1.5", "px-3", "min-h-9"],
      md: ["text-base", "py-2", "px-4"],
      lg: ["text-lg", "py-3", "px-6"],
      xl: ["text-xl", "py-4", "px-8"],
    },
    btnType: {
      button: "",
      icon: ["px-0", "rounded-full"]
    }
  },
  compoundVariants: [
    { btnType: "icon", size: 'sm', class: ["w-10", "h-10"] },
    { btnType: "icon", size: 'md', class: ["w-12", "h-12"] },
    { btnType: "icon", size: 'lg', class: ["w-14", "h-14"] },
    { btnType: "icon", size: 'xl', class: ["w-16", "h-16"] },
  ],
  defaultVariants: {
    intent: "primary",
    size: "md",
    btnType: "button",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  btnType,
  size,
  ...props
}) => <button className={button({ intent, size, btnType, className })} {...props} />;