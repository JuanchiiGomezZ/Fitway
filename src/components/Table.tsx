import React, { ReactNode } from "react";

//COMPONENTS
import Row from "@/theme/components/Row";
import Text from "@/theme/components/Text";
import { BoxProps, TextProps } from "@shopify/restyle";
import { ThemeProps } from "@/theme";
import Box from "@/theme/components/Box";

interface TableRowProps extends BoxProps<ThemeProps> {
  children: ReactNode;
}
export const TableRow = ({ children, ...props }: TableRowProps) => {
  return (
    <Row bg="secondary1000" height={40} borderRadius="s" {...props}>
      {children}
    </Row>
  );
};

interface TableHeadProps extends TextProps<ThemeProps> {
  text: string;
}
export const TableHead = ({ text }: TableHeadProps) => {
  return (
    <Text variant="bodyMSemiBold" color="secondary500" minWidth={39} textAlign="center">
      {text}
    </Text>
  );
};
export const TableBodyText = ({ text }: TableHeadProps) => {
  return (
    <Text variant="bodyMSemiBold" color="text" minWidth={39} textAlign="center">
      {text}
    </Text>
  );
};

interface TableContainerProps extends BoxProps<ThemeProps> {
  children: ReactNode;
}
export const TableContainer = ({ children, ...props }: TableContainerProps) => {
  return <Box g="space2">{children}</Box>;
};
