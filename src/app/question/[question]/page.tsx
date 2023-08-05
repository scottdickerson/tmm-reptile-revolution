"use client";

import { useContext } from "react";
import { QuizContext } from "../../providers/QuizProvider";
import { TextQuestion } from "@/app/components/text-question/question";
import { QUESTION_COUNT, isTextQuestion } from "@/data/questions";
import { useRouter } from "next/navigation";
import { findBestMatchingDinosaur } from "@/data/dinosaurs";
import { ProgressBar } from "@/app/components/progress-bar/progress-bar";

export default function Quiz({ params }: { params: { question: string } }) {
  console.log("params", params);
  const { push } = useRouter();
  const { question } = params;
  const questionNumber = question ? parseInt(question) : 0;

  const { questions, addCharacteristic, characteristics } =
    useContext(QuizContext);
  const currentQuestion = questions[questionNumber];
  return (
    // The context will always be different from the server slug
    <div
      suppressHydrationWarning
      className="flex flex-col items-center min-h-screen"
    >
      <div className="flex flex-col items-center min-h-screen justify-center gap-11">
        {isTextQuestion(currentQuestion) ? (
          <TextQuestion
            question={currentQuestion}
            onAnswer={(matchingCharacteristic) => {
              addCharacteristic(matchingCharacteristic);
              if (questionNumber + 1 === QUESTION_COUNT) {
                const matchingDinosaurName =
                  findBestMatchingDinosaur(characteristics);
                push(`/results/${matchingDinosaurName}`);
              } else {
                push(`/question/${questionNumber + 1}`);
              }
            }}
          />
        ) : (
          <div>Image Question</div>
        )}
        <ProgressBar current={questionNumber}></ProgressBar>
      </div>
    </div>
  );
}
