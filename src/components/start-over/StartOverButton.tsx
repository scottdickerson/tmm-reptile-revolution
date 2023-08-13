"use client";
import { useRouter } from "next/navigation";
import "./start-over-button.css";
import { PropsWithChildren, useCallback, useEffect, useRef } from "react";
import { Button } from "../button/Button";

interface StartOverButtonProps {
  onClick: () => void;
  className?: string;
}

export const StartOverButton = ({
  children,
  onClick,
}: PropsWithChildren<StartOverButtonProps>) => {
  const resetTimer = useRef<NodeJS.Timeout>();
  const { push } = useRouter();

  const handleResetTimer = useCallback(() => {
    if (resetTimer.current) {
      clearTimeout(resetTimer.current);
    }
    resetTimer.current = setTimeout(() => {
      push("/");
    }, 80000);
  }, [push]);

  useEffect(() => {
    document.addEventListener("click", handleResetTimer);
    return () => {
      document.removeEventListener("click", handleResetTimer);
      clearTimeout(resetTimer.current);
    };
  }, [push, handleResetTimer]);

  useEffect(() => {
    handleResetTimer();
    return () => clearTimeout(resetTimer.current);
  }, [push, handleResetTimer]);

  return (
    <Button className="startOverButton" onClick={onClick}>
      {children}
    </Button>
  );
};
