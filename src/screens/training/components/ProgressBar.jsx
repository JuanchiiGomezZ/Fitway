import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { Easing, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { BACKGROUND_COLOR, BOX_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../../styles/styles";

const ProgressBar = ({ activeExercise, totalExercises }) => {
  const progress = (activeExercise * 100) / totalExercises;


  const animatedWidth = useAnimatedStyle(() => {
    return {
      width: withTiming(`${progress-5}%`, { duration: 300, easing: Easing.ease }),
    };
  });


  
  return (
    <View style={styles.progressBarContainer}>
      <Animated.View style={[styles.progress, animatedWidth]} />
      <View
        style={[styles.progressCircle]}
      >
        <Text style={styles.progressNumber}>{activeExercise}</Text>
      </View>
      <View style={[styles.progressCircle, { position: "absolute", right: 0 }]}>
        <Text style={styles.progressNumber}>{totalExercises}</Text>
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progressBarContainer: {
    width: "100%",
    height: 5,
    backgroundColor: BOX_COLOR,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
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
