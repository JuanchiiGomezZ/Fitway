import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

/* HOOKS */
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

/* COMPONENTS */
import Weekdays from "./components/Weekdays";
import HeaderHome from "./components/HeaderHome";
import ConfigWorkoutModal from "./components/ConfigWorkoutModal";
import NewWorkoutModal from "./components/NewWorkoutModal";

/* STYLES */
import { backgroundColor, containerPaddingHorizontal, containerPaddingTop, grayLightColor } from "../../styles/styles";
import WorkoutCard from "./components/WorkoutCard";

export default HomeScreen = () => {
  const { t } = useTranslation();
  const { workouts } = useSelector((state) => state.workouts);

  const [configWorkoutModal, setConfigWorkoutModal] = useState(false);
  const [workoutId, setWorkoutId] = useState(null);
  const [newWorkoutModal, setNewWorkoutModal] = useState(false);

  const toggleBottomSheet = (id) => {
    id && setWorkoutId(id);
    setConfigWorkoutModal(!configWorkoutModal);
  };

  const toggleNewWorkoutModal = () => {
    setNewWorkoutModal(!newWorkoutModal);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Weekdays />
        <HeaderHome toggleNewWorkoutModal={toggleNewWorkoutModal} />
        <View>
          {workouts.map((item, index) => (
            <WorkoutCard key={index} data={item} toggleBottomSheet={toggleBottomSheet} />
          ))}
        </View>
      </ScrollView>
      {configWorkoutModal && <ConfigWorkoutModal toggleBottomSheet={toggleBottomSheet} workoutId={workoutId} />}
      {newWorkoutModal && <NewWorkoutModal toggleNewWorkoutModal={toggleNewWorkoutModal} />}
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
