import React from "react";
import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ContentExerciseSingle from "./ContentExerciseSingle";
import ContentExerciseSuperset from "./ContentExerciseSuperset";

export default ContentExercise = () => {
  const { t } = useTranslation();
  const { activeTrainingExercise, countdown } = useSelector((state) => state.training);

  return (
    <View style={[{ marginTop: 30 }, countdown.state && { marginBottom: 80 }]}>
      {activeTrainingExercise.Exercises ? (
        <ContentExerciseSuperset data={activeTrainingExercise} />
      ) : (
        <ContentExerciseSingle data={activeTrainingExercise} />
      )}
    </View>
  );
};
