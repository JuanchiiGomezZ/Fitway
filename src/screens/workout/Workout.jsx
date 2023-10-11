import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import useWorkoutsStore from "../../hooks/redux/useWorkoutsStore";
import { useSelector } from "react-redux";

//COMPONENTS
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { OrangeCircularButton } from "../../components/Buttons";
import EmptyWorkout from "./components/EmptyWorkout";
import WorkoutsList from "./components/card/WorkoutsList";
import FloatingMenu from "./components/FloatingMenu";
import ConfigExerciseModal from "./components/ConfigExerciseModal";

//STYLES
import { BACKGROUND_COLOR, PADDING_HORIZONTAL, PADDING_TOP } from "../../styles/styles";

export default WorkoutScreen = ({ route }) => {
  const { t } = useTranslation();
  const { workoutId } = route.params;
  const { getWorkoutsData } = useWorkoutsStore();
  const { activeWorkoutDetails, activeWorkoutExercises, isLoading } = useSelector(
    (state) => state.workouts,
  );
  const { name } = activeWorkoutDetails;
  const [configModal, setConfigModal] = useState(false);
  const [exerciseId, setExerciseId] = useState(null);

  useEffect(() => {
    getWorkoutsData(workoutId);
  }, []);

  const toggleConfig = (id, type) => {
    id && setExerciseId({ id, type });
    setConfigModal((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {isLoading || !activeWorkoutExercises ? (
        <Loader />
      ) : (
        <>
          <View style={styles.inline}>
            <Header title={name} />
    {/*         <OrangeCircularButton icon="dumbbell" /> */}
          </View>
          <View style={styles.contentContainer}>
            {!activeWorkoutExercises?.exercises[0] ? (
              <EmptyWorkout />
            ) : (
              <WorkoutsList toggleConfig={toggleConfig} />
            )}
          </View>
          <FloatingMenu />
        </>
      )}

      {configModal && <ConfigExerciseModal toggleBottomSheet={toggleConfig} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: PADDING_TOP,
  },
  inline: {
    flexDirection: "row",
    justifyContent: "space-between",
    /*   alignItems: "center", */
  },
  contentContainer: {
    marginTop: 0,
  },
});
