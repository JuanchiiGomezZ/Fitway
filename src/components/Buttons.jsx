import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { WHITE_COLOR, ORANGE_COLOR, GRAY_COLOR, RED_COLOR } from "../styles/styles";
import { useTranslation } from "react-i18next";
import { MaterialCommunityIcons, FontAwesome5, FontAwesome } from "@expo/vector-icons";

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
    <TouchableOpacity
      style={[styles.button, styles.googleButton, { backgroundColor: "#1877f2" }]}
      onPress={task}
    >
      <Image source={require("../assets/images/facebookIcon.png")} style={styles.icon} />
      <Text style={{ fontWeight: "600", color: WHITE_COLOR }}>{t("continue-with")} Facebook</Text>
    </TouchableOpacity>
  );
};

export const TransparentButton = ({ task, icon, text }) => {
  return (
    <TouchableOpacity style={[styles.transparentButton]} onPress={task}>
      <MaterialCommunityIcons name={icon} size={20} color={WHITE_COLOR} />
      <Text style={styles.OrangeButtonSmallText}>{text}</Text>
    </TouchableOpacity>
  );
};
export const TransparentButtonRounded = ({ task, icon, text }) => {
  return (
    <TouchableOpacity style={[styles.transparentBtnRounded]} onPress={task}>
      <MaterialCommunityIcons name={icon} size={20} color={WHITE_COLOR} />
      <Text style={styles.OrangeButtonSmallText}>{text}</Text>
    </TouchableOpacity>
  );
};

export const OrangeButtonSmall = ({ task, text }) => {
  return (
    <TouchableOpacity style={[styles.button, styles.OrangeButtonSmall]} onPress={task}>
      <Text style={styles.OrangeButtonSmallText}>{text}</Text>
    </TouchableOpacity>
  );
};
export const WhiteButtonSmall = ({ task, text }) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles.OrangeButtonSmall, { backgroundColor: WHITE_COLOR }]}
      onPress={task}
    >
      <Text style={[styles.OrangeButtonSmallText, { color: ORANGE_COLOR }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export const DisabledButtonSmall = ({ task, text }) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles.OrangeButtonSmall, { backgroundColor: "grey" }]}
      onPress={task}
    >
      <Text style={styles.OrangeButtonSmallText}>{text}</Text>
    </TouchableOpacity>
  );
};

export const OrangeButton = ({ task, text }) => {
  return (
    <TouchableOpacity style={[styles.button]} onPress={task}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};
export const OrangeButtonLarge = ({ task, text }) => {
  return (
    <TouchableOpacity style={[styles.button, styles.largeButton]} onPress={task}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

export const CloseModalIcon = ({ task }) => {
  return (
    <TouchableOpacity style={styles.closeIcon} onPress={task}>
      <MaterialCommunityIcons name="close-thick" color={GRAY_COLOR} size={16} />
    </TouchableOpacity>
  );
};

export const OrangeCircularButton = ({ task, icon }) => {
  return (
    <TouchableOpacity style={styles.circularButton} onPress={task}>
      <FontAwesome5
        name={icon}
        size={28}
        color="white"
        style={icon == "play" && { marginLeft: 5 }}
      />
    </TouchableOpacity>
  );
};
export const GrayCircularButton = ({ task, icon, text }) => {
  return (
    <TouchableOpacity style={[styles.circularButton, styles.grayCircularButton]} onPress={task}>
      {text ? (
        <Text style={styles.textButton}>{text}</Text>
      ) : (
        <FontAwesome5 name={icon} size={20} color="white" />
      )}
    </TouchableOpacity>
  );
};

export const RedCircularButton = ({ task, icon }) => {
  return (
    <TouchableOpacity
      style={[styles.circularButton, { backgroundColor: RED_COLOR }]}
      onPress={task}
    >
      <FontAwesome name={icon} size={30} color="white" />
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
    backgroundColor: ORANGE_COLOR,
    fontSize: 18,
  },

  textButton: {
    color: WHITE_COLOR,
    fontSize: 16,
    fontWeight: "500",
  },

  googleButton: {
    backgroundColor: WHITE_COLOR,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    width: 22,
    height: 22,
  },

  transparentButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: ORANGE_COLOR,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: "48%",
    gap: 7,
  },

  transparentBtnRounded: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    borderColor: ORANGE_COLOR,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 20,
  },

  OrangeButtonSmall: {
    backgroundColor: ORANGE_COLOR,
    height: 35,
  },
  OrangeButtonSmallText: {
    color: WHITE_COLOR,
    fontSize: 14,
    fontWeight: "500",
  },

  closeIcon: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  largeButton: {
    width: "110%",
    position: "relative",
    left: "-5%",
    height: 50,
    bottom: 1,
    borderRadius: 0,
  },

  circularButton: {
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ORANGE_COLOR,
  },
  grayCircularButton: {
    width: 40,
    height: 40,
    backgroundColor: GRAY_COLOR,
  },
});
