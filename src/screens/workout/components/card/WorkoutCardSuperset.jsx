import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import {
  BORDER_RADIUS,
  BOX_COLOR,
  GRAY_COLOR,
  ORANGE_DARK_COLOR,
  WHITE_COLOR,
} from "../../../../styles/styles";
import { ConfigButton } from "../../../../components/Buttons";
import Animated, { FadeInDown, FadeOutLeft, Layout } from "react-native-reanimated";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
export default WorkoutCardSuperset = ({ data, toggleConfig, index }) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();

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
      <ConfigButton
        action={() => {
          toggleConfig(data.id, "superset");
        }}
      />
      {data.Exercises.map((item, index) => (
        <>
          <View style={styles.cardSingleContainer} key={item.id}>
            <Image
              source={
                item.Multimedia.exerciseImg
                  ? { uri: item.Multimedia.exerciseImg }
                  : require("../../../../assets/images/fitwayDark.png")
              }
              style={styles.workoutImg}
            />

            <View style={styles.contentContainer}>
              <Text style={styles.title}>{item.name}</Text>
              <View style={styles.infoContainer}>
                <View>
                  <Text style={[styles.text]}>{item.element}</Text>
                  <Text style={[styles.text, styles.muscle]}>Biceps</Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Text style={styles.text}>Sets: {item.series}</Text>
                  {item.ExerciseOfDuration ? (
                    <Text style={styles.text}>Duration: {item.ExerciseOfDuration.duration}s</Text>
                  ) : (
                    <Text style={styles.text}>Reps: 12 | 12 | 12</Text>
                  )}
                </View>
              </View>
            </View>
          </View>
          {index < data.Exercises.length - 1 && <View style={styles.line} />}
        </>
      ))}
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: BOX_COLOR,
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: 15,
    paddingVertical: 3,
  },
  cardSingleContainer: {
    minHeight: 100,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
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
  line: {
    width: "100%",
    height: 1,
    backgroundColor: ORANGE_DARK_COLOR,
    marginVertical: 5,
    alignSelf: "center",
  },
});
