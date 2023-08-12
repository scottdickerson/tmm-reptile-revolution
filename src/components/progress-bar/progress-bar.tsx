import { QUESTION_COUNT } from "@/data/questions";
import Image from "next/image";
import filled from "./dinoTrack_Fill.svg";
import unfilled from "./dinoTrack_Outline.svg";

export interface ProgressBarProps {
  current: number;
}

export const ProgressBar = ({ current }: ProgressBarProps) => {
  const questionArray = Array(QUESTION_COUNT).fill(0);

  return (
    <div className="flex flex-row gap-3 items-end">
      {questionArray.map((_, index) => {
        const isFilled = current >= index;
        return (
          <Image
            key={index}
            src={isFilled ? filled : unfilled}
            alt="progress"
            className={`w-7 h-7 rounded-full ${index % 2 === 0 ? "mb-4" : ""}`}
          ></Image>
        );
      })}
    </div>
  );
};
