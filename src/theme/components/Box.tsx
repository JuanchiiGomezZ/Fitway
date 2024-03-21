import React, { ReactNode } from "react";
import { createBox, BoxProps } from "@shopify/restyle";
import { ThemeProps } from "@/theme";
interface CustomBoxProps extends BoxProps<ThemeProps> {
  children?: ReactNode;
}

const RestyleBox = createBox<ThemeProps>();
const Box = ({ children, ...props }: CustomBoxProps) => {
  return <RestyleBox {...props}>{children}</RestyleBox>;
};
export default Box;
