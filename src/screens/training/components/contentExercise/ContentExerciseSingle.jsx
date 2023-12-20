import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ElementCard from "../../../../components/ElementCard";
import TableRepsWithWeight from "../exerciseTables/repsWithWeight/TableRepsWithWeight";
import { toggleExerciseGif } from "../../../../store/slices/trainingSlice";
import { useDispatch, useSelector } from "react-redux";
import { WHITE_COLOR } from "../../../../styles/styles";

export default ContentExerciseSingle = ({ data }) => {
  const dispatch = useDispatch();
  const {
    name,
    primaryMuscle,
    Multimedia,
    element,
    WorkoutExercise,
    SupersetExercise,
    ExerciseLogs,
  } = data;

  const { workoutLog } = useSelector((state) => state.training);

  const setExerciseGif = () => {
    dispatch(toggleExerciseGif(data.Multimedia?.exerciseGif));
  };

  return (
    <>
      <View style={styles.head}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={setExerciseGif}>
            <Image
              style={styles.image}
              source={{ uri: "https://i.blogs.es/85d668/bench-press-1/650_1200.jpg" }}
            />
          </TouchableOpacity>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {name}
          </Text>
        </View>
        <View style={styles.cardsContainer}>
          <ElementCard
            title="Muscle"
            name={primaryMuscle}
            img={Multimedia?.muscleImg}
            reverse={true}
          />
          <ElementCard title="Element" name={element} img={Multimedia?.elementImg} reverse={true} />
        </View>
      </View>
      <TableRepsWithWeight
        reps={WorkoutExercise?.reps || SupersetExercise?.reps}
        rest={WorkoutExercise?.resTime || SupersetExercise?.reps}
        id={data.id}
        exerciseLogs={ExerciseLogs[0]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: WHITE_COLOR,
    maxWidth: "70%",
  },
  cardsContainer: {
    gap: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    maxWidth: "62%",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
