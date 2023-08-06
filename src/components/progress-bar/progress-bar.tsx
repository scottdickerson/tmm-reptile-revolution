import { QUESTION_COUNT } from "@/data/questions";
import Image from "next/image";
import unfilled from "./unfilled.svg";
import filled from "./filled.svg";

export interface ProgressBarProps {
  current: number;
}

export const ProgressBar = ({ current }: ProgressBarProps) => {
  const questionArray = Array(QUESTION_COUNT).fill(0);

  return (
    <div className="flex flex-row gap-6 items-end">
      {questionArray.map((_, index) => {
        const isFilled = current >= index;
        return (
          <Image
            key={index}
            src={isFilled ? filled : unfilled}
            alt="progress"
            className={`w-11 h-11 rounded-full ${
              index % 2 === 0 ? "mb-4" : ""
            }`}
          ></Image>
        );
      })}
    </div>
  );
};
