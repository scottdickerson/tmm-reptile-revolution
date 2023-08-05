"use client";
import { PropsWithChildren, createContext, useState } from "react";
import {
  Characteristic,
  ImageQuestionType,
  QUESTION_COUNT,
  TextQuestionType,
  questions,
} from "@/data/questions";
import { shuffle } from "lodash";

interface QuizContextValues {
  questions: (ImageQuestionType | TextQuestionType)[];
  reloadCurrentQuizQuestions: () => void;
  characteristics: Characteristic[];
  addCharacteristic: (characteristic: Characteristic) => void;
}

export const QuizContext = createContext<QuizContextValues>({
  questions: [],
  reloadCurrentQuizQuestions: () => {},
  characteristics: [],
  addCharacteristic: () => {},
});

export const QuizProvider = ({ children }: PropsWithChildren<{}>) => {
  const [currentQuizQuestions, setCurrentQuizQuestions] = useState<
    (ImageQuestionType | TextQuestionType)[]
  >(shuffle(questions).slice(0, QUESTION_COUNT));
  const [characteristics, setCharacteristics] = useState<Characteristic[]>([]);

  const reloadCurrentQuizQuestions = () => {
    setCurrentQuizQuestions(shuffle(questions).slice(0, QUESTION_COUNT));
    setCharacteristics([]);
  };
  return (
    <QuizContext.Provider
      value={{
        questions: currentQuizQuestions,
        reloadCurrentQuizQuestions,
        characteristics,
        addCharacteristic: (characteristic: Characteristic) => {
          setCharacteristics([...characteristics, characteristic]);
        },
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
