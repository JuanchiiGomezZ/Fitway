import React, { useEffect, useState } from "react";

//HOOKS
import useExercisesStore from "../../hooks/redux/useExercisesStore";

//COMPONENTS
import ScreenContainer from "../../components/ScreenContainer";
import Details from "./components/details/Details";
import PagerNavigator from "../../components/PagerNavigator";
import ExerciseHistory from "./components/history/ExerciseHistory";
import Loader from "../../components/Loader";

export default ExerciseDetails = ({ route }) => {
  const { id } = route.params;
  const [exerciseData, setExerciseData] = useState(null);
  const { getExerciseCompleteDetails } = useExercisesStore();

  useEffect(() => {
    getExerciseCompleteDetails(id).then((res) => {
      setExerciseData(res);
    });
  }, []);

  const pages = [
    {
      title: "Exercises",
      component: <Details exerciseData={exerciseData} />,
    },
    { title: "History", component: <ExerciseHistory exercsieLogs={[]} /> },
  ];
  return (
    <ScreenContainer>
      {!exerciseData ? <Loader/> : <PagerNavigator pages={pages}  goBack />}
    </ScreenContainer>
  );
};
