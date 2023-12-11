import React, { useEffect, useRef } from "react";
import { StyleSheet, Pressable } from "react-native";
import Animated, { FadeInDown, Layout, FadeOut } from "react-native-reanimated";
import { BORDER_RADIUS, BOX_COLOR } from "../styles/styles";
import { ConfigButton } from "./CustomButtons";

const CardContainer = ({ children, action, index, configAction, animation }) => {
  const AnimatedTouchable = Animated.createAnimatedComponent(Pressable);

  const initialMode = useRef(true);

  useEffect(() => {
    initialMode.current = false;
  }, []);

  return (
    <AnimatedTouchable
      style={styles.cardContainer}
      entering={initialMode.current && FadeInDown.delay(100 * index)}
      // exiting={ FadeOut} // GHOSTING AL CAMBIAR DE WORKOUT
      onPress={action}
    >
      {configAction && <ConfigButton action={configAction} />}
      {children}
    </AnimatedTouchable>
  );
};

export default CardContainer;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: BOX_COLOR,
    borderRadius: BORDER_RADIUS,
    paddingVertical: 7,
    paddingHorizontal: 12,
  },
});
