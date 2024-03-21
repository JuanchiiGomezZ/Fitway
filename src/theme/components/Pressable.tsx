import React, { ReactNode } from "react";
import { BoxProps } from "@shopify/restyle";
import { ThemeProps } from "@/theme";
import Box from "./Box";
import { Pressable as RNPressable } from "react-native";
interface RowProps extends BoxProps<ThemeProps> {
  children: ReactNode;
  onPress?: () => void;
}

const Pressable = ({ children, onPress, ...props }: RowProps) => {
  return (
    <RNPressable onPress={onPress}>
      <Box {...props}>{children}</Box>
    </RNPressable>
  );
};
export default Pressable;
