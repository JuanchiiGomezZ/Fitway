import React from "react";
import { View } from "react-native";
import ContentExerciseSingle from "./ContentExerciseSingle";

export default ContentExerciseSuperset = ({ data }) => {
  return (
    <View style={{ gap: 30, paddingBottom: 50 }}>
      {data.Exercises.map((item, index) => (
        <ContentExerciseSingle data={item} index={index} key={item.id} />
      ))}
    </View>
  );
};
