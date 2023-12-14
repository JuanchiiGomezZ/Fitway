import React from "react";
import { StyleSheet, View } from "react-native";

export default SeparatingLine = ({ color, width }) => {
  return (
    <View style={[styles.line, color && { backgroundColor: color }, width && { width: width }]} />
  );
};

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 10,
    alignSelf: "center",
  },
});
