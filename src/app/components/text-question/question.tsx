"use client";
import { Characteristic, TextQuestionType } from "@/data/questions";

interface QuestionProps {
  question: TextQuestionType;
  onAnswer: (characteristic: Characteristic) => void;
}

export const TextQuestion = ({ question, onAnswer }: QuestionProps) => {
  const { question: questionText, choices } = question;

  return (
    <div className="flex flex-col gap-54">
      {questionText}
      {choices.map(({ text, matchingCharacteristic }) => (
        <button
          key={text}
          className="flex flex-col gap-31"
          onClick={() => {
            onAnswer(matchingCharacteristic);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};
