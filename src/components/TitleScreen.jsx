import { StyleSheet, Text } from "react-native";
import { WHITE_COLOR } from "../styles/styles";
import { useFonts } from "expo-font";

export default ComponentName = ({ title }) => {
  const [fontsLoaded] = useFonts({
    Fugaz: require("../assets/fonts/Fugaz.ttf"),
  });
  
  if (!fontsLoaded) return null;
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: WHITE_COLOR,
    fontSize: 40,
    fontWeight: "800",
  },
});
