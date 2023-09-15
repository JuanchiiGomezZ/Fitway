import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { whiteColor } from "../styles/styles";
import { useFonts } from "expo-font";

export default ComponentName = ({ title }) => {
  const [fontsLoaded] = useFonts({
    Fugaz: require("../assets/fonts/Fugaz.ttf"),
  });
  
  if (!fontsLoaded) return null;
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: whiteColor,
    fontSize: 40,
    fontWeight: "800",
  },
});
