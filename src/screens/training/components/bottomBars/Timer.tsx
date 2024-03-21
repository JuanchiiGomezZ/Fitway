import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Text from "@/theme/components/Text";
import { ButtonCircular } from "../../../../components/CustomButtons";
import { convertToHourMinutesSeconds } from "../../../../helpers/timeFormater";
import {  RED_COLOR, WHITE_COLOR } from "../../../../styles/styles";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import { storage } from "../../../../helpers/storage";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { cleanTrainingLog } from "../../../../store/slices/trainingSlice";
import Row from "@/theme/components/Row";
import useTimer from "../../hooks/useTimer";
type TimerProps = typeof useTimer;
const Timer = ({ pause, seconds, isPaused, start }: TimerProps) => {
  const { navigate, goBack } = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    const initialDate = storage.getString("workout_startDate_training");
    const initialTime: number = Math.round(
      (new Date().getTime() - new Date(initialDate).getTime()) / 1000,
    );
    start(initialTime || 0);
  }, []);

  const backAction = () => {
    dispatch(cleanTrainingLog());
    goBack();
    goBack();
  };

  return (
    <Animated.View entering={SlideInDown} exiting={SlideOutDown.duration(300).easing()}>
      <Row
        height={60}
        px="space5"
        justifyContent="space-between"
        borderTopWidth={1}
        borderTopColor="secondary800"
      >
        <ButtonCircular
          icon="times"
          bgColor={RED_COLOR}
          size="m"
          action={() =>
            navigate("ConfirmationAlert", {
              title: "Are you sure?",
              text: "This action will exit and discard your training.",
              confirmAction: backAction,
            })
          }
        />
        <Text variant="headingLSecondary">{convertToHourMinutesSeconds(seconds)}</Text>
        <ButtonCircular icon={isPaused ? "play" : "pause"} action={pause} size="m" />
      </Row>
    </Animated.View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  timerContent: {
    borderTopColor: "#474747",
    borderTopWidth: 1,
  },
});
