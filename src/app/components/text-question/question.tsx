"use client";
import { Characteristic, TextQuestionType } from "@/data/questions";

interface QuestionProps {
  question: TextQuestionType;
  onAnswer: (characteristic: Characteristic) => void;
}

export const TextQuestion = ({ question, onAnswer }: QuestionProps) => {
  const { question: questionText, choices } = question;

  return (
    <div className="flex flex-col gap-14  items-center justify-center ">
      <h1 className="questionText">{questionText}</h1>
      <div className="flex flex-col gap-8">
        {choices.map(({ text, matchingCharacteristic }) => (
          <button
            className="h-20 rounded-full button px-11"
            key={text}
            onClick={() => {
              onAnswer(matchingCharacteristic);
            }}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};
