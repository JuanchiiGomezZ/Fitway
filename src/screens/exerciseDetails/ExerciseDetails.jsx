import React from "react";
import { StyleSheet, Text, View } from "react-native";

//HOOKS

//COMPONENTS
import ScreenContainer from "../../components/ScreenContainer";
import Details from "./components/details/Details";
import PagerNavigator from "../../components/PagerNavigator";
import ExerciseHistory from "./components/history/ExerciseHistory";

//STYLES

export default ExerciseDetails = ({ route }) => {
  const { id } = route.params;

  const pages = [
    {
      title: "Exercises",
      component: <ExerciseHistory/>,
    },
    { title: "History", component: <ExerciseHistory/> },
  ];
  return (
    <ScreenContainer>
      <PagerNavigator pages={pages} goBack={true} />
    </ScreenContainer>
  );
};

