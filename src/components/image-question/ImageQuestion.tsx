"use client";
import { Characteristic, ImageQuestionType } from "@/data/questions";
import "./image-question.css";
import "../text-question/text-question.css";
import Image from "next/image";

interface QuestionProps {
  question: ImageQuestionType;
  onAnswer: (characteristic: Characteristic) => void;
}

export const ImageQuestion = ({ question, onAnswer }: QuestionProps) => {
  const { question: questionText, choices } = question;

  return (
    <>
      <h1 className="questionText">{questionText}</h1>
      <div className="flex flex-row gap-8">
        {choices.map(({ image, matchingCharacteristic }) => (
          <button
            key={matchingCharacteristic}
            onClick={() => {
              onAnswer(matchingCharacteristic);
            }}
            className="questionImage shadow-md shadow-black"
          >
            <Image src={image} alt="choice" width={280} height={274} />
          </button>
        ))}
      </div>
    </>
  );
};
