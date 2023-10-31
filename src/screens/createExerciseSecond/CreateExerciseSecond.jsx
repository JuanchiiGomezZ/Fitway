import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setRepsValidation } from "../../store/slices/newExerciseSlice";

//COMPONENTS
import Header from "../../components/Header";
import SetsTable from "./components/SetsTable";
import { OrangeButton, DisabledButton } from "../../components/Buttons";
import RestTimeSlider from "./components/RestTimeSlider";


//STYLES
import { BACKGROUND_COLOR, PADDING_HORIZONTAL, PADDING_TOP } from "../../styles/styles";

export default CreateExerciseSecond = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { reps } = useSelector((state) => state.newExercise);

  const handleAreValidReps = () => {
    dispatch(setRepsValidation(false));
  };

  return (
    <View style={styles.container}>
      <View>
        <Header title={"Bench press"} />
        <SetsTable />
        <RestTimeSlider/>
      </View>
      {reps.some((rep) => rep === "") ? (
        <DisabledButton text="Create exercise" action={handleAreValidReps} />
      ) : (
        <OrangeButton text="Create exercise" />
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
