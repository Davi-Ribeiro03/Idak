import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  focus?: boolean;
}

const Button = ({ children, focus = false }: ButtonProps) => {
  const buttonNotClicked = "bg-white text-black";
  const buttonClicked = "bg-primary-500 text-white";

  return (
    <button
      className={`py-3 px-8 rounded-3xl text-base border-none cursor-pointer md:py-1 md:px-5 ${
        focus ? buttonClicked : buttonNotClicked
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
