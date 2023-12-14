import React from "react";
import { StyleSheet, Text, View } from "react-native";

//COMPONENTS
import { FontAwesome5 } from "@expo/vector-icons";
import { GRAY_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../../styles/styles";

export default Empty = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="dumbbell" size={24} color={ORANGE_COLOR} />
      <Text style={styles.title}>No workouts yet</Text>
      <Text style={styles.text}>When you train you will all see your trainings here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 30,
  },
  title: {
    color: WHITE_COLOR,
    fontSize: 20,
    fontWeight: "600",
  },
  text: {
    color: GRAY_COLOR,
    textAlign: "center",
  },
});
