"use client";
import { StartOverButton } from "@/components/start-over/StartOverButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import staticOuterWrapper from "@/app/images/outerWrapper.svg";

export default function QuestionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { push } = useRouter();
  return (
    <>
      <Image
        suppressHydrationWarning
        src={staticOuterWrapper}
        alt="wrapper"
        className="absolute inset-0 outerWrapper -z-10 w-full h-fit"
      />
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
