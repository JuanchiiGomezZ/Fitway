import React, { useState } from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import BackdropModal from "./BackdropModals";
import Animated, { FadeOut, FadeIn } from "react-native-reanimated";

const AnimatedImage = Animated.createAnimatedComponent(Image);
const screenWidth = Dimensions.get("screen").width;
export default ExerciseGIF = ({ toggleModal, exerciseGIF }) => {
  return (
    <>
      <BackdropModal toggleModal={() => toggleModal(null)} />
      <AnimatedImage
        style={styles.modalContainer}
        entering={FadeIn}
        exiting={FadeOut}
        source={{
          uri: "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/barbell-wide-grip-bench-press.gif",
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: screenWidth * 0.8,
    height: screenWidth * 0.8,
    position: "absolute",
    top: "35%",
    left: screenWidth * 0.1,
    zIndex: 5,
  },
});
