import { useEffect, useRef } from "react";
import { AppState } from "react-native";


const useElapsedTimeOnBackground = () => {
  const appState = useRef(AppState.currentState);
  const departureTime = useRef(null);
  const backTime = useRef(null);
  const elapsedTime = useRef(0);


  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (["inactive", "background"].includes(appState.current) && nextAppState === "active") {
        backTime.current = new Date();
      }

      appState.current = nextAppState;
      if (appState.current === "background") {
        departureTime.current = new Date();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    if (departureTime.current && backTime.current) {
      elapsedTime.current = Math.round(
        (backTime.current.getTime() - departureTime.current.getTime()) / 1000,
      );
      departureTime.current = null;
      backTime.current = null;
    }
  }, [backTime.current]);

  return { elapsedTime: elapsedTime.current };
};

export default useElapsedTimeOnBackground;
