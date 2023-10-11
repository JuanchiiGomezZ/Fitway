import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { BORDER_RADIUS, BOX_COLOR, GRAY_COLOR, WHITE_COLOR } from "../../../../styles/styles";
import { ConfigButton } from "../../../../components/Buttons";
import Animated, { FadeInDown, FadeOutLeft, Layout } from "react-native-reanimated";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
export default WorkoutCardSingle = ({ data, toggleConfig, index }) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const {
    name,
    element,
    muscle,
    series,
    ExerciseWithoutWeight,
    ExerciseOfDuration,
    id,
    Multimedia,
  } = data;
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
      <ConfigButton action={() => toggleConfig(id, "single")} />

      <Image
        source={
          !Multimedia.exerciseImg
            ? { uri: Multimedia.exerciseImg }
            : require("../../../../assets/images/fitwayDark.png")
        }
        style={styles.workoutImg}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.infoContainer}>
          <View>
            <Text style={[styles.text]}>{element}</Text>
            <Text style={[styles.text, styles.muscle]}>Biceps</Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.text}>Sets: {series}</Text>
            {ExerciseOfDuration ? (
              <Text style={styles.text}>Duration: {ExerciseOfDuration.duration}s</Text>
            ) : (
              <Text style={styles.text}>Reps: {ExerciseWithoutWeight.reps.join(" | ")}</Text>
            )}
          </View>
        </View>
      </View>
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: BOX_COLOR,
    borderRadius: BORDER_RADIUS,
    padding: 10,
    minHeight: 100,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  contentContainer: {
    flex: 1,
    gap: 10,
  },
  title: {
    color: WHITE_COLOR,
    fontSize: 22,
    fontWeight: "700",
    maxWidth: "65%",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  muscle: {
    color: GRAY_COLOR,
    fontWeight: "500",
    marginTop: -3,
  },
  text: {
    color: WHITE_COLOR,
    fontSize: 14,
    fontWeight: "600",
  },
  workoutImg: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});
