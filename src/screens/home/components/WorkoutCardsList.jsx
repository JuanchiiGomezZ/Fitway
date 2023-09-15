import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import WorkoutCard from "./WorkoutCard";
import workoutDataTest from "../helpers/workoutDataTest.json";

export default WorkoutCardsList = ({toggleBottomSheet}) => {
  return (
    <View style={styles.cardsContainer}>
      {workoutDataTest.map((item, index) => (
        <WorkoutCard key={index} name={item.name} muscles={item.muscles} toggleBottomSheet={toggleBottomSheet} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {},
});
