import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import {
  GRAY_COLOR,
  ORANGE_COLOR,
  ORANGE_DARK_COLOR,
  RED_COLOR,
  WHITE_COLOR,
} from "../styles/styles";
import { Foundation, Feather } from "@expo/vector-icons";
import { RequiredErrorWithText } from "./RequiredError";

export const ClassicInput = ({ setInputChange, placeholder, inputChange }) => {
  return (
    <TextInput
      style={styles.input}
      value={inputChange}
      placeholder={placeholder}
      placeholderTextColor={GRAY_COLOR}
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
        placeholderTextColor={GRAY_COLOR}
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
        placeholderTextColor={GRAY_COLOR}
        onChangeText={(e) => setInputChange(e)}
        onSubmitEditing={onEnterPress}
      />
      <Foundation name="magnifying-glass" style={styles.iconSearch} onPress={onEnterPress} />
    </View>
  );
};

export const ClassicInputWithLabel = ({
  setInputChange,
  placeholder,
  inputChange,
  label,
  isValid,
}) => {
  return (
    <View>
      <View style={styles.inputHeadContainer}>
        <Text style={styles.labelText}>{label}</Text>
        {isValid && <RequiredErrorWithText />}
      </View>

      <TextInput
        style={[styles.input, isValid && { borderColor: RED_COLOR }]}
        value={inputChange}
        placeholder={placeholder}
        placeholderTextColor={GRAY_COLOR}
        onChangeText={(e) => {
          setInputChange(e);
        }}
      />
    </View>
  );
};
export const TextAreaWithLabel = ({ setInputChange, placeholder, inputChange, label }) => {
  return (
    <View>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput
        style={[styles.input, styles.textArea, { marginTop: 4 }]}
        value={inputChange}
        placeholder={placeholder}
        placeholderTextColor={GRAY_COLOR}
        multiline={true}
        numberOfLines={3}
        textAlignVertical="top"
        onChangeText={(e) => {
          setInputChange(e);
        }}
      />
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
    borderColor: ORANGE_DARK_COLOR,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    borderColor: ORANGE_COLOR,
    borderWidth: 1,
    borderRadius: 20,
    flex: 1,
  },
  searchInput: {
    color: WHITE_COLOR,
    fontSize: 18,
    paddingLeft: 15,
    paddingRight: 5,
    width: "89%",
    paddingVertical: 5,
  },
  iconSearch: {
    color: GRAY_COLOR,
    fontSize: 23,
  },

  grayInput: {
    width: "100%",
    height: 45,
    backgroundColor: "#282828",
    paddingLeft: 10,
    fontSize: 18,
    color: WHITE_COLOR,
    borderRadius: 5,
    fontWeight: "500",
  },
  labelText: {
    color: WHITE_COLOR,
    fontSize: 18,
    fontWeight: "600",
  },
  textArea: {
    borderWidth: 1.5,
    borderColor: ORANGE_DARK_COLOR,
    paddingLeft: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },

  inputHeadContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
