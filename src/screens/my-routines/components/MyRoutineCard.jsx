import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import { BORDER_RADIUS, BOX_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../../styles/styles";
import { ConfigButton } from "../../../components/Buttons";
import Animated, { FadeInDown, FadeOutLeft, Layout } from "react-native-reanimated";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export default MyRoutineCard = ({ data, toggleBottomSheet, index }) => {
  const { t } = useTranslation();
  const { id, name, difficulty, workoutCount, codeShare } = data;
  const initialMode = useRef(true);
  useEffect(() => {
    initialMode.current = false;
  }, []);
  return (
    <AnimatedTouchable
      style={styles.cardContainer}
      entering={initialMode.current ? FadeInDown.delay(100 * index) : FadeInDown.delay(250)}
      exiting={FadeOutLeft}
      layout={Layout.delay(200)}
    >
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

      <ConfigButton action={() => toggleBottomSheet(id, codeShare)} />
    </AnimatedTouchable>
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
