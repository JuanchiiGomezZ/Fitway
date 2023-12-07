import { useState } from "react";
import { Keyboard } from "react-native";

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    Keyboard.dismiss();
    setState((prev) => !prev);
  };

  return [state, toggle];
};

export default useToggle;
