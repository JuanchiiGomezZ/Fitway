import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useToggle from "../../hooks/useToggle";

//COMPONENTS
import Header from "../../components/Header";
import ExercisesList from "./components/card/ExercisesList";
import ExerciseGIF from "./components/ExerciseGIF";
import CreateSupersetModal from "./components/CreateSupersetModal";
import BottomSheetMenuExercise from "./components/BottomSheetMenuExercise";
import PagerNavigator from "../../components/PagerNavigator";

//STYLES
import { BACKGROUND_COLOR, PADDING_HORIZONTAL, PADDING_TOP } from "../../styles/styles";

export default WorkoutScreen = ({ route }) => {
  const { t } = useTranslation();
  const { workoutId } = route.params || {};


  const { workoutDetails } = useSelector((state) => state.workouts);
  const { name } = workoutDetails;
  const [configModal, setConfigModal] = useState(false);
  const [exerciseId, setExerciseId] = useState(null);

  const [createSuperset, toggleCreateSuperset] = useToggle(false);

  const toggleConfig = (id, type) => {
    id && setExerciseId({ id, type });
    setConfigModal((prev) => !prev);
  };



  const pages = [
    { title: "Exercises", component: <ExercisesList workoutId={workoutId} /> },
    { title: "Logs", component: <></> },
  ];

  return (
    <View style={styles.container}>
      <Header title={name} margin={false} />
      <PagerNavigator pages={pages} />

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
  },
});
