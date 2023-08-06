"use client";

import { useContext } from "react";
import { QuizContext } from "../../../../providers/QuizProvider";
import { TextQuestion } from "@/components/text-question/text-question";
import {
  Characteristic,
  QUESTION_COUNT,
  isTextQuestion,
} from "@/data/questions";
import { useRouter } from "next/navigation";
import { findBestMatchingDinosaur } from "@/data/dinosaurs";
import { ProgressBar } from "@/components/progress-bar/progress-bar";
import { CenterEllipsis } from "@/components/center-ellipsis/CenterEllipsis";
import { ImageQuestion } from "@/components/image-question/ImageQuestion";

export default function Quiz({ params }: { params: { question: string } }) {
  console.log("params", params);
  const { push } = useRouter();
  const { question } = params;
  const questionNumber = question ? parseInt(question) : 0;

  const { questions, addCharacteristic, characteristics } =
    useContext(QuizContext);
  const currentQuestion = questions[questionNumber];

  const handleAnswer = (matchingCharacteristic: Characteristic) => {
    addCharacteristic(matchingCharacteristic);
    if (questionNumber + 1 === QUESTION_COUNT) {
      push(`/quiz/calculating`);
    } else {
      push(`/quiz/question/${questionNumber + 1}`);
    }
  };
  return (
    // The context will always be different from the server slug
    <div
      suppressHydrationWarning
      className="flex flex-col items-center min-h-screen"
    >
      <div className="flex flex-col items-center min-h-screen justify-center">
        <CenterEllipsis gap={30} padding="75px 10px 0px" height={681}>
          {isTextQuestion(currentQuestion) ? (
            <TextQuestion question={currentQuestion} onAnswer={handleAnswer} />
          ) : (
            <ImageQuestion question={currentQuestion} onAnswer={handleAnswer} />
          )}
          <ProgressBar current={questionNumber}></ProgressBar>
        </CenterEllipsis>
      </div>
    </div>
  );
}
