import React, { useCallback } from "react";
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import { Circle, Svg } from "react-native-svg";
import { BOX_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../../styles/styles";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("screen");
import useCountdown from "../../../hooks/useCountdown";

const RADIUS = 45;
const CIRCUMFERENCE = RADIUS * 2 * Math.PI;
const TIME = 90;

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedText = Animated.createAnimatedComponent(Text);

export default Countdown = () => {
  const { secondsLeft, start } = useCountdown();

  const progress = useSharedValue(0);
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCUMFERENCE * (1 - progress.value),
  }));

  const onPress = useCallback(() => {
    progress.value = withTiming(1, { duration: TIME * 1000 * 1.1 });
  }, []);

  const handleStart = () => {
    start(TIME);
  };

  const formatTime = (currentTime) => {
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.progressText}>{formatTime(secondsLeft)}</Text>
      <Button title="Start" onPress={handleStart} />
      <Svg height="65%" width="100%" viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke={BOX_COLOR}
          strokeWidth="7"
          fill="transparent"
        />
        <AnimatedCircle
          cx="50"
          cy="50"
          r="45"
          strokeWidth="7"
          fill="transparent"
          stroke={ORANGE_COLOR}
          strokeDasharray={CIRCUMFERENCE}
          /*  animatedProps={animatedProps} */
          strokeLinecap={"butt"}
          strokeDashoffset={CIRCUMFERENCE * (secondsLeft / TIME)}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    /*     flex: 1,
    justifyContent: "center",
    alignItems: "center", */
  },
  progressText: {
    color: WHITE_COLOR,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
