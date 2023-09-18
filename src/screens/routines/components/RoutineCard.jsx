import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import { borderRadius, boxBackgroundColor, grayLightColor, orangeColor, whiteColor } from "../../../styles/styles";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

export default RoutineCard = ({ data, toggleBottomSheet }) => {
  const { t } = useTranslation();

  const { id, name, level, workoutsNumber } = data;
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Text style={styles.routineName}>{name}</Text>
      <View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>{t("routines.level") + ": "}</Text>
          <Text style={[styles.rowTitle, { color: orangeColor }]}>{level}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>{t("routines.workouts") + ": "}</Text>
          <Text style={[styles.rowTitle, { color: orangeColor }]}>{workoutsNumber}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.config} onPress={() => toggleBottomSheet(id)}>
        <Feather name="more-vertical" size={25} color={grayLightColor} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    backgroundColor: boxBackgroundColor,
    borderRadius: borderRadius,
    padding: 10,
    gap: 5,
  },
  routineName: {
    color: whiteColor,
    fontSize: 22,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowTitle: {
    color: whiteColor,
    fontSize: 17,
    fontWeight: "500",
  },
  config: {
    position: "absolute",
    top: 10,
    right: 5,
  },
});
