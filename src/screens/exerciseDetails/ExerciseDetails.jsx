import React from "react";
import { StyleSheet, Text, View } from "react-native";

//HOOKS

//COMPONENTS
import ScreenContainer from "../../components/ScreenContainer";
import Header from "../../components/Header";
import Details from "./components/Details";
import PagerNavigator from "../../components/PagerNavigator";

//STYLES

export default ExerciseDetails = ({ route }) => {
  const { id } = route.params;

  const pages = [
    {
      title: "Exercises",
      component: <Details id={id} />,
    },
    { title: "History", component: <></> },
  ];
  return (
    <ScreenContainer>
      <PagerNavigator pages={pages} goBack={true} />
    </ScreenContainer>
  );
};

