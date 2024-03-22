import { ThemeProps } from "@/theme";
import Box from "@/theme/components/Box";
import { BoxProps } from "@shopify/restyle";
import React from "react";

const SeparatingLine = ({ ...props }: BoxProps<ThemeProps>) => {
  return (
    <Box
      height={1.5}
      width="100%"
      bg="primary500"
      opacity={0.6}
      borderRadius="full"
      alignSelf="center"
      {...props}
    />
  );
};

export default SeparatingLine;
