import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GRAY_COLOR } from "../styles/styles";

export default Separator = ({ title }) => {
  return (
    <View style={styles.separator}>
      <Text style={styles.separatorTitle}>{title}</Text>
      <View style={styles.separatorLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    marginTop: 25,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: GRAY_COLOR,
    marginTop: 2.5,
  },
  separatorTitle: {
    color: GRAY_COLOR,
    paddingRight: 8,
    fontSize: 16,
  },
});
