"use client";
import { useContext, useEffect } from "react";
import { QuizContext } from "../../../../providers/QuizProvider";
import { useRouter } from "next/navigation";
import { dinosaurs } from "@/data/dinosaurs";
import Image from "next/image";
import { DinosaurSummary } from "@/components/dinosaur-summary/DinosaurSummary";

export default function Results({ params }: { params: { dinosaur: string } }) {
  const { dinosaur: dinosaurParam } = params;
  const dinosaur = dinosaurs[dinosaurParam];

  const { characteristics } = useContext(QuizContext);
  const { push } = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      push("/");
    }, 80000);
    return () => clearTimeout(timer);
  }, [push]);

  return (
    <div className="flex flex-col gap-6 h-screen items-center justify-center">
      <Image src={dinosaur.image} alt={dinosaur.summary.title} />
      <DinosaurSummary dinosaur={dinosaur} />
      <h2 className="text-lg">Player selected characteristics:</h2>
      {JSON.stringify(characteristics, null, 2)}
    </div>
  );
}
