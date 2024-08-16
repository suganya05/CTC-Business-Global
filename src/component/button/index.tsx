import React, { ButtonHTMLAttributes } from "react";
import "./button.scss";

interface button extends ButtonHTMLAttributes<HTMLButtonElement> {
  varient: "primary" | "secondary" | "notifi" | "premium" | "add";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<button> = ({
  varient,
  size,
  children,
  type = "button",
  onClick,
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${varient} ${size}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
