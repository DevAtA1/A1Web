import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

type ButtonProps = {
  onClick: () => void;
  variant?: "sm" | "md" | "lg";
  children?: React.ReactNode;
};
const buttonVariants = {
  sm: "font-bold border-primary btn-outline btn text-md",
  md: "font-bold border-primary btn-outline btn text-xl",
  lg: "font-bold border-primary btn-outline btn text-2xl",
};
const Button = ({ onClick, variant, children }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${buttonVariants[variant ?? "sm"]}`}>
      <div className="flex items-center gap-1">
        <span>{children}</span>
        <AiOutlineArrowRight />
      </div>
    </button>
  );
};

export default Button;
