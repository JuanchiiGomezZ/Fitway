import React, { useState } from "react";

//HOOKS
import { useSelector } from "react-redux";
import useToggle from "../../hooks/useToggle";

//COMPONENTS
import Header from "../../components/Header";
import ExercisesList from "./components/card/ExercisesList";
import CreateSupersetModal from "./components/CreateSupersetModal";
import BottomSheetMenuExercise from "./components/BottomSheetMenuExercise";
import PagerNavigator from "../../components/PagerNavigator";
import ScreenContainer from "../../components/ScreenContainer";
import FloatingMenu from "./components/FloatingMenu";

export default WorkoutScreen = ({ route }) => {
  const { workoutId } = route.params || {};

  const { workoutDetails } = useSelector((state) => state.workouts);
  const { name } = workoutDetails;
  const [exerciseId, setExerciseId] = useState(null);

  const [bottomSheet, toggleBottomsheet] = useToggle(false);
  const [createSuperset, toggleCreateSuperset] = useToggle(false);

  const toggleBottomSheet = (id, type) => {
    id && setExerciseId({ id, type });
    toggleBottomsheet();
  };

  const pages = [
    {
      title: "Exercises",
      component: <ExercisesList workoutId={workoutId} toggleBottomSheet={toggleBottomSheet} />,
    },
    { title: "History", component: <></> },
  ];

  return (
    <ScreenContainer>
      <Header title={name} margin={false} />
      <PagerNavigator pages={pages} />
      <FloatingMenu />
      {createSuperset && (
        <CreateSupersetModal exerciseId={exerciseId.id} toggleModal={toggleCreateSuperset} />
      )}
      {bottomSheet && (
        <BottomSheetMenuExercise
          toggleBottomSheet={toggleBottomsheet}
          exerciseId={exerciseId}
          toggleCreateSuperset={toggleCreateSuperset}
        />
      )}
    </ScreenContainer>
  );
};
