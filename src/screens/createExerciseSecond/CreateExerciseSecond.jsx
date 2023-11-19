import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setRepsValidation, cleanNewExerciseState } from "../../store/slices/newExerciseSlice";
import useExercisesStore from "../../hooks/redux/useExercisesStore";

//COMPONENTS
import Header from "../../components/Header";
import SetsTable from "./components/SetsTable";
import { OrangeButton, DisabledButton } from "../../components/Buttons";
import RestTimeSlider from "./components/RestTimeSlider";
import { useNavigation } from "@react-navigation/native";

//STYLES
import {
  BACKGROUND_COLOR,
  PADDING_BOTTOM,
  PADDING_HORIZONTAL,
  PADDING_TOP,
} from "../../styles/styles";

export default CreateExerciseSecond = ({ route }) => {
  const dispatch = useDispatch();
  const { navigate, getId } = useNavigation();
  const { t } = useTranslation();
  const { reps, restTime } = useSelector((state) => state.newExercise);
  const { createNewExercise, addExercise } = useExercisesStore();
  const { id, exerciseType, task, name } = route.params;

  const handleAreValidReps = () => {
    dispatch(setRepsValidation(false));
  };

  const handleCreateExercise = () => {
    createNewExercise({ ...route.params, reps, restTime });
    dispatch(cleanNewExerciseState());
    navigate("Workout");
  };

  const handleAddExercise = () => {
    addExercise({ reps, order: 10 }, id);
    // dispatch(cleanNewExerciseState());
    // navigate("Workout");
  };

  return (
    <View style={styles.container}>
      <View style={{ gap: 30 }}>
        <Header title={route.params.name} />
        <RestTimeSlider />
        <SetsTable exerciseType={route.params.exerciseType} />
      </View>
      {!reps.every((rep) => rep.trim()) ? (
        <DisabledButton
          text={task == "AddExercise" ? "Add exercise" : "Create exercise"}
          action={handleAreValidReps}
        />
      ) : (
        <OrangeButton
          text={task == "AddExercise" ? "Add exercise" : "Create exercise"}
          action={task == "AddExercise" ? handleAddExercise : handleCreateExercise}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: PADDING_TOP,
    paddingBottom: PADDING_BOTTOM,
    justifyContent: "space-between",
  },
});
