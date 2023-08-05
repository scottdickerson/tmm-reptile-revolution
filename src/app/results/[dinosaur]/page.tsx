"use client";
import { useContext, useEffect } from "react";
import { QuizContext } from "../../providers/QuizProvider";
import { useRouter } from "next/navigation";

export default function Results({ params }: { params: { dinosaur: string } }) {
  const { dinosaur } = params;
  const { characteristics } = useContext(QuizContext);
  const { push } = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      push("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [push]);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-lg">Matching dinosaur:</h1>
      {dinosaur}
      <h2 className="text-lg">Player selected characteristics:</h2>
      {JSON.stringify(characteristics, null, 2)}
    </div>
  );
}
