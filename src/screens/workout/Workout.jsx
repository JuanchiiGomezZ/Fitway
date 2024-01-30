import React, { useState } from "react";

//HOOKS
import { useSelector } from "react-redux";
import useToggle from "../../hooks/useToggle";

//COMPONENTS
import Header from "../../components/Header";
import ExercisesList from "./components/card/ExercisesList";
import CreateSupersetModal from "./components/CreateSupersetModal";
import ScreenContainer from "../../components/ScreenContainer";


export default WorkoutScreen = ({ route }) => {
  const { workoutId } = route.params || {};
  const { workoutDetails } = useSelector((state) => state.workouts);
  const { name } = workoutDetails;
  const [exerciseId, setExerciseId] = useState(null);

  const [createSuperset, toggleCreateSuperset] = useToggle(false);





  return (
    <ScreenContainer>
      <Header title={name} />
      <ExercisesList workoutId={workoutId} />
      {createSuperset && (
        <CreateSupersetModal exerciseId={exerciseId.id} toggleModal={toggleCreateSuperset} />
      )}

    </ScreenContainer>
  );
};
