import { StyleSheet, Text, View } from "react-native";
import { BORDER_RADIUS, ORANGE_COLOR } from "../styles/styles";

export default CardLabel = ({ text }) => {
  return (
    <View style={styles.labelContainer}>
      <Text style={styles.labelText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    borderWidth: 1.5,
    borderColor: ORANGE_COLOR,
    width: 100,
    paddingVertical: 3,
    alignItems: "center",
    borderTopEndRadius: BORDER_RADIUS,
    borderBottomStartRadius: BORDER_RADIUS,
  },
  labelText: {
    color: ORANGE_COLOR,
    fontSize: 13,
    fontWeight: "500",
  },
});
