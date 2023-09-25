import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {
  backgroundColor,
  borderRadius,
  boxBackgroundColor,
  grayLightColor,
  orangeColor,
  whiteColor,
} from "../../../styles/styles";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

import Animated, { FadeInDown, FadeOutLeft } from "react-native-reanimated";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
export default WorkoutCard = ({ data, toggleBottomSheet }) => {
  const { muscles, name, id } = data;
  return (
    <AnimatedTouchable style={styles.cardContainer} entering={FadeInDown.delay(250)}>
      <TouchableOpacity
        style={styles.config}
        onPress={() => {
          toggleBottomSheet(id);
        }}
      >
        <Feather name="more-vertical" size={24} color={grayLightColor} />
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
          <FontAwesome5 name="dumbbell" size={24} color={backgroundColor} />
        </TouchableOpacity>
      </View>
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    backgroundColor: boxBackgroundColor,
    borderRadius: borderRadius,
    paddingHorizontal: 10,
    paddingTop: 10,
    minHeight: 70,
    marginBottom: 15,
    paddingBottom: 12,
  },
  workoutName: {
    color: whiteColor,
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
    borderColor: orangeColor,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 7,
    alignContent: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  muscleName: {
    color: orangeColor,
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
    backgroundColor: orangeColor,
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
