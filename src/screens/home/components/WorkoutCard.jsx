import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useRef, useEffect } from "react";
import {
  BACKGROUND_COLOR,
  BORDER_RADIUS,
  BOX_COLOR,
  GRAY_COLOR,
  ORANGE_COLOR,
  WHITE_COLOR,
} from "../../../styles/styles";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import Animated, { FadeInDown, FadeOutLeft, Layout } from "react-native-reanimated";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export default WorkoutCard = ({ data, toggleBottomSheet, index }) => {
  const { muscles, name, id } = data;
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
      <TouchableOpacity
        style={styles.config}
        onPress={() => {
          toggleBottomSheet(id);
        }}
      >
        <Feather name="more-vertical" size={24} color={GRAY_COLOR} />
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <View style={{ width: "83%" }}>
          <Text style={styles.workoutName}>{name}</Text>
          <View style={styles.musclesContainer}>
            {muscles.map((item, index) => (
              <View style={styles.muscle} key={index}>
                <Text style={styles.muscleName}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
        <TouchableOpacity style={styles.trainingButton}>
          <FontAwesome5 name="dumbbell" size={24} color={BACKGROUND_COLOR} />
        </TouchableOpacity>
      </View>
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    backgroundColor: BOX_COLOR,
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: 10,
    paddingTop: 10,
    minHeight: 70,
    marginBottom: 15,
    paddingBottom: 12,
  },
  workoutName: {
    color: WHITE_COLOR,
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 10,
    width: "100%",
  },
  musclesContainer: {
    flexWrap: "wrap",
    gap: 5,
    flexDirection: "row",
    marginRight: 40,
    width: "100%",
  },
  muscle: {
    borderColor: ORANGE_COLOR,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 7,
    alignContent: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  muscleName: {
    color: ORANGE_COLOR,
    fontSize: 13,
  },
  config: {
    position: "absolute",
    top: 10,
    right: 5,
  },
  trainingButton: {
    width: 50,
    height: 50,
    backgroundColor: ORANGE_COLOR,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "91.5%",
  },
});
