import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

interface RowProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Row = ({ children, style, ...props }: RowProps) => {
  return (
    <View
      style={[styles.container, style]} // Fusiona los estilos predeterminados con los proporcionados
      {...props}
    >
      {children}
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
