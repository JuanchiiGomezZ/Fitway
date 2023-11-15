import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { BORDER_RADIUS, BOX_COLOR, GRAY_COLOR, WHITE_COLOR } from "../../../../styles/styles";
import { ConfigButton } from "../../../../components/Buttons";
import Animated, { FadeInDown, Layout, FadeOut } from "react-native-reanimated";

export default WorkoutCardSingle = ({ data, toggleConfig, index, toggleGIF, superset }) => {
  const AnimatedTouchable = Animated.createAnimatedComponent(superset ? View : Pressable);
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const {
    name,
    element,
    primaryMuscle,
    id,
    multimedia,
    exerciseType,
    WorkoutExercise,
    SupersetExercise,
    workoutExercise,
  } = data || {};
  const { reps, order, durations } = WorkoutExercise || SupersetExercise || workoutExercise || {};

  const initialMode = useRef(true);
  useEffect(() => {
    initialMode.current = false;
  }, []);
  
  return (
    <AnimatedTouchable
      style={styles.cardContainer}
      entering={initialMode.current && FadeInDown.delay(100 * index)}
      exiting={FadeOut}
      layout={Layout.delay(200)}
    >
      <>
        {!superset && <ConfigButton action={() => toggleConfig(id, "single")} />}

        <TouchableOpacity
          onPress={() => {
            toggleGIF(multimedia.exerciseGif ? multimedia.exerciseGif : multimedia.exerciseImg);
          }}
        >
          <Image
            source={
              multimedia?.exerciseImg
                ? { uri: multimedia.exerciseImg }
                : require("../../../../assets/images/fitwayDark.png")
            }
            style={styles.workoutImg}
          />
        </TouchableOpacity>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.infoContainer}>
            <View>
              <Text style={[styles.text]}>{element}</Text>
              <Text style={[styles.text, styles.muscle]}>{primaryMuscle}</Text>
            </View>
            {reps && (
              <View style={{ alignItems: "flex-end" }}>
                <Text style={styles.text}>Sets: {reps?.length}</Text>
                {exerciseType == "ExerciseOfDuration" ? (
                  <Text style={styles.text}>Duration: {reps[0]}s</Text>
                ) : (
                  <Text style={styles.text}>Reps: {reps?.join(" | ")}</Text>
                )}
              </View>
            )}
          </View>
        </View>
      </>
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: BOX_COLOR,
    borderRadius: BORDER_RADIUS,
    padding: 7,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  contentContainer: {
    flex: 1,
    gap: 7,
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
