"use client";
import "./results.css";

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="backgroundBlur absolute inset-0 w-full h-full " />
      {children}
    </>
  );
}
