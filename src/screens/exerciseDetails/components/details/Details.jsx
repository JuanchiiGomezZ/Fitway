import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import ElementCard from "../../../../components/ElementCard";
import { TextAreaWithLabel } from "../../../../components/Inputs";
import exerciseTypeConvert from "../../../../helpers/exerciseTypeConvert";

//COMPONENTS
import TableExercise from "./TableExercise";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { WHITE_COLOR } from "../../../../styles/styles";
import useExercisesStore from "../../../../hooks/redux/useExercisesStore";
import Loader from "../../../../components/Loader";
import { convertToMinutes } from "../../../../helpers/timeFormater";
import { ButtonCircular } from "../../../../components/CustomButtons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default Details = ({ exerciseData }) => {
  const { navigate } = useNavigation();

  const { name, element, primaryMuscle, Multimedia, exerciseType, description, WorkoutExercises } =
    exerciseData || {};
  return (
    <>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        showsVerticalScrollIndicator={false}
      >
        {Multimedia?.exerciseImg ? (
          <Image source={{ uri: Multimedia.exerciseImg }} style={styles.image} />
        ) : (
          <View style={[styles.image]}>
            <MaterialCommunityIcons name="image-off-outline" size={30} color="#545454" />
          </View>
        )}
        <View style={{ width: "95%", gap: 20, paddingBottom: 20 }}>
          <Text style={styles.exerciseName}>{name}</Text>
          <TextAreaWithLabel
            label="Description"
            inputChange={description ? description : "Empty"}
            editable={false}
          />
          <View style={styles.selectorsContainer}>
            <ElementCard img={Multimedia?.muscleImg} name={primaryMuscle} title="Muscle" />
            <ElementCard img={Multimedia?.elementImg} name={element} title="Element" />
            <ElementCard icon="human-handsup" title={exerciseTypeConvert(exerciseType)} />
            <ElementCard
              icon="timer-outline"
              title="Rest time"
              name={convertToMinutes(WorkoutExercises[0].restTime)}
            />
          </View>
          <TableExercise reps={WorkoutExercises[0].reps} />
        </View>
      </ScrollView>

      <View style={styles.editBtn}>
        <ButtonCircular
          icon="edit-2"
          iconFamily={Feather}
          iconSize={25}
          action={() => navigate("EditExercise", exerciseData)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
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
  editBtn: {
    position: "absolute",
    right: 0,
    bottom: 20,
  },
});
