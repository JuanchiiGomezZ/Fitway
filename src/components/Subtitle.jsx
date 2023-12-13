import { StyleSheet, Text } from "react-native";
import { WHITE_COLOR } from "../styles/styles";

export default Subtitle = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: WHITE_COLOR,
    fontSize: 25,
    fontWeight: "800",
  },
});
