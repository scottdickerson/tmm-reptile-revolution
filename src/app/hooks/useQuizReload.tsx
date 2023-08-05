import { QuizContext } from "@/app/providers/QuizProvider";
import { useContext, useEffect } from "react";

// This tiny client hook can be place in any page to reload the current quiz questions
export const useQuizReload = () => {
  const { reloadCurrentQuizQuestions } = useContext(QuizContext);
  useEffect(() => {
    reloadCurrentQuizQuestions();
  }, []);
};
