import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, BackHandler } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { cleanWorkoutLog } from "../../store/slices/trainingSlice";
import useToggle from "../../hooks/useToggle";

//COMPONENTS
import Loader from "../../components/Loader";
import Countdown from "./components/Countdown";
import ProgressBar from "./components/ProgressBar";
import ContentExercise from "./components/contentExercise/ContentExercise";
import ExercisesModal from "./components/exercisesModal/ExercisesModal";
import BottomBar from "./components/bottomBars/BottomBar";

//STYLES
import { BACKGROUND_COLOR, GRAY_COLOR, PADDING_HORIZONTAL, PADDING_TOP } from "../../styles/styles";
import useWorkoutsStore from "../../hooks/redux/useWorkoutsStore";
import ExerciseGIF from "../../components/ExerciseGIF";

export default TrainingMode = ({ route }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { getWorkoutTrainingData } = useWorkoutsStore();
  const { isLoading, activeExercise, activeWorkoutDetails, numActiveExercise, activeWorkout } =
    useSelector((state) => state.training);
  const { id } = route.params;

  const [countdown, toggleCountodwn] = useToggle(false);
  const [openWorkout, toggleOpenWorkout] = useToggle(false);

  useEffect(() => {
    if (activeWorkoutDetails?.workoutId != id) getWorkoutTrainingData(id);
  }, []);

  // useEffect(() => {
  //   const backAction = () => {
  //     navigate("TabNavigation", { screen: "Home" });
  //     dispatch(cleanWorkoutLog());
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

  //   return () => backHandler.remove();
  // }, []);

  return (
    <View style={styles.container}>
      {isLoading || !activeExercise ? (
        <Loader />
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingBottom: 80 }}>
              <ProgressBar
                activeExercise={numActiveExercise}
                totalExercises={activeWorkout.length}
              />
              <ContentExercise />
            </View>
          </ScrollView>
          <BottomBar toggleOpenWorkout={toggleOpenWorkout} />

          {/* <ExerciseGIF/> */}
          {countdown && <Countdown toggleModal={toggleCountodwn} restTime={30} />}
          {openWorkout && <ExercisesModal toggleModal={toggleOpenWorkout} />}
        </>
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
  },
});
