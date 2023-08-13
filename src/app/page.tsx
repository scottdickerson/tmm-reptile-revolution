"use client";
import Link from "next/link";
import { useQuizReload } from "../hooks/useQuizReload";
import { CenterEllipsis } from "../components/center-ellipsis/CenterEllipsis";
import { Button } from "../components/button/Button";
import { usePathname } from "next/navigation";
import animatedOuterWrapper from "@/app/images/TMM_ReptileRevolutionFrame.gif";

import "./pullscreen.css";
import Image from "next/image";

export default function Home() {
  const path = usePathname();
  useQuizReload();
  return (
    <Link href="/quiz/question/0">
      {path === "/" && (
        <Image
          suppressHydrationWarning
          src={animatedOuterWrapper}
          alt="wrapper"
          className="absolute inset-0 outerWrapper -z-10 w-full h-fit"
        />
      )}
      <main className="flex h-full flex-col items-center justify-center p-24">
        <CenterEllipsis>
          <h1 className="titleText">Reptile Revolution</h1>
          <p className="titleDescription">
            Cretaceous reptiles came in all shapes and sizes. Which one would
            you be?
          </p>
          <Button>Play!</Button>
        </CenterEllipsis>
      </main>
    </Link>
  );
}
