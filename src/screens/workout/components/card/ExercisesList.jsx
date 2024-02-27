import React, { useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import ExerciseCardSingle from "./ExerciseCardSingle";
import ExerciseCardSuperset from "./ExerciseCardSuperset";
import Loader from "../../../../components/Loader";
import EmptyWorkout from "../EmptyWorkout";
import useWorkoutsStore from "../../../../hooks/redux/useWorkoutsStore";
import FloatingMenu from "../FloatingMenu";

export default ExercisesList = ({ workoutId }) => {
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
          {!workoutExercises || workoutExercises.length < 1 ? (
            <EmptyWorkout />
          ) : (
            <>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                  {workoutExercises.map((item, index) =>
                    item?.Exercises ? (
                      <ExerciseCardSuperset data={item} index={index} key={item.id} />
                    ) : (
                      <ExerciseCardSingle data={item} index={index} key={item.id} />
                    ),
                  )}
                </View>
              </ScrollView>
              <FloatingMenu />
            </>
          )}
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: { gap: 10, marginBottom: 100 },
});
