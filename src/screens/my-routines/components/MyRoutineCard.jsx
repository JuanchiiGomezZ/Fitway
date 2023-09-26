import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import { BORDER_RADIUS, BOX_COLOR, GRAY_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../../styles/styles";
import { Feather } from "@expo/vector-icons";

export default MyRoutineCard = ({ data, toggleBottomSheet }) => {
  const { t } = useTranslation();

  const { id, name, level, workoutsNumber } = data;
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Text style={styles.routineName}>{name}</Text>
      <View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>{t("MyRoutines.level") + ": "}</Text>
          <Text style={[styles.rowTitle, { color: ORANGE_COLOR }]}>{level}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>{t("MyRoutines.workouts") + ": "}</Text>
          <Text style={[styles.rowTitle, { color: ORANGE_COLOR }]}>{workoutsNumber}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.config} onPress={() => toggleBottomSheet(id)}>
        <Feather name="more-vertical" size={25} color={GRAY_COLOR} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    backgroundColor: BOX_COLOR,
    borderRadius: BORDER_RADIUS,
    padding: 10,
    gap: 5,
  },
  routineName: {
    color: WHITE_COLOR,
    fontSize: 22,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowTitle: {
    color: WHITE_COLOR,
    fontSize: 17,
    fontWeight: "500",
  },
  config: {
    position: "absolute",
    top: 10,
    right: 5,
  },
});
