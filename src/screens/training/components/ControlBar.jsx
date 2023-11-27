import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { CircularButtonSmall } from "../../../components/Buttons";
import { setActiveSet } from "../../../store/slices/trainingSlice";
import { useDispatch, useSelector } from "react-redux";

export default ControlBar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { activeExercise, activeSet } = useSelector((state) => state.training);

  const handleNextSet = () => {
    if (activeExercise.Exercises) {
      if (activeExercise.Exercises[0].SupersetExercise.reps.length > activeSet) {
        dispatch(setActiveSet(activeSet + 1));
      }
    } else {
      if (activeExercise.WorkoutExercise.reps.length > activeSet) {
        dispatch(setActiveSet(activeSet + 1));
      }
    }
  };

  const handlePreviousSet = () => {
    if (activeSet > 0) {
      dispatch(setActiveSet(activeSet - 1));
    }
  };
  return (
    <View style={styles.container}>
      <CircularButtonSmall icon="angle-left" action={handlePreviousSet} />
      <CircularButtonSmall icon="angle-right" action={handleNextSet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
});
