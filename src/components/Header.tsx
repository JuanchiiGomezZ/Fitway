import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { WHITE_COLOR } from "../styles/styles";
import Row from "@/theme/components/Row";
import { ThemeProps } from "@/theme";
import { BoxProps } from "@shopify/restyle";

interface HeaderProps extends BoxProps<ThemeProps> {
  title: string;
}

const Header = ({ title, ...props }: HeaderProps) => {
  const { goBack } = useNavigation();

  return (
    <Row mb="space10" {...props}>
      <TouchableOpacity style={styles.btnContainer} onPress={goBack}>
        <FontAwesome5 name="arrow-alt-circle-left" size={32} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </Row>
  );
};
export default Header;

const styles = StyleSheet.create({
  btnContainer: {
    zIndex: 3,
    marginRight: 10,
  },
  title: {
    color: WHITE_COLOR,
    fontSize: 28,
    fontWeight: "700",
  },
});
