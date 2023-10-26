import React, { useState } from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import BackdropModal from "../../../components/BackdropModals";
import { BACKGROUND_COLOR, BORDER_RADIUS } from "../../../styles/styles";
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
          uri: exerciseGIF,
        }}
      />
    </>
  );
};
/* https://www.inspireusafoundation.org/wp-content/uploads/2022/03/barbell-wide-grip-bench-press.gif */
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
