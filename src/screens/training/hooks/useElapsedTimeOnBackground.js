import { useState, useEffect, useRef } from "react";
import { AppState } from "react-native";

export default useElapsedTimeOnBackground = () => {
  const appState = useRef(AppState.currentState);
  const [departureTime, setDepartureTime] = useState(null);
  const [backTime, setBackTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (appState.current.match(/inactive|background/) && nextAppState === "active") {
        setBackTime(new Date());
      }

      appState.current = nextAppState;
      if (appState.current === "background") {
        setDepartureTime(new Date());
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);


  useEffect(() => {
    if (departureTime && backTime) {
      const tiemElapsed = Math.round((backTime.getTime() - departureTime.getTime()) / 1000);
      setDepartureTime(null);
      setBackTime(null);
      setElapsedTime(tiemElapsed);
    }
  }, [backTime]);

  return { elapsedTime };
};
