import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setRepsValidation, cleanNewExerciseState } from "../../store/slices/newExerciseSlice";
import useExercisesStore from "../../hooks/redux/useExercisesStore";
import maxOrder from "../../helpers/maxOrder";

//COMPONENTS
import Header from "../../components/Header";
import SetsTable from "./components/SetsTable";
import RestTimeSlider from "./components/RestTimeSlider";
import { useNavigation } from "@react-navigation/native";
import { ButtonClassicLong } from "../../components/CustomButtons";
import ScreenContainer from "../../components/ScreenContainer";

export default CreateExerciseSecond = ({ route }) => {
  const dispatch = useDispatch();
  const { navigate, goBack } = useNavigation();
  const { t } = useTranslation();
  const { reps, restTime } = useSelector((state) => state.newExercise);
  const { workoutExercises } = useSelector((state) => state.workouts);
  const { createNewExercise, addExercise } = useExercisesStore();
  const { id, task } = route.params;

  const handleAreValidReps = () => {
    dispatch(setRepsValidation(false));
  };

  const handleCreateExercise = () => {
    createNewExercise({ ...route.params, reps, restTime });
    dispatch(cleanNewExerciseState());
    navigate("Workout");
  };

  const handleAddExercise = () => {
    addExercise({ reps, order: maxOrder(workoutExercises) }, id);
    dispatch(cleanNewExerciseState());
    navigate("Workout");
  };

  const handleGoBack = () => {
    goBack();
    dispatch(cleanNewExerciseState());
  };

  const activeButton = !reps.every((rep) => rep.trim());

  return (
    <ScreenContainer paddingBottom>
      <Header title={route.params.name} action={handleGoBack} />
      <View style={{ gap: 30, flex: 1 }}>
        <RestTimeSlider />
        <SetsTable exerciseType={route.params.exerciseType} initialReps={reps} />
      </View>

      <ButtonClassicLong
        text={task == "AddExercise" ? "Add exercise" : "Create exercise"}
        action={task == "AddExercise" ? handleAddExercise : handleCreateExercise}
        disabled={activeButton}
        actionDisabled={handleAreValidReps}
      />
    </ScreenContainer>
  );
};
