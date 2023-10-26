import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, RefreshControl } from "react-native";
import { useSelector } from "react-redux";
import ExerciseCardSingle from "./ExerciseCardSingle";
import ExerciseCardSuperset from "./ExerciseCardSuperset";
import useWorkoutsStore from "../../../../hooks/redux/useWorkoutsStore";
import { ORANGE_COLOR } from "../../../../styles/styles";

export default WorkoutsList = ({ toggleConfig, toggleGIF }) => {
  const { activeWorkoutExercises, activeWorkoutDetails, isLoading } = useSelector(
    (state) => state.workouts,
  );

  const handleRefresh = () => {
    /* getWorkoutsData(activeWorkoutDetails.workoutId); */
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={handleRefresh}
          colors={[ORANGE_COLOR]}
          tintColor={ORANGE_COLOR}
        />
      }
    >
      <View style={styles.container}>
        {activeWorkoutExercises.exercises.map((item, index) =>
          item?.exercises ? (
            <ExerciseCardSuperset data={item} toggleConfig={toggleConfig} index={index} />
          ) : (
            <ExerciseCardSingle
              key={item.id}
              data={item}
              toggleConfig={toggleConfig}
              toggleGIF={toggleGIF}
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
