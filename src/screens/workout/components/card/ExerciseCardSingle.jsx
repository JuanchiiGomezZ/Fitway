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
    WorkoutExercise,
    SupersetExercise,
  } = data || {};
  const { reps } = SupersetExercise || WorkoutExercise || {};

  const handleNavigate = () => {
    navigate("ExerciseDetails", { id });
  };

  return (
    <CardContainer
      index={index}
      configAction={!superset ? () => toggleConfig(id, "single") : false}
      action={!superset && handleNavigate}
    >
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            toggleGIF(Multimedia.exerciseGif ? Multimedia.exerciseGif : Multimedia.exerciseImg);
          }}
        >
          <CardContainer.CardImage img={Multimedia.exerciseImg} />
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <CardContainer.Title>{name}</CardContainer.Title>
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
                  <Text style={[styles.text, { marginTop: -3 }]}>Reps: {reps?.join(" | ")}</Text>
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
    height: 65,
    justifyContent: "space-between",
  },
  infoContainer: {
    flexDirection: "row",
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
  row: {
    flexDirection: "row",
    gap: 10,
  },
});
