import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { BORDER_RADIUS, BOX_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../../styles/styles";
import CardContainer from "../../../components/CardContainer";
import Row from "../../../components/Row";

export default RoutineCard = ({ data, toggleBottomSheet, index }) => {
  const { t } = useTranslation();

  const { id, name, level, WorkoutNumber, owner } = data;
  return (
    <CardContainer index={index}>
      <CardContainer.Title>{name}</CardContainer.Title>
      <View>
        <Row>
          <Text style={styles.rowTitle}>{t("MyRoutines.level") + ": "}</Text>
          <Text style={[styles.rowTitle, { color: ORANGE_COLOR }]}>{level}</Text>
        </Row>
        <Row>
          <Text style={styles.rowTitle}>{t("MyRoutines.workouts") + ": "}</Text>
          <Text style={[styles.rowTitle, { color: ORANGE_COLOR }]}>{WorkoutNumber}</Text>
        </Row>
      </View>
    </CardContainer>
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
  rowTitle: {
    color: WHITE_COLOR,
    fontSize: 17,
    fontWeight: "500",
  },
  label: {
    position: "absolute",
    right: 0,
    top: 0,
    borderColor: ORANGE_COLOR,
    borderWidth: 1,
    paddingVertical: 3,
    borderTopRightRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
    width: "30%",
  },
  labelText: {
    color: ORANGE_COLOR,
    textAlign: "center",
  },
});
