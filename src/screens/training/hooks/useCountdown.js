/**
 * A custom React hook that manages a countdown timer.
 * @returns {Object} An object containing the countdown timer state and functions.
 */
import { useState, useEffect } from "react";
import useElapsedTimeOnBackground from "./useElapsedTimeOnBackground";

export default function useCountdown() {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [isTimeOver, setIsTimeOver] = useState(false);
  const { elapsedTime } = useElapsedTimeOnBackground();

  useEffect(() => {
    if (isPaused || secondsLeft <= 0) {
      if (!isPaused) setIsTimeOver(secondsLeft <= 0);
      return;
    }

    const timeout = setTimeout(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [secondsLeft, isPaused]);

  /**
   * Starts or pauses the countdown timer.
   * @param {number} seconds - The number of seconds to start the countdown timer with.
   */
  const start = (seconds) => {
    if (isPaused && secondsLeft === 0) {
      setSecondsLeft(seconds);
      setIsPaused(false);
    } else if (isPaused && secondsLeft !== 0) {
      setIsPaused(false);
    } else {
      setIsPaused(true);
    }
    setIsTimeOver(false); // Reset the isTimeOver state
  };

  /**
   * Adds extra seconds to the countdown timer.
   * @param {number} extraSeconds - The number of extra seconds to add.
   */
  const addTime = (extraSeconds) => {
    if (!isPaused)
      setSecondsLeft((prev) => {
        if (prev + extraSeconds > 1) {
          return prev + extraSeconds;
        }
        return 0;
      });
  };

  /**
   * Skips to a specific time in the countdown timer.
   */
  const skipTime = () => {
    if (!isPaused) {
      setSecondsLeft(4);
    }
  };

  const updateTimer = (elapsedTime) => {
    if (!isPaused) setSecondsLeft((prevSeconds) => prevSeconds - elapsedTime);
  };

  useEffect(() => {
    updateTimer(elapsedTime);
  }, [elapsedTime]);

  return { secondsLeft, start, isPaused, isTimeOver, addTime, skipTime };
}
