"use client";
import { ImageQuestion, TextQuestion, questions } from "@/data/questions";
import { shuffle } from "lodash";
import { PropsWithChildren, createContext, useState } from "react";

interface QuizContextValues {
  questions: (ImageQuestion | TextQuestion)[];
  reloadCurrentQuizQuestions: () => void;
  characteristics: string[]; // Better type characteristics once I get better list of
}

export const QuizContext = createContext<QuizContextValues>({
  questions: [],
  reloadCurrentQuizQuestions: () => {},
  characteristics: [],
});

const QUESTION_COUNT = 1;

export const QuizProvider = ({ children }: PropsWithChildren<{}>) => {
  const [currentQuizQuestions, setCurrentQuizQuestions] = useState<
    (ImageQuestion | TextQuestion)[]
  >(shuffle(questions).slice(0, QUESTION_COUNT));
  const [characteristics, setCharacteristics] = useState<string[]>([]);
  const reloadCurrentQuizQuestions = () => {
    setCurrentQuizQuestions(shuffle(questions).slice(0, QUESTION_COUNT));
  };
  return (
    <QuizContext.Provider
      value={{
        questions: currentQuizQuestions,
        reloadCurrentQuizQuestions,
        characteristics,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
