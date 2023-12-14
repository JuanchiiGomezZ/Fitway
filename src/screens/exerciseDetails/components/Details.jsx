import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import ElementCard from "../../../components/ElementCard";
import { TextAreaWithLabel } from "../../../components/Inputs";

import ExerciseTypeConvert from "../../../helpers/ExerciseTypeConvert";

//COMPONENTS
import TableExercise from "./TableExercise";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { WHITE_COLOR } from "../../../styles/styles";
import useExercisesStore from "../../../hooks/redux/useExercisesStore";
import Loader from "../../../components/Loader";

export default Details = ({ id }) => {
  const [exerciseData, setExerciseData] = useState(null);
  const { getExerciseCompleteDetails } = useExercisesStore();

  useEffect(() => {
    getExerciseCompleteDetails(id).then((res) => {
      setExerciseData(res);
    });
  }, []);

  const { name, element, primaryMuscle, Multimedia, exerciseType, description, workoutExercise } =
    exerciseData || {};

  const { restTime, reps } = workoutExercise || {};

  return (
    <>
      {!exerciseData ? (
        <Loader />
      ) : (
        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
          {Multimedia?.exerciseImg ? (
            <Image source={{ uri: Multimedia.exerciseImg }} style={styles.image} />
          ) : (
            <View style={[styles.image]}>
              <MaterialCommunityIcons name="image-off-outline" size={30} color="#545454" />
            </View>
          )}
          <View style={{ width: "95%", gap: 20 }}>
            <Text style={styles.exerciseName}>{name}</Text>
            <TextAreaWithLabel
              label="Description"
              inputChange={description ? description : "Empty"}
              editable={false}
            />
            <View style={styles.selectorsContainer}>
              <ElementCard img={Multimedia?.muscleImg} name={primaryMuscle} title="Muscle" />
              <ElementCard img={Multimedia?.elementImg} name={element} title="Element" />
              <ElementCard icon="human-handsup" title={ExerciseTypeConvert(exerciseType)} />
              <ElementCard
                icon="timer-outline"
                title="Rest time"
                name={restTime ? restTime : "OFF"}
              />
            </View>
            <TableExercise reps={reps} />
          </View>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#545454",
    borderRadius: 60,
  },
  contentContainer: {
    alignItems: "center",
  },
  selectorsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 15,
  },
  exerciseName: {
    color: WHITE_COLOR,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
  },
});
