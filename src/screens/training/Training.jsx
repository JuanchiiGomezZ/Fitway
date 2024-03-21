import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";

//HOOKS
import { useDispatch, useSelector } from "react-redux";
import useTrainingStore from "../../hooks/redux/useTrainingStore";
import { toggleExerciseGif } from "../../store/slices/trainingSlice";
import { storage } from "../../helpers/storage";

//COMPONENTS
import ScreenContainer from "../../components/ScreenContainer";
import Loader from "../../components/Loader";
import Countdown from "./components/Countdown";
import ProgressBar from "./components/ProgressBar";
import ContentExercise from "./components/contentExercise/ContentExercise";
import BottomBar from "./components/bottomBars/BottomBar";
import ExerciseGIF from "../../components/ExerciseGIF";


export default TrainingMode = ({ route }) => {
  const dispatch = useDispatch();
  const { getTrainingData } = useTrainingStore();
  const {
    isLoading,
    activeTrainingExercise,
    activeTrainingDetails,
    numActiveExercise,
    trainingExercises,
    exerciseGif,
    workoutLog,
    countdown,
  } = useSelector((state) => state.training);
  const { id } = route.params;

  useEffect(() => {
    if (activeTrainingDetails?.workoutId != id) {
      getTrainingData(id);
    }
    if (!storage.getString("workout_id_training")) storage.set("workout_id_training", id);
    if (!storage.getString("workout_startDate_training"))
      storage.set("workout_startDate_training", new Date().toString());
  }, []);

  useEffect(() => {
    if (workoutLog) storage.set("workoutLog", JSON.stringify(workoutLog));
  }, [workoutLog]);

// console.log(activeTrainingDetails?.workoutId)
  
  return (
    <ScreenContainer>
      {isLoading || !activeTrainingExercise ? (
        <Loader />
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingBottom: 80 }}>
              <ProgressBar
                activeTrainingExercise={numActiveExercise}
                totalExercises={trainingExercises.length}
              />
              {workoutLog && <ContentExercise />}
            </View>
          </ScrollView>
          <BottomBar />

          {exerciseGif && (
            <ExerciseGIF
              toggleModal={() => dispatch(toggleExerciseGif())}
              exerciseGIF={exerciseGif}
            />
          )}
          {countdown.state && <Countdown restTime={30} />}
        </>
      )}
    </ScreenContainer>
  );
};
