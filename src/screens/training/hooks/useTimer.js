import { useState, useEffect } from "react";
import useElapsedTimeOnBackground from "./useElapsedTimeOnBackground";

export default useTimer = () => {
  const { elapsedTime } = useElapsedTimeOnBackground();
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

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

  const updateTimer = (elapsedTime) => {
    if (!isPaused) setSeconds((prev) => prev + elapsedTime);
  };

  const start = (initialTime) => {
    setSeconds(initialTime);
    pause();
  };

  useEffect(() => {
    updateTimer(elapsedTime);
  }, [elapsedTime]);

  return { pause, seconds, isPaused, start };
};
