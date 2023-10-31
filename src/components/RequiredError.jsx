import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { Feather } from "@expo/vector-icons";
import { RED_COLOR } from "../styles/styles";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export const RequiredErrorWithText = () => {
  const { t } = useTranslation();
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.errorContainer}>
      <Feather name="info" size={20} color={RED_COLOR} />
      <Text style={styles.errorText}>Required</Text>
    </Animated.View>
  );
};

export const RequiredErrorIcon = () => {
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut}>
      <Feather name="info" size={20} color={RED_COLOR} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    alignSelf: "center",
  },

  errorText: {
    color: RED_COLOR,
    fontSize: 16,
    fontWeight: "500",
  },
});
