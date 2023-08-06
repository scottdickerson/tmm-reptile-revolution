"use client";
import { Button } from "@/components/button/Button";
import "@/components/button/button.css";
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
      <Button className="startOverButton" onClick={() => push("/")}>
        Start Over
      </Button>
    </>
  );
}
