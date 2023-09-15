import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

/* HOOKS */
import { useTranslation } from "react-i18next";

/* COMPONENTS */
import Weekdays from "./components/Weekdays";
import HeaderHome from "./components/HeaderHome";
import WorkoutCardsList from "./components/WorkoutCardsList";
import ConfigWorkoutModal from "./components/ConfigWorkoutModal";

/* STYLES */
import { backgroundColor, containerPaddingHorizontal, containerPaddingTop, grayLightColor } from "../../styles/styles";

export default HomeScreen = () => {
  const { t } = useTranslation();

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
      <WorkoutCardsList toggleBottomSheet={toggleBottomSheet} />
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
