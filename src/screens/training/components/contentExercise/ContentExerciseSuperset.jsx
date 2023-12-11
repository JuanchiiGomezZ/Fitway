import React from "react";
import { StyleSheet, View } from "react-native";
import ContentExerciseSingle from "./ContentExerciseSingle";

export default ContentExerciseSuperset = ({ data }) => {
  return (
    <View style={{ gap: 30 }}>
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
