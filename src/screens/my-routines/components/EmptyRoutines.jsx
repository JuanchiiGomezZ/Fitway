import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { ORANGE_COLOR, ORANGE_DARK_COLOR, WHITE_COLOR, GRAY_COLOR } from "../../../styles/styles";

export default EmptyRoutines = () => {
  return (
    <View style={styles.container}>
      <Feather
        name="chevrons-up"
        size={30}
        color={ORANGE_COLOR}
        style={[styles.pointer, { right: "20%" }]}
      />
      <AntDesign name="exclamationcircleo" style={styles.plusIcon} />
      <Text style={styles.textFirts}>You don't have an routine.</Text>
      <Text style={styles.textSecond}>Create one to begin.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingTop: 80,
  },
  plusIcon: {
    color: ORANGE_DARK_COLOR,
    fontSize: 50,
  },
  textFirts: {
    color: WHITE_COLOR,
    fontSize: 18,
    fontWeight: "500",
  },
  textSecond: {
    color: GRAY_COLOR,
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    width: 200,
  },
  link: {
    fontSize: 15,
    fontWeight: "400",
    color: ORANGE_COLOR,
  },
  pointer: {
    position: "absolute",
    top: 5,
  },
});
