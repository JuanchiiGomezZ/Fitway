import React, { useEffect, useRef } from "react";
import { StyleSheet, Pressable, Text, Image } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
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
      onPress={action ? action : () => {}}
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

const CardImage = ({ img }) => (
  <Image
    source={img ? { uri: img } : require("../assets/images/icon_fw_dark.png")}
    style={styles.cardImage}
  />
);
CardContainer.CardImage = CardImage;

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
  titleSmall: {
    color: WHITE_COLOR,
    fontSize: 20,
    fontWeight: "500",
  },
  cardImage: {
    width: 66,
    height: 66,
    borderRadius: 12,
  },
});
