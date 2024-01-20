import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

//HOOKS
import { GRAY_COLOR, WHITE_COLOR } from "../../../styles/styles";

//COMPONENTS

export default Feature = ({ title, text }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: WHITE_COLOR,
    marginBottom: 3,
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    color: GRAY_COLOR,
  },
});
