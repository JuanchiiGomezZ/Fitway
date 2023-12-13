import React, { useEffect, useRef } from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import Animated, { FadeInDown, Layout, FadeOut } from "react-native-reanimated";
import { BORDER_RADIUS, BOX_COLOR, WHITE_COLOR } from "../styles/styles";
import { ConfigButton } from "./CustomButtons";

const CardContainer = ({ children, action, index, configAction }) => {
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

const Title = ({ children, ...props }) => (
  <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
    {children}
  </Text>
);
CardContainer.Title = Title;

const TitleSmall = ({ children, ...props }) => (
  <Text style={styles.titleSmall} ellipsizeMode="tail" numberOfLines={1}>
    {children}
  </Text>
);
CardContainer.TitleSmall = TitleSmall;

export default CardContainer;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: BOX_COLOR,
    borderRadius: BORDER_RADIUS,
    paddingVertical: 7,
    paddingHorizontal: 12,
  },
  title: {
    color: WHITE_COLOR,
    fontSize: 22,
    fontWeight: "700",
  },
  titleSmall:{
    color: WHITE_COLOR,
    fontSize: 20,
  }
});
