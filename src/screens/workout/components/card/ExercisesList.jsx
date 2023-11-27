import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import ExerciseCardSingle from "./ExerciseCardSingle";
import ExerciseCardSuperset from "./ExerciseCardSuperset";

export default WorkoutsList = ({ toggleConfig, toggleGIF }) => {
  const { workoutExercises } = useSelector((state) => state.workouts);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {workoutExercises.Exercises.map((item, index) =>
          item?.Exercises ? (
            <ExerciseCardSuperset data={item} toggleConfig={toggleConfig} index={index} key={item.id}/>
          ) : (
            <ExerciseCardSingle
              data={item}
              toggleConfig={toggleConfig}
              toggleGIF={toggleGIF}
              index={index}
              key={item.id}
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
