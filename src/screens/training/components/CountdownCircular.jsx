import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Circle, Svg } from "react-native-svg";
import {
  BACKGROUND_COLOR,
  BOX_COLOR,
  GRAY_COLOR,
  ORANGE_COLOR,
  WHITE_COLOR,
} from "../../../styles/styles";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import useCountdown from "../hooks/useCountdown";
import CountdownControlers from "./CountdownControlers";
import BackdropModals from "../../../components/BackdropModals";
import { convertToMinutesSeconds } from "../helper/timeFormater";
import { useFonts } from "expo-font";

const RADIUS = 45;
const CIRCUMFERENCE = RADIUS * 2 * Math.PI;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const screenWidth = Dimensions.get("window").width;

export default Countdown = ({ toggleModal, restTime }) => {
  const countdown = useCountdown();
  const { secondsLeft, isTimeOver, start } = countdown;
  const [fontsLoaded] = useFonts({
    Fugaz: require("../../../assets/fonts/Fugaz.ttf"),
  });
  const [time, setTime] = useState(restTime);

  useEffect(() => {
    if (isTimeOver) {
      const timeout = setTimeout(() => {
        toggleModal();
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [isTimeOver]);

  useEffect(() => {
    start(time);
  }, []);

  if (!fontsLoaded) return null;
  return (
    <>
      <BackdropModals />
      <Animated.View style={styles.container} entering={SlideInDown} exiting={SlideOutDown}>
        <View style={styles.countdownCounter}>
          <Text style={styles.progressText}>{convertToMinutesSeconds(secondsLeft)}</Text>
          <Text style={styles.restText}>Rest Time</Text>
        </View>
        <Svg
          height={screenWidth * 0.8}
          width="100%"
          viewBox="0 0 100 100"
          style={{ transform: [{ rotateZ: "-90deg" }] }}
        >
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke={BOX_COLOR}
            strokeWidth="3"
            fill={BACKGROUND_COLOR}
          />

          <AnimatedCircle
            cx="50"
            cy="50"
            r="45"
            strokeWidth="3"
            fill="transparent"
            stroke={ORANGE_COLOR}
            strokeDasharray={CIRCUMFERENCE}
            strokeLinecap={"butt"}
            strokeDashoffset={CIRCUMFERENCE * (secondsLeft / time)}
          />
        </Svg>

        <CountdownControlers useCountdown={countdown} time={time} setTime={setTime} />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    position: "absolute",
    top: "30%",
  },
  progressText: {
    color: WHITE_COLOR,
    fontSize: 65,
    textAlign: "center",
    fontFamily: "Fugaz",
  },
  countdownCounter: {
    textAlign: "center",
    position: "absolute",
    top: "25%",
    zIndex: 10,
  },
  restText: {
    color: GRAY_COLOR,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
  },
});
