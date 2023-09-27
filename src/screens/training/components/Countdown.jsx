import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Circle, Svg } from "react-native-svg";
import {
  BACKGROUND_COLOR,
  BOX_COLOR,
  GRAY_COLOR,
  ORANGE_COLOR,
  WHITE_COLOR,
} from "../../../styles/styles";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import useCountdown from "../../../hooks/useCountdown";
import CountdownControlers from "./CountdownControlers";
import BackdropModals from "../../../components/BackdropModals";
import { convertToMinutesSeconds } from "../helper/timeFormater";

const RADIUS = 45;
const CIRCUMFERENCE = RADIUS * 2 * Math.PI;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default Countdown = ({ toggleModal, restTime }) => {
  const countdown = useCountdown();
  const { secondsLeft, isTimeOver } = countdown;
  const [time, setTime] = useState(restTime);

  useEffect(() => {
    if (isTimeOver) {
      const timeout = setTimeout(() => {
        toggleModal();
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [isTimeOver]);

  return (
    <>
      <BackdropModals />
      <Animated.View style={styles.container} entering={SlideInDown} exiting={SlideOutDown}>
        <View style={styles.countdownCounter}>
          <Text style={styles.progressText}>{convertToMinutesSeconds(secondsLeft)}</Text>
          <Text style={styles.restText}>Rest Time</Text>
        </View>

        <Svg height="55%" width="100%" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke={BOX_COLOR}
            strokeWidth="5"
            fill={BACKGROUND_COLOR}
          />
          <AnimatedCircle
            cx="50"
            cy="50"
            r="45"
            strokeWidth="5"
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  progressText: {
    color: WHITE_COLOR,
    fontSize: 70,
    fontWeight: "bold",
    textAlign: "center",
  },
  countdownCounter: {
    textAlign: "center",
    position: "absolute",
    top: "34%",
    gap: 30,
    zIndex: 10,
  },
  restText: {
    color: GRAY_COLOR,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
  },
});
