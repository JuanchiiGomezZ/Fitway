import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";

//HOOKS
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { cleanWorkoutLog, toggleConfirmExitAlert } from "../../store/slices/trainingSlice";
import useToggle from "../../hooks/useToggle";
import useWorkoutsStore from "../../hooks/redux/useWorkoutsStore";
import { toggleExerciseGif } from "../../store/slices/trainingSlice";
import { storage } from "../../helpers/storage";

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
import BottomSheetRestTimerConfig from "./components/BottomSheetRestTimerConfig";
import { RED_COLOR } from "../../styles/styles";

export default TrainingMode = ({ route }) => {
  const dispatch = useDispatch();
  const { goBack, navigate } = useNavigation();
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
    restTimerBottomSheet,
    confirmExitAlert,
  } = useSelector((state) => state.training);
  const { id } = route.params;


  const [confirmationExitAlert, toggleConfExitAlert] = useToggle(false);

  useEffect(() => {
    if (activeWorkoutDetails?.workoutId != id) {
      getWorkoutTrainingData(id);
    }
    if (!storage.getString("workout_id_training")) storage.set("workout_id_training", id);
    if (!storage.getString("workout_startDate_training"))
      storage.set("workout_startDate_training", new Date().toString());
  }, []);

  useEffect(() => {
    if (workoutLog) storage.set("workoutLog", JSON.stringify(workoutLog));
  }, [workoutLog]);

  const backAction = () => {
    goBack();
    dispatch(cleanWorkoutLog());
  };

  const handleConfirmFinishTraining = () => {
    navigate("TrainingFinished");
    dispatch(cleanWorkoutLog());
    dispatch(toggleConfirmExitAlert());
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
          <BottomBar toggleConfExitAlert={toggleConfExitAlert} />

          {exerciseGif && (
            <ExerciseGIF
              toggleModal={() => dispatch(toggleExerciseGif())}
              exerciseGIF={exerciseGif}
            />
          )}
          {countdown.state && <Countdown restTime={30} />}
          {confirmationExitAlert && (
            <ConfirmationAlert
              toggleModal={toggleConfExitAlert}
              title="Are you sure?"
              text={"This action will exit and discard your training."}
              confirmAction={backAction}
            />
          )}
          {restTimerBottomSheet.state && <BottomSheetRestTimerConfig />}
          {confirmExitAlert && (
            <ConfirmationAlert
              toggleModal={() => dispatch(toggleConfirmExitAlert())}
              title="Are you sure?"
              text={"You have some empty values. This action will end your training."}
              thirdButton={true}
              thirdColor={RED_COLOR}
              thirdTitle={"Discard training"}
              confirmAction={handleConfirmFinishTraining}
              thirdAction={backAction}
            />
          )}
        </>
      )}
    </ScreenContainer>
  );
};
