import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import { BACKGROUND_COLOR, ORANGE_COLOR, RED_COLOR, WHITE_COLOR } from "../../../styles/styles";
import { CircularButtonSmall } from "../../../components/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeExercise } from "../../../store/slices/trainingSlice";

export default ToolBar = () => {
  const dispatch = useDispatch();
  const { numActiveExercise, activeWorkoutExercises } = useSelector((state) => state.training);

  const handleNextExercise = () => {
    if (activeWorkoutExercises.Exercises?.length > numActiveExercise + 1) {
      dispatch(handleChangeExercise(numActiveExercise + 1));
    }
  };

  const handlePreviousExercise = () => {
    if (numActiveExercise > 0) {
      dispatch(handleChangeExercise(numActiveExercise - 1));
    }
  };
  return (
    <Animated.View
      entering={SlideInDown}
      exiting={SlideOutDown.duration(300).easing()}
      style={styles.toolBar}
    >
      <CircularButtonSmall icon="angle-double-left" action={handlePreviousExercise} />


      
        <CircularButtonSmall icon="clipboard-list" />


      <CircularButtonSmall icon="angle-double-right" action={handleNextExercise} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toolBar: {
    borderTopColor: "#474747",
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: BACKGROUND_COLOR,
    paddingHorizontal: "5%",
    height: 60,
  },
});
