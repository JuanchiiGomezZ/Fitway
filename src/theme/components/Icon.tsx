// @ts-ignore
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { ThemeProps } from "@/theme";
import { BoxProps, useTheme } from "@shopify/restyle";
import Box from "./Box";

export interface IconProps extends BoxProps<ThemeProps> {
  name: typeof AntDesign.defaultProps
  size: keyof ThemeProps["sizes"];
  color: keyof ThemeProps["colors"];
}

export const Icon = ({ name, size, color, ...props }: IconProps) => {
  const { colors, sizes } = useTheme();
  return (
    <Box {...props}>
      <AntDesign
        name={name || "exclamationcircle"}
        size={sizes[size] || 16}
        color={colors[color] || "red"}
      />
    </Box>
  );
};

export default Icon;
