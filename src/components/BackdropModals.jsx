import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated,{ FadeIn, FadeOut } from "react-native-reanimated";
import { BACKDROP_COLOR } from "../styles/styles";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default BackdropModals = ({ toggleModal }) => {
  return <AnimatedPressable style={styles.backdrop} onPress={toggleModal} entering={FadeIn} exiting={FadeOut} />;
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: BACKDROP_COLOR,
  },
});
