import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ElementCard from "../../../../components/ElementCard";
import TableRepsWithWeight from "../exerciseTables/repsWithWeight/TableRepsWithWeight";
import { toggleExerciseGif } from "../../../../store/slices/trainingSlice";
import { useDispatch } from "react-redux";
import searchLogById from "../../helper/searchLogById";

export default ContentExerciseSingle = ({ data }) => {
  const dispatch = useDispatch();
  const { name, primaryMuscle, Multimedia, element, WorkoutExercise, SupersetExercise } = data;

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
          <Text style={styles.title}>{name}</Text>
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
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 33,
    fontWeight: "700",
    color: "white",
  },
  cardsContainer: {
    gap: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
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
