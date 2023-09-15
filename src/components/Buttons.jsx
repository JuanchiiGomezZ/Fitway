import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { whiteColor, orangeColor, orangeDarkColor } from "../styles/styles";
import { useTransition } from "react";
import { useTranslation } from "react-i18next";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const GoogleButton = ({ task }) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity style={[styles.button, styles.googleButton]} onPress={task}>
      <Image source={require("../assets/images/googleIcon.png")} style={styles.icon} />
      <Text style={{ fontWeight: "600" }}>{t("continue-with")} Google</Text>
    </TouchableOpacity>
  );
};

export const FacebookButton = ({ task }) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity style={[styles.button, styles.googleButton, { backgroundColor: "#1877f2" }]} onPress={task}>
      <Image source={require("../assets/images/facebookIcon.png")} style={styles.icon} />
      <Text style={{ fontWeight: "600", color: whiteColor }}>{t("continue-with")} Facebook</Text>
    </TouchableOpacity>
  );
};

export const HomeButton = ({ task, icon, text }) => {
  return (
    <TouchableOpacity style={[styles.homeButton]} onPress={task}>
      <MaterialCommunityIcons name={icon} size={20} color={whiteColor} />
      <Text style={{ color: whiteColor, fontSize: 15 }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: orangeColor,
  },

  googleButton: {
    backgroundColor: whiteColor,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    width: 22,
    height: 22,
  },

  homeButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: orangeColor,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: "45%",
    gap: 7,
  },
});
