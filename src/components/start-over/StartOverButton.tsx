"use client";
import { useRouter } from "next/navigation";
import "./start-over-button.css";
import { PropsWithChildren, useEffect } from "react";
import { Button } from "../button/Button";

interface StartOverButtonProps {
  onClick: () => void;
  className?: string;
}

export const StartOverButton = ({
  children,
  onClick,
}: PropsWithChildren<StartOverButtonProps>) => {
  const { push } = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      //   push("/");
    }, 80000);
    return () => clearTimeout(timer);
  }, [push]);
  return (
    <Button className="startOverButton" onClick={onClick}>
      {children}
    </Button>
  );
};
