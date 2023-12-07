import React, { useState } from "react";
import ExerciseCardSingle from "./ExerciseSingleCard";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GRAY_COLOR } from "../../../../styles/styles";

export default ExerciseSupersetCard = ({ data }) => {
  return (
    <View style={styles.row}>
      <View>
        {data.Exercises.map((item) => (
          <ExerciseCardSingle data={item} superset={true} key={item.id} />
        ))}
      </View>
      <Ionicons name="md-reorder-three-outline" size={30} color={GRAY_COLOR} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
