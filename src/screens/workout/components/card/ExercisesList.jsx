import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, BackHandler } from "react-native";
import { useSelector } from "react-redux";
import ExerciseCardSingle from "./ExerciseCardSingle";
import ExerciseCardSuperset from "./ExerciseCardSuperset";
import FloatingMenu from "../FloatingMenu";
import Loader from "../../../../components/Loader";
import EmptyWorkout from "../EmptyWorkout";
import useToggle from "../../../../hooks/useToggle";
import BottomSheetMenuExercise from "../BottomSheetMenuExercise";

export default ExercisesList = ({ workoutId, toggleBottomSheet }) => {
  const { workoutDetails, workoutExercises, isLoading } = useSelector((state) => state.workouts);
  const { getWorkoutData } = useWorkoutsStore();

  useEffect(() => {
    workoutId != workoutDetails.workoutId && getWorkoutData(workoutId || workoutDetails.workoutId);
  }, []);

  return (
    <>
      {isLoading || !workoutExercises ? (
        <Loader />
      ) : (
        <>
          {!workoutExercises[0] ? (
            <EmptyWorkout />
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.container}>
                {workoutExercises.map((item, index) =>
                  item?.Exercises ? (
                    <ExerciseCardSuperset
                      data={item}
                      toggleConfig={toggleBottomSheet}
                      index={index}
                      key={item.id}
                    />
                  ) : (
                    <ExerciseCardSingle
                      data={item}
                      toggleConfig={toggleBottomSheet}
                      index={index}
                      key={item.id}
                    />
                  ),
                )}
              </View>
            </ScrollView>
          )}
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: { gap: 15, marginBottom: 100 },
});
