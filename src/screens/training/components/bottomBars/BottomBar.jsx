import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  withSpring,
  withTiming,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GRAY_COLOR } from "../../../../styles/styles";
import useToggle from "../../../../hooks/useToggle";
import useTimer from "../../hooks/useTimer";
import ToolBar from "./ToolBar";
import Timer from "./Timer";

export default BottomBar = ({ toggleOpenWorkout, toggleConfExitAlert }) => {
  const timer = useTimer();
  const [bottomBar, toggleBottomBar] = useToggle(false);

  const translateY = useSharedValue(0);
  const rotateY = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }, { rotateY: `${rotateY.value}deg` }],
    };
  });

  const handlePress = () => {
    toggleBottomBar();
    if (!bottomBar) {
      translateY.value = withSpring(-5, { damping: 2, stiffness: 60 });
      rotateY.value = withSpring(180, { stiffness: 80 });
    } else {
      rotateY.value = withSpring(0, { stiffness: 80 });
      translateY.value = withSpring(0, { damping: 2, stiffness: 60 });
    }
  };

  return (
    <View style={styles.bottomBar}>
      <Animated.View style={[animatedStyles]}>
        <MaterialCommunityIcons
          name="swap-vertical-bold"
          size={25}
          color={GRAY_COLOR}
          style={{
            alignSelf: "center",
          }}
          onPress={handlePress}
        />
      </Animated.View>
      {bottomBar ? (
        <ToolBar toggleWorkoutModal={toggleOpenWorkout} />
      ) : (
        <Timer useTimer={timer} toggleConfExitAlert={toggleConfExitAlert} />
      )}
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
