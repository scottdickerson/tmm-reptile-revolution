import { PropsWithChildren } from "react";
import "./center-ellipsis.css";

export const CenterEllipsis = ({
  children,
  padding,
  gap,
  height,
}: PropsWithChildren<{ padding?: string; gap?: number; height?: number }>) => {
  return (
    <div
      className="centerEllipsis flex flex-col h-full gap-8 items-center justify-center px-44"
      style={{ padding, gap, height }}
    >
      {children}
    </div>
  );
};
