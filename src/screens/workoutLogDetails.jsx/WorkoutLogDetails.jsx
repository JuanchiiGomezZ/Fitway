import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

//HOOKS

//COMPONENTS
import ScreenContainer from "../../components/ScreenContainer";
import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import ExerciseLogCard from "./components/ExerciseLogCard";
import { ORANGE_COLOR } from "../../styles/styles";
import SeparatingLine from "../../components/SeparatingLine";
import Empty from "./components/Empty";
export default WorkoutLogDetails = ({ route }) => {
  const { id } = route.params;

  const data = ["12x15kg", "10x20kg", "8x21kg", "-"];
  return (
    <ScreenContainer>
      <Header title={"12/12/2023"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          <Subtitle title={"Workout name"} />
          <Text style={styles.timeText}>01:43:12</Text>
        </View>
        <View style={styles.exercisesContainer}>
          <ExerciseLogCard data={data} name={"Press bench"} />
          <SeparatingLine />
          <ExerciseLogCard data={data} name={"Press bench"} />
          <SeparatingLine />
          <ExerciseLogCard data={data} name={"Press bench"} />
        </View>
      </ScrollView>
      {/* <Empty /> */}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  timeText: {
    color: ORANGE_COLOR,
    fontSize: 20,
    fontWeight: "500",
  },
  exercisesContainer: {
    marginVertical: 20,
    gap: 30,
  },
});
