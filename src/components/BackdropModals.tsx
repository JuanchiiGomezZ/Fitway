import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { BACKDROP_COLOR } from "../styles/styles";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type BackdropModalsProps = { toggleModal: () => void };
const BackdropModals = ({ toggleModal }: BackdropModalsProps) => {
  return (
    <AnimatedPressable
      style={styles.backdrop}
      onPress={toggleModal}
      entering={FadeIn}
      exiting={FadeOut}
    />
  );
};
export default BackdropModals;

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: BACKDROP_COLOR,
    zIndex: 5,
  },
});
