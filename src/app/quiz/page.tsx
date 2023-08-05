"use client";

import { useContext } from "react";
import { QuizContext } from "../providers/QuizProvider";

export default function Quiz() {
  const { questions, characteristics } = useContext(QuizContext);
  return JSON.stringify(questions, null, 2);
}
