import React, { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { ButtonCircular } from "../../../../components/CustomButtons";
import { convertToHourMinutesSeconds } from "../../../../helpers/timeFormater";
import { BACKGROUND_COLOR, RED_COLOR, WHITE_COLOR } from "../../../../styles/styles";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import { useFonts } from "expo-font";
import { storage } from "../../../../helpers/storage";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { cleanWorkoutLog } from "../../../../store/slices/trainingSlice";

export default Timer = ({ useTimer }) => {
  const { pause, seconds, isPaused, start } = useTimer;
  const [fontsLoaded] = useFonts({
    Fugaz: require("../../../../assets/fonts/Fugaz.ttf"),
  });
  const { navigate, goBack } = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    const initialDate = storage.getString("workout_startDate_training");
    const initialTime = Math.round((new Date() - new Date(initialDate)) / 1000);
    start(initialTime || 0);
  }, []);

  const backAction = () => {
    goBack();
    dispatch(cleanWorkoutLog());
  };

  if (!fontsLoaded) return null;
  return (
    <Animated.View
      entering={SlideInDown}
      exiting={SlideOutDown.duration(300).easing()}
      style={styles.timerContent}
    >
      <ButtonCircular
        icon={"times"}
        bgColor={RED_COLOR}
        size={"m"}
        action={() =>
          navigate("ConfirmationAlert", {
            title: "Are you sure?",
            text: "This action will exit and discard your training.",
            confirmAction: backAction,
          })
        }
      />
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
