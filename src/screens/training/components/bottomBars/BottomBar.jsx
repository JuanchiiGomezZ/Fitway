import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GRAY_COLOR } from "../../../../styles/styles";
import useToggle from "../../../../hooks/useToggle";
import useTimer from "../../hooks/useTimer";
import ToolBar from "./ToolBar";
import Timer from "./Timer";

export default BottomBar = ({ toggleOpenWorkout }) => {
  const timer = useTimer();
  const [bottomBar, toggleBottomBar] = useToggle(false);
  return (
    <View style={styles.bottomBar}>
      <MaterialCommunityIcons
        name="swap-vertical-bold"
        size={25}
        color={GRAY_COLOR}
        style={{
          alignSelf: "center",
          transform: [{ rotateY: !bottomBar ? "180deg" : "0deg" }],
        }}
        onPress={toggleBottomBar}
      />
      {bottomBar ? <ToolBar toggleWorkoutModal={toggleOpenWorkout} /> : <Timer useTimer={timer} />}
    </View>
  );
};

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  bottomBar: {
    width: width,
    position: "absolute",
    bottom: 0,
    left: 0,
    justifyContent: "center",
    gap: 2,
  },
});
