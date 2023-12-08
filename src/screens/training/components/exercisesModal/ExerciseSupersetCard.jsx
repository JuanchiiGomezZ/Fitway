import React, { useState } from "react";
import ExerciseCardSingle from "./ExerciseSingleCard";
import { View, StyleSheet, Pressable } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { GRAY_COLOR } from "../../../../styles/styles";
import { useSelector } from "react-redux";
import MarkIcon from "./MarkIcon";

export default ExerciseSupersetCard = ({ data, isActive, action, index }) => {
  const { numActiveExercise } = useSelector((state) => state.training);
  return (
    <Pressable
      style={[styles.row, styles.cardContainer, { elevation: isActive ? 30 : 0 }]}
      onLongPress={action}
    >
      <View style={{ gap: 5 }}>
        {data.Exercises.map((item) => (
          <ExerciseCardSingle data={item} superset={true} key={item.id} />
        ))}
      </View>
      <View style={[styles.row, { gap: 5 }]}>
        {index == numActiveExercise && <MarkIcon />}
        <Ionicons name="md-reorder-three-outline" size={30} color={GRAY_COLOR} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardContainer: {
    justifyContent: "space-between",
    paddingVertical: 6,
  },
});
