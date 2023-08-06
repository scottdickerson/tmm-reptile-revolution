"use client";
import { Characteristic, TextQuestionType } from "@/data/questions";
import { Button } from "../button/Button";
import "./text-question.css";

interface QuestionProps {
  question: TextQuestionType;
  onAnswer: (characteristic: Characteristic) => void;
}

export const TextQuestion = ({ question, onAnswer }: QuestionProps) => {
  const { question: questionText, choices } = question;

  return (
    <>
      <h1 className="questionText">{questionText}</h1>
      <div className="flex flex-col gap-8">
        {choices.map(({ text, matchingCharacteristic }) => (
          <Button
            key={text}
            width={513}
            onClick={() => {
              onAnswer(matchingCharacteristic);
            }}
          >
            {text}
          </Button>
        ))}
      </div>
    </>
  );
};
