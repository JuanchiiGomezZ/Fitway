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
import WorkoutCardSingle from "./ExerciseCardSingle";

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
      layout={Layout.delay(200)}
    >
      <ConfigButton
        action={() => {
          toggleConfig(data.id, "superset");
        }}
      />
      {data.exercises.map((item, index) => (
       
        <View key={item.SupersetExercise.ExerciseId}>
          <WorkoutCardSingle data={item} superset={true} />
          {index < data.exercises.length - 1 && <View style={styles.line} />}
        </View>
      ))}
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: BOX_COLOR,
    borderRadius: BORDER_RADIUS,
    paddingRight: 12,
  },

  line: {
    width: "90%",
    height: 1.5,
    backgroundColor: ORANGE_DARK_COLOR,
    marginVertical: 5,
    alignSelf: "center",
  },
});
