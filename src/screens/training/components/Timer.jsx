import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useTranslation } from "react-i18next";
import useTimer from "../hooks/useTimer";
import { CircularButtonSmall } from "../../../components/Buttons";
import { convertToHourMinutesSeconds } from "../helper/timeFormater";
import { BACKGROUND_COLOR, ORANGE_COLOR, RED_COLOR, WHITE_COLOR } from "../../../styles/styles";
import { AntDesign } from "@expo/vector-icons";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import { useFonts } from "expo-font";

export default Timer = () => {
  const { t } = useTranslation();
  const { pause, seconds, isPaused } = useTimer();
  const [fontsLoaded] = useFonts({
    Fugaz: require("../../../assets/fonts/Fugaz.ttf"),
  });

  const [openTimer, setOpenTimer] = useState(true);

  const toggleTimer = () => {
    setOpenTimer((prev) => !prev);
  };
  if (!fontsLoaded) return null;
  return (
    <View style={styles.timerContainer}>
      {!openTimer && (
        <View style={styles.handleIcon}>
          <AntDesign
            name={"caretup"}
            size={26}
            color={WHITE_COLOR}
            onPress={toggleTimer}
            style={{ marginBottom: 5 }}
          />
        </View>
      )}

      {openTimer && (
        <Animated.View entering={SlideInDown} exiting={SlideOutDown.duration(300).easing()}>
          <View style={styles.handleIcon}>
            <AntDesign
              name={"caretdown"}
              size={26}
              color={WHITE_COLOR}
              onPress={toggleTimer}
              style={{ marginBottom: 5 }}
            />
          </View>
          <View style={styles.timerContent}>
            <CircularButtonSmall icon={"close"} color={RED_COLOR} />
            <Text style={styles.textTimer}>{convertToHourMinutesSeconds(seconds)}</Text>
            <CircularButtonSmall
              icon={isPaused ? "play" : "pause"}
              action={pause}
              color={ORANGE_COLOR}
            />
          </View>
        </Animated.View>
      )}
    </View>
  );
};

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  timerContainer: {
    width: width,
    position: "absolute",
    bottom: 0,
    left: 0,
    justifyContent: "center",
  },
  timerContent: {
    borderTopColor: "#474747",
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: BACKGROUND_COLOR,
    paddingHorizontal: "5%",
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
