import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, RefreshControl, ScrollView } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import useWorkoutsStore from "../../hooks/redux/useWorkoutsStore";
import { useSelector } from "react-redux";
import useToggle from "../../hooks/useToggle";


//COMPONENTS
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import EmptyWorkout from "./components/EmptyWorkout";
import ExercisesList from "./components/card/ExercisesList";
import FloatingMenu from "./components/FloatingMenu";
import ExerciseGIF from "./components/ExerciseGIF";
import CreateSupersetModal from "./components/CreateSupersetModal";
import BottomSheetMenuExercise from "./components/BottomSheetMenuExercise";

//STYLES
import {
  BACKGROUND_COLOR,
  ORANGE_COLOR,
  PADDING_HORIZONTAL,
  PADDING_TOP,
} from "../../styles/styles";

export default WorkoutScreen = ({ route }) => {
  const { t } = useTranslation();
  const { workoutId } = route.params || {};

  const { getWorkoutData } = useWorkoutsStore();
  const { workoutDetails, workoutExercises, isLoading } = useSelector(
    (state) => state.workouts,
  );
  const { name } = workoutDetails;
  const [configModal, setConfigModal] = useState(false);
  const [exerciseId, setExerciseId] = useState(null);
  const [exerciseGIF, setExerciseGIF] = useState(null);
  const [exerciseGIFModal, setExerciseGIFModal] = useState(false);
  
  const [createSuperset, toggleCreateSuperset] = useToggle(false);

  useEffect(() => {
    workoutId != workoutDetails.workoutId &&
      getWorkoutData(workoutId || workoutDetails.workoutId);
  }, []);

 

  const toggleConfig = (id, type) => {
    id && setExerciseId({ id, type });
    setConfigModal((prev) => !prev);
  };

  const toggleGIF = (gif) => {
    gif && setExerciseGIF(gif);
    setExerciseGIFModal((prev) => !prev);
  };


  return (
    <View style={styles.container}>
      {isLoading || !workoutExercises ? (
        <Loader />
      ) : (
        <>
          <Header title={name} />

          <View style={styles.contentContainer}>
            {!workoutExercises?.Exercises[0] ? (
              <EmptyWorkout />
            ) : (
              <ExercisesList toggleConfig={toggleConfig} toggleGIF={toggleGIF} />
            )}
          </View>
          <FloatingMenu />
        </>
      )}
      {createSuperset && (
        <CreateSupersetModal exerciseId={exerciseId.id} toggleModal={toggleCreateSuperset} />
      )}
      {configModal && (
        <BottomSheetMenuExercise
          toggleBottomSheet={toggleConfig}
          exerciseId={exerciseId}
          toggleCreateSuperset={toggleCreateSuperset}
        />
      )}
      {exerciseGIFModal && <ExerciseGIF toggleModal={toggleGIF} exerciseGIF={exerciseGIF} />}
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
