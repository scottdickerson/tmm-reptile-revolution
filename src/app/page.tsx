"use client";
import Link from "next/link";
import { useQuizReload } from "../hooks/useQuizReload";
import { CenterEllipsis } from "../components/center-ellipsis/CenterEllipsis";
import { Button } from "../components/button/Button";
import "./pullscreen.css";

export default function Home() {
  useQuizReload();
  return (
    <Link href="/quiz/question/0">
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
