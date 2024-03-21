import React, { ReactNode } from "react";
import { createText, TextProps } from "@shopify/restyle";
import { ThemeProps } from "@/theme";
import { TextProps as RNTextProps } from "react-native";

interface CustomTextProps extends TextProps<ThemeProps>, RNTextProps {
  children: ReactNode;
}

const RestyleText = createText<ThemeProps>();

const Text = ({ children, ...props }: CustomTextProps) => {
  return <RestyleText {...props}>{children}</RestyleText>;
};

export default Text;
