import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ContentExerciseSingle from "./ContentExerciseSingle";

export default ContentExerciseSuperset = ({ data }) => {
  return (
    <View style={{ gap: 25 }}>
      {data.Exercises.map((item) => (
        <View key={item.id}>
          <ContentExerciseSingle data={item} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
