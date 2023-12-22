import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import { GRAY_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../../styles/styles";
import { convertToMinutes } from "../../../helpers/timeFormater";
import { useDispatch, useSelector } from "react-redux";
import { setRestTime } from "../../../store/slices/newExerciseSlice";
const RestTimeSlider = () => {
  const dispatch = useDispatch();
  const { resTime } = useSelector((state) => state.newExercise);

  return (
    <View>
      <Text style={styles.restText}>Rest Time: {convertToMinutes(resTime)}</Text>
      <Slider
        style={{ width: "100%", transform: [{ scaleX: 1.045 }] }}
        minimumValue={0}
        maximumValue={300}
        onValueChange={(value) => dispatch(setRestTime(value))}
        step={15}
        value={resTime}
        minimumTrackTintColor={ORANGE_COLOR}
        maximumTrackTintColor={GRAY_COLOR}
        thumbTintColor={WHITE_COLOR}
      />
    </View>
  );
};

export default RestTimeSlider;

const styles = StyleSheet.create({
  restText: {
    color: WHITE_COLOR,
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 3,
    marginBottom: 10,
  },
});
