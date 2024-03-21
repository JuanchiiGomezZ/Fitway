import React, { useEffect, useRef } from "react";
import { StyleSheet, Pressable, Text, Image } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { BORDER_RADIUS, BOX_COLOR, WHITE_COLOR } from "../styles/styles";
import { ConfigButton } from "./CustomButtons";
import Box from "@/theme/components/Box";

interface CardContainerProps {
  children: React.ReactNode;
  action?: () => void;
  index: number;
  configAction?: () => void;
}

interface TitleProps {}
const AnimatedTouchable = Animated.createAnimatedComponent(Pressable);
const CardContainer = ({ children, action, index, configAction }: CardContainerProps) => {
  const initialMode = useRef(true);

  useEffect(() => {
    initialMode.current = false;
  }, []);

  return (
    <AnimatedTouchable
      entering={initialMode.current ? FadeInDown.delay(100 * index) : FadeInDown}
      onPress={action ? action : () => {}}
    >
      <Box bg="secondary1000" borderRadius="m" py="space4" px="space6">
        {configAction && <ConfigButton action={configAction} />}
        {children}
      </Box>
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

const CardImage = ({ img }: { img: string }) => (
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
