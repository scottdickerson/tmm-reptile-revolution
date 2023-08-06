import { PropsWithChildren } from "react";
import "./button.css";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  width?: number;
}

export const Button = ({
  children,
  onClick,
  className,
  width,
}: PropsWithChildren<ButtonProps>) => (
  <button
    style={{ width }}
    className={`h-20 rounded-full button px-16 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);
