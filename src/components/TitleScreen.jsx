import { StyleSheet, Text } from "react-native";
import { WHITE_COLOR } from "../styles/styles";

export default TitleScreen = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: WHITE_COLOR,
    fontSize: 35,
    fontWeight: "800",
  },
});
