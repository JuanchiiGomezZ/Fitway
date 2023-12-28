import React, { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { ButtonCircular } from "../../../../components/CustomButtons";
import { convertToHourMinutesSeconds } from "../../../../helpers/timeFormater";
import { BACKGROUND_COLOR, RED_COLOR, WHITE_COLOR } from "../../../../styles/styles";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import { useFonts } from "expo-font";
import { storage } from "../../../../helpers/storage";

export default Timer = ({ useTimer, toggleConfExitAlert }) => {
  const { pause, seconds, isPaused, start } = useTimer;
  const [fontsLoaded] = useFonts({
    Fugaz: require("../../../../assets/fonts/Fugaz.ttf"),
  });

  useEffect(() => {
    const initialDate = storage.getString("workout_startDate_training");
    const initialTime = Math.round((new Date() - new Date(initialDate)) / 1000);

    start(initialTime || 0);
  }, []);

  if (!fontsLoaded) return null;
  return (
    <Animated.View
      entering={SlideInDown}
      exiting={SlideOutDown.duration(300).easing()}
      style={styles.timerContent}
    >
      <ButtonCircular icon={"times"} bgColor={RED_COLOR} size={"m"} action={toggleConfExitAlert} />
      <Text style={styles.textTimer}>{convertToHourMinutesSeconds(seconds)}</Text>
      <ButtonCircular icon={isPaused ? "play" : "pause"} action={pause} size={"m"} />
    </Animated.View>
  );
};

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
});
