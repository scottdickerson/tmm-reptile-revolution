import { QuizContext } from "@/providers/QuizProvider";
import { useContext, useEffect } from "react";

// This tiny client hook can be place in any page to reload the current quiz questions
export const useQuizReload = () => {
  const { reloadCurrentQuizQuestions } = useContext(QuizContext);
  useEffect(() => {
    reloadCurrentQuizQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
