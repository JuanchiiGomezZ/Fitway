import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, BackHandler } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { cleanWorkoutLog } from "../../store/slices/trainingSlice";
import useToggle from "../../hooks/useToggle";

//COMPONENTS
import Loader from "../../components/Loader";
import Countdown from "./components/Countdown";
import Timer from "./components/Timer";
import ProgressBar from "./components/ProgressBar";
import ContentExercise from "./components/contentExercise/ContentExercise";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ExercisesModal from "./components/exercisesModal/ExercisesModal";

//STYLES
import { BACKGROUND_COLOR, GRAY_COLOR, PADDING_HORIZONTAL, PADDING_TOP } from "../../styles/styles";
import useWorkoutsStore from "../../hooks/redux/useWorkoutsStore";
import ToolBar from "./components/ToolBar";
import useTimer from "./hooks/useTimer";
import ExerciseGIF from "../../components/ExerciseGIF";

export default TrainingMode = ({ route }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { getWorkoutTrainingData } = useWorkoutsStore();
  const { isLoading, activeExercise } = useSelector((state) => state.training);
  const { id } = route.params;
  const timer = useTimer();

  const [countdown, toggleCountodwn] = useToggle(false);
  const [bottomBar, toggleBottomBar] = useToggle(false);
  const [openWorkout, toggleOpenWorkout] = useToggle(false);

  // useEffect(() => {
  //   getWorkoutTrainingData(id);
  // }, []);

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
      {/* <HeaderTraining title={"Training"} /> */}
      {isLoading || !activeExercise ? (
        <Loader />
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingBottom: 80 }}>
              <ProgressBar activeExercise={3} totalExercises={6} />
              <ContentExercise />
            </View>
          </ScrollView>
          <View style={styles.bottomBar}>
            <MaterialCommunityIcons
              name="swap-vertical-bold"
              size={25}
              color={GRAY_COLOR}
              style={{
                alignSelf: "center",
                transform: [{ rotateY: !bottomBar ? "180deg" : "0deg" }],
              }}
              onPress={toggleBottomBar}
            />
            {bottomBar ? <ToolBar toggleWorkoutModal={toggleOpenWorkout} /> : <Timer useTimer={timer} />}
          </View>
          {/* <ExerciseGIF/> */}
          {countdown && <Countdown toggleModal={toggleCountodwn} restTime={30} />}
          {openWorkout && <ExercisesModal toggleModal={toggleOpenWorkout} />}
        </>
      )}
    </View>
  );
};

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: PADDING_TOP,
  },
  bottomBar: {
    width: width,
    position: "absolute",
    bottom: 0,
    left: 0,
    justifyContent: "center",
    gap: 2,
  },
});

/*

[{"done": true, "reps": "12", "weight": "80"}, 
{"done": true, "reps": "10", "weight": "65"}, 
{"done": true, "reps": "12", "weight": "12"}]

*/
