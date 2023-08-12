"use client";
import { StartOverButton } from "@/components/start-over/StartOverButton";
import { useRouter } from "next/navigation";

export default function QuestionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { push } = useRouter();
  return (
    <>
      {children}
      <StartOverButton
        className="startOverStartOverButton"
        onClick={() => push("/")}
      >
        Start Over
      </StartOverButton>
    </>
  );
}
