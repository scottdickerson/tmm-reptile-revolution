"use client";
import { useContext, useEffect } from "react";
import { QuizContext } from "../../../../../providers/QuizProvider";
import { dinosaurs } from "@/data/dinosaurs";
import Image from "next/image";
import { DinosaurSummary } from "@/components/dinosaur-summary/DinosaurSummary";
import {
  ResultCategory,
  ResultsSwitcher,
} from "@/components/results-switcher/ResultsSwitcher";
import "../../results.css";
import { DinosaurSwitcher } from "@/components/dinosaur-switcher/DinosaurSwitcher";
import { DinosaurTime } from "@/components/dinosaur-time/DinosaurTime";
import { DinosaurFunFact1 } from "@/components/dinosaur-fun-fact1/DinosaurFunFact1";
import { DinosaursResultsSecondFrame } from "@/components/dinosaur-results-second-frame/DinosaurResultsSecondFrame";
import { DinosaurLocation } from "@/components/dinosaur-location/DinosaurLocation";
import { DinosaurSize } from "@/components/dinosaur-size/DinosaurSize";
import { DinosaurFunFact2 } from "@/components/dinosaur-fun-fact2/DinosaurFunFact2";

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
        {(category === ResultCategory.SUMMARY ||
          category === ResultCategory.TIME) && (
          <Image src={dinosaur.image} alt={dinosaur.summary.title} />
        )}
        {category === ResultCategory.SUMMARY && (
          <DinosaurSummary dinosaur={dinosaur} />
        )}
        {category === ResultCategory.TIME && (
          <DinosaurTime dinosaur={dinosaur} />
        )}
        {category === ResultCategory.FUN_FACT_1 && (
          <DinosaurFunFact1 dinosaur={dinosaur} />
        )}
        {(category === ResultCategory.LOCATION ||
          category === ResultCategory.SIZE ||
          category === ResultCategory.FUN_FACT_2) && (
          <DinosaursResultsSecondFrame dinosaur={dinosaur}>
            {category === ResultCategory.LOCATION && (
              <DinosaurLocation dinosaur={dinosaur} />
            )}
            {category === ResultCategory.SIZE && (
              <DinosaurSize dinosaur={dinosaur} />
            )}
            {category === ResultCategory.FUN_FACT_2 && (
              <DinosaurFunFact2 dinosaur={dinosaur} />
            )}
          </DinosaursResultsSecondFrame>
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
