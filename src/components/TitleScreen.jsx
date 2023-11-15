import { StyleSheet, Text } from "react-native";
import { WHITE_COLOR } from "../styles/styles";


export default ComponentName = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: WHITE_COLOR,
    fontSize: 40,
    fontWeight: "800",
  },
});
