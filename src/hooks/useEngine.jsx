import { useCallback, useEffect, useState } from "react";
import { useWords } from "./useWords";
import { useCountDown } from "./useCountDown";
import { useTyping } from "./useTyping";
import { countErrors } from "../utils/calculation";

const WORD_COUNT = 27;
const COUNTDOWNTIME = 30;
//state = start | run | finish;
export function useEngine() {
  const [state, setState] = useState("start");
  const { words, updateWords } = useWords(WORD_COUNT);
  const { timeRemaining, startTimer, restartTimer } =
    useCountDown(COUNTDOWNTIME);
  const { clearTyped, cursor, resetTotalTyped, totalTypedChars, typed } =
    useTyping(state !== "finish");

  const isStarting = state === "start" && cursor > 0;

  const [errors, setErrors] = useState(0);
  const errorSum = useCallback(() => {
    const wordsReached = words.substring(0, cursor);
    setErrors((prevError) => prevError + countErrors(typed, wordsReached));
  }, [typed, words, cursor]);

  const areWordCompleted = cursor === words.length;
  useEffect(() => {
    if (isStarting) {
      setState("run");
      startTimer();
    }
  }, [isStarting, cursor, startTimer]);

  useEffect(() => {
    if (!timeRemaining) {
      console.log("time up");
      setState("finish");
      errorSum();
    }
  }, [timeRemaining, errorSum]);

  useEffect(() => {
    if (areWordCompleted) {
      errorSum();
      updateWords();
      clearTyped();
    }
  }, [
    cursor,
    words,
    clearTyped,
    typed,
    areWordCompleted,
    updateWords,
    errorSum,
  ]);

  const restart = useCallback(() => {
    console.log("restarting");
    restartTimer();
    resetTotalTyped();
    setErrors(0);
    setState("start");
    updateWords();
    clearTyped();
  }, [clearTyped, updateWords, restartTimer, resetTotalTyped]);

  return {
    state,
    words,
    timeRemaining,
    typed,
    errors,
    totalTypedChars,
    restart,
  };
}
