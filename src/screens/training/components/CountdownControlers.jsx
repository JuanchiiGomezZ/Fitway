import React from "react";
import { StyleSheet, View } from "react-native";
import { ButtonCircular } from "../../../components/CustomButtons";
import { GRAY_COLOR } from "../../../styles/styles";

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
      <ButtonCircular
        text="+15s"
        action={() => handleAddTime(15)}
        size={"m"}
        bgColor={GRAY_COLOR}
      />
      <ButtonCircular icon={isPaused ? "play" : "pause"} action={handlePlay} size={"l"} />
      <ButtonCircular icon="forward" action={skipTime} size={"m"} bgColor={GRAY_COLOR} />
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
