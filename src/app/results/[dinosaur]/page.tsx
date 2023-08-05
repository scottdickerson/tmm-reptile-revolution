"use client";
import { useContext } from "react";
import { QuizContext } from "../../providers/QuizProvider";

export default function Results({ params }: { params: { dinosaur: string } }) {
  const { dinosaur } = params;
  const { characteristics } = useContext(QuizContext);
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-lg">Matching dinosaur:</h1>
      {dinosaur}
      <h2 className="text-lg">Player selected characteristics:</h2>
      {JSON.stringify(characteristics, null, 2)}
    </div>
  );
}
