import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { WHITE_COLOR } from "../styles/styles";
import Row from "../components/Row";

export default Header = ({ title, action, ...props }) => {
  const { goBack } = useNavigation();

  const handleRoute = () => {
    if (!action) {
      goBack();
    } else {
      action();
    }
  };

  return (
    <Row style={[{ marginBottom: 20 }, props.style]}>
      <TouchableOpacity style={styles.btnContainer} onPress={handleRoute}>
        <FontAwesome5 name="arrow-alt-circle-left" size={32} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </Row>
  );
};

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
