import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  BACKGROUND_COLOR,
  BOX_COLOR,
  GRAY_COLOR,
  GRAY_LIGHT_COLOR,
  ORANGE_COLOR,
  PADDING_HORIZONTAL,
  WHITE_COLOR,
} from "../../../styles/styles";

//HOOKS
import { useFonts } from "expo-font";
import { ButtonCircular } from "../../../components/CustomButtons";
import useCountdown from "../hooks/useCountdown";
import { convertToMinutesSeconds } from "../../../helpers/timeFormater";
import Animated, {
  Easing,
  FadeInDown,
  FadeOutDown,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { setCountdown } from "../../../store/slices/trainingSlice";
import { FontAwesome } from "@expo/vector-icons";

export default Countdown = () => {
  const { secondsLeft, isTimeOver, start, addTime, skipTime, isPaused } = useCountdown();
  const dispatch = useDispatch();
  const { countdown } = useSelector((state) => state.training);

  const [time, setTime] = useState(countdown.restTime || 30);
  const progress = Math.min((secondsLeft * 100) / time, 100);

  const animatedWidth = useAnimatedStyle(() => {
    return {
      width: withTiming(`${progress}%`, { duration: 120, easing: Easing.ease }),
    };
  });

  useEffect(() => {
    start(countdown.restTime);
  }, [countdown.restTime]);

  const [fontsLoaded] = useFonts({
    Fugaz: require("../../../assets/fonts/Fugaz.ttf"),
  });

  const handleAddTime = (extraTime) => {
    setTime((prev) => {
      if (prev + extraTime > 1) {
        return prev + extraTime;
      }
      return 0;
    });
    addTime(extraTime);
  };

  const handlePlay = () => {
    start(time);
  };

  useEffect(() => {
    if (isTimeOver) {
      const timeout = setTimeout(() => {
        dispatch(setCountdown({ state: false, restTime: 0 }));
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [isTimeOver]);

  if (!fontsLoaded) return null;
  return (
    <Animated.View style={styles.container} entering={FadeInDown} exiting={FadeOutDown}>
      <Pressable style={styles.settingsBtn}>
        <FontAwesome name="cog" size={20} color={GRAY_LIGHT_COLOR} />
      </Pressable>
      <View style={styles.toolsContainer}>
        <ButtonCircular icon={isPaused ? "play" : "pause"} action={handlePlay} size={"s"} />
        <Text style={[styles.countdownText, styles.textSmall]} onPress={() => handleAddTime(-15)}>
          -15
        </Text>
        <Text style={styles.countdownText}>{convertToMinutesSeconds(secondsLeft)}</Text>
        <Text style={[styles.countdownText, styles.textSmall]} onPress={() => handleAddTime(15)}>
          +15
        </Text>
        <ButtonCircular size="s" icon="forward" action={skipTime} />
      </View>
      <View style={styles.progressContainer}>
        <Animated.View style={[styles.progress, animatedWidth]} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1.5,
    borderColor: GRAY_COLOR,
    position: "absolute",
    bottom: 100,
    left: PADDING_HORIZONTAL,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BOX_COLOR,
    paddingVertical: 10,
    borderRadius: 5,
  },
  progressContainer: {
    width: "90%",
    height: 7,
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  progress: {
    height: 7,
    borderRadius: 5,
    backgroundColor: ORANGE_COLOR,
  },
  countdownText: {
    color: WHITE_COLOR,
    fontFamily: "Fugaz",
    fontSize: 25,
  },
  textSmall: {
    fontSize: 18,
    color: GRAY_LIGHT_COLOR,
  },
  toolsContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  settingsBtn: {
    backgroundColor: BOX_COLOR,
    position: "absolute",
    top: -22,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
