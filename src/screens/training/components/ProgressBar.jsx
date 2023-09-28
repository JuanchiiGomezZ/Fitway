import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BACKGROUND_COLOR, BOX_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../../styles/styles";

export default ProgressBar = ({ activeExercise, totalExercises }) => {
  
    const progressBar = () => {
    return (activeExercise * 100) / totalExercises + "%";
  };

  return (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progress, { width: progressBar() }]} />
      <View
        style={[styles.progressCircle, activeExercise > 0 && { position: "relative", right: 25 }]}
      >
        <Text style={styles.progressNumber}>{activeExercise}</Text>
      </View>

      <View style={[styles.progressCircle, { position: "absolute", right: 0 }]}>
        <Text style={styles.progressNumber}>{totalExercises}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    width: "100%",
    height: 5,
    backgroundColor: BOX_COLOR,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  progress: {
    height: 5,
    borderRadius: 5,
    backgroundColor: ORANGE_COLOR,
  },
  progressCircle: {
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: ORANGE_COLOR,
  },
  progressNumber: {
    color: WHITE_COLOR,
    fontWeight: "500",
  },
});
