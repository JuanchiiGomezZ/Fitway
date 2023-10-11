import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import WorkoutCardSingle from "./WorkoutCardSingle";
import WorkoutCardSuperset from "./WorkoutCardSuperset";

export default WorkoutsList = ({ toggleConfig }) => {
  const { activeWorkoutExercises } = useSelector((state) => state.workouts);

  return (
    <ScrollView>
      <View style={styles.container}>
        {activeWorkoutExercises.exercises.map((item, index) =>
          item?.quantity ? (
            <WorkoutCardSuperset data={item} toggleConfig={toggleConfig} index={index} />
          ) : (
            <WorkoutCardSingle
              key={item.id}
              data={item}
              toggleConfig={toggleConfig}
              index={index}
            />
          ),
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { gap: 15, marginBottom: 100 },
});
