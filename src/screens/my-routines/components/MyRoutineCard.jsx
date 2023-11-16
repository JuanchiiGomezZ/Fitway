import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import { BORDER_RADIUS, BOX_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../../styles/styles";
import { ConfigButton } from "../../../components/Buttons";
import Animated, { FadeInDown, FadeOutLeft, Layout } from "react-native-reanimated";
import CardContainer from "../../../components/CardContainer";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export default MyRoutineCard = ({ data, toggleBottomSheet, index }) => {
  const { t } = useTranslation();
  const { id, name, difficulty, workoutCount, codeShare } = data;

  return (
    <CardContainer index={index} configAction={() => toggleBottomSheet(id, codeShare)}>
      <View style={styles.card}>
        <Text style={styles.routineName}>{name}</Text>
        <View>
          <View style={styles.row}>
            <Text style={styles.rowTitle}>{t("MyRoutines.level") + ": "}</Text>
            <Text style={[styles.rowTitle, { color: ORANGE_COLOR }]}>{difficulty}</Text>
          </View>
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
  card: {
    gap: 6,
  },
});
