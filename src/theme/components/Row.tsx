import React, { ReactNode } from "react";
import { BoxProps } from "@shopify/restyle";
import { ThemeProps } from "@/theme";
import Box from "./Box";
interface RowProps extends BoxProps<ThemeProps> {
  children: ReactNode;
}

const Row = ({ children, ...props }: RowProps) => {
  return (
    <Box alignItems="center" flexDirection="row" {...props}>
      {children}
    </Box>
  );
};
export default Row;
