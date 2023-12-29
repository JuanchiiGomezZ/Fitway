import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { ORANGE_COLOR, WHITE_COLOR } from "../../../styles/styles";
import CardContainer from "../../../components/CardContainer";

export default MyRoutineCard = ({ data, toggleBottomSheet, index }) => {
  const { t } = useTranslation();
  const { id, name, difficulty, workoutCount, codeShare } = data;

  return (
    <CardContainer index={index} configAction={() => toggleBottomSheet(id, codeShare)}>
      <View style={styles.card}>
        <CardContainer.Title>{name}</CardContainer.Title>
        <View>
          <View style={styles.row}>
            <Text style={styles.rowTitle}>{t("MyRoutines.workouts") + ": "}</Text>
            <Text style={[styles.rowTitle, { color: ORANGE_COLOR }]}>{workoutCount}</Text>
          </View>
        </View>
      </View>
    </CardContainer>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowTitle: {
    color: WHITE_COLOR,
    fontSize: 17,
    fontWeight: "500",
  },
  card: {
    gap: 6,
  },
});
