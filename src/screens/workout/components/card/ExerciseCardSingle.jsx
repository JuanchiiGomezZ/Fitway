import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from "react-native";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { GRAY_COLOR, WHITE_COLOR } from "../../../../styles/styles";
import CardContainer from "../../../../components/CardContainer";

export default WorkoutCardSingle = ({ data, toggleConfig, index, toggleGIF, superset }) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const {
    name,
    element,
    primaryMuscle,
    id,
    Multimedia,
    exerciseType,
    workoutExercise,
    supersetExercise,
    WorkoutExercise,
    SupersetExercise,
  } = data || {};
  const { reps } = workoutExercise || supersetExercise || SupersetExercise|| WorkoutExercise || {};

  return (
    <CardContainer
      index={index}
      configAction={!superset ? () => toggleConfig(id, "single") : false}
    >
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            toggleGIF(Multimedia.exerciseGif ? Multimedia.exerciseGif : Multimedia.exerciseImg);
          }}
        >
          <Image
            source={
              Multimedia?.exerciseImg
                ? { uri: Multimedia.exerciseImg }
                : require("../../../../assets/images/fitwayDark.png")
            }
            style={styles.workoutImg}
          />
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.infoContainer}>
            <View>
              <Text style={[styles.text]}>{element}</Text>
              <Text style={[styles.text, styles.muscle]}>{primaryMuscle}</Text>
            </View>
            {reps && (
              <View style={{ alignItems: "flex-end" }}>
                <Text style={styles.text}>Sets: {reps?.length}</Text>
                {exerciseType == "ExerciseOfDuration" ? (
                  <Text style={styles.text}>Duration: {reps[0]}s</Text>
                ) : (
                  <Text style={styles.text}>Reps: {reps?.join(" | ")}</Text>
                )}
              </View>
            )}
          </View>
        </View>
      </View>
    </CardContainer>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    height: 70,
    justifyContent: "space-between",
  },
  title: {
    color: WHITE_COLOR,
    fontSize: 22,
    fontWeight: "700",
    maxWidth: "65%",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  muscle: {
    color: GRAY_COLOR,
    fontWeight: "500",
    marginTop: -3,
  },
  text: {
    color: WHITE_COLOR,
    fontSize: 14,
    fontWeight: "600",
  },
  workoutImg: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
});
