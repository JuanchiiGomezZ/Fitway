import React, { useState } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useTranslation } from "react-i18next";
import { GRAY_COLOR, GRAY_LIGHT_COLOR, GREEN_COLOR, WHITE_COLOR } from "../../../../styles/styles";
import { Ionicons } from "@expo/vector-icons";

export default ExerciseSingleCard = ({ data, action, superset, isActive }) => {
  const { t } = useTranslation();
  return (
    <Pressable
      style={[styles.row, styles.cardContainer, { elevation: isActive ? 30 : 0 }]}
      onLongPress={action}
    >
      <View style={[styles.row, { gap: 10 }]}>
        <Image
          source={
            data?.Multimedia?.exerciseImg
              ? { uri: data.Multimedia.exerciseImg }
              : require("../../../../assets/images/icon.png")
          }
          style={styles.exerciseImg}
        />
        <Text style={styles.exerciseText}>{data.name}</Text>
      </View>
      {!superset && <Ionicons name="md-reorder-three-outline" size={30} color={GRAY_COLOR} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardContainer: {
    paddingVertical: 6,
    justifyContent: "space-between",
  },
  exerciseImg: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  exerciseText: {
    color: WHITE_COLOR,
    fontSize: 18,
    fontWeight: "500",
  },
});
