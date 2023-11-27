import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import useTimer from "../hooks/useTimer";
import { CircularButtonSmall } from "../../../components/Buttons";
import { convertToHourMinutesSeconds } from "../helper/timeFormater";
import { BACKGROUND_COLOR, ORANGE_COLOR, RED_COLOR, WHITE_COLOR } from "../../../styles/styles";
import { AntDesign } from "@expo/vector-icons";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import { useFonts } from "expo-font";

export default Timer = ({useTimer}) => {
  const { pause, seconds, isPaused } = useTimer
  const [fontsLoaded] = useFonts({
    Fugaz: require("../../../assets/fonts/Fugaz.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <Animated.View
      entering={SlideInDown}
      exiting={SlideOutDown.duration(300).easing()}
      style={styles.timerContent}
    >
      <CircularButtonSmall icon={"close"} color={RED_COLOR} />
      <Text style={styles.textTimer}>{convertToHourMinutesSeconds(seconds)}</Text>
      <CircularButtonSmall icon={isPaused ? "play" : "pause"} action={pause} />
    </Animated.View>
  );
};

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  timerContent: {
    borderTopColor: "#474747",
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: BACKGROUND_COLOR,
    paddingHorizontal: "5%",
    height: 60,
  },
  textTimer: {
    color: WHITE_COLOR,
    fontSize: 31, //35
    fontWeight: "500",
    fontFamily: "Fugaz",
  },
  handleIcon: {
    alignItems: "center",
  },
});
