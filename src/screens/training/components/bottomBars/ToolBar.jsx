import React from "react";
import { StyleSheet,  View } from "react-native";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import { BACKGROUND_COLOR, GRAY_COLOR, RED_COLOR } from "../../../../styles/styles";
import { ButtonCircular, ButtonRounded } from "../../../../components/CustomButtons";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeExercise } from "../../../../store/slices/trainingSlice";
import { useNavigation } from "@react-navigation/native";

export default ToolBar = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { numActiveExercise, activeWorkout, workoutLog } = useSelector((state) => state.training);

  const handleNextExercise = () => {
    if (activeWorkout.length > numActiveExercise + 1) {
      dispatch(handleChangeExercise(numActiveExercise + 1));
    }
  };

  const handlePreviousExercise = () => {
    if (numActiveExercise > 0) {
      dispatch(handleChangeExercise(numActiveExercise - 1));
    }
  };

  const handleFinishWorkout = () => {
    const handleConfirmFinishTraining = () => {
      navigate("TrainingFinished");
      dispatch(cleanWorkoutLog());
    };
    const backAction = () => {
      goBack();
      dispatch(cleanWorkoutLog());
    };
    navigate("ConfirmationAlert", {
      title: "Are you sure?",
      text: "You have some empty values. This action will end your training.",
      thirdButton: true,
      thirdColor: RED_COLOR,
      thirdTitle: "Discard training",
      confirmAction: handleConfirmFinishTraining,
      thirdAction: backAction,
    });
  };

  return (
    <Animated.View
      entering={SlideInDown}
      exiting={SlideOutDown.duration(300).easing()}
      style={[styles.toolBar, styles.row]}
    >
      <ButtonCircular
        icon="angle-double-left"
        action={handlePreviousExercise}
        disabled={numActiveExercise == 0 && GRAY_COLOR}
        size={"m"}
      />

      <View style={[styles.row, { gap: 20 }]}>
        <ButtonCircular
          icon="clipboard-list"
          action={() => navigate("ExercisesModal")}
          size={"m"}
        />
        <ButtonRounded text="Complete" textWeight="700" action={handleFinishWorkout} />
      </View>
      <ButtonCircular
        icon="angle-double-right"
        action={handleNextExercise}
        size={"m"}
        disabled={activeWorkout.length == numActiveExercise + 1 && GRAY_COLOR}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toolBar: {
    borderTopColor: "#474747",
    borderTopWidth: 1,
    justifyContent: "space-between",
    backgroundColor: BACKGROUND_COLOR,
    paddingHorizontal: "5%",
    height: 60,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
