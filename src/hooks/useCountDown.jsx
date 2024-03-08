import { useCallback, useEffect, useRef, useState } from "react";

export function useCountDown({ time }) {
  const [timeRemaining, setTimeRemaining] = useState(time);
  const timeRef = useRef();

  const startTimer = useCallback(() => {
    console.log("starting test");
    timeRef.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);
  }, [setTimeRemaining]);

  const restartTimer = useCallback(() => {
    console.log("restarting test");

    if (timeRef.current) {
      clearInterval(timeRef.current);
    }
    setTimeRemaining(time);
  }, [time]);

  useEffect(() => {
    if (!timeRemaining && timeRef.current) {
      console.log("clearing time");
      clearInterval(timeRef.current);
    }
  }, [timeRemaining, timeRef]);

  return { timeRemaining, startTimer, restartTimer };
}
