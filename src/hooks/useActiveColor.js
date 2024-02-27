import { useContext } from "react";
import { Colors } from "../styles/theme";
import { ThemeContext } from "../Context/ThemeContext";

const useActiveColors = () => {
  const { theme } = useContext(ThemeContext);
  const activeColors = Colors[theme.mode];
  return activeColors;
};

export default useActiveColors;
