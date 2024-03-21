import React from "react";
import { BoxProps } from "@shopify/restyle";
import { ThemeProps } from "@/theme";
import Box from "./Box";
import { Image as RNImage } from "react-native";
import { useTheme } from "@shopify/restyle";

interface ImageProps extends BoxProps<ThemeProps> {
  url: string;
}

const Image = ({ url, ...props }: ImageProps) => {
  const { borderRadii } = useTheme();
  return (
    <Box {...props}>
      <RNImage
        source={{ uri: url }}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: borderRadii[props.borderRadius || "none"],
        }}
      />
    </Box>
  );
};
export default Image;
