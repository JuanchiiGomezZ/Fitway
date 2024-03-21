import { useState, useEffect } from "react";
import useElapsedTimeOnBackground from "./useElapsedTimeOnBackground";

const useTimer = () => {
  const { elapsedTime } = useElapsedTimeOnBackground();
  const [seconds, setSeconds] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(true);

  useEffect(() => {
    if (isPaused) return;

    const timeout = setTimeout(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [seconds, isPaused]);

  const pause = () => {
    setIsPaused((prev) => !prev);
  };

  const updateTimer = (elapsedTime: number) => {
    if (!isPaused) setSeconds((prev) => prev + elapsedTime);
  };

  const start = (initialTime: number) => {
    setSeconds(initialTime);
    pause();
  };

  useEffect(() => {
    updateTimer(elapsedTime);
  }, [elapsedTime]);

  return { pause, seconds, isPaused, start };
};

export default useTimer;
