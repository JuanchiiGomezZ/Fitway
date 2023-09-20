import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import { borderRadius, boxBackgroundColor, orangeColor, whiteColor } from "../../../styles/styles";


export default RoutineCard = ({ data, toggleBottomSheet }) => {
  const { t } = useTranslation();

  const { id, name, level, workoutsNumber, owner } = data;
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Text style={styles.routineName}>{name}</Text>
      <View style={styles.label}>
        <Text style={styles.labelText}>Fitway</Text>
      </View>
      <View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>{t("MyRoutines.level") + ": "}</Text>
          <Text style={[styles.rowTitle, { color: orangeColor }]}>{level}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>{t("MyRoutines.workouts") + ": "}</Text>
          <Text style={[styles.rowTitle, { color: orangeColor }]}>{workoutsNumber}</Text>
        </View>
      </View>
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
  label: {
    position: "absolute",
    right: 0,
    top: 0,
    borderColor: orangeColor,
    borderWidth: 1,
    paddingVertical: 3,
    borderTopRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    width: "30%",
  },
  labelText: {
    color: orangeColor,
    textAlign: "center",
  },
});
