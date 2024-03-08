import { useState } from "react";
import { useWords } from "./useWords";
import { useCountDown } from "./useCountDown";

const WORD_COUNT = 20;
const COUNTDOWN_TIME = 30;
//state = start | run | finish;
export function useEngine() {
  const [state, setState] = useState("start");
  const { words, updateWords } = useWords(WORD_COUNT);
  const { timeRemaining, startTimer, restartTimer } =
    useCountDown(COUNTDOWN_TIME);
  return { state, words, timeRemaining };
}
