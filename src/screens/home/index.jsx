import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

/* HOOKS */
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

/* COMPONENTS */
import Weekdays from "./components/Weekdays";
import HeaderHome from "./components/HeaderHome";
import ConfigWorkoutModal from "./components/ConfigWorkoutModal";

/* STYLES */
import { backgroundColor, containerPaddingHorizontal, containerPaddingTop, grayLightColor } from "../../styles/styles";
import WorkoutCard from "./components/WorkoutCard";

export default HomeScreen = () => {
  const { t } = useTranslation();
  const { workouts } = useSelector((state) => state.workouts);

  const [configWorkoutModal, setConfigWorkoutModal] = useState(false);
  const [workoutId, setWorkoutId] = useState(null);

  const toggleBottomSheet = (id) => {
    id && setWorkoutId(id);
    setConfigWorkoutModal(!configWorkoutModal);
  };

  return (
    <View style={styles.container}>
      <Weekdays />
      <HeaderHome />
      {workouts.map((item, index) => (
        <WorkoutCard key={index} data={item} toggleBottomSheet={toggleBottomSheet} />
      ))}
      {configWorkoutModal && <ConfigWorkoutModal toggleBottomSheet={toggleBottomSheet} workoutId={workoutId} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingHorizontal: containerPaddingHorizontal,
    paddingTop: containerPaddingTop,
  },
});
