import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { grayLightColor, orangeColor, orangeDarkColor, whiteColor } from "../styles/styles";
import { Foundation } from "@expo/vector-icons";

export const ClassicInput = ({ setInputChange, placeholder, inputChange }) => {
  return (
    <TextInput
      style={styles.input}
      value={inputChange}
      placeholder={placeholder}
      placeholderTextColor={grayLightColor}
      onChangeText={(e) => {
        setInputChange(e);
      }}
    />
  );
};
export const GrayInput = ({ setInputChange, placeholder, inputChange, label }) => {
  return (
    <View style={styles.inputLabel}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput
        style={styles.grayInput}
        value={inputChange}
        placeholder={placeholder}
        placeholderTextColor={grayLightColor}
        onChangeText={(e) => {
          setInputChange(e);
        }}
      />
    </View>
  );
};
export const SearchInput = ({ inputChange, setInputChange, placeholder, onEnterPress }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        value={inputChange}
        placeholder={placeholder}
        placeholderTextColor={grayLightColor}
        onChangeText={(e) => setInputChange(e)}
        onSubmitEditing={onEnterPress}
      />
      <Foundation name="magnifying-glass" style={styles.iconSearch} onPress={onEnterPress} />
    </View>
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

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    borderColor: orangeColor,
    borderWidth: 1,
    width: "75%",
    borderRadius: 20,
  },
  searchInput: {
    color: whiteColor,
    fontSize: 18,
    paddingLeft: 15,
    paddingRight: 5,
    width: "89%",
    paddingVertical: 5,
  },
  iconSearch: {
    color: grayLightColor,
    fontSize: 23,
  },

  grayInput: {
    width: "100%",
    height: 45,
    backgroundColor: "#282828",
    paddingLeft: 10,
    fontSize: 18,
    color: whiteColor,
    borderRadius: 5,
    fontWeight: "500",
  },
  labelText: {
    color: whiteColor,
    fontSize: 18,
    marginLeft: 5,
    fontWeight: "600",
  },
});
