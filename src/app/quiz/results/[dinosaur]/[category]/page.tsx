"use client";
import { useContext, useEffect } from "react";
import { QuizContext } from "../../../../../providers/QuizProvider";
import { useRouter } from "next/navigation";
import { dinosaurs } from "@/data/dinosaurs";
import Image from "next/image";
import { DinosaurSummary } from "@/components/dinosaur-summary/DinosaurSummary";
import {
  ResultCategory,
  ResultsSwitcher,
} from "@/components/results-switcher/ResultsSwitcher";
import "./results.css";
import { DinosaurSwitcher } from "@/components/dinosaur-switcher/DinosaurSwitcher";
import { DinosaurTime } from "@/components/dinosaur-time/DinosaurTime";

const determineGap = (category: ResultCategory) => {
  switch (category) {
    case ResultCategory.SUMMARY:
      return "gap-24";
    case ResultCategory.TIME:
      return "gap-5";
    case ResultCategory.FUN_FACT_1:
    case ResultCategory.LOCATION:
    case ResultCategory.SIZE:
    case ResultCategory.FUN_FACT_2:
      return "gap-12";
  }
};

export default function Results({
  params,
}: {
  params: { dinosaur: string; category: ResultCategory };
}) {
  const { dinosaur: dinosaurParam, category } = params;
  const dinosaur = dinosaurs[dinosaurParam];

  const { characteristics } = useContext(QuizContext);

  return (
    <div className="flex flex-row h-full results items-center ">
      <ResultsSwitcher className="justify-self-start" category={category} />
      <div
        className={`flex flex-col ${determineGap(
          category
        )} items-center flex-grow`}
      >
        <Image src={dinosaur.image} alt={dinosaur.summary.title} />
        {category === ResultCategory.SUMMARY && (
          <DinosaurSummary dinosaur={dinosaur} />
        )}
        {category === ResultCategory.TIME && (
          <DinosaurTime dinosaur={dinosaur} />
        )}
        <h2 className="text-lg absolute top-0 left-0">
          Player selected characteristics:
          {JSON.stringify(characteristics, null, 2)}
        </h2>
      </div>
      <DinosaurSwitcher />
    </div>
  );
}
