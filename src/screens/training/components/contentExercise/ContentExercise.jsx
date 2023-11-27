import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ContentExerciseSingle from "./ContentExerciseSingle";
import ContentExerciseSuperset from "./ContentExerciseSuperset";

export default ContentExercise = () => {
  const { t } = useTranslation();
  const { activeExercise } = useSelector((state) => state.training);

  return (
    <View style={{ marginTop: 20 }}>
      {activeExercise.Exercises ? (
        <ContentExerciseSuperset data={activeExercise} />
      ) : (
        <ContentExerciseSingle data={activeExercise} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
