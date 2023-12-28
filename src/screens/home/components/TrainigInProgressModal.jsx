import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  BOX_COLOR,
  GRAY_COLOR,
  PADDING_HORIZONTAL,
  RED_COLOR,
  WHITE_COLOR,
} from "../../../styles/styles";

//HOOKS
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import useTimer from "../../training/hooks/useTimer";
import { convertToHourMinutesSeconds } from "../../../helpers/timeFormater";
import { useNavigation } from "@react-navigation/native";
import { storage } from "../../../helpers/storage";
import { cleanWorkoutLog } from "../../../store/slices/trainingSlice";
import { useDispatch } from "react-redux";
//COMPONENTS
import { ButtonCircular } from "../../../components/CustomButtons";

export default TrainigInProgressModal = ({ workoutId }) => {
  const dispatch = useDispatch();
  const { pause, seconds, isPaused, start } = useTimer();
  const { navigate } = useNavigation();

  useEffect(() => {
    const initialDate = storage.getString("workout_startDate_training");
    const initialTime = Math.round((new Date() - new Date(initialDate)) / 1000);

    start(initialTime || 0);
  }, []);

  const handleDiscardTraining = () => {
    dispatch(cleanWorkoutLog());
  };

  return (
    <Animated.View style={styles.container} entering={FadeInDown} exiting={FadeOutDown}>
      <Text style={styles.title}>TRAINING IN PROGRESS</Text>
      <View style={styles.row}>
        <ButtonCircular
          icon={"times"}
          bgColor={RED_COLOR}
          size={"m"}
          action={handleDiscardTraining}
        />
        <Text style={styles.textTimer}>{convertToHourMinutesSeconds(seconds)}</Text>
        <ButtonCircular
          icon="play"
          action={() => {
            navigate("Training", { id: workoutId });
          }}
          size={"m"}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1.3,
    borderColor: "#535353",
    position: "absolute",
    bottom: 10,
    left: PADDING_HORIZONTAL,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BOX_COLOR,
    paddingVertical: 5,
    borderRadius: 5,
  },
  textTimer: {
    color: WHITE_COLOR,
    fontSize: 30,

    fontFamily: "Fugaz",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    color: GRAY_COLOR,
    fontSize: 17,
    fontFamily: "Fugaz",
  },
});
