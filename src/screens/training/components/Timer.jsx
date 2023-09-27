import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useTranslation } from "react-i18next";
import useTimer from "../../../hooks/useTimer";
import { OrangeCircularButton, RedCircularButton } from "../../../components/Buttons";
import { convertToHourMinutesSeconds } from "../helper/timeFormater";
import { BACKGROUND_COLOR, WHITE_COLOR } from "../../../styles/styles";
import { AntDesign } from "@expo/vector-icons";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";

export default Timer = () => {
  const { t } = useTranslation();
  const { pause, seconds, isPaused } = useTimer();
  const [openTimer, setOpenTimer] = useState(true);

  const toggleTimer = () => {
    setOpenTimer((prev) => !prev);
  };
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
        <Animated.View entering={SlideInDown} exiting={SlideOutDown}>
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
            <RedCircularButton icon={"close"} />
            <Text style={styles.textTimer}>{convertToHourMinutesSeconds(seconds)}</Text>
            <OrangeCircularButton icon={isPaused ? "play" : "pause"} task={pause} />
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
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 7,
    backgroundColor: BACKGROUND_COLOR,
  },
  textTimer: {
    color: WHITE_COLOR,
    fontSize: 35,
  },
  handleIcon: {
    alignItems: "center",
  },
});
