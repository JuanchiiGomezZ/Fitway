import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { OrangeCircularButton, GrayCircularButton } from "../../../components/Buttons";

export default CountdownControlers = ({ useCountdown, time, setTime }) => {
  const { start, isPaused, addTime, skipTime } = useCountdown;

  const handlePlay = () => {
    start(time);
  };


  const handleAddTime = (extraSeconds) => {
    setTime((current) => current + extraSeconds);
    addTime(extraSeconds);
  };

  return (
    <View style={styles.controlsContainer}>
      <GrayCircularButton text="+15s" task={() => handleAddTime(15)} />
      <OrangeCircularButton icon={isPaused ? "play" : "pause"} task={handlePlay} />
      <GrayCircularButton icon="forward" task={skipTime} />
    </View>
  );
};

const styles = StyleSheet.create({
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 30,
  },
});
