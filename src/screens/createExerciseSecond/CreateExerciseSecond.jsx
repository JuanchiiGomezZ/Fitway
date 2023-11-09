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
import { BACKGROUND_COLOR, PADDING_HORIZONTAL, PADDING_TOP } from "../../styles/styles";

export default CreateExerciseSecond = ({ route }) => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { t } = useTranslation();
  const { reps, restTime } = useSelector((state) => state.newExercise);
  const { createNewExercise } = useExercisesStore();

  const handleAreValidReps = () => {
    dispatch(setRepsValidation(false));
  };

  const handleCreateExercise = () => {
    createNewExercise({ ...route.params, reps, series: reps.length, restTime });
    dispatch(cleanNewExerciseState());
    navigate("Workout");
  };

  console.log(route.params.exerciseType)
  return (
    <View style={styles.container}>
      <View style={{ gap: 30 }}>
        <Header title={"Bench press"} />
        <RestTimeSlider />
        <SetsTable />
      </View>
      {!reps.every((rep) => rep.trim()) ? (
        <DisabledButton text="Create exercise" action={handleAreValidReps} />
      ) : (
        <OrangeButton text="Create exercise" action={handleCreateExercise} />
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
    paddingBottom: 20,
    justifyContent: "space-between",
  },
});
