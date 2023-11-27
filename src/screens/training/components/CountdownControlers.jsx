import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CircularButton, GrayCircularButton } from "../../../components/Buttons";

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
      <GrayCircularButton text="+15s" action={() => handleAddTime(15)} />
      <CircularButton icon={isPaused ? "play" : "pause"} action={handlePlay} />
      <GrayCircularButton icon="forward" action={skipTime} />
    </View>
  );
};

const styles = StyleSheet.create({
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginTop: 30,
  },
});
