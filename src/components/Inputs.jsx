import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useTranslation } from "react-i18next";
import { orangeDarkColor } from "../styles/styles";

export const ClassicInput = ({ setInputChange, placeholder, inputChange }) => {
  return (
    <TextInput
      style={styles.input}
      value={inputChange}
      placeholder={placeholder}
      placeholderTextColor="#666666"
      onChangeText={(e) => {
        setInputChange(e);
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "transparent",
    fontSize: 18,
    color: "white",
    fontWeight: "500",
    width: "100%",
    borderBottomWidth: 1.5,
    borderColor: orangeDarkColor,
  },
});
