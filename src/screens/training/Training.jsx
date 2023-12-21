import React, { useEffect } from "react";
import { View, ScrollView, BackHandler } from "react-native";

//HOOKS
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { cleanWorkoutLog, saveInitialWorkoutLog } from "../../store/slices/trainingSlice";
import useToggle from "../../hooks/useToggle";
import useWorkoutsStore from "../../hooks/redux/useWorkoutsStore";
import { toggleExerciseGif } from "../../store/slices/trainingSlice";

//COMPONENTS
import ScreenContainer from "../../components/ScreenContainer";
import Loader from "../../components/Loader";
import Countdown from "./components/Countdown";
import ProgressBar from "./components/ProgressBar";
import ContentExercise from "./components/contentExercise/ContentExercise";
import ExercisesModal from "./components/exercisesModal/ExercisesModal";
import BottomBar from "./components/bottomBars/BottomBar";
import ConfirmationAlert from "../../components/ConfirmationAlert";
import ExerciseGIF from "../../components/ExerciseGIF";


export default TrainingMode = ({ route }) => {
  const dispatch = useDispatch();
  const { goBack } = useNavigation();
  const { getWorkoutTrainingData } = useWorkoutsStore();
  const {
    isLoading,
    activeExercise,
    activeWorkoutDetails,
    numActiveExercise,
    activeWorkout,
    exerciseGif,
    workoutLog,
    countdown,
  } = useSelector((state) => state.training);
  const { id } = route.params;

  const [openWorkout, toggleOpenWorkout] = useToggle(false);
  const [confirmationAlert, toggleConfAlert] = useToggle(false);

  useEffect(() => {
    if (activeWorkoutDetails?.workoutId != id) {
      getWorkoutTrainingData(id);
    } else {
      dispatch(saveInitialWorkoutLog());
    }
  }, []);

  useEffect(() => {
    const backAction = () => {
      // toggleConfAlert();
      goBack();
      // dispatch(cleanWorkoutLog());
      return true;
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => backHandler.remove();
  }, []);

  const backAction = () => {
    goBack();
    dispatch(cleanWorkoutLog());
  };

  return (
    <ScreenContainer>
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
              {workoutLog && <ContentExercise />}
            </View>
          </ScrollView>
          <BottomBar toggleOpenWorkout={toggleOpenWorkout} />

          {exerciseGif && (
            <ExerciseGIF
              toggleModal={() => dispatch(toggleExerciseGif())}
              exerciseGIF={exerciseGif}
            />
          )}
          {countdown.state && <Countdown restTime={30} />}
          {openWorkout && <ExercisesModal toggleModal={toggleOpenWorkout} />}
          {confirmationAlert && (
            <ConfirmationAlert
              toggleModal={toggleConfAlert}
              title="Alert"
              text={"Are you sure you want to quit the training?"}
              confirmAction={backAction}
            />
          )}
        </>
      )}
    </ScreenContainer>
  );
};
