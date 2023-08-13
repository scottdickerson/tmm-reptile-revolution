"use client";
import { useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CenterEllipsis } from "@/components/center-ellipsis/CenterEllipsis";
import { findBestMatchingDinosaur } from "@/data/dinosaurs";
import { QuizContext } from "@/providers/QuizProvider";
import "./calculating.css";
import { ResultCategory } from "@/components/results-switcher/ResultsSwitcher";

export default function Calculating() {
  const { push } = useRouter();
  const { characteristics } = useContext(QuizContext);
  const [numberOfEllipsis, setNumberOfEllipsis] = useState(0);
  const ellipsisArray = Array(3).fill(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setNumberOfEllipsis((numberOfEllipsis) => (numberOfEllipsis + 1) % 4);
    }, 400);
    return () => clearTimeout(timer);
  }, [setNumberOfEllipsis]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const matchingDinosaurName = findBestMatchingDinosaur(characteristics);
      push(`/quiz/results/${matchingDinosaurName}/${ResultCategory.SUMMARY}`);
    }, 3000);
    return () => clearTimeout(timer);
  }, [push, characteristics]);

  return (
    <div className="flex flex-col items-center h-full justify-center">
      <CenterEllipsis>
        <h1 className="calculatingTitle">
          Calculating your results
          {ellipsisArray.map((_, index) => (
            <span
              className={index < numberOfEllipsis ? "" : "calculatingPeriod"}
              key={index}
            >
              .
            </span>
          ))}
        </h1>
      </CenterEllipsis>
    </div>
  );
}
